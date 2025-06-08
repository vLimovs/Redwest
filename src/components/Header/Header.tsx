import { useEffect, useState } from "react"
import { Logo } from "../../utils/ReExportImages"
import './Header.scss'
const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false)
    useEffect(() => {
        console.log(burgerMenu);
        

    }, [burgerMenu])
    
    return (
        <header className="header">
            <nav className={`header__nav my-container flex justify-between py-5 ${burgerMenu ? 'active' : ''}`}>
                <img src={Logo} className='header__logo w-[65px] h-[65px]' alt="" />
                <ul className={`header__nav-list flex text-white flex-1 justify-center ${burgerMenu ? 'active' : ''}`}>
                    <div className="flex gap-5">
                        <li><a target="_blank" href="https://vk.com/redwestrp">Группа VK</a></li>
                        <li><a href="#playnow">Как начать играть?</a></li>
                        <li><a target="_blank" href="https://discord.gg/Fwv5vaf3hh">Дискорд</a></li>
                        <li><a href="#">Магазин</a></li>
                    </div>
                </ul>
                <button
                    onClick={() => setBurgerMenu(prev => !prev)}
                    className="burger fa-solid fa-bars fa-xl text-white flex items-center h-[65px]">
                </button>
            </nav>
        </header>
    )
}

export default Header