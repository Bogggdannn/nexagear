import './Header.scss';
import { NavLink } from "react-router"


function Header() {
    let links = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Category',
            url: '/category'
        },
        {
            name: 'Community',
            url: '/community'
        },
        {
            name: 'FAQ`s',
            url: '/faq'
        }
    ]

    function showSettings (event) {
        event.preventDefault();
      }
    return (
        <header className='container header'>
            <img src="/icons/logo.svg" alt="логотип" className='logo'/>
            <ul className='nav-links'>
                {links.map(item => {
                    return (
                        <li key={item.name}><NavLink to={item.url}>{item.name}</NavLink></li>
                    )
                })}
            </ul>
            <div className='header-icons'>
                <img src="/icons/searchButton.svg" alt="поиск"/>
                <img src="/icons/cartButton.svg" alt="корзина" />
                <a onClick={event=>showSettings(event)} className="menu-item--small"></a>
            </div>
        </header>
    )
}

export default Header;