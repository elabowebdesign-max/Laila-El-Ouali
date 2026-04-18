import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, HeartPulse , User, Search, Filter, X, CheckCircle2, Clock, Share2 } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "L'Hypertension : Le Tueur Silencieux",
    excerpt: "Comment une pression artérielle élevée endommage vos artères sans symptômes visibles.",
    fullContent: "L'hypertension artérielle (HTA) est souvent asymptomatique, mais elle constitue la première cause évitable de maladies cardiovasculaires. Un contrôle régulier est vital.",
    details: [
      "Mesurez votre tension régulièrement (objectif < 140/90 mmHg).",
      "Réduisez votre consommation de sel (< 5g/jour).",
      "Pratiquez une activité physique d'endurance (30 min/jour).",
      "Limitez la consommation d'alcool et de tabac."
    ],
    date: "14 Avr 2026",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    category: "Prévention",
    author: "Dr. Laila El Ouali"
  },
  {
    id: 2,
    title: "Stress et Cœur : Une Connexion Vitale",
    excerpt: "L'impact du cortisol sur votre rythme cardiaque et les techniques de protection.",
    fullContent: "Le stress chronique maintient le corps en état d'alerte permanente, ce qui peut provoquer des arythmies et fragiliser les parois artérielles.",
    details: [
      "Pratiquez la cohérence cardiaque (cycle de respiration 5/5/5).",
      "Priorisez des nuits de sommeil complètes (7-8 heures).",
      "Identifiez les sources de stress environnemental.",
      "Consultez en cas de palpitations liées à l'anxiété."
    ],
    date: "12 Avr 2026",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    category: "Bien-être",
    author: "Dr. Laila El Ouali"
  },
  {
    id: 3,
    title: "Diabète & Risques Cardiovasculaires",
    excerpt: "Pourquoi le contrôle de la glycémie est indissociable de la santé de vos artères.",
    fullContent: "Le sucre en excès dans le sang fragilise les petits et gros vaisseaux sanguins, accélérant le processus d'athérosclérose.",
    details: [
      "Contrôlez votre hémoglobine glyquée (HbA1c) tous les 3 mois.",
      "Surveillez l'état de vos pieds et de votre vue.",
      "Adoptez un régime à index glycémique bas.",
      "Une marche après chaque repas aide à réguler la glycémie."
    ],
    date: "10 Avr 2026",
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=800",
    category: "Pathologie",
    author: "Dr. Laila El Ouali"
  },
  {
    id: 4,
    title: "Le Régime Méditerranéen en 2026",
    excerpt: "Les aliments piliers qui réduisent de 30% les risques d'infarctus.",
    fullContent: "Inscrit au patrimoine de l'UNESCO, ce régime est le plus validé scientifiquement pour la longévité cardiaque.",
    details: [
      "Utilisez l'huile d'olive comme principale source de gras.",
      "Consommez des légumineuses au moins 3 fois par semaine.",
      "Privilégiez les fruits frais et les noix en collation.",
      "Consommez du poisson gras (sardine, maquereau) 2 fois/semaine."
    ],
    date: "08 Avr 2026",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    category: "Nutrition",
    author: "Dr. Laila El Ouali"
  },
  {
    id: 5,
    title: "Arythmies : Quand s'inquiéter ?",
    excerpt: "Tachycardie, bradycardie ou extrasystoles : guide des signes d'alerte.",
    fullContent: "Toutes les palpitations ne sont pas graves, mais certaines nécessitent une exploration par Holter ECG ou étude plus poussée.",
    details: [
      "Consultez immédiatement en cas de malaise associé.",
      "Notez la fréquence et les facteurs déclenchants.",
      "Évitez les excitants (caféine, nicotine) pour tester la réaction.",
      "Le diagnostic précoce prévient les risques d'AVC."
    ],
    date: "06 Avr 2026",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800",
    category: "Rythmologie",
    author: "Dr. Laila El Ouali"
  },
  {
    id: 6,
    title: "Activité Physique : Quelle Dose ?",
    excerpt: "Minimum requis vs optimal pour un cœur en pleine santé.",
    fullContent: "Le cœur est un muscle qui a besoin d'entraînement régulier pour maintenir sa souplesse et sa force d'éjection.",
    details: [
      "Visez 150 min d'activité modérée par semaine.",
      "Le renforcement musculaire est aussi bénéfique pour les artères.",
      "Échauffez-vous toujours au moins 10 minutes.",
      "Ne dépassez pas vos limites sans avis médical préalable."
    ],
    date: "04 Avr 2026",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800",
    category: "Conseils",
    author: "Dr. Laila El Ouali"
  },
  {
    id: 7,
    title: "Tabac et Cœur : L'Effet Immédiat",
    excerpt: "Chronologie de la récupération cardiovasculaire après l'arrêt.",
    fullContent: "Dès 20 minutes après la dernière cigarette, la pression artérielle diminue. En 1 an, le risque d'infarctus est divisé par deux.",
    details: [
      "Utilisez des substituts nicotiniques si nécessaire.",
      "Faites-vous accompagner par un tabacologue.",
      "Lancez-vous dans un défi 'Mois sans tabac'.",
      "Évacuez les déclencheurs psychologiques habituels."
    ],
    date: "02 Avr 2026",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=800",
    category: "Alerte",
    author: "Dr. Laila El Ouali"
  },
  {
    id: 8,
    title: "L'Intelligence Artificielle en Cardio",
    excerpt: "Comment l'IA révolutionne le diagnostic des obstructions coronaires.",
    fullContent: "L'IA analyse aujourd'hui des milliers d'images scanner pour détecter des plaques d'athérome instables imperceptibles à l'œil.",
    details: [
      "Diagnostics 2x plus rapides pour les urgences.",
      "Précision millimétrique sur le taux de calcification.",
      "Prédiction personnalisée des risques à 5 ans.",
      "Uniquement disponible sur les plateaux techniques de pointe."
    ],
    date: "30 Mar 2026",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    category: "Innovation",
    author: "Dr. Laila El Ouali"
  },
  {
    id: 9,
    title: "Sommeil : Le Pilier Oublié",
    excerpt: "Le lien entre apnée du sommeil et insuffisance cardiaque.",
    fullContent: "Le manque d'oxygène nocturne force le cœur à travailler plus dur, augmentant drastiquement la tension nocturne.",
    details: [
      "Dépistez les ronflements excessifs.",
      "Évitez les écrans bleus 1h avant de dormir.",
      "Maintenez une température de chambre à 18°C.",
      "Le sommeil de qualité répare les tissus vasculaires."
    ],
    date: "28 Mar 2026",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800",
    category: "Bien-être",
    author: "Dr. Laila El Ouali"
  }
];

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="bg-[#fcfdfe] min-h-screen font-sans overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* ── COMPACT BLOG HEADER ── */}
      <section className="relative pt-20 pb-8 overflow-hidden border-b border-slate-100 bg-white">
         <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fcfdfe] to-transparent pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-slate-900 px-4 py-1.5 rounded-full mb-6 shadow-xl"
            >
              <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
              <span className="text-white font-black tracking-[0.4em] text-[7px] uppercase">Journal du Cabinet</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-4 italic"
            >
              Éduquer pour <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mieux Protéger.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed mb-6"
            >
              Retrouvez les dernières avancées médicales et nos conseils d'experts pour prendre soin de votre santé cardiovasculaire.
            </motion.p>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {articles.map((article, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container with Luxury Overlay */}
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden mb-10 relative shadow-2xl bg-slate-100">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-8 left-8 z-20 bg-white/95 backdrop-blur-md px-5 py-2 text-[9px] font-black uppercase tracking-widest rounded-full text-slate-900 shadow-xl border border-white/20">
                  {article.category}
                </div>

                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1000ms] ease-out"
                />
              </div>

              {/* Content Space */}
              <div className="px-2 text-left">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center text-[9px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">
                    <Calendar className="w-3 h-3 mr-2 text-primary" />
                    {article.date}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                  <div className="flex items-center text-[9px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">
                    <User className="w-3 h-3 mr-2 text-secondary" />
                    {article.author}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors leading-[1.1] tracking-tighter italic">
                  {article.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="pt-8 border-t border-slate-50">
                  <button 
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-4 text-slate-900 group-hover:text-primary font-black text-[9px] uppercase tracking-[0.3em] transition-all"
                  >
                    Découvrir la suite
                    <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-500">
                      <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* PAGINATION MOCKUP */}
        <div className="mt-32 flex justify-center items-center gap-4">
           {[1, 2, 3].map((n) => (
             <button key={n} className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs ${n === 1 ? 'bg-primary text-white shadow-xl' : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'} transition-all`}>{n}</button>
           ))}
           <div className="w-10 h-px bg-slate-200"></div>
           <button className="px-8 py-3 bg-white border border-slate-100 rounded-2xl font-black text-[9px] uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Dernière Page</button>
        </div>
      </div>

      {/* ── MODAL OVERLAY FOR DETAILS ── */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-950/80 backdrop-blur-3xl"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="bg-white w-full max-w-3xl max-h-[90vh] rounded-[3.5rem] overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] flex flex-col relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Floating & Elegant */}
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-slate-900/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary transition-all duration-300 border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto overflow-x-hidden scrollbar-hide">
                {/* ── IMAGE AT THE TOP (HERO STYLE) ── */}
                <div className="relative h-64 md:h-[450px] w-full overflow-hidden">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-[2s]" />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                  
                  {/* Category Label at the top left */}
                  <div className="absolute top-8 left-8">
                     <span className="px-5 py-2 bg-slate-900 text-white rounded-full text-[9px] font-black uppercase tracking-[0.4em] shadow-2xl border border-white/10">
                        {selectedArticle.category}
                     </span>
                  </div>
                </div>

                {/* ── CONTENT BELOW ── */}
                <div className="px-8 md:px-16 pb-20 -mt-10 relative z-10">
                  <div className="flex flex-wrap items-center gap-6 mb-10">
                    <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <Calendar className="w-4 h-4 mr-2 text-primary" /> {selectedArticle.date}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                    <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <User className="w-4 h-4 mr-2 text-secondary" /> Par {selectedArticle.author}
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 italic tracking-tighter leading-[0.95]">
                    {selectedArticle.title}
                  </h2>

                  <div className="w-20 h-1.5 bg-primary rounded-full mb-12"></div>

                  <div className="prose prose-slate max-w-none">
                     <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-16 border-l-4 border-secondary/20 pl-8 italic bg-slate-50/50 py-6 rounded-r-3xl">
                       "{selectedArticle.fullContent}"
                     </p>
                  </div>

                  {/* Advice Section with New Structure */}
                  <div className="space-y-8 mb-16">
                    <div className="flex items-center gap-4 mb-6">
                       <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Le Conseil de l'Expert</h4>
                       <div className="flex-grow h-px bg-slate-100"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {selectedArticle.details.map((point, i) => (
                         <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: i * 0.1 }}
                           key={i} 
                           className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                         >
                            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                               <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <p className="text-sm font-bold text-slate-800 leading-snug">{point}</p>
                         </motion.div>
                       ))}
                    </div>
                  </div>

                  {/* Action Section */}
                  <div className="mt-20 p-10 md:p-14 bg-slate-900 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                     <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700"><HeartPulse className="w-48 h-48 text-white" /></div>
                     
                     <div className="relative z-10 text-center">
                        <h5 className="text-3xl font-black text-white italic tracking-tighter mb-4">Besoin d'un diagnostic ?</h5>
                        <p className="text-slate-400 text-sm mb-12 max-w-md mx-auto font-medium">Ne laissez pas vos questions sans réponse. Le Dr. El Ouali vous accompagne avec expertise.</p>
                        <a 
                          href="https://wa.me/212666609028"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="px-12 py-5 bg-primary text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(55,120,118,0.3)] hover:bg-secondary hover:text-slate-900 transition-all duration-500">
                            Prendre RDV Maintenant
                          </button>
                        </a>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default Articles;
