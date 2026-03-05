import React, { useState, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Twemoji } from '@/components/twemoji'
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
  type DragStartEvent,
  type DragEndEvent,
  pointerWithin,
  closestCenter,
  type CollisionDetection,
} from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  GripVertical,
  X,
  Plus,
  Check,
  Search,
  Settings2,
  Sparkles,
  Shield,
  ArrowRight,
  RotateCcw,
} from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { mockProxyGroups, mockAvailableNodes, mockProxyProviders, type MockProxyGroup } from '@/data/mock/proxy-groups'
import { OUTBOUND_NAMES } from '@/lib/sublink/translations'

export const Route = createFileRoute('/docs/edit-nodes')({
  component: EditNodesDocPage,
})

// 拖拽类型定义
type DragItemType = 'available-node' | 'available-header' | 'group-node' | 'group-title' | 'group-card'

interface DragItemData {
  type: DragItemType
  nodeName?: string
  nodeNames?: string[]
  groupName?: string
  index?: number
}

interface ActiveDragItem {
  id: string
  data: DragItemData
}

function EditNodesDocPage() {
  // 状态
  const [proxyGroups, setProxyGroups] = useState<MockProxyGroup[]>(mockProxyGroups)
  const [availableNodes, setAvailableNodes] = useState<string[]>([...mockAvailableNodes, ...mockProxyProviders])
  const [activeDragItem, setActiveDragItem] = useState<ActiveDragItem | null>(null)
  const [nodeNameFilter, setNodeNameFilter] = useState('')
  const [editingGroupName, setEditingGroupName] = useState<string | null>(null)
  const [editingGroupValue, setEditingGroupValue] = useState('')
  const [isMounted, setIsMounted] = useState(false)
  // 添加代理组对话框状态
  const [addGroupDialogOpen, setAddGroupDialogOpen] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')

  // 确保在客户端渲染后才使用 portal
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // 筛选可用节点
  const filteredAvailableNodes = useMemo(() => {
    if (!nodeNameFilter.trim()) return availableNodes
    const filterLower = nodeNameFilter.toLowerCase().trim()
    return availableNodes.filter(nodeName =>
      nodeName.toLowerCase().includes(filterLower)
    )
  }, [availableNodes, nodeNameFilter])

  // 传感器配置
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 100, tolerance: 5 },
    })
  )

  // 碰撞检测
  const customCollisionDetection: CollisionDetection = React.useCallback((args) => {
    const pointerCollisions = pointerWithin(args)
    if (pointerCollisions.length > 0) return pointerCollisions
    return closestCenter(args)
  }, [])

  // 拖拽开始
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    const data = active.data.current as DragItemData
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
    setActiveDragItem({ id: String(active.id), data })
  }

  // 拖拽结束
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    document.body.style.overflow = ''
    document.body.style.touchAction = ''
    setActiveDragItem(null)

    if (!over) return

    const activeData = active.data.current as DragItemData
    const overId = String(over.id)
    const overData = over.data.current as DragItemData | { type?: string; groupName?: string } | undefined

    const getTargetGroupName = (): string | null => {
      if (overId === 'all-groups-zone') return 'all-groups'
      if (overId === 'remove-from-all-zone') return 'remove-from-all'
      if (overId === 'available-zone') return 'available'
      if (overId.startsWith('drop-')) return overId.replace('drop-', '')
      if (overData?.groupName) return overData.groupName
      if (overId.includes('-') && !overId.startsWith('available-node-') && !overId.startsWith('group-title-')) {
        const groupName = proxyGroups.find(g => overId.startsWith(`${g.name}-`))?.name
        if (groupName) return groupName
      }
      return null
    }

    const getInsertIndex = (group: MockProxyGroup): number => {
      if (overData && 'index' in overData && typeof overData.index === 'number' && overData.groupName === group.name) {
        return overData.index
      }
      return group.proxies.length
    }

    switch (activeData.type) {
      case 'available-node': {
        const targetGroup = getTargetGroupName()
        if (!targetGroup || targetGroup === 'available') return

        const nodeName = activeData.nodeName!

        if (targetGroup === 'remove-from-all') {
          const updatedGroups = proxyGroups.map(group => {
            if (group.proxies.includes(nodeName)) {
              return { ...group, proxies: group.proxies.filter(p => p !== nodeName) }
            }
            return group
          })
          setProxyGroups(updatedGroups)
        } else if (targetGroup === 'all-groups') {
          const updatedGroups = proxyGroups.map(group => {
            if (group.name !== nodeName && !group.proxies.includes(nodeName)) {
              return { ...group, proxies: [...group.proxies, nodeName] }
            }
            return group
          })
          setProxyGroups(updatedGroups)
        } else {
          if (nodeName === targetGroup) return
          const updatedGroups = proxyGroups.map(group => {
            if (group.name === targetGroup && !group.proxies.includes(nodeName)) {
              const insertIndex = getInsertIndex(group)
              const newProxies = [...group.proxies]
              newProxies.splice(insertIndex, 0, nodeName)
              return { ...group, proxies: newProxies }
            }
            return group
          })
          setProxyGroups(updatedGroups)
        }
        break
      }

      case 'available-header': {
        const targetGroup = getTargetGroupName()
        if (!targetGroup || targetGroup === 'available') return

        const nodeNames = activeData.nodeNames || []

        if (targetGroup === 'remove-from-all') {
          const nodeNamesToRemove = new Set(nodeNames)
          const updatedGroups = proxyGroups.map(group => {
            const newProxies = group.proxies.filter(p => !nodeNamesToRemove.has(p))
            if (newProxies.length !== group.proxies.length) {
              return { ...group, proxies: newProxies }
            }
            return group
          })
          setProxyGroups(updatedGroups)
        } else if (targetGroup === 'all-groups') {
          const updatedGroups = proxyGroups.map(group => {
            const existingNodes = new Set(group.proxies)
            const newNodes = nodeNames.filter(name => !existingNodes.has(name) && name !== group.name)
            if (newNodes.length > 0) {
              return { ...group, proxies: [...group.proxies, ...newNodes] }
            }
            return group
          })
          setProxyGroups(updatedGroups)
        } else {
          const updatedGroups = proxyGroups.map(group => {
            if (group.name === targetGroup) {
              const existingNodes = new Set(group.proxies)
              const newNodes = nodeNames.filter(name => !existingNodes.has(name) && name !== group.name)
              if (newNodes.length > 0) {
                const insertIndex = getInsertIndex(group)
                const newProxies = [...group.proxies]
                newProxies.splice(insertIndex, 0, ...newNodes)
                return { ...group, proxies: newProxies }
              }
            }
            return group
          })
          setProxyGroups(updatedGroups)
        }
        break
      }

      case 'group-node': {
        const sourceGroup = activeData.groupName!
        const targetGroup = getTargetGroupName()

        if (!targetGroup) return

        if (targetGroup === 'available') {
          const updatedGroups = proxyGroups.map(g => {
            if (g.name === sourceGroup) {
              return { ...g, proxies: g.proxies.filter((_, i) => i !== activeData.index) }
            }
            return g
          })
          setProxyGroups(updatedGroups)
          return
        }

        if (targetGroup === 'remove-from-all') {
          const nodeName = activeData.nodeName!
          const updatedGroups = proxyGroups.map(group => {
            if (group.proxies.includes(nodeName)) {
              return { ...group, proxies: group.proxies.filter(p => p !== nodeName) }
            }
            return group
          })
          setProxyGroups(updatedGroups)
          return
        }

        if (sourceGroup === targetGroup) {
          const group = proxyGroups.find(g => g.name === sourceGroup)
          if (!group) return

          const oldIndex = activeData.index!
          const targetNodeName = overId.replace(`${sourceGroup}-`, '')
          const newIndex = group.proxies.indexOf(targetNodeName)

          if (newIndex !== -1 && oldIndex !== newIndex) {
            const updatedGroups = proxyGroups.map(g => {
              if (g.name === sourceGroup) {
                return { ...g, proxies: arrayMove(g.proxies, oldIndex, newIndex) }
              }
              return g
            })
            setProxyGroups(updatedGroups)
          }
        } else if (targetGroup === 'all-groups') {
          const nodeName = activeData.nodeName!
          const updatedGroups = proxyGroups.map(group => {
            if (group.name !== nodeName && !group.proxies.includes(nodeName)) {
              return { ...group, proxies: [...group.proxies, nodeName] }
            }
            return group
          })
          setProxyGroups(updatedGroups)
        } else {
          const nodeName = activeData.nodeName!
          if (nodeName === targetGroup) return

          const updatedGroups = proxyGroups.map(group => {
            if (group.name === sourceGroup) {
              return { ...group, proxies: group.proxies.filter((_, i) => i !== activeData.index) }
            }
            if (group.name === targetGroup && !group.proxies.includes(nodeName)) {
              const insertIndex = getInsertIndex(group)
              const newProxies = [...group.proxies]
              newProxies.splice(insertIndex, 0, nodeName)
              return { ...group, proxies: newProxies }
            }
            return group
          })
          setProxyGroups(updatedGroups)
        }
        break
      }

      case 'group-title': {
        const sourceGroupName = activeData.groupName!
        const targetGroup = getTargetGroupName()

        if (!targetGroup || targetGroup === sourceGroupName || targetGroup === 'available') return

        if (targetGroup === 'all-groups') {
          const updatedGroups = proxyGroups.map(group => {
            if (group.name !== sourceGroupName && !group.proxies.includes(sourceGroupName)) {
              return { ...group, proxies: [...group.proxies, sourceGroupName] }
            }
            return group
          })
          setProxyGroups(updatedGroups)
        } else {
          const updatedGroups = proxyGroups.map(group => {
            if (group.name === targetGroup && !group.proxies.includes(sourceGroupName)) {
              const insertIndex = getInsertIndex(group)
              const newProxies = [...group.proxies]
              newProxies.splice(insertIndex, 0, sourceGroupName)
              return { ...group, proxies: newProxies }
            }
            return group
          })
          setProxyGroups(updatedGroups)
        }
        break
      }

      case 'group-card': {
        if (active.id === over.id) return

        const oldIndex = proxyGroups.findIndex(g => g.name === active.id)
        const newIndex = proxyGroups.findIndex(g => g.name === over.id)

        if (oldIndex !== -1 && newIndex !== -1) {
          setProxyGroups(arrayMove(proxyGroups, oldIndex, newIndex))
        }
        break
      }
    }
  }

  // 重置数据
  const handleReset = () => {
    setProxyGroups(mockProxyGroups)
    setAvailableNodes([...mockAvailableNodes, ...mockProxyProviders])
  }

  // 处理代理组改名
  const handleRenameGroup = (oldName: string, newName: string) => {
    const trimmedName = newName.trim()
    if (!trimmedName || trimmedName === oldName) {
      setEditingGroupName(null)
      setEditingGroupValue('')
      return
    }

    const existingGroup = proxyGroups.find(group => group.name === trimmedName && group.name !== oldName)
    if (existingGroup) return

    const updatedGroups = proxyGroups.map(g =>
      g.name === oldName ? { ...g, name: trimmedName } : g
    )
    setProxyGroups(updatedGroups)
    setEditingGroupName(null)
    setEditingGroupValue('')
  }

  // 删除节点
  const handleRemoveNodeFromGroup = (groupName: string, nodeIndex: number) => {
    const updatedGroups = proxyGroups.map(g => {
      if (g.name === groupName) {
        return { ...g, proxies: g.proxies.filter((_, i) => i !== nodeIndex) }
      }
      return g
    })
    setProxyGroups(updatedGroups)
  }

  // 删除代理组
  const handleRemoveGroup = (groupName: string) => {
    setProxyGroups(proxyGroups.filter(g => g.name !== groupName))
  }

  // 代理组类型变更
  const handleGroupTypeChange = (groupName: string, newType: MockProxyGroup['type']) => {
    const updatedGroups = proxyGroups.map(g =>
      g.name === groupName ? { ...g, type: newType } : g
    )
    setProxyGroups(updatedGroups)
  }

  // 添加新代理组
  const handleAddGroup = () => {
    if (!newGroupName.trim()) return

    const newGroup: MockProxyGroup = {
      name: newGroupName.trim(),
      type: 'select',
      proxies: [],
    }

    setProxyGroups([...proxyGroups, newGroup])
    setNewGroupName('')
    setAddGroupDialogOpen(false)
  }

  // 快速选择代理组名称
  const handleQuickSelect = (name: string) => {
    setNewGroupName(name)
  }

  // ================== 组件 ==================

  // 判断是否为代理集合（以📦开头）
  const isProxyProvider = (name: string) => name.startsWith('📦')

  // 可拖动的可用节点
  const DraggableAvailableNode = ({ proxy, index }: { proxy: string; index: number }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
      id: `available-node-${proxy}-${index}`,
      data: { type: 'available-node', nodeName: proxy, index } as DragItemData,
    })

    const style: React.CSSProperties = {
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      opacity: isDragging ? 0.5 : 1,
      touchAction: 'none',
    }

    const isProvider = isProxyProvider(proxy)

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`flex items-center gap-2 p-2 rounded border cursor-move transition-colors duration-75 ${
          isProvider
            ? 'border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20 hover:border-purple-500 hover:bg-purple-100 dark:hover:bg-purple-900/30'
            : 'hover:border-border hover:bg-accent'
        }`}
      >
        <GripVertical className={`h-4 w-4 flex-shrink-0 ${isProvider ? 'text-purple-500' : 'text-muted-foreground'}`} />
        <span className={`text-sm truncate flex-1 ${isProvider ? 'text-purple-700 dark:text-purple-300' : ''}`}>
          <Twemoji>{proxy}</Twemoji>
        </span>
      </div>
    )
  }

  // 可拖动的可用节点卡片标题
  const DraggableAvailableHeader = ({ filteredNodes, totalNodes }: { filteredNodes: string[]; totalNodes: number }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
      id: 'available-header',
      data: { type: 'available-header', nodeNames: filteredNodes } as DragItemData,
    })

    const style: React.CSSProperties = {
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      opacity: isDragging ? 0.5 : 1,
      touchAction: 'none',
    }

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className='flex items-center gap-2 cursor-move rounded-md px-2 py-1 hover:bg-accent transition-colors'
      >
        <GripVertical className='h-4 w-4 text-muted-foreground flex-shrink-0' />
        <div>
          <CardTitle className='text-base'>可用节点</CardTitle>
          <CardDescription className='text-xs'>
            {filteredNodes.length} / {totalNodes} 个节点
          </CardDescription>
        </div>
      </div>
    )
  }

  // 快捷拖放区（添加到所有代理组）
  const DroppableAllGroupsZone = () => {
    const { setNodeRef, isOver } = useDroppable({
      id: 'all-groups-zone',
      data: { type: 'all-groups-zone' },
    })

    return (
      <div
        ref={setNodeRef}
        className={`w-40 h-20 border-2 rounded-lg flex items-center justify-center text-sm transition-all ${
          isOver ? 'border-primary bg-primary/10 border-solid' : 'border-dashed border-muted-foreground/30 bg-muted/20'
        }`}
      >
        <span className={isOver ? 'text-primary font-medium' : 'text-muted-foreground'}>
          添加到所有代理组
        </span>
      </div>
    )
  }

  // 快捷拖放区（从所有代理组移除）
  const DroppableRemoveFromAllZone = () => {
    const { setNodeRef, isOver } = useDroppable({
      id: 'remove-from-all-zone',
      data: { type: 'remove-from-all-zone' },
    })

    return (
      <div
        ref={setNodeRef}
        className={`w-40 h-20 border-2 rounded-lg flex items-center justify-center text-sm transition-all ${
          isOver ? 'border-destructive bg-destructive/10 border-solid' : 'border-dashed border-muted-foreground/30 bg-muted/20'
        }`}
      >
        <span className={isOver ? 'text-destructive font-medium' : 'text-muted-foreground'}>
          从所有代理组移除
        </span>
      </div>
    )
  }

  // 可用节点区域
  const DroppableAvailableZone = ({ children }: { children: React.ReactNode }) => {
    const { setNodeRef, isOver } = useDroppable({
      id: 'available-zone',
      data: { type: 'available-zone' },
    })

    return (
      <Card
        ref={setNodeRef}
        className={`flex flex-col flex-1 transition-all duration-75 ${
          isOver ? 'ring-2 ring-primary shadow-lg scale-[1.02]' : ''
        }`}
      >
        {children}
      </Card>
    )
  }

  // 可拖动的代理组标题
  const DraggableGroupTitle = ({ groupName }: { groupName: string }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
      id: `group-title-${groupName}`,
      data: { type: 'group-title', groupName } as DragItemData,
    })

    const style: React.CSSProperties = {
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      opacity: isDragging ? 0.5 : 1,
    }

    const isEditing = editingGroupName === groupName

    return (
      <div ref={setNodeRef} style={style} className='flex items-center gap-2 group/title'>
        <div {...attributes} {...listeners} className='cursor-move' style={{ touchAction: 'none' }}>
          <GripVertical className='h-3 w-3 text-muted-foreground flex-shrink-0' />
        </div>
        {isEditing ? (
          <div className='flex items-center gap-1 flex-1 min-w-0'>
            <Input
              value={editingGroupValue}
              onChange={(e) => setEditingGroupValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleRenameGroup(groupName, editingGroupValue)
                else if (e.key === 'Escape') { setEditingGroupName(null); setEditingGroupValue('') }
              }}
              className='h-6 text-base flex-1 min-w-0'
              placeholder='输入新名称...'
              autoFocus
            />
            <Button size='sm' className='h-6 w-6 p-0' onClick={() => handleRenameGroup(groupName, editingGroupValue)} variant='ghost'>
              <Check className='h-3 w-3 text-green-600' />
            </Button>
          </div>
        ) : (
          <CardTitle
            className='text-base truncate cursor-text hover:text-foreground/80 flex-1 min-w-0'
            onClick={() => { setEditingGroupName(groupName); setEditingGroupValue(groupName) }}
            title='点击编辑名称'
          >
            <Twemoji>{groupName}</Twemoji>
          </CardTitle>
        )}
      </div>
    )
  }

  // 可排序的代理组内节点
  const SortableProxy = ({ proxy, groupName, index }: { proxy: string; groupName: string; index: number }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
      isOver,
    } = useSortable({
      id: `${groupName}-${proxy}`,
      transition: { duration: 150, easing: 'ease-out' },
      data: { type: 'group-node', groupName, nodeName: proxy, index } as DragItemData,
    })

    const showDropIndicator = activeDragItem && isOver && !isDragging

    const style: React.CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition: transition || 'transform 150ms ease-out',
      opacity: isDragging ? 0.5 : 1,
      touchAction: 'none',
    }

    return (
      <div className='relative'>
        {showDropIndicator && <div className='absolute -top-0.5 left-0 right-0 h-1 bg-blue-500 rounded-full z-10' />}
        <div
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          className={`flex items-center gap-2 p-2 rounded border hover:border-border hover:bg-accent group/item cursor-move ${
            showDropIndicator ? 'border-blue-400 bg-blue-50 dark:bg-blue-950/30' : ''
          }`}
        >
          <GripVertical className='h-4 w-4 text-muted-foreground flex-shrink-0' />
          <span className='text-sm truncate flex-1'><Twemoji>{proxy}</Twemoji></span>
          <Button
            variant='ghost'
            size='sm'
            className='h-6 w-6 p-0 flex-shrink-0'
            onPointerDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); handleRemoveNodeFromGroup(groupName, index) }}
          >
            <X className='h-4 w-4 text-muted-foreground hover:text-destructive' />
          </Button>
        </div>
      </div>
    )
  }

  // 代理组类型选择器
  const ProxyTypeSelector = ({ group, onChange }: { group: MockProxyGroup; onChange: (type: MockProxyGroup['type']) => void }) => {
    const types = [
      { value: 'select', label: '手动选择' },
      { value: 'url-test', label: '自动选择' },
      { value: 'fallback', label: '自动回退' },
      { value: 'load-balance', label: '负载均衡' },
    ] as const

    return (
      <div className='space-y-1'>
        {types.map(({ value, label }) => (
          <Button
            key={value}
            variant={group.type === value ? 'default' : 'ghost'}
            size='sm'
            className='w-full justify-start'
            onClick={() => onChange(value)}
          >
            {label}
          </Button>
        ))}
      </div>
    )
  }

  // 可排序的代理组卡片
  const SortableCard = ({ group }: { group: MockProxyGroup }) => {
    const isEditing = editingGroupName === group.name

    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({
      id: group.name,
      data: { type: 'group-card', groupName: group.name } as DragItemData,
      disabled: isEditing,
    })

    const { setNodeRef: setDropRef, isOver } = useDroppable({
      id: `drop-${group.name}`,
      data: { type: 'proxy-group', groupName: group.name },
    })

    const style = {
      transform: CSS.Transform.toString(transform),
      transition: isDragging ? 'none' : transition,
      opacity: isDragging ? 0.5 : 1,
    }

    return (
      <Card
        ref={(node) => { setNodeRef(node); setDropRef(node) }}
        style={style}
        className={`flex flex-col transition-all ${isOver ? 'ring-2 ring-primary shadow-lg scale-[1.02]' : ''}`}
      >
        <CardHeader className='pb-3'>
          <div
            className={`flex justify-center -mt-2 mb-2 ${isEditing ? 'cursor-not-allowed opacity-50' : 'cursor-move'}`}
            style={isEditing ? {} : { touchAction: 'none' }}
            {...(isEditing ? {} : attributes)}
            {...(isEditing ? {} : listeners)}
          >
            <div className={`group/drag-handle hover:bg-accent rounded-md px-3 py-1 transition-colors ${isEditing ? 'opacity-50' : ''}`}>
              <GripVertical className='h-4 w-4 text-muted-foreground group-hover/drag-handle:text-foreground transition-colors' />
            </div>
          </div>

          <div className='flex items-start justify-between gap-2'>
            <div className='flex-1 min-w-0'>
              <DraggableGroupTitle groupName={group.name} />
              <CardDescription className='text-xs'>
                {group.type} ({group.proxies.length} 个节点)
              </CardDescription>
            </div>
            {!isEditing && (
              <div className='flex items-center gap-1'>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant='ghost' size='sm' className='h-8 w-8 p-0 flex-shrink-0' title='切换代理组类型'>
                      <Settings2 className='h-4 w-4 text-muted-foreground hover:text-foreground' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-48 p-2' align='end'>
                    <ProxyTypeSelector group={group} onChange={(type) => handleGroupTypeChange(group.name, type)} />
                  </PopoverContent>
                </Popover>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-8 w-8 p-0 flex-shrink-0'
                  onClick={(e) => { e.stopPropagation(); handleRemoveGroup(group.name) }}
                >
                  <X className='h-4 w-4 text-muted-foreground hover:text-destructive' />
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className='flex-1 space-y-1 min-h-[150px]'>
          <SortableContext items={group.proxies.filter(p => p).map(p => `${group.name}-${p}`)}>
            {group.proxies.map((proxy, idx) => (
              proxy && <SortableProxy key={`${group.name}-${proxy}-${idx}`} proxy={proxy} groupName={group.name} index={idx} />
            ))}
          </SortableContext>

          {group.proxies.length === 0 && (
            <div className={`text-sm text-center py-8 transition-colors ${isOver ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              将节点拖拽到这里
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <DocLayout
      title='节点与代理组编辑'
      description='通过拖拽方式为代理组分配节点，自定义每个组的节点列表'
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <Badge variant='destructive'>管理员功能</Badge>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              此功能用于编辑订阅文件的代理组配置。您可以通过拖拽方式将节点分配到不同的代理组，
              也可以调整代理组的顺序、修改代理组名称和类型。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 使用场景 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <ArrowRight className='size-5 text-primary' />
          使用场景
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3 text-sm'>
              <div className='flex items-center gap-2'>
                <span className='text-primary'>1.</span>
                <span><Link to='/docs/generator' className='text-primary hover:underline'>生成订阅</Link> → 点击「手动分组」按钮</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-primary'>2.</span>
                <span><Link to='/docs/subscribe-files' className='text-primary hover:underline'>订阅管理</Link> → 编辑订阅 → 点击「编辑节点」按钮</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 拖动操作说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          拖动操作说明
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b'>
                    <th className='p-3 text-left w-16'>图标</th>
                    <th className='p-3 text-left w-40'>操作</th>
                    <th className='p-3 text-left'>说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <div className='flex justify-center'>
                        <GripVertical className='size-4 text-muted-foreground' />
                      </div>
                    </td>
                    <td className='p-3 font-medium'>拖动代理组卡片</td>
                    <td className='p-3 text-muted-foreground'>拖动卡片顶部的图标，调整代理组的显示顺序</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <div className='flex justify-center'>
                        <GripVertical className='size-3 text-muted-foreground' />
                      </div>
                    </td>
                    <td className='p-3 font-medium'>拖动代理组标题</td>
                    <td className='p-3 text-muted-foreground'>拖动标题左侧图标，将代理组作为节点添加到其他代理组</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <div className='flex justify-center'>
                        <GripVertical className='size-4 text-muted-foreground' />
                      </div>
                    </td>
                    <td className='p-3 font-medium'>拖动可用节点</td>
                    <td className='p-3 text-muted-foreground'>将节点从可用节点列表拖动到目标代理组</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <div className='flex justify-center'>
                        <GripVertical className='size-4 text-muted-foreground' />
                      </div>
                    </td>
                    <td className='p-3 font-medium'>拖动「可用节点」标题</td>
                    <td className='p-3 text-muted-foreground'>批量添加所有筛选后的可用节点到目标代理组</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <div className='flex justify-center'>
                        <span className='text-muted-foreground'>-</span>
                      </div>
                    </td>
                    <td className='p-3 font-medium'>点击代理组标题</td>
                    <td className='p-3 text-muted-foreground'>编辑代理组名称</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <div className='flex justify-center'>
                        <Settings2 className='size-4 text-muted-foreground' />
                      </div>
                    </td>
                    <td className='p-3 font-medium'>点击设置图标</td>
                    <td className='p-3 text-muted-foreground'>切换代理组类型（select/url-test/fallback/load-balance），并可设置中转代理组</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <div className='flex justify-center'>
                        <Plus className='size-4 text-primary' />
                      </div>
                    </td>
                    <td className='p-3 font-medium'>拖到「添加到所有代理组」</td>
                    <td className='p-3 text-muted-foreground'>将节点添加到所有代理组</td>
                  </tr>
                  <tr>
                    <td className='p-3'>
                      <div className='flex justify-center'>
                        <X className='size-4 text-destructive' />
                      </div>
                    </td>
                    <td className='p-3 font-medium'>拖到「从所有代理组移除」</td>
                    <td className='p-3 text-muted-foreground'>从所有代理组中移除该节点</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 交互式演示 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          交互式演示
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <DndContext
              sensors={sensors}
              collisionDetection={customCollisionDetection}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {/* 顶部操作说明和快捷区 */}
              <div className='flex items-start justify-between gap-4 mb-4 flex-wrap'>
                <div className='flex-1'>
                  <p className='text-sm text-primary flex flex-wrap items-center gap-1'>
                    <GripVertical className='h-4 w-4 inline' /> 为可拖动元素，
                    <Settings2 className='h-4 w-4 inline' /> 切换代理组类型、点击代理组标题编辑名称
                  </p>
                  <div className='flex gap-2 mt-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setAddGroupDialogOpen(true)}
                      className='gap-1'
                    >
                      <Plus className='size-3' />
                      添加代理组
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={handleReset}
                      className='gap-1'
                    >
                      <RotateCcw className='size-3' />
                      重置数据
                    </Button>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <DroppableRemoveFromAllZone />
                  <DroppableAllGroupsZone />
                </div>
              </div>

              {/* 主体布局 */}
              <div className='flex gap-4 min-h-[400px]'>
                {/* 左侧：代理组 */}
                <div className='flex-1 overflow-y-auto pr-2'>
                  <SortableContext items={proxyGroups.map(g => g.name)} strategy={rectSortingStrategy}>
                    <div className='grid gap-3' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
                      {proxyGroups.map((group) => (
                        <SortableCard key={group.name} group={group} />
                      ))}
                    </div>
                  </SortableContext>
                </div>

                {/* 分割线 */}
                <div className='w-1 bg-border flex-shrink-0'></div>

                {/* 右侧：可用节点 */}
                <div className='w-56 flex-shrink-0 flex flex-col'>
                  {/* 筛选 */}
                  <div className='flex-shrink-0 mb-4'>
                    <div className='relative'>
                      <Search className='absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                      <Input
                        placeholder='按名称筛选...'
                        value={nodeNameFilter}
                        onChange={(e) => setNodeNameFilter(e.target.value)}
                        className='pl-8 h-9 text-sm'
                      />
                    </div>
                  </div>

                  {/* 可用节点卡片 */}
                  <DroppableAvailableZone>
                    <CardHeader className='pb-3 flex-shrink-0'>
                      <DraggableAvailableHeader filteredNodes={filteredAvailableNodes} totalNodes={availableNodes.length} />
                    </CardHeader>
                    <CardContent className='flex-1 overflow-y-auto space-y-1 min-h-0'>
                      {filteredAvailableNodes.map((proxy, idx) => (
                        <DraggableAvailableNode key={`available-${proxy}-${idx}`} proxy={proxy} index={idx} />
                      ))}
                      {filteredAvailableNodes.length === 0 && (
                        <div className='text-sm text-center py-4 text-muted-foreground'>
                          暂无可用节点
                        </div>
                      )}
                    </CardContent>
                  </DroppableAvailableZone>
                </div>
              </div>

              {/* DragOverlay - 使用 createPortal 渲染到 body 确保显示在最顶层 */}
              {isMounted && createPortal(
                <DragOverlay dropAnimation={null} zIndex={99999}>
                  {activeDragItem?.data.type === 'available-node' && (() => {
                    const nodeName = activeDragItem.data.nodeName || ''
                    const isProvider = isProxyProvider(nodeName)
                    return (
                      <div className={`flex items-center gap-2 p-2 rounded border shadow-2xl pointer-events-none ${
                        isProvider
                          ? 'border-purple-400 bg-purple-50 dark:bg-purple-950/50'
                          : 'bg-background'
                      }`}>
                        <GripVertical className={`h-4 w-4 flex-shrink-0 ${isProvider ? 'text-purple-500' : 'text-muted-foreground'}`} />
                        <span className={`text-sm truncate ${isProvider ? 'text-purple-700 dark:text-purple-300' : ''}`}>
                          <Twemoji>{nodeName}</Twemoji>
                        </span>
                      </div>
                    )
                  })()}
                  {activeDragItem?.data.type === 'available-header' && (
                    <div className='flex items-center gap-2 p-2 rounded border bg-background shadow-2xl pointer-events-none'>
                      <GripVertical className='h-4 w-4 text-muted-foreground flex-shrink-0' />
                      <span className='text-sm'>批量添加 {activeDragItem.data.nodeNames?.length || 0} 个节点</span>
                    </div>
                  )}
                  {activeDragItem?.data.type === 'group-node' && (
                    <div className='flex items-center gap-2 p-2 rounded border bg-background shadow-2xl pointer-events-none'>
                      <GripVertical className='h-4 w-4 text-muted-foreground flex-shrink-0' />
                      <span className='text-sm truncate'><Twemoji>{activeDragItem.data.nodeName}</Twemoji></span>
                    </div>
                  )}
                  {activeDragItem?.data.type === 'group-title' && (
                    <div className='flex items-center gap-2 p-2 rounded border bg-background shadow-2xl pointer-events-none'>
                      <GripVertical className='h-4 w-4 text-muted-foreground flex-shrink-0' />
                      <span className='text-sm truncate'><Twemoji>{activeDragItem.data.groupName}</Twemoji></span>
                    </div>
                  )}
                  {activeDragItem?.data.type === 'group-card' && (() => {
                    const group = proxyGroups.find(g => g.name === activeDragItem.data.groupName)
                    return (
                      <Card className='w-[180px] shadow-2xl opacity-95 pointer-events-none max-h-[300px] overflow-hidden'>
                        <CardHeader className='pb-3'>
                          <div className='flex justify-center -mt-2 mb-2'>
                            <div className='bg-accent rounded-md px-3 py-1'>
                              <GripVertical className='h-4 w-4 text-foreground' />
                            </div>
                          </div>
                          <div className='flex items-start justify-between gap-2'>
                            <div className='flex-1 min-w-0'>
                              <CardTitle className='text-base truncate'><Twemoji>{activeDragItem.data.groupName}</Twemoji></CardTitle>
                              <CardDescription className='text-xs'>
                                {group?.type || 'select'} ({group?.proxies.length || 0} 个节点)
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className='space-y-1 max-h-[180px] overflow-hidden'>
                          {group?.proxies.slice(0, 5).map((proxy, idx) => (
                            <div key={`overlay-${proxy}-${idx}`} className='flex items-center gap-2 p-2 rounded border bg-background'>
                              <GripVertical className='h-4 w-4 text-muted-foreground flex-shrink-0' />
                              <span className='text-sm truncate flex-1'><Twemoji>{proxy}</Twemoji></span>
                            </div>
                          ))}
                          {(group?.proxies.length || 0) > 5 && (
                            <div className='text-xs text-center text-muted-foreground py-1'>
                              还有 {(group?.proxies.length || 0) - 5} 个节点...
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })()}
                </DragOverlay>,
                document.body
              )}
            </DndContext>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-orange-500' />
          注意事项
        </h2>
        <Card className='border-orange-500/20'>
          <CardContent className='pt-6'>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>代理组自引用：</strong>代理组不能添加到自己内部，系统会自动阻止此操作</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>精确插入位置：</strong>将节点拖动到代理组内的特定节点上方时，会插入到该位置</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>节点集合支持：</strong>支持将节点集合（proxy-providers）拖动到代理组，实际使用时会显示为紫色标签</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>保存操作：</strong>完成编辑后请点击「应用并保存」按钮保存更改</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 添加代理组对话框 */}
      <Dialog open={addGroupDialogOpen} onOpenChange={setAddGroupDialogOpen}>
        <DialogContent className='max-w-2xl'>
          <DialogHeader>
            <DialogTitle>添加代理组</DialogTitle>
            <DialogDescription>
              输入自定义名称或从预定义选项中快速选择
            </DialogDescription>
          </DialogHeader>

          <div className='space-y-4'>
            <div>
              <Input
                placeholder='输入代理组名称...'
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAddGroup()
                }}
              />
            </div>

            <div>
              <p className='text-sm text-muted-foreground mb-2'>快速选择：</p>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
                {Object.entries(OUTBOUND_NAMES).map(([key, value]) => (
                  <Button
                    key={key}
                    variant='outline'
                    size='sm'
                    className='justify-start text-left h-auto py-2 px-3'
                    onClick={() => handleQuickSelect(value)}
                  >
                    <span className='truncate'>{value}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant='outline' onClick={() => setAddGroupDialogOpen(false)}>
              取消
            </Button>
            <Button onClick={handleAddGroup} disabled={!newGroupName.trim()}>
              保存
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DocLayout>
  )
}
