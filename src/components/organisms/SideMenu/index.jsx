import React from 'react'
import { useNavigate } from 'react-router'
import { View } from '../../atoms'

const SideMenu = ({ staticConst }) => {
  const navigate = useNavigate()

  return (
    <View className="rounded-lg shadow border border-gray-200 bg-white py-5 sticky top-5">
      <View className="mt-2">
        {staticConst.map((el, index) => (
          <View
            key={index}
            onClick={() => navigate(el.menu.path, { replace: true })}
          >
            <View
              className={`${
                el.menu.path === window.location.pathname
                  ? 'bg-[#1A1F23] text-white'
                  : ''
              } text-sm py-1 hover:bg-[#2E3339] hover:text-white cursor-pointer flex items-center px-4`}
            >
              <span>{el.menu.icon}</span>
              <View className="px-4 py-2">{el.menu.title}</View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default SideMenu
