import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Tooltip} from '@/components/ui/tooltip';
import {SITE_CONFIG} from '@/data/siteConfig';

export const WhatsAppFloatingLink = () => (
  <Tooltip>
    <Tooltip.Trigger asChild>
      <a
        aria-label="Message on WhatsApp"
        className="focus-ring fixed bottom-14 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-[22px] text-white shadow-[0_4px_14px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(37,211,102,0.55)] active:scale-95"
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </Tooltip.Trigger>
    <Tooltip.Content side="left">
      Message on WhatsApp
      <Tooltip.Arrow />
    </Tooltip.Content>
  </Tooltip>
);
