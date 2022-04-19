import { useEffect, useState } from 'react'
import { AccessSideBar } from '../../components/templates'
import { staticConst } from '../../static/staticConts'

import axios from 'axios'
import moment from 'moment'

const RepositoryPage = () => {
  const [repos, setRepos] = useState()
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://api.github.com/users/FahrasNH/repos`,
      )

      setRepos(data)
    }
    fetchData()
  }, [])

  return (
    <AccessSideBar
      staticConst={staticConst.profile_menu.user.user_menu}
      cardTitle="List Repository"
    >
      <div>
        <ul>
          {(repos || []).map((repo, idx) => (
            <li
              key={idx}
              className="py-[20px] border-b-2 border-gray-200 smallPc:flex largePc:flex justify-between"
            >
              <div>
                <div className="flex">
                  <a
                    href={repo.html_url}
                    className="mr-[20px] font-bold text-[24px] text-[#1956DB]"
                  >
                    {repo.name}
                  </a>
                  <span className="rounded-full border border-[#88919B] px-[15px] text-[12px] flex items-center font-semibold text-[#88919B]">
                    {repo.private ? 'Private' : 'Public'}
                  </span>
                </div>
                <div className="flex mt-[14px]">
                  <p className="mr-[10px] font-semibold text-[14px]">
                    {repo.language}
                  </p>
                  <span className="rounded-full px-[15px] text-[12px] flex items-center font-semibold">
                    {moment(repo.updated_at).format('DD MMM YYYY')}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex">
                  <p className="mr-[20px] font-bold text-[16px]">
                    Watchers: {repo.watchers}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AccessSideBar>
  )
}

export default RepositoryPage
