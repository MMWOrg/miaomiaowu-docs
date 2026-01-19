import React, { useState, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
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
  Check,
  Search,
  Settings2,
  RotateCcw,
  Play,
} from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { TutorialGuide } from '@/components/docs/tutorial-guide'
import { useTutorial } from '@/hooks/use-tutorial'
import type { TutorialStep } from '@/hooks/use-tutorial'

// Mock data for demo
const mockProxyGroups = [
  { name: '🚀 节点选择', type: 'select' as const, proxies: ['🇭🇰 香港01', '🇭🇰 香港02', '🇯🇵 日本01'] },
  { name: '♻️ 自动选择', type: 'url-test' as const, proxies: ['🇭🇰 香港01', '🇯🇵 日本01', '🇸🇬 新加坡01'] },
  { name: '📲 电报消息', type: 'select' as const, proxies: ['🇸🇬 新加坡01', '🇺🇸 美国01'] },
  { name: '🎬 国际媒体', type: 'select' as const, proxies: ['🇭🇰 香港01', '🇯🇵 日本01'] },
  { name: '🌄 落地节点', type: 'select' as const, proxies: ['🇭🇰 香港02', '🇺🇸 美国01'] },
  { name: '🌠 中转节点', type: 'select' as const, proxies: ['🇯🇵 日本02', '🇩🇪 德国01'] },
  { name: '🔯 故障转移', type: 'fallback' as const, proxies: ['🇭🇰 香港01', '🇯🇵 日本01', '🇺🇸 美国01'] },
  { name: '💬 AI平台', type: 'select' as const, proxies: ['🇺🇸 美国01', '🇺🇸 美国02'] },
]

const mockAvailableNodes = [
  '🇭🇰 香港01', '🇭🇰 香港02', '🇯🇵 日本01', '🇯🇵 日本02',
  '🇸🇬 新加坡01', '🇺🇸 美国01', '🇺🇸 美国02', '🇩🇪 德国01',
  '📦 机场A节点集合', '📦 机场B节点集合',
]

interface MockProxyGroup {
  name: string
  type: 'select' | 'url-test' | 'fallback' | 'load-balance'
  proxies: string[]
}

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

const editNodesDemoTutorial: TutorialStep[] = [
  {
    id: 'intro',
    target: '.edit-nodes-demo-container',
    title: '节点编辑演示',
    description: '这是代理组节点编辑的交互式演示。您将学习如何通过拖拽方式管理代理组中的节点。',
    position: 'bottom',
  },
  {
    id: 'proxy-groups',
    target: '.proxy-groups-grid',
    title: '代理组列表',
    description: '左侧显示所有代理组，每个卡片代表一个代理组，可以拖拽调整顺序。',
    position: 'right',
  },
  {
    id: 'available-nodes',
    target: '.available-nodes-card',
    title: '可用节点',
    description: '右侧显示所有可用节点，将节点拖拽到左侧的代理组中进行分配。',
    position: 'left',
  },
  {
    id: 'quick-actions',
    target: '.quick-action-zones',
    title: '快捷操作',
    description: '拖拽节点到这里可以快速添加到所有代理组或从所有代理组移除。',
    position: 'bottom',
  },
]

