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
                    <div className="text-white w-full h-full flex flex-col items-center py-[15px] px-[20px]">
                        <h3 className="font-[montserrat] font-bold text-[35px] text-center">Обновление локации</h3>
                        <img src={NewsCardImg} className='mt-5 w-[60%] rounded-[25px] object-cover m-w-[70%] m-h-[504px]'
                            style={{
                                border: '3px solid #FFF'
                            }} alt="" />
                        <div className="my-2">
                            <p className="font-[montserrat] text-[15px] text-center">
                                Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Великий, рыбными. Текстов текстами пор он переписали семантика использовало, ее маленькая которой подпоясал снова. Дороге заголовок всемогущая снова подпоясал взгляд грустный встретил дал своих свою. Дороге, великий над. Последний щеке большой текст, текстов страну, рыбными маленькая оксмокс грамматики сбить вдали, первую решила? Океана напоивший, на берегу которой вершину букв лучше коварных не моей, страну большого деревни над семь. Гор своих необходимыми грамматики агентство свое свой продолжил lorem лучше составитель семь, даль текст силуэт, возвращайся жизни родного рукописи текстов послушавшись последний ручеек что моей! Домах до рот рукописи агентство толку проектах точках решила, то переписывается рыбными грустный текстов последний маленькая строчка ее скатился о своего. Журчит возвращайся ipsum всеми пустился на берегу составитель жаренные снова по всей грамматики вершину мир коварных переписывается однажды алфавит, он несколько! Вопрос, заголовок, продолжил пустился дорогу текстами рыбными не большого даль сбить грамматики своих ipsum ты домах свой даже!
                            </p>
                        </div>
                    </div>
                </ModalWindow>
            )}
            <section className="news__section my-container text-white my-[50px]">
                <h2 className="title text-center font-[Lino] font-bold text-[44px] mb-[54px]">ПОСЛЕДНИЕ НОВОСТИ</h2>
                <div className="flex flex-wrap gap-10 items-center justify-center">
                    <article className="max-w-[370px] w-[100%] h-[360px] bg-[#00000075] rounded-[25px] relative">
                        <img src={NewsCardImg} className='rounded-[25px] object-cover w-[100%]' alt="" />
                        <div className="my-2 font-[montserrat]">
                            <h3 className="font-bold text-[20px] text-center text-[#ac0000]">📰 Обновление локации</h3>
                            <p className="text-[14px] text-center">Салун, доктор, бунгало, дома с интерьером, а так же дом правительства! </p>
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