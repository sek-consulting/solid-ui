import { splitProps, type ComponentProps } from "solid-js"

import { cn } from "~/lib/utils"

type IconProps = ComponentProps<"svg">

const Icon = (props: IconProps) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={cn("size-4", props.class)}
      {...rest}
    />
  )
}

export function IconLogo(props: IconProps) {
  return (
    <Icon viewBox="0 0 256 256" {...props}>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="#4d83c4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="#93c4e9"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </Icon>
  )
}

// ICONS

export function IconArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </Icon>
  )
}

export function IconBell(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    </Icon>
  )
}

export function IconBrandApple(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z" />
      <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
    </Icon>
  )
}

export function IconBrandGithub(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </Icon>
  )
}

export function IconBrandGoogle(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
    </Icon>
  )
}

export function IconBrandPaypal(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a.5 .5 0 0 1 -.5 -.6l.2 -1.4" />
    </Icon>
  )
}

export function IconBrandTypescript(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
      <path d="M9 12h4" />
      <path d="M11 12v6" />
      <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
    </Icon>
  )
}

export function IconCalendar(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h16" />
      <path d="M11 15h1" />
      <path d="M12 15v3" />
    </Icon>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12l5 5l10 -10" />
    </Icon>
  )
}

export function IconChevronDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 9l6 6l6 -6" />
    </Icon>
  )
}

export function IconCommand(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
    </Icon>
  )
}

export function IconCopy(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </Icon>
  )
}

export function IconCreditCard(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <path d="M3 10l18 0" />
      <path d="M7 15l.01 0" />
      <path d="M11 15l2 0" />
    </Icon>
  )
}

export function IconDownload(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
      <path d="M7 11l5 5l5 -5" />
      <path d="M12 4l0 12" />
    </Icon>
  )
}

export function IconExternalLink(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
      <path d="M11 13l9 -9" />
      <path d="M15 4h5v5" />
    </Icon>
  )
}

export function IconEyeOff(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
      <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
      <path d="M3 3l18 18" />
    </Icon>
  )
}

export function IconHash(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 9l14 0" />
      <path d="M5 15l14 0" />
      <path d="M11 4l-4 16" />
      <path d="M17 4l-4 16" />
    </Icon>
  )
}

export function IconLaptop(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 19l18 0" />
      <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
    </Icon>
  )
}

export function IconLoader(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 6l0 -3" />
      <path d="M16.25 7.75l2.15 -2.15" />
      <path d="M18 12l3 0" />
      <path d="M16.25 16.25l2.15 2.15" />
      <path d="M12 18l0 3" />
      <path d="M7.75 16.25l-2.15 2.15" />
      <path d="M6 12l-3 0" />
      <path d="M7.75 7.75l-2.15 -2.15" />
    </Icon>
  )
}

export function IconMail(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
      <path d="M3 7l9 6l9 -6" />
    </Icon>
  )
}

export function IconMinus(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12l14 0" />
    </Icon>
  )
}

export function IconMoon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </Icon>
  )
}

export function IconPlus(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </Icon>
  )
}

export function IconRocket(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
      <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
      <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </Icon>
  )
}

export function IconSearch(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </Icon>
  )
}

export function IconSettings(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    </Icon>
  )
}

export function IconSidebarOpen(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M9 4v16" />
      <path d="M14 10l2 2l-2 2" />
    </Icon>
  )
}

export function IconSmile(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 10l.01 0" />
      <path d="M15 10l.01 0" />
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    </Icon>
  )
}

export function IconStar(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </Icon>
  )
}

export function IconSun(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </Icon>
  )
}

export function IconTerminal(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 7l5 5l-5 5" />
      <path d="M12 19l7 0" />
    </Icon>
  )
}

export function IconUser(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </Icon>
  )
}

export function IconX(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </Icon>
  )
}

