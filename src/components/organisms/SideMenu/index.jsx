import React from 'react'
import { useNavigate } from 'react-router'

const SideMenu = ({ staticConst }) => {
  const navigate = useNavigate()

  return (
    <div className="rounded-lg shadow border border-gray-200 bg-white py-5 sticky top-5">
      <div className="mt-2">
        {staticConst.map((el, index) => (
          <div key={index}>
            <div
              className={`${
                el.menu.path === window.location.pathname
                  ? 'bg-[#1A1F23] text-white'
                  : ''
              } text-sm py-1 hover:bg-[#2E3339] cursor-pointer flex items-center px-4`}
            >
              <span>{el.menu.icon}</span>
              <div
                className="px-4 py-2"
                onClick={() => navigate(el.menu.path, { replace: true })}
              >
                {el.menu.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideMenu
