import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const API_URL = "https://69e59424ce4e908a155e2650.mockapi.io/Bhh/product";

  // 1. Базадан маалыматты таза тартып алуу
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Ката кетти:", err);
        setLoading(false);
      });
  }, []);

  const categories = [
    { id: 'all', name: 'Баары' },
    { id: 'remont', name: 'Евро Ремонт' },
    { id: 'design', name: 'Интерьер Дизайн' },
    { id: 'construction', name: 'Курулуш' }
  ];

  // 2. Фильтрлөө
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  if (loading) {
    return (
      <div className="portfolio-loading">
        <div className="spinner"></div>
        <p>Жүктөлүүдө...</p>
      </div>
    );
  }

  return (
    <div className="portfolio-page">
      {/* Үстүнкү баннер */}
      <div className="portfolio-hero">
        <div className="portfolio-overlay"></div>
        <div className="portfolio-hero-content">
          <h1>Биздин <span className="gold-text">Жумуштар</span></h1>
          <p>Биз ишке ашырган эң мыкты жана премиум долбоорлор</p>
        </div>
      </div>

      {/* Фильтр кнопкалары */}
      <div className="portfolio-filters">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Долбоорлордун тизмеси */}
      <div className="portfolio-container">
        {filteredProjects.map((project, index) => {
          const isReverse = index % 2 !== 0 ? 'reverse' : '';

          return (
            <div key={project.id || index} className={`portfolio-card-item ${isReverse}`}>
              
              {/* ВИЗУАЛДЫК БӨЛҮК: Видео же Сүрөттү түз чыгаруу */}
              <div className="portfolio-visual-block">
                {project.video ? (
                  // Эгер базада видео бар болсо, түз эле ушул плеерди чыгарат
                  <iframe 
                    src={project.video.replace("streamable.com/", "streamable.com/e/")} 
                    frameBorder="0" 
                    allowFullScreen
                    width="100%"
                    height="100%"
                    title={project.title}
                  ></iframe>
                ) : (
                  // Видео жок болсо, сүрөттү чыгарат
                  <img src={project.image} alt={project.title} />
                )}
              </div>

              {/* ТЕКСТТИК БӨЛҮК */}
              <div className="portfolio-text-block">
                <span className="project-tag">{project.category}</span>
                <h2>{project.title}</h2>
                <p className="project-loc">📍 {project.location}</p>
                <div className="gold-divider"></div>
                <p className="project-description">{project.text}</p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;