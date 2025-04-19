import { useState } from 'react';
import styles from './Navbar.module.scss';
import { FaCar, FaBars, FaTimes, FaSearch, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { MdHelpOutline } from 'react-icons/md';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.navbar}>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <FaCar size={24} />
          <span>LocaCar</span>
        </div>

        <div className={styles.search}>
          <FaSearch />
          <input type="text" placeholder="Buscar carros..." />
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li><a href="#"><FaCar /> Home</a></li>
          <li><a href="#"><FaCar /> Catálogo</a></li>
          <li><a href="#"><MdHelpOutline /> Suporte</a></li>
          <li><a href="#"><FaPhoneAlt /> Contato</a></li>
        </ul>

        <div className={styles.actions}>
          <button className={styles.login}><FaUser /> Entrar</button>
          <button className={styles.signup}>Cadastrar</button>
        </div>

        <div className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
