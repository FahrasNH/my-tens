import { useEffect, useState } from 'react'
import { AccessSideBar } from '../../components/templates'
import { staticConst } from '../../static/staticConts'

import axios from 'axios'
import moment from 'moment'
import { Text, View } from '../../components/atoms'

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
      <View>
        <ul>
          {(repos || []).map((repo, idx) => (
            <li
              key={idx}
              className="py-[20px] border-b-2 border-gray-200 smallPc:flex largePc:flex justify-between"
            >
              <View>
                <View className="flex">
                  <Text
                    type="anc"
                    href={repo.html_url}
                    className="mr-[20px] font-bold text-[24px] text-[#1956DB]"
                  >
                    {repo.name}
                  </Text>
                  <Text
                    type="span"
                    className="rounded-full border border-[#88919B] px-[15px] text-[12px] flex items-center font-semibold text-[#88919B]"
                  >
                    {repo.private ? 'Private' : 'Public'}
                  </Text>
                </View>
                <View className="flex mt-[14px]">
                  <Text className="mr-[10px] font-semibold text-[14px]">
                    {repo.language}
                  </Text>
                  <Text
                    type="span"
                    className="pl-[20px] text-[12px] flex items-center"
                  >
                    Last update :{' '}
                  </Text>
                  <Text
                    type="span"
                    className="pl-[5px] text-[12px] flex items-center font-semibold"
                  >
                    {moment(repo.pushed_at).format('DD MMM YYYY')}
                  </Text>
                </View>
              </View>
              <View>
                <View className="flex mobile:mt-[14px] tab:mt-[14px]">
                  <Text className="mr-[20px] font-bold text-[16px]">
                    Watchers: {repo.watchers}
                  </Text>
                </View>
              </View>
            </li>
          ))}
        </ul>
      </View>
    </AccessSideBar>
  )
}

export default RepositoryPage
