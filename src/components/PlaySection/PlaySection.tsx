import { useState } from "react"
import ServerCard from "./ServerCard/ServerCard"
import ModalWindow from "../UI/ModalWindow/ModalWindow"
import { Step1, Step2, Step3 } from "../../utils/ReExportImages"

const PlaySection = () => {
    const [navigation, setNavigation] = useState(false)
    return (
        <>
            {navigation && (
                <ModalWindow>
                    <i className="fa-solid fa-x text-white absolute top-5 right-7 cursor-pointer" onClick={() => setNavigation(false)}></i>
                    <ul className="nav__list text-white font-[Lino] text-[32px] grid gap-10 ">
                        <li style={{
                            border: '5px #B20000 solid',
                            borderRadius: '25px'
                        }} className="nav__list-item py-5 px-10 cursor-pointer"><i className="fa-solid fa-location-dot mr-5"></i>НАВИГАЦИЯ ПО ОРГАНИЗАЦИЯМ</li>
                        <li style={{
                            border: '5px #B20000 solid',
                            borderRadius: '25px'
                        }}
                            className="nav__list-item py-5 px-10 cursor-pointer"><i className="fa-solid fa-keyboard mr-2"></i>ГОРЯЧИЕ КЛАВИШИ И КОМАНДЫ</li>
                        <li style={{
                            border: '5px #B20000 solid',
                            borderRadius: '25px'
                        }}
                            className="nav__list-item py-5 px-10 cursor-pointer"><i className="fa-solid fa-map mr-2"></i>КАРТА И ЗОНЫ REDWEST RP</li>
                    </ul>
                </ModalWindow>
            )}
            <section className="play__section my-container text-white flex flex-col items-center ">
                <h2 id="playnow" className="title text-center font-[Lino] font-bold text-[44px]">ИГРАЙ ПРЯМО СЕЙЧАС</h2>
                <ul className="play__section-download flex flex-wrap mt-[60px] gap-8 justify-center items-center mb-[45px]">
                    <li className="play__section-download-card relative">
                        <img src={Step1} alt="" />
                        <div className="play__section-download-card-footer absolute bottom-4 left-2">
                            <a href="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/" target="_blank" className="py-[10px] px-[30px] rounded-2xl ml-2" style={{
                                border: '2px #FFF solid'
                            }}>Steam</a>
                            <a href="https://store.epicgames.com/ru/p/red-dead-redemption-2" target="_blank" className="py-[10px] px-[30px] rounded-2xl ml-2" style={{
                                border: '2px #FFF solid'
                            }}>Epic</a>
                            <a href="https://www.rockstargames.com/reddeadredemption2" target="_blank" className="py-[10px] px-[30px] rounded-2xl ml-2" style={{
                                border: '2px #FFF solid'
                            }}>Rockstar</a>
                        </div>
                    </li>
                    <li className="play__section-download-card relative">
                        <img src={Step2} alt="" />
                        <div className="play__section-download-card-footer absolute bottom-4 left-2">
                            <a href="https://runtime.fivem.net/redm/RedM.exe" target="_blank" className="py-[10px] px-[30px] rounded-2xl ml-2" style={{
                                border: '2px #FFF solid'
                            }}>Скачать файл</a>
                        </div>
                    </li>
                    <li className="play__section-download-card relative">
                        <img src={Step3} alt="" />
                        <div className="play__section-download-card-footer absolute bottom-4 left-2">
                            <a href="#" className="py-[10px] px-[30px] rounded-2xl ml-2" style={{
                                border: '2px #FFF solid'
                            }}><i className="fa-solid fa-earth mr-2"></i> Скопировать</a>
                        </div>

                    </li>
                </ul>
                <div className="play__section-servers flex gap-4 justify-center items-center flex-col">
                    <i className="fa-solid fa-2xl fa-arrow-down fa-bounce mb-5"></i>

                    <ServerCard />
                </div>
                <button style={{
                    textShadow: '3px 4px 1px #000000'
                }} className="btn mt-[62px] rounded-[50px] py-[25px] px-[20px] font-[Lino] font-regular text-[20px]" onClick={() => setNavigation(true)}><i className="fa-solid fa-location-dot mr-2"></i>НАВИГАЦИЯ ПО СЕРВЕРУ</button>
            </section>
        </>

    )
}

export default PlaySection