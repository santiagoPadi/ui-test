import CustomNav from './modules/custom'
import HomePage from './modules/home'

export interface Route {
  path: string
  name: string
  component: React.ComponentType<{}>
}

export const pages: Route[] = [
  {
    component: HomePage,
    name: 'Home',
    path: '/',
  },
  {
    component: CustomNav,
    name: 'login',
    path: '/login',
  },
  {
    component: CustomNav,
    name: 'How works',
    path: '/how-works',
  },
  {
    component: CustomNav,
    name: 'Submit name',
    path: '/submit-name',
  },
  {
    component: CustomNav,
    name: 'Terms',
    path: '/terms',
  },
  {
    component: CustomNav,
    name: 'Privacy',
    path: '/privacy',
  },
  {
    component: CustomNav,
    name: 'Contact us',
    path: '/contact',
  },
]
