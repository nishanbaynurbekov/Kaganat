import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Loading from '../components/Loading/Loading';
import { supabase } from '../components/supabase/supabase';
import Like from '../components/supabase/Like';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  // const [ product, setProduct ] = useState([])

useEffect (() => {
getProducts()

const API_URL = supabase
 
.channel('products-changes')
.on('postgres_changes', 
  { event: 'UPDATE', schema: 'public', 
    table: 'products'}, 
    (payload) => {
      setProjects(currentProducts =>  currentProducts.map(p => 
        p.id === payload.nev.id? payload.new : p
      )
      )
    }
)
.subscribe()

return () => {
  supabase.removeChannel(API_URL)
}
}, [])

 async function getProducts() {
  const { data, error } = await supabase
  .from('products')
  .select("*")
  .order('id', {ascending: true})

  if (error) {
    console.log('kata', error)
    }
    else{
      setProjects(data)
    }
      setLoading(false)
 }
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
       <Loading/>
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
                <Like productId={project.id}
                initialLike={project.like}/>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;