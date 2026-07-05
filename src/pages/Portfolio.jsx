import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const API_URL = "https://69e59424ce4e908a155e2650.mockapi.io/Bhh/product";

  // Базадан маалыматтарды тартып алуу
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Маалымат алууда ката кетти:", err);
        setLoading(false);
      });
  }, []);

  const categories = [
    { id: 'all', name: 'Баары' },
    { id: 'remont', name: 'Евро Ремонт' },
    { id: 'design', name: 'Интерьер Дизайн' },
    { id: 'construction', name: 'Курулуш' }
  ];

  // Фильтрлөө логикасы
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  if (loading) {
    return (
      <div className="portfolio-loading">
        <div className="spinner"></div>
        <p>Долбоорлор жүктөлүүдө...</p>
      </div>
    );
  }

  return (
    <div className="portfolio-page">
      {/* 1. Үстүнкү баннер */}
      <div className="portfolio-hero">
        <div className="portfolio-overlay"></div>
        <div className="portfolio-hero-content">
          <h1>Биздин <span className="gold-text">Жумуштар</span></h1>
          <p>Биз ишке ашырган эң мыкты жана премиум долбоорлор</p>
        </div>
      </div>

      {/* 2. Фильтрлөөчү кнопкалар */}
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

      {/* 3. Долбоорлордун тизмеси */}
      <div className="portfolio-container">
        {filteredProjects.map((project, index) => {
          const imageUrl = project.image ? project.image.trim() : '';
          const videoUrl = project.video ? project.video.trim() : '';
          
          // Индекске карап зигзаг (оң/сол) кылуу үчүн класс кошуу
          const isReverse = index % 2 !== 0 ? 'reverse' : '';

          // Видео же Сүрөт блокту даярдоо
          let visualElement = null;
          if (videoUrl && videoUrl.includes('streamable.com')) {
            const videoId = videoUrl.split('/').pop();
            visualElement = (
              <div className="portfolio-visual-block video-wrapper">
                <iframe 
                  src={`https://streamable.com/e/${videoId}?loop=0`} 
                  frameBorder="0" 
                  allowFullScreen
                  title={project.title}
                ></iframe>
              </div>
            );
          } else if (imageUrl) {
            visualElement = (
              <div className="portfolio-visual-block img-wrapper">
                <img src={imageUrl} alt={project.title || 'Долбоор'} />
              </div>
            );
          }

          return (
            <div key={project.id || index} className={`portfolio-card-item ${isReverse}`}>
              
              {/* Визуалдык бөлүк (Видео же Сүрөт) */}
              {visualElement}

              {/* Тексттик маалыматтар */}
              <div className="portfolio-text-block">
                <span className="project-tag">{project.category || 'Премиум жумуш'}</span>
                <h2>{project.title || 'Аталышы жок'}</h2>
                <p className="project-loc">📍 {project.location || 'Дареги көрсөтүлгөн эмес'}</p>
                <div className="gold-divider"></div>
                <p className="project-description">
                  {project.text || 'Бул долбоор тууралуу кыскача маалымат жазылган эмес.'}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;