import { MediaScreens, MediaVideo, NewsCardImg } from "../../utils/ReExportImages"

const MediaSection = () => {
    return (
        <section className="media__section my-container text-white my-[50px]">
            <h2 className="title text-center font-[Lino] font-bold text-[44px] mb-[54px]">МЕДИА РАЗДЕЛ</h2>
            <div className="flex items-center justify-between gap-[95px] w-full">
                <img src={MediaVideo} alt="" className="cursor-pointer" />
                <article style={{
                    background: 'linear-gradient(177deg, rgba(255, 31, 31, 0.6) 0%, rgba(95, 6, 6, 0.6) 100%)',
                    borderRadius: '0 0 25px 25px'
                }} className="max-w-[470px] w-[100%] h-[360px] relative px-4">
                    <h4 className="font-[Lino] font-bold text-[25px] text-cen text-center"
                    style={{
                        textShadow: '3px 4px 1px #000000'
                    }}>Новая публикация</h4>

                    <img src={NewsCardImg} className='object-cover w-[100%] h-[80%]' alt="" />
                    {/* <iframe width="560" className='object-cover w-[100%] h-[80%]' height="315" src="https://www.youtube.com/embed/V4sPnF9__D4?si=zhqlQapCz_YhSbNk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

                    <a style={{
                        transform: 'translateY(25px)'
                    }}
                        href="#" className="absolute bottom-0 btn w-[166px] h-[54px] flex items-center justify-center gap-1 font-[montserrat] rounded-[50px] font-semibold text-[16px] left-[30%] ">Открыть</a>
                </article>
                <img src={MediaScreens} alt="" className="cursor-pointer" />
            </div>
        </section>
    )
}

export default MediaSection