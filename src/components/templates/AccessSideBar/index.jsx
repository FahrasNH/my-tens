import { View } from '../../atoms'
import { SideMenu } from '../../organisms'

const AccessSideBar = ({ staticConst, cardTitle, children }) => {
  return (
    <View className="mobile:mx-[10px] tab:mx-[30px] smallPc:mx-[50px] largePc:mx-[95px]">
      <View className="py-7 gap-7 mobile:block tab:block smallPc:flex largePc:flex">
        <View className="mobile:w-[100%] smallPc:w-[20%] largePc:w-[20%] mb-[30px]">
          <SideMenu staticConst={staticConst} />
        </View>
        <View className="mobile:w-[100%] smallPc:w-[80%] largePc:w-[80%]">
          <View className="rounded-lg shadow border border-gray-200 bg-white p-5">
            <View className="mb-11">
              <View className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                <View>
                  <View className="font-semibold text-[18px]">{cardTitle}</View>
                </View>
              </View>
              <View>{children}</View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default AccessSideBar
