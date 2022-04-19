import ProfilePage from '../pages/ProfilePage'
import RepositoryPage from '../pages/RepositoryPage'

const routeList = [
  {
    name: 'Public profile',
    path: '/profile',
    exact: false,
    component: <ProfilePage />,
    permission: true,
  },
  {
    name: 'List Repository',
    path: '/',
    exact: false,
    component: <RepositoryPage />,
    permission: true,
  },
]

export default routeList
