import React from 'react';
import { Paintbrush, Layout, Construction, RefreshCw, ShoppingBag, ShieldCheck, CheckCircle } from 'lucide-react';
import './Services.css';

const Services = () => {
  const fullServices = [
    {
      id: 1,
      icon: <Construction size={40} />,
      title: "Курулуш (Строительство)",
      desc: "Нөлдөн баштап имараттарды жана үйлөрдү заманбап технологиялар менен сапаттуу куруу иштери. Биз ар бир этапты тактык менен аткарабыз.",
      features: ["Пландоо жана пайдубал куюу", "Дубалдарды көтөрүү (кыш, монолит)", "Чатыр жабуу иштери", "Сейсмотуруктуулукту камсыздоо"],
      // Кийин ушул жердеги даяр кооз интернет шилтемелерин өзүңүздүнassets'теги сүрөттөргө алмаштырып алсаңыз болот
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600" 
    },
    {
      id: 2,
      icon: <Paintbrush size={40} />,
      title: "Евро Ремонт",
      desc: "Жогорку деңгээлдеги жасалгалоо, премиум материалдар менен иштөө жана кемчиликсиз сапат. Сиздин үйүңүздүн люкс көрүнүшү үчүн.",
      features: ["Дубалдарды идеалдуу тегиздөө", "Премиум обои жана декоративдик штукатурка", "Паркет, ламинат жана кафель басуу", "Көп деңгээлдүү кооз шыптар"],
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=600"
    },
    {
      id: 3,
      icon: <Layout size={40} />,
      title: "Интерьер Дизайны",
      desc: "Сиздин табитиңизге жана заманбап тренддерге шайкеш келген уникалдуу дизайн долбоорлорун түзүү. Ар бир бөлмөнүн функционалдуулугу эске алынат.",
      features: ["3D визуализация (келечектеги үйүңүздү көрүү)", "Эмеректердин жайгашуу схемасы", "Түстөрдү жана жарыктарды туура тандоо", "Текшерилген чиймелер топтому"],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600"
    },
    {
      id: 4,
      icon: <RefreshCw size={40} />,
      title: "Реконструкция",
      desc: "Эскирген имараттарды жана батирлерди кайрадан пландоо, жаңылоо жана экинчи өмүр тартуулоо. Эски үйдү заманбап кылганыбыз.",
      features: ["Дубалдарды кайра куруу (перепланировка)", "Эскирген конструкцияларды бекемдөө", "Сантехника жана электр түйүндөрүн алмаштыруу", "Интерьерди толук жаңылоо"],
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600"
    },
    {
      id: 5,
      icon: <ShoppingBag size={40} />,
      title: "Материалдарды тандоо",
      desc: "Премиум класстагы сапаттуу, бышык курулуш жана жасалгалоо материалдарын туура тандап, жеткирүү. Биз базардагы эң мыктысын билебиз.",
      features: ["Сапаттуу бренддерди тандоо", "Экологиялык таза материалдар", "Дүң баада сатып алууга көмөктөшүү", "Объектке коопсуз жеткирүү"],
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=600"
    },
    {
      id: 6,
      icon: <ShieldCheck size={40} />,
      title: "Техникалык көзөмөл",
      desc: "Ар бир аткарылган иштин сапатын, коопсуздугун жана стандарттарга жооп беришин так көзөмөлдөө. Биз сизге толук ишенимдүүлүк беребиз.",
      features: ["Курулуш нормаларын сактоо (СНиП)", "Ар бир этаптын сапатын кабыл алуу", "Бюджетти туура үнөмдөө", "Кепилдик берүү жана отчеттуулук"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600"
    }
  ];

  return (
    <div className="services-page-container">
      <div className="services-page-hero">
        <div className="services-page-overlay"></div>
        <div className="services-page-hero-content">
          <h1 className="services-page-title">Биздин <span className="gold-text-span">Кызматтар</span></h1>
          <p className="services-page-subtitle">Профессионалдуулук, сапат жана премиум мамиле</p>
        </div>
      </div>

      <div className="services-page-list">
        {fullServices.map((service, index) => (
          <div key={service.id} className={`services-page-item ${index % 2 === 0 ? '' : 'reverse-layout'}`}>
            <div className="service-page-info-box">
              <div className="service-page-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p className="service-main-desc">{service.desc}</p>
              
              <div className="service-features-list">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle size={16} className="feature-check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ЭМИ БУЛ ЖЕРДЕ КҮЧТҮҮ ВИЗУАЛДЫК СҮРӨТ ТУРАТ */}
            <div className="service-page-visual-box">
              <div className="visual-card-with-img">
                <img src={service.image} alt={service.title} className="service-img" />
                <div className="visual-img-overlay">
                  <span className="visual-number">0{index + 1}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;