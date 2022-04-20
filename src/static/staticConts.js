import { RiGitRepositoryFill } from 'react-icons/ri'
import { ImProfile } from 'react-icons/im'

export const staticConst = {
  navigation: [
    {
      path: '#',
      title: 'Overview',
    },
    {
      path: '#',
      title: 'Project',
    },
    {
      path: '#',
      title: 'Package',
    },
    {
      path: '#',
      title: 'Explore',
    },
    {
      path: 'https://my-portfolio-fahras-portofolio.vercel.app/',
      title: 'Portofolio',
    },
  ],
  profile_menu: {
    user: {
      name: 'Fahras Nur Hidayat',
      role_name: 'Admin',
      user_menu: [
        {
          menu: {
            title: 'Profile',
            icon: <ImProfile className="text-xl" />,
            path: '/profile',
          },
        },
        {
          menu: {
            title: 'Repository',
            icon: <RiGitRepositoryFill className="text-xl" />,
            path: '/',
          },
        },
      ],
    },
  },
}
