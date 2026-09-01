export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'JOIN US', href: '#join' },
  { label: 'ANNOUNCEMENTS', href: '#coming-soon' },
  { label: 'DIVISIONS', href: '#divisions' },
  { label: 'EVENTS', href: '#events' },
  { label: 'TEAM', href: '#team' },
];
