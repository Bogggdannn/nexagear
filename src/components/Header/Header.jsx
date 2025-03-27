import './Header.scss';
import { NavLink } from "react-router"
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react';

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

    let [menu, setMenu] = useState(false)
    return (
        <header className='container header'>
            <img src="/icons/logo.svg" alt="логотип" className='logo' />
            <ul className='nav-links'>
                {links.map(item => {
                    return (
                        <li key={item.name}><NavLink to={item.url}>{item.name}</NavLink></li>
                    )
                })}
            </ul>
            <Menu isOpen={menu} right onStateChange={(state) => setMenu(state.isOpen)}>
                {links.map((item, index) => {
                    return (
                        <NavLink key={index} to={item.url} className="menu-item" onClick={() => setMenu(false)}>{item.name}</NavLink>
                    )
                })}
            </Menu>

            <div className='header-icons'>
                <img src="/icons/searchButton.svg" alt="поиск" />
                <img src="/icons/cartButton.svg" alt="корзина" />

                <a onClick={() => setMenu(!menu)} className="menu-item--small">
                    <button className={`hamburger hamburger--collapse ${menu?"is-active":''}`} type="button" >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </a>
            </div>
        </header>
    )
}

export default Header;