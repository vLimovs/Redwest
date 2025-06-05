import { Logo } from "../../../utils/ReExportImages"
import './ServerCard.scss'
const ServerCard = () => {
    const servers =
    {
        title: 'Server #1',
        online: 72,
        url: 'cfx.re/join/mk9dgd',
    }

    return (
        <div className="bg-[#29292965] px-3 py-5 rounded-2xl">
            <div className="flex mb-4">
                <img src={Logo} className="w-[64px] h-[55px]" alt="" />
                <div>
                    <p className="font-[montserrat] font-semibold text-[11px] text-center text-[#a0a9a9]">REDWEST ROLEPLAY</p>
                    <h3 className="font-[montserrat] font-semibold text-[22px] text-start text-white leading-[1]">{servers.title}</h3>
                    <span className="font-[montserrat] font-semibold text-[17px] text-center text-white"><i className="fa-solid fa-user text-[14px] mr-2"></i>{servers.online}/1000</span>
                </div>
            </div>
            <div>
                <div className="line h-3 mb-3">
                    <span style={{
                        width: `${servers.online}px`
                    }}></span>
                </div>
                <p className="bg-[#770000] py-1 px-[74px] rounded-[13px] cursor-pointer">{servers.url}</p>
            </div>
        </div>
    )
}

export default ServerCard