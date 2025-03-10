import Header from "../Header/Header";
import { slide as Menu } from 'react-burger-menu'

export default function MainLayout({ children }) {
  return (
    <> 
      <Menu width={ 280 } >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
      <Header />
      <main>{children}</main>
    </>
  );
}