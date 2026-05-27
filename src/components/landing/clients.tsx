import clashIcon from '@/assets/icons/clash_color.png'
import stashIcon from '@/assets/icons/stash_color.png'
import shadowrocketIcon from '@/assets/icons/shadowrocket_color.png'
import surfboardIcon from '@/assets/icons/surfboard_color.png'
import surgeIcon from '@/assets/icons/surge_color.png'
import surgeMacIcon from '@/assets/icons/surgeformac_icon_color.png'
import loonIcon from '@/assets/icons/loon_color.png'
import quanxIcon from '@/assets/icons/quanx_color.png'
import egernIcon from '@/assets/icons/egern_color.png'
import singboxIcon from '@/assets/icons/sing-box_color.png'
import v2rayIcon from '@/assets/icons/v2ray_color.png'
import uriIcon from '@/assets/icons/uri-color.svg'
import { useTranslation } from 'react-i18next'

export function Clients() {
  const { t } = useTranslation('landing')

  const clients = [
    { name: 'Clash', icon: clashIcon, platform: 'Windows / macOS / Linux / Android' },
    { name: 'Stash', icon: stashIcon, platform: 'iOS / macOS' },
    { name: 'Shadowrocket', icon: shadowrocketIcon, platform: 'iOS' },
    { name: 'Surfboard', icon: surfboardIcon, platform: 'Android' },
    { name: 'Surge', icon: surgeIcon, platform: 'iOS' },
    { name: 'Surge Mac', icon: surgeMacIcon, platform: 'macOS' },
    { name: 'Loon', icon: loonIcon, platform: 'iOS' },
    { name: 'QuantumultX', icon: quanxIcon, platform: 'iOS' },
    { name: 'Egern', icon: egernIcon, platform: 'iOS' },
    { name: 'sing-box', icon: singboxIcon, platform: t('clients.crossPlatform') },
    { name: 'V2Ray', icon: v2rayIcon, platform: t('clients.crossPlatform') },
    { name: 'URI', icon: uriIcon, platform: t('clients.universalLink') },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="pixel-text text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('clients.description')}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="pixel-card p-4 sm:p-6 flex flex-col items-center text-center group hover:scale-105 hover:shadow-[6px_6px_0_rgba(217,119,87,0.2)] transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 flex items-center justify-center">
                <img
                  src={client.icon}
                  alt={client.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-sm sm:text-base mb-1">{client.name}</h3>
              <p className="text-xs text-muted-foreground">{client.platform}</p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {t('clients.protocols')}
          </p>
        </div>
      </div>
    </section>
  )
}