export function EditNodesDemo() {
  const [proxyGroups, setProxyGroups] = useState<MockProxyGroup[]>(mockProxyGroups)
  const [availableNodes] = useState<string[]>(mockAvailableNodes)
  const [activeDragItem, setActiveDragItem] = useState<ActiveDragItem | null>(null)
  const [nodeNameFilter, setNodeNameFilter] = useState('')
  const [editingGroupName, setEditingGroupName] = useState<string | null>(null)
  const [editingGroupValue, setEditingGroupValue] = useState('')
  const [isMounted, setIsMounted] = useState(false)
  const tutorial = useTutorial({ steps: editNodesDemoTutorial })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const filteredAvailableNodes = useMemo(() => {
    if (!nodeNameFilter.trim()) return availableNodes
    const filterLower = nodeNameFilter.toLowerCase().trim()
    return availableNodes.filter(nodeName =>
      nodeName.toLowerCase().includes(filterLower)
    )
  }, [availableNodes, nodeNameFilter])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 100, tolerance: 5 },
    })
  )

  const customCollisionDetection: CollisionDetection = React.useCallback((args) => {
    const pointerCollisions = pointerWithin(args)
    if (pointerCollisions.length > 0) return pointerCollisions
    return closestCenter(args)
  }, [])

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    const data = active.data.current as DragItemData
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
    setActiveDragItem({ id: String(active.id), data })
  }

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
          setProxyGroups(proxyGroups.map(group => {
            if (group.proxies.includes(nodeName)) {
              return { ...group, proxies: group.proxies.filter(p => p !== nodeName) }
            }
            return group
          }))
        } else if (targetGroup === 'all-groups') {
          setProxyGroups(proxyGroups.map(group => {
            if (group.name !== nodeName && !group.proxies.includes(nodeName)) {
              return { ...group, proxies: [...group.proxies, nodeName] }
            }
            return group
          }))
        } else {
          if (nodeName === targetGroup) return
          setProxyGroups(proxyGroups.map(group => {
            if (group.name === targetGroup && !group.proxies.includes(nodeName)) {
              const insertIndex = getInsertIndex(group)
              const newProxies = [...group.proxies]
              newProxies.splice(insertIndex, 0, nodeName)
              return { ...group, proxies: newProxies }
            }
            return group
          }))
        }
        break
      }

      case 'group-node': {
        const sourceGroup = activeData.groupName!
        const targetGroup = getTargetGroupName()

        if (!targetGroup) return

        if (targetGroup === 'available') {
          setProxyGroups(proxyGroups.map(g => {
            if (g.name === sourceGroup) {
              return { ...g, proxies: g.proxies.filter((_, i) => i !== activeData.index) }
            }
            return g
          }))
          return
        }

        if (targetGroup === 'remove-from-all') {
          const nodeName = activeData.nodeName!
          setProxyGroups(proxyGroups.map(group => {
            if (group.proxies.includes(nodeName)) {
              return { ...group, proxies: group.proxies.filter(p => p !== nodeName) }
            }
            return group
          }))
          return
        }

        if (sourceGroup === targetGroup) {
          const group = proxyGroups.find(g => g.name === sourceGroup)
          if (!group) return

          const oldIndex = activeData.index!
          const targetNodeName = overId.replace(`${sourceGroup}-`, '')
          const newIndex = group.proxies.indexOf(targetNodeName)

          if (newIndex !== -1 && oldIndex !== newIndex) {
            setProxyGroups(proxyGroups.map(g => {
              if (g.name === sourceGroup) {
                return { ...g, proxies: arrayMove(g.proxies, oldIndex, newIndex) }
              }
              return g
            }))
          }
        } else if (targetGroup === 'all-groups') {
          const nodeName = activeData.nodeName!
          setProxyGroups(proxyGroups.map(group => {
            if (group.name !== nodeName && !group.proxies.includes(nodeName)) {
              return { ...group, proxies: [...group.proxies, nodeName] }
            }
            return group
          }))
        } else {
          const nodeName = activeData.nodeName!
          if (nodeName === targetGroup) return

          setProxyGroups(proxyGroups.map(group => {
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
          }))
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

  const handleReset = () => {
    setProxyGroups(mockProxyGroups)
    setNodeNameFilter('')
  }

  const handleRenameGroup = (oldName: string, newName: string) => {
    const trimmedName = newName.trim()
    if (!trimmedName || trimmedName === oldName) {
      setEditingGroupName(null)
      setEditingGroupValue('')
      return
    }

    const existingGroup = proxyGroups.find(group => group.name === trimmedName && group.name !== oldName)
    if (existingGroup) return

    setProxyGroups(proxyGroups.map(g =>
      g.name === oldName ? { ...g, name: trimmedName } : g
    ))
    setEditingGroupName(null)
    setEditingGroupValue('')
  }

  const handleRemoveNodeFromGroup = (groupName: string, nodeIndex: number) => {
    setProxyGroups(proxyGroups.map(g => {
      if (g.name === groupName) {
        return { ...g, proxies: g.proxies.filter((_, i) => i !== nodeIndex) }
      }
      return g
    }))
  }

  const handleGroupTypeChange = (groupName: string, newType: MockProxyGroup['type']) => {
    setProxyGroups(proxyGroups.map(g =>
      g.name === groupName ? { ...g, type: newType } : g
    ))
  }

  const isProxyProvider = (name: string) => name.startsWith('📦')

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

  const DroppableAllGroupsZone = () => {
    const { setNodeRef, isOver } = useDroppable({
      id: 'all-groups-zone',
      data: { type: 'all-groups-zone' },
    })

    return (
      <div
        ref={setNodeRef}
        className={`flex-1 h-16 border-2 rounded-lg flex items-center justify-center text-sm transition-all ${
          isOver ? 'border-primary bg-primary/10 border-solid' : 'border-dashed border-muted-foreground/30 bg-muted/20'
        }`}
      >
        <span className={isOver ? 'text-primary font-medium' : 'text-muted-foreground'}>
          添加到所有代理组
        </span>
      </div>
    )
  }

  const DroppableRemoveFromAllZone = () => {
    const { setNodeRef, isOver } = useDroppable({
      id: 'remove-from-all-zone',
      data: { type: 'remove-from-all-zone' },
    })

    return (
      <div
        ref={setNodeRef}
        className={`flex-1 h-16 border-2 rounded-lg flex items-center justify-center text-sm transition-all ${
          isOver ? 'border-destructive bg-destructive/10 border-solid' : 'border-dashed border-muted-foreground/30 bg-muted/20'
        }`}
      >
        <span className={isOver ? 'text-destructive font-medium' : 'text-muted-foreground'}>
          从所有代理组移除
        </span>
      </div>
    )
  }

  const DroppableAvailableZone = ({ children }: { children: React.ReactNode }) => {
    const { setNodeRef, isOver } = useDroppable({
      id: 'available-zone',
      data: { type: 'available-zone' },
    })

    return (
      <Card
        ref={setNodeRef}
        className={`available-nodes-card flex flex-col flex-1 transition-all duration-75 ${
          isOver ? 'ring-2 ring-primary shadow-lg scale-[1.02]' : ''
        }`}
      >
        {children}
      </Card>
    )
  }

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
            )}
          </div>
        </CardHeader>
        <CardContent className='flex-1 space-y-1 min-h-[120px]'>
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
    <div className="edit-nodes-demo-container relative space-y-4">
      {/* Toolbar */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">节点编辑演示</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                通过拖拽方式为代理组分配节点
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="gap-1"
              >
                <RotateCcw className="size-3" />
                重置
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => tutorial.start()}
                className="gap-1"
              >
                <Play className="size-3" />
                开始教程
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content */}
      <Card>
        <CardContent className="pt-6">
          <DndContext
            sensors={sensors}
            collisionDetection={customCollisionDetection}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {/* Quick action zones */}
            <div className="quick-action-zones flex gap-2 mb-4">
              <DroppableRemoveFromAllZone />
              <DroppableAllGroupsZone />
            </div>

            {/* Main layout */}
            <div className="flex gap-4 min-h-[350px]">
              {/* Left: Proxy Groups */}
              <div className="proxy-groups-grid flex-1 overflow-y-auto pr-2">
                <SortableContext items={proxyGroups.map(g => g.name)} strategy={rectSortingStrategy}>
                  <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                    {proxyGroups.map((group) => (
                      <SortableCard key={group.name} group={group} />
                    ))}
                  </div>
                </SortableContext>
              </div>

              {/* Divider */}
              <div className="w-1 bg-border flex-shrink-0"></div>

              {/* Right: Available Nodes */}
              <div className="w-48 flex-shrink-0 flex flex-col">
                {/* Filter */}
                <div className="flex-shrink-0 mb-4">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="搜索节点..."
                      value={nodeNameFilter}
                      onChange={(e) => setNodeNameFilter(e.target.value)}
                      className="pl-8 h-9 text-sm"
                    />
                  </div>
                </div>

                {/* Available Nodes Card */}
                <DroppableAvailableZone>
                  <CardHeader className="pb-3 flex-shrink-0">
                    <DraggableAvailableHeader filteredNodes={filteredAvailableNodes} totalNodes={availableNodes.length} />
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto space-y-1 min-h-0">
                    {filteredAvailableNodes.map((proxy, idx) => (
                      <DraggableAvailableNode key={`available-${proxy}-${idx}`} proxy={proxy} index={idx} />
                    ))}
                    {filteredAvailableNodes.length === 0 && (
                      <div className="text-sm text-center py-4 text-muted-foreground">
                        暂无可用节点
                      </div>
                    )}
                  </CardContent>
                </DroppableAvailableZone>
              </div>
            </div>

            {/* DragOverlay */}
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
                  <div className="flex items-center gap-2 p-2 rounded border bg-background shadow-2xl pointer-events-none">
                    <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm">批量添加 {activeDragItem.data.nodeNames?.length || 0} 个节点</span>
                  </div>
                )}
                {activeDragItem?.data.type === 'group-node' && (
                  <div className="flex items-center gap-2 p-2 rounded border bg-background shadow-2xl pointer-events-none">
                    <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm truncate"><Twemoji>{activeDragItem.data.nodeName}</Twemoji></span>
                  </div>
                )}
                {activeDragItem?.data.type === 'group-title' && (
                  <div className="flex items-center gap-2 p-2 rounded border bg-background shadow-2xl pointer-events-none">
                    <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm truncate"><Twemoji>{activeDragItem.data.groupName}</Twemoji></span>
                  </div>
                )}
                {activeDragItem?.data.type === 'group-card' && (() => {
                  const group = proxyGroups.find(g => g.name === activeDragItem.data.groupName)
                  return (
                    <Card className="w-[200px] shadow-2xl opacity-95 pointer-events-none max-h-[250px] overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex justify-center -mt-2 mb-2">
                          <div className="bg-accent rounded-md px-3 py-1">
                            <GripVertical className="h-4 w-4 text-foreground" />
                          </div>
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-base truncate"><Twemoji>{activeDragItem.data.groupName}</Twemoji></CardTitle>
                            <CardDescription className="text-xs">
                              {group?.type || 'select'} ({group?.proxies.length || 0} 个节点)
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-1 max-h-[140px] overflow-hidden">
                        {group?.proxies.slice(0, 3).map((proxy, idx) => (
                          <div key={`overlay-${proxy}-${idx}`} className="flex items-center gap-2 p-2 rounded border bg-background">
                            <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-sm truncate flex-1"><Twemoji>{proxy}</Twemoji></span>
                          </div>
                        ))}
                        {(group?.proxies.length || 0) > 3 && (
                          <div className="text-xs text-center text-muted-foreground py-1">
                            还有 {(group?.proxies.length || 0) - 3} 个节点...
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

      {/* Tutorial Guide */}
      <TutorialGuide
        step={tutorial.currentStepData}
        currentStep={tutorial.currentStep}
        totalSteps={tutorial.totalSteps}
        progress={tutorial.progress}
        isActive={tutorial.isActive}
        onNext={tutorial.next}
        onPrev={tutorial.prev}
        onStop={tutorial.stop}
        onReset={tutorial.reset}
      />
    </div>
  )
}
