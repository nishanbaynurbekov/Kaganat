import React from 'react';
import { Paintbrush, Layout, Construction, RefreshCw, ShoppingBag, ShieldCheck } from 'lucide-react'; // Дагы 2 жаңы иконка коштук
import './Home.css';

const Home = () => {
  // Кызматтардын толукталган массиви (6 даана)
  const services = [
    {
      id: 1,
      icon: <Construction size={32} />,
      title: "Курулуш (Строительство)",
      desc: "Нөлдөн баштап имараттарды жана үйлөрдү заманбап технологиялар менен сапаттуу куруу иштери."
    },
    {
      id: 2,
      icon: <Paintbrush size={32} />,
      title: "Евро Ремонт",
      desc: "Жогорку деңгээлдеги жасалгалоо, премиум материалдар менен иштөө жана кемчиликсиз сапат."
    },
    {
      id: 3,
      icon: <Layout size={32} />,
      title: "Интерьер Дизайны",
      desc: "Сиздин табитиңизге жана заманбап тренддерге шайкеш келген уникалдуу дизайн долбоорлорун түзүү."
    },
    {
      id: 4,
      icon: <RefreshCw size={32} />,
      title: "Реконструкция",
      desc: "Эскирген имараттарды жана батирлерди кайрадан пландоо, жаңылоо жана экинчи өмүр тартуулоо."
    },
    {
      id: 5,
      icon: <ShoppingBag size={32} />,
      title: "Материалдарды тандоо",
      desc: "Премиум класстагы сапаттуу, бышык курулуш жана жасалгалоо материалдарын туура тандап, жеткирүү."
    },
    {
      id: 6,
      icon: <ShieldCheck size={32} />,
      title: "Техникалык көзөмөл",
      desc: "Ар бир аткарылган иштин сапатын, коопсуздугун жана стандарттарга жооп беришин так көзөмөлдөө."
    }
  ];

  return (
    <div className="home-container">
      {/* 1. БАННЕР БӨЛҮМҮ (Hero Section) */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Премиум Класстагы <span className="gold-highlight">Евро Ремонттор</span>
          </h1>
          <p className="hero-subtitle">
            Долбоорлоодон баштап, ачкычын tapшырганга чейинки жогорку сапат. 
            Биз сиздин үйүңүзгө кооздук, заманбап стил жана бейпилдик тартуулайбыз.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/996223544667" className="btn-primary" target="_blank" rel="noreferrer">
  Акысыз консультация
</a>
            <a href="portfolio" className="btn-secondary">Биздин жумуштар</a>
          </div>
        </div>
      </section>

      {/* 2. КЫЗМАТТАР БӨЛҮМҮ (Services Section) */}
      <section className="services-section">
        <div className="services-header">
          <span className="section-subtitle">Биз эмне иштерди кылабыз?</span>
          <h2 className="section-title">Биздин <span className="gold-highlight">Кызматтар</span></h2>
          <div className="title-line"></div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <div className="card-border-effect"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;