import { useEffect, useState } from "react";
import { Character } from "../../utils/ReExportImages";
import './Hero.scss';
import ModalWindow from "../UI/ModalWindow/ModalWindow";

const Hero = () => {
    const [video, setVideo] = useState(false);
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    const words = ["ROLEPLAY", "LIFE RP", "WILD WEST"];

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout: number;
        const typeSpeed = isDeleting ? 50 : 50;

        if (!isDeleting && index === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && index === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }, 500);
        } else {
            timeout = setTimeout(() => {
                const updatedText = currentWord.slice(0, isDeleting ? index - 1 : index + 1);
                setText(updatedText);
                setIndex((prev) => prev + (isDeleting ? -1 : 1));
            }, typeSpeed);
        }

        return () => clearTimeout(timeout);
    }, [index, isDeleting, wordIndex]);


    return (
        <>
            {video && (
                <ModalWindow>
                    <i className="fa-solid fa-x text-white absolute top-5 right-7 cursor-pointer" onClick={() => setVideo(false)}></i>
                    <iframe
                        width="90%"
                        height="90%"
                        src="https://www.youtube.com/embed/LOxqX3QwWis?si=0d_ZlMxXhho1K7E8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </ModalWindow>
            )}
            <main
                className="main my-container mt-[324px] mb-[243px] relative"
                style={{ textShadow: '3px 4px 1px #000000' }}
            >
                <div className="main__content text-white">
                    <div className="main__content-top flex items-end">
                        <div>
                            <h1 className="text-[35px] font-[Lino]">НОВЫЙ МИР В RDR2 С РЕЖИМОМ</h1>
                            <h1 className="roleplay text-[100px] font-[Lino] m-w-[833px] h-[160px]">
                                {text}
                                <span className="blinking-cursor">|</span>
                            </h1>
                        </div>
                        <img className="absolute right-14 top-[-35px]" src={Character} alt="" />
                    </div>

                    <div className="main__content-bottom flex flex-wrap font-[Lino] gap-[90px] text-[16px]">
                        <a className="btn py-[15px] px-[30px] font-[Lino] rounded-[50px] text-[20px]" href="#playnow">
                            НАЧАТЬ ИГРАТЬ <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <div className="flex justify-center items-center gap-3">
                            <i className="fa-solid fa-user fa-xl"></i>
                            <div>
                                <p>Сейчас играют</p>
                                <p className="flex items-center gap-1 text-[#CE2727]">
                                    <span className="live"></span>72
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => setVideo(true)}
                            className="flex justify-center items-center gap-1.5 cursor-pointer"
                        >
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
    );
};

export default Hero;
