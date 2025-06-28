const Footer = () => {
    return (
        <footer className="footer w-full text-white" style={{
            background: 'rgba(82, 0, 0, 0.77)'
        }}>
            <ul className="footer__inner my-container flex  text-center justify-between p-5 gap-5">
                <li><a href="#" className='underline'>Пользовательское соглашение</a></li>
                <li><a href="#" className='underline'>Политика защиты персональной информации</a></li>
                <li>RedWest RP © 2020 - 2023</li>
            </ul>
        </footer>
    )
}

export default Footer