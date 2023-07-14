import {PiQrCodeThin} from "react-icons/pi";
import {AiOutlineDownCircle} from "react-icons/ai";
import {HiArrowSmLeft} from "react-icons/hi";
import {RiLogoutBoxLine} from "react-icons/ri";
import {useState} from "react";



export const LeftSideNavBarItem = [
    {
        id:"1",
        title:"New QR",
        icon: PiQrCodeThin
    },
    {
        id:"2",
        title:"Bulk QR generation",
        icon: AiOutlineDownCircle
    },
    {
        id:"3",
        title:"My QR codes",
        icon: AiOutlineDownCircle
    },
    {
        id:"1",
        title:"New QR",
        icon: PiQrCodeThin
    },
    {
        id:"2",
        title:"Bulk QR generation",
        icon: AiOutlineDownCircle
    },
    {
        id:"3",
        title:"My QR codes",
        icon: AiOutlineDownCircle
    },
    {
        id:"1",
        title:"New QR",
        icon: PiQrCodeThin
    },
    {
        id:"2",
        title:"Bulk QR generation",
        icon: AiOutlineDownCircle
    },
    {
        id:"3",
        title:"My QR codes",
        icon: AiOutlineDownCircle
    },
    {
        id:"1",
        title:"New QR",
        icon: PiQrCodeThin
    },
    {
        id:"2",
        title:"Bulk QR generation",
        icon: AiOutlineDownCircle
    },
    {
        id:"3",
        title:"My QR codes",
        icon: AiOutlineDownCircle
    },
    {
        id:"3",
        title:"My QR codes",
        icon: AiOutlineDownCircle
    },{
        id:"3",
        title:"My QR codes",
        icon: AiOutlineDownCircle
    },{
        id:"3",
        title:"My QR codes",
        icon: AiOutlineDownCircle
    },
]

const LeftSideNavBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
      };
  return (
    <aside id="LeftSideNavBar" className="w-2/12 h-screen shadow-xl">
        <div className="sideHeader h-[10%] p-3">
            <div className="flex justify-between">
            {isVisible ? (
            <img
              src="https://qrfy.com/static/media/QRFY_logo.354ed49c1007fadf579081da3f778f06.svg"
              alt="logo"
              className={`w-[115px] transition-transform ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            ""
          )}
                <button title="Collapse Menu" onClick={handleButtonClick}><HiArrowSmLeft size={24}className="text-[#BCB6BE] hover:text-[#220E27]"/></button>
            </div>
        </div>
        <nav className="h-[80%] overflow-y-scroll">
            <ul>
            {LeftSideNavBarItem.map((item) => (
            <li key={item.id} className="flex gap-3 p-3 text-[#BCB6BE] text-base hover:text-[#220E27] cursor-pointer  ">
              <item.icon size={24} className=""/>
              {isVisible ? <span className="">{item.title}</span> : ""}
            </li>
          ))}
            </ul>
        </nav>
        <div className="logOut flex items-center gap-3 p-4 h-[10%] border-t-2 cursor-pointer text-[#BCB6BE] hover:text-[#220E27]">
            <RiLogoutBoxLine size={24} className=""/>
            {isVisible ? <button>Log out</button> : <h1>Hello</h1>}
        </div>
    </aside>
  )
}

export default LeftSideNavBar