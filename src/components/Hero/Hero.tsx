import { useState } from "react"
import { Character, Roleplay } from "../../utils/ReExportImages"
import './Hero.scss'
import ModalWindow from "../UI/ModalWindow/ModalWindow"
const Hero = () => {
    const [video, setVideo] = useState(false)
    return (
        <>
            {video && (
                <ModalWindow>
                    <i className="fa-solid fa-x text-white absolute top-5 right-7 cursor-pointer" onClick={() => setVideo(false)}></i>
                    <iframe width="90%" height="90%" src="https://www.youtube.com/embed/LOxqX3QwWis?si=0d_ZlMxXhho1K7E8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </ModalWindow>
            )}
            <main className="main my-container mt-[224px] mb-[143px]">
                <div className="main__content  text-white">
                    <div className="main__content-top flex items-end">
                        <div>
                            <h1 className="font-semibold text-[35px]">НОВЫЙ МИР В RDR2 С РЕЖИМОМ</h1>
                            <img src={Roleplay} className="  " alt="" />
                        </div>
                        <img src={Character} alt="" />
                    </div>
                    <div className="main__content-bottom flex font-bold font-[montserrat] gap-[90px]">
                        <a className="btn py-[15px] px-[30px] font-[montserrat] rounded-[50px] font-semibold text-[20px]" href="#playnow">НАЧАТЬ ИГРАТЬ <i className="fa-solid fa-arrow-right"></i></a>
                        <div className="flex justify-center items-center gap-3">
                            <i className="fa-solid fa-user fa-xl"></i>
                            <div>
                                <p>Cейчас играют</p>
                                <p className="flex items-center gap-1 text-[#CE2727]"><span className="live"></span>72</p>
                            </div>
                        </div>
                        <div onClick={() => setVideo(true)} className="flex justify-center items-center gap-1.5 cursor-pointer">
                            <i className="fa-solid fa-circle-play fa-xl"></i>
                            <div>
                                <p>Посмотреть</p>
                                <p className="text-[#CE2727]">промо-ролик</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero