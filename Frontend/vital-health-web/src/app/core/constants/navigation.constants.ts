export const MAIN_NAVIGATION = [
  {
    label: 'Dashboard',
    icon: 'home',
    route: '/dashboard'
  },
  {
    label: 'Order Medications',
    icon: 'pill',
    route: '/medications'
  },
  {
    label: 'Orders',
    icon: 'clipboard',
    route: '/orders'
  },
  {
    label: 'Patients',
    icon: 'users',
    route: '/patients'
  },
  {
    label: 'Prescriptions',
    icon: 'prescription',
    route: '/prescriptions'
  },
  {
    label: 'Invoices',
    icon: 'file',
    route: '/invoices'
  },
  {
    label: 'Settings',
    icon: 'settings',
    route: '/settings'
  },
  {
    label: 'Support',
    icon: 'headphones',
    route: '/support'
  }
] as const;