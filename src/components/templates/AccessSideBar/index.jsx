import { SideMenu } from '../../organisms'

const AccessSideBar = ({ staticConst, cardTitle, children }) => {
  return (
    <div className="mobile:mx-[10px] tab:mx-[30px] smallPc:mx-[50px] largePc:mx-[95px]">
      <div className="py-7 gap-7 mobile:block tab:block smallPc:flex largePc:flex">
        <div className="mobile:w-[100%] smallPc:w-[20%] largePc:w-[20%] mb-[30px]">
          <SideMenu staticConst={staticConst} />
        </div>
        <div className="mobile:w-[100%] smallPc:w-[80%] largePc:w-[80%]">
          <div className="rounded-lg shadow border border-gray-200 bg-white p-5">
            <div className="mb-11">
              <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                <div>
                  <div className="font-semibold text-[18px]">{cardTitle}</div>
                </div>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessSideBar
