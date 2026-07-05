import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* 1. Үстүнкү баннер */}
      <div className="about-hero">
        <div className="about-overlay"></div>
        <div className="about-hero-content">
          <h1>Биз <span className="gold-text">Жөнүндө</span></h1>
          <p>Сапат, ишеним жана премиум деңгээлдеги курулуш-ремонт иштери</p>
        </div>
      </div>

      {/* 2. Негизги маалымат блогу (Сүрөт + Текст) */}
      <div className="about-section">
        <div className="about-image-block">
          <img 
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800" 
            alt="Каганат Премиум Жумуш Процесси" 
          />
          <div className="image-gold-frame"></div>
        </div>

        <div className="about-text-block">
          <span className="about-subtitle">Каганат Премиум</span>
          <h2>Мейкиндикти <span className="gold-text">искусствого</span> айландырабыз</h2>
          <div className="gold-divider"></div>
          <p>
            Биздин компания көп жылдардан бери курулуш, интерьер дизайны жана евро ремонт багытында 
            жогорку сапаттагы кызматтарды көрсөтүп келет. Биз үчүн ар бир долбоор — бул жөн гана жумуш эмес, 
            бул кардардын кыялын реалдуулукка айлантуучу өзгөчө процесс.
          </p>
          <p>
            Биз ар бир деталга, материалдардын тазалыгына жана жумуштун так убактысында бүтүшүнө 
            өзгөчө көңүл бурабыз. Тажрыйбалуу усталар жана креативдүү дизайнерлер курамы сиз каалаган 
            татаалдыктагы долбоорлорду башынан аягына чейин кепилдиги менен аткарууга даяр.
          </p>
        </div>
      </div>

      {/* 3. Статистика блогу (Көрүүчүлөргө ишеним жаратуу үчүн) */}
      <div className="about-stats-container">
        <div className="stat-card">
          <h3>50+</h3>
          <p>Бүткөрүлгөн премиум долбоорлор</p>
        </div>
        <div className="stat-card">
          <h3>7+</h3>
          <p>Жылдык үзгүлтүксүз тажрыйба</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Канааттанган кардарлар</p>
        </div>
        <div className="stat-card">
          <h3>5 жыл</h3>
          <p>Аткарылган жумушка расмий кепилдик</p>
        </div>
      </div>

      {/* 4. Биздин Баалуулуктар */}
      <div className="values-section">
        <div className="values-title">
          <h2>Биздин негизги <span className="gold-text">Принциптерибиз</span></h2>
          <div className="gold-divider center"></div>
        </div>
        
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">💎</div>
            <h4>Премиум Сапат</h4>
            <p>Жумушта эң мыкты, экологиялык таза жана заманбап материалдарды гана колдонобуз.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h4>Ишенимдүүлүк</h4>
            <p>Кардар менен түзүлгөн келишимдин ар бир пунктун жана мөөнөттөрүн так сактайбыз.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🎨</div>
            <h4>Эксклюзивдүүлүк</h4>
            <p>Кайталанбаган, ар бир кардардын табитине жана мүнөзүнө туура келген өзгөчө дизайн түзөбүз.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;