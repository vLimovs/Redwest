import { Logo } from "../../utils/ReExportImages"
import './Header.scss'
const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav my-container flex items-center py-5">
                <img src={Logo} className='header__logo w-[65px] h-[65px]' alt="" />
                <ul className="header__nav-list flex text-white flex-1 justify-center">
                    <div className="flex gap-5">
                        <li><a target="_blank" href="https://vk.com/redwestrp">Группа VK</a></li>
                        <li><a href="#playnow">Как начать играть?</a></li>
                        <li><a target="_blank" href="https://discord.gg/Fwv5vaf3hh">Дискорд</a></li>
                        <li><a href="#">Магазин</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header