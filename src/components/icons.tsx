/*
ISC License

Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
import type { ComponentProps } from "solid-js"

type IconProps = ComponentProps<"svg">

const Icon = (props: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  />
)
type IconType = typeof Icon

const Icons = {
  arrowDown: (props: IconProps) => (
    <Icon {...props}>
      <line x1="12" x2="12" y1="5" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </Icon>
  ),
  arrowDownRight: (props: IconProps) => (
    <Icon {...props}>
      <line x1="7" x2="17" y1="7" y2="17" />
      <polyline points="17 7 17 17 7 17" />
    </Icon>
  ),
  arrowRight: (props: IconProps) => (
    <Icon {...props}>
      <line x1="5" x2="19" y1="12" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </Icon>
  ),
  arrowUp: (props: IconProps) => (
    <Icon {...props}>
      <line x1="12" x2="12" y1="19" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </Icon>
  ),
  arrowUpRight: (props: IconProps) => (
    <Icon {...props}>
      <line x1="7" x2="17" y1="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </Icon>
  ),
  bell: (props: IconProps) => (
    <Icon {...props}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </Icon>
  ),
  check: (props: IconProps) => (
    <Icon {...props}>
      <polyline points="20 6 9 17 4 12" />
    </Icon>
  ),
  chevronDown: (props: IconProps) => (
    <Icon {...props}>
      <polyline points="6 9 12 15 18 9" />
    </Icon>
  ),
  chevronLeft: (props: IconProps) => (
    <Icon {...props}>
      <polyline points="15 18 9 12 15 6" />
    </Icon>
  ),
  chevronRight: (props: IconProps) => (
    <Icon {...props}>
      <polyline points="9 18 15 12 9 6" />
    </Icon>
  ),
  chevronUp: (props: IconProps) => (
    <Icon {...props}>
      <polyline points="18 15 12 9 6 15" />
    </Icon>
  ),
  chevronsLeft: (props: IconProps) => (
    <Icon {...props}>
      <polyline points="11 17 6 12 11 7" />
      <polyline points="18 17 13 12 18 7" />
    </Icon>
  ),
  chevronsRight: (props: IconProps) => (
    <Icon {...props}>
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
    </Icon>
  ),
  chevronsUpDown: (props: IconProps) => (
    <Icon {...props}>
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </Icon>
  ),
  circle: (props: IconProps) => (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
    </Icon>
  ),
  close: (props: IconProps) => (
    <Icon {...props}>
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </Icon>
  ),
  eyeOff: (props: IconProps) => (
    <Icon {...props}>
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </Icon>
  ),
  gitHub: (props: IconProps) => (
    <Icon {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </Icon>
  ),
  laptop: (props: IconProps) => (
    <Icon {...props}>
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </Icon>
  ),
  logo: (props: IconProps) => (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
    </Icon>
  ),
  moon: (props: IconProps) => (
    <Icon {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </Icon>
  ),
  sidebarOpen: (props: IconProps) => (
    <Icon {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M9 3v18" />
      <path d="m14 9 3 3-3 3" />
    </Icon>
  ),
  slidersHorizontal: (props: IconProps) => (
    <Icon {...props}>
      <line x1="21" x2="14" y1="4" y2="4" />
      <line x1="10" x2="3" y1="4" y2="4" />
      <line x1="21" x2="12" y1="12" y2="12" />
      <line x1="8" x2="3" y1="12" y2="12" />
      <line x1="21" x2="16" y1="20" y2="20" />
      <line x1="12" x2="3" y1="20" y2="20" />
      <line x1="14" x2="14" y1="2" y2="6" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="16" x2="16" y1="18" y2="22" />
    </Icon>
  ),
  sortDesc: (props: IconProps) => (
    <Icon {...props}>
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M11 4h10" />
      <path d="M11 8h7" />
      <path d="M11 12h4" />
    </Icon>
  ),
  sortAsc: (props: IconProps) => (
    <Icon {...props}>
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M11 12h4" />
      <path d="M11 16h7" />
      <path d="M11 20h10" />
    </Icon>
  ),
  sun: (props: IconProps) => (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </Icon>
  )
}

export { Icons }
export type { IconType as Icon }
