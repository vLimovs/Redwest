import { useState } from "react"
import ModalWindow from "../UI/ModalWindow/ModalWindow"
import { NewsCardImg } from "../../utils/ReExportImages"

const NewsSection = () => {
    const [news, setNews] = useState(false)
    return (
        <>
            {news && (
                <ModalWindow>
                    <i className="fa-solid fa-x text-white absolute top-5 right-7 cursor-pointer" onClick={() => setNews(false)}></i>
                    <h1 className="text-white text-4xl">Opened news card</h1>
                </ModalWindow>
            )}

            <section className="news__section my-container text-white my-[50px]">
                <h2 className="title text-center font-[montserrat] font-bold text-[44px] mb-[54px]">ПОСЛЕДНИЕ НОВОСТИ</h2>
                <div className="flex flex-wrap gap-10 items-center justify-center">
                    <article className="max-w-[370px] w-[100%] h-[360px] bg-[#00000075] rounded-[25px] relative">
                        <img src={NewsCardImg} className='rounded-[25px] object-cover w-[100%]' alt="" />
                        <div className="my-2">
                            <h3 className="font-[montserrat] font-bold text-[20px] text-center text-[#ac0000]">📰 Обновление локации</h3>
                            <p className="font-[montserrat] text-[14px] text-center">Салун, доктор, бунгало, дома с интерьером, а так же дом правительства! </p>
                        </div>
                        <button style={{
                            transform: 'translateY(25px)'
                        }}
                            onClick={() => setNews(true)} className="absolute bottom-0 btn w-[166px] h-[54px] flex items-center justify-center gap-1 font-[montserrat] rounded-[50px] font-semibold text-[16px] left-[25%] ">Подробнее <i className="fa-solid fa-arrow-right "></i></button>
                    </article>
                </div>
            </section>
        </>
    )
}

export default NewsSection