import React from 'react';
import './Footer.css';
import logoImg from '../../assets/Logo.jpg'; // Хедердегидей эле логотиптин жолу

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="premium-footer-section">
      <div className="footer-content">
        {/* Сол тарап: Логотип жана кыскача маалымат */}
        <div className="footer-brand">
          <div className="footer-logo-area">
            <img src={logoImg} alt="Kaganat Premium" className="footer-logo" />
            <div className="footer-logo-text">
              <span className="footer-gold">KAGANAT</span>
              <span className="footer-white">PREMIUM</span>
            </div>
          </div>
          <p className="footer-slogan">
            Строительство, дизайн, ремонт, интерьер, реконструкция, креативность, качество, профессионализм.
          </p>
        </div>

        {/* Оң тарап: Тез шилтемелер же кошумча байланыш */}
        <div className="footer-info">
          <h4 className="footer-title">Байланыш</h4>
          <p>Жумуш убактысы: 09:00 - 19:00</p>
          <p>Биз социалдык тармактарда: <a href="https://instagram.com/kaganat_premum" target="_blank" rel="noreferrer" className="footer-link">@kaganat_premum</a></p>
        </div>
      </div>

      {/* Эң ылдыйкы назик сызык жана автордук укук */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} KAGANAT PREMIUM. Бардык укуктар корголгон.</p>
      </div>
    </footer>
  );
};

export default Footer;