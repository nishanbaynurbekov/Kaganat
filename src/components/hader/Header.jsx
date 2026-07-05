import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Hammer, Image } from 'lucide-react'; // Назик жана заманбап иконкалар
import './header.css'; // Сиздеги файлдын аты кичине тамга менен болгону үчүн оңдолду
import logoImg from '../../assets/Logo.jpg'; // Сиздин логотиптин жолу өзгөрүүсүз калды

const Header = () => {
  // Меню ачык же жабык экенин көзөмөлдөөчү state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="premium-header">
      {/* Логотип */}
      <div className="logo-area">
        <img src={logoImg} alt="Kaganat Premium Logo" className="header-logo" />
        <div className="logo-text">
          <span className="gold-text">KAGANAT</span>
          <span className="white-text">PREMIUM</span>
        </div>
      </div>

      {/* Линктер (иконкалар менен бирге) */}
      <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>
          <Home className="nav-icon" size={20} />
          <span>Башкы бет</span>
        </Link>
        <Link to="/about" className="nav-item" onClick={() => setIsOpen(false)}>
          <Info className="nav-icon" size={20} />
          <span>Биз жөнүндө</span>
        </Link>
        <Link to="services" className="nav-item" onClick={() => setIsOpen(false)}>
          <Hammer className="nav-icon" size={20} />
          <span>Кызматтар</span>
        </Link>
        <Link to="/portfolio" className="nav-item" onClick={() => setIsOpen(false)}>
          <Image className="nav-icon" size={20} />
          <span>Жумуштар</span>
        </Link>
      </nav>

      {/* Телефондор үчүн Гамбургер топчусу */}
      <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Header;