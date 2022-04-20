import React, { useState } from 'react'
import { staticConst } from '../../../static/staticConts'
import { Button, Image, Text, View } from '../../atoms'

const Navbar = () => {
  const [isActive, setActive] = useState(false)

  const handleClickNavbarAct = () => {
    setActive(!isActive)
  }

  return (
    <View className="z-10 sticky top-0 shadow py-2 bg-white border-gray-200 mobile:px-[10px] tab:px-[30px] smallPc:px-[50px] largePc:px-[95px]">
      <View className="flex flex-wrap justify-between items-center">
        <Text type="anc" href="/profile">
          <Image
            src="/assets/images/github.png"
            className="w-9 h-9"
            alt="iconsGh"
          />
        </Text>
        <View className="flex tab:hidden">
          <Button
            onClick={handleClickNavbarAct}
            type="button"
            className="inline-flex ml-8 items-center p-2 text-sm text-gray-500 rounded-lg smallPc:hidden largePc:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <Image
              src="/assets/icons/menu.png"
              alt="iconMenu"
              className="w-6 h-6"
            />
          </Button>
        </View>
        <View
          className={`${
            isActive ? 'mobile:hidden' : ''
          } justify-between items-center w-full tab:flex tab:w-auto smallPc:flex smallPc:w-auto largePc:flex largePc:w-auto`}
        >
          <ul className="tab:flex smallPc:flex largePc:flex">
            {(staticConst.navigation || []).map((nav, idx) => (
              <li key={idx} className="py-2 px-4">
                <a href={nav.path}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </View>
      </View>
    </View>
  )
}

export default Navbar
