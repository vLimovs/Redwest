import './Footer.scss'
const Footer = () => {
    return (
        <footer className="footer w-full text-white" style={{
            background: 'rgba(82, 0, 0, 0.77)'
        }}>
            <ul className="footer__inner my-container flex justify-between p-5">
                <li><a href="#">Пользовательское соглашение</a></li>
                <li><a href="#">Политика защиты персональной информации</a></li>
                <li>RedWest RP © 2020 - 2023</li>
            </ul>
        </footer>
    )
}

export default Footer