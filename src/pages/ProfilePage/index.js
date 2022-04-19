import { useEffect, useState } from 'react'
import { AccessSideBar } from '../../components/templates'
import { staticConst } from '../../static/staticConts'
import { Button, Input, Textarea } from '../../components/atoms'

import axios from 'axios'

const ProfilePage = () => {
  const [profile, setProfile] = useState()
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`https://api.github.com/users/FahrasNH`)

      setProfile(data)
    }
    fetchData()
  }, [])

  return (
    <AccessSideBar
      staticConst={staticConst.profile_menu.user.user_menu}
      cardTitle="Public profile"
    >
      <div className="mt-7 smallPc:flex largePc:flex">
        <div className="mobile:m-auto mobile:mb-8 tab:m-auto tab:mb-8 mobile:w-full w-[40%] w-[30%] shadow appearance-none border rounded-lg border-2-[#88919B] mr-[20px] h-full">
          <div className="p-2">
            <img
              src={profile?.avatar_url}
              className="rounded-md"
              alt="avIcon"
            />
          </div>
          <div className="p-2 pb-0">
            <Button primary>Change Photo</Button>
          </div>
          <div className="p-2">
            <Button>Hapus</Button>
          </div>
        </div>
        <div className="w-[100%]">
          <div className="mb-4">
            <Input
              name="name"
              type="text"
              placeholder="Name"
              label="Name"
              disabled
              value={profile?.name}
            />
          </div>
          <div className="mb-4">
            <Textarea
              name="bio"
              type="text"
              placeholder="Bio"
              label="Bio"
              disabled
              rows={3}
              value={profile?.bio}
            />
          </div>
          <div className="mb-4">
            <Input
              name="url"
              type="text"
              placeholder="URL"
              label="URL"
              disabled
              value={profile?.url}
            />
          </div>
          <div className="mb-4">
            <Input
              name="company"
              type="text"
              placeholder="Company"
              label="Company"
              disabled
              value={profile?.company}
            />
          </div>
          <div className="mb-4">
            <Input
              name="location"
              type="text"
              placeholder="Location"
              label="Location"
              disabled
              value={profile?.location}
            />
          </div>
        </div>
      </div>
    </AccessSideBar>
  )
}

export default ProfilePage
