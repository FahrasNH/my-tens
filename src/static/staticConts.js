import { RiGitRepositoryFill } from 'react-icons/ri'

export const staticConst = {
  profile_menu: {
    user: {
      name: 'Fahras Nur Hidayat',
      role_name: 'Admin',
      user_menu: [
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