// const Icons = {
//   arrowDown: (props: IconProps) => (
//     <Icon {...props}>
//       <line x1="12" x2="12" y1="5" y2="19" />
//       <polyline points="19 12 12 19 5 12" />
//     </Icon>
//   ),
//   arrowDownRight: (props: IconProps) => (
//     <Icon {...props}>
//       <line x1="7" x2="17" y1="7" y2="17" />
//       <polyline points="17 7 17 17 7 17" />
//     </Icon>
//   ),
//   arrowRight: (props: IconProps) => (
//     <Icon {...props}>
//       <line x1="5" x2="19" y1="12" y2="12" />
//       <polyline points="12 5 19 12 12 19" />
//     </Icon>
//   ),
//   arrowUp: (props: IconProps) => (
//     <Icon {...props}>
//       <line x1="12" x2="12" y1="19" y2="5" />
//       <polyline points="5 12 12 5 19 12" />
//     </Icon>
//   ),
//   arrowUpRight: (props: IconProps) => (
//     <Icon {...props}>
//       <line x1="7" x2="17" y1="17" y2="7" />
//       <polyline points="7 7 17 7 17 17" />
//     </Icon>
//   ),
//   bell: (props: IconProps) => (
//     <Icon {...props}>
//       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//     </Icon>
//   ),
//   check: (props: IconProps) => (
//     <Icon {...props}>
//       <polyline points="20 6 9 17 4 12" />
//     </Icon>
//   ),
//   chevronDown: (props: IconProps) => (
//     <Icon {...props}>
//       <polyline points="6 9 12 15 18 9" />
//     </Icon>
//   ),
//   chevronLeft: (props: IconProps) => (
//     <Icon {...props}>
//       <polyline points="15 18 9 12 15 6" />
//     </Icon>
//   ),
//   chevronRight: (props: IconProps) => (
//     <Icon {...props}>
//       <polyline points="9 18 15 12 9 6" />
//     </Icon>
//   ),
//   chevronUp: (props: IconProps) => (
//     <Icon {...props}>
//       <polyline points="18 15 12 9 6 15" />
//     </Icon>
//   ),
//   chevronsLeft: (props: IconProps) => (
//     <Icon {...props}>
//       <polyline points="11 17 6 12 11 7" />
//       <polyline points="18 17 13 12 18 7" />
//     </Icon>
//   ),
//   chevronsRight: (props: IconProps) => (
//     <Icon {...props}>
//       <polyline points="13 17 18 12 13 7" />
//       <polyline points="6 17 11 12 6 7" />
//     </Icon>
//   ),
//   chevronsUpDown: (props: IconProps) => (
//     <Icon {...props}>
//       <path d="m7 15 5 5 5-5" />
//       <path d="m7 9 5-5 5 5" />
//     </Icon>
//   ),
//   circle: (props: IconProps) => (
//     <Icon {...props}>
//       <circle cx="12" cy="12" r="10" />
//     </Icon>
//   ),
//   close: (props: IconProps) => (
//     <Icon {...props}>
//       <line x1="18" x2="6" y1="6" y2="18" />
//       <line x1="6" x2="18" y1="6" y2="18" />
//     </Icon>
//   ),
//   eyeOff: (props: IconProps) => (
//     <Icon {...props}>
//       <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
//       <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
//       <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
//       <line x1="2" x2="22" y1="2" y2="22" />
//     </Icon>
//   ),
//   gitHub: (props: IconProps) => (
//     <Icon {...props}>
//       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//       <path d="M9 18c-4.51 2-5-2-7-2" />
//     </Icon>
//   ),
//   laptop: (props: IconProps) => (
//     <Icon {...props}>
//       <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
//     </Icon>
//   ),
//   logo: (props: IconProps) => (
//     <Icon viewBox="0 0 256 256" {...props}>
//       <line
//         x1="208"
//         y1="128"
//         x2="128"
//         y2="208"
//         fill="none"
//         stroke="#4d83c4"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="24"
//       />
//       <line
//         x1="192"
//         y1="40"
//         x2="40"
//         y2="192"
//         fill="none"
//         stroke="#93c4e9"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="24"
//       />
//     </Icon>
//   ),
//   moon: (props: IconProps) => (
//     <Icon {...props}>
//       <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
//     </Icon>
//   ),
//   sidebarOpen: (props: IconProps) => (
//     <Icon {...props}>
//       <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
//       <path d="M9 3v18" />
//       <path d="m14 9 3 3-3 3" />
//     </Icon>
//   ),
//   slidersHorizontal: (props: IconProps) => (
//     <Icon {...props}>
//       <line x1="21" x2="14" y1="4" y2="4" />
//       <line x1="10" x2="3" y1="4" y2="4" />
//       <line x1="21" x2="12" y1="12" y2="12" />
//       <line x1="8" x2="3" y1="12" y2="12" />
//       <line x1="21" x2="16" y1="20" y2="20" />
//       <line x1="12" x2="3" y1="20" y2="20" />
//       <line x1="14" x2="14" y1="2" y2="6" />
//       <line x1="8" x2="8" y1="10" y2="14" />
//       <line x1="16" x2="16" y1="18" y2="22" />
//     </Icon>
//   ),
//   sortDesc: (props: IconProps) => (
//     <Icon {...props}>
//       <path d="m3 16 4 4 4-4" />
//       <path d="M7 20V4" />
//       <path d="M11 4h10" />
//       <path d="M11 8h7" />
//       <path d="M11 12h4" />
//     </Icon>
//   ),
//   sortAsc: (props: IconProps) => (
//     <Icon {...props}>
//       <path d="m3 8 4-4 4 4" />
//       <path d="M7 4v16" />
//       <path d="M11 12h4" />
//       <path d="M11 16h7" />
//       <path d="M11 20h10" />
//     </Icon>
//   ),
//   sun: (props: IconProps) => (
//     <Icon {...props}>
//       <circle cx="12" cy="12" r="4" />
//       <path d="M12 2v2" />
//       <path d="M12 20v2" />
//       <path d="m4.93 4.93 1.41 1.41" />
//       <path d="m17.66 17.66 1.41 1.41" />
//       <path d="M2 12h2" />
//       <path d="M20 12h2" />
//       <path d="m6.34 17.66-1.41 1.41" />
//       <path d="m19.07 4.93-1.41 1.41" />
//     </Icon>
//   )
// }

// export { Icons }
// export type { IconType as Icon }
