import RepositoryPage from '../pages/RepositoryPage'

const routeList = [
  {
    name: 'List Repository',
    path: '/',
    exact: false,
    component: <RepositoryPage />,
    permission: true,
  },
]

export default routeList
