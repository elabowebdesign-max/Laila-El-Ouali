import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Activity, 
  Waves, 
  Clock, 
  Monitor, 
  Zap, 
  ShieldCheck, 
  Stethoscope,
  Wind
} from 'lucide-react';

const services = [
  {
    title: "ECG (Repos)",
    desc: "Électrocardiogramme de repos pour une analyse instantanée du rythme et de la conduction cardiaque.",
    icon: <HeartPulse className="w-10 h-10" />,
    color: "from-primary/20 to-primary/5"
  },
  {
    title: "Épreuve d'Effort",
    desc: "Évaluation de la performance cardiaque et de la tension lors d'une stimulation physique contrôlée.",
    icon: <Zap className="w-10 h-10" />,
    color: "from-secondary/20 to-secondary/5"
  },
  {
    title: "Écho Trans-Thoracique",
    desc: "Échocardiographie (ETT) classique pour visualiser les valves et le muscle cardiaque par ultrasons.",
    icon: <Waves className="w-10 h-10" />,
    color: "from-slate-900/10 to-slate-900/5"
  },
  {
    title: "Écho Trans-Œsophagienne",
    desc: "Examen approfondi (ETO) permettant une vision ultra-précise des structures cardiaques profondes.",
    icon: <Activity className="w-10 h-10" />,
    color: "from-primary/20 to-primary/5"
  },
  {
    title: "Écho de Stress",
    desc: "Évaluation de la viabilité myocardique et des valves sous stimulation pharmacologique ou d'effort.",
    icon: <Wind className="w-10 h-10" />,
    color: "from-secondary/20 to-secondary/5"
  },
  {
    title: "Holter ECG (24h/48h)",
    desc: "Enregistrement continu de l'activité électrique pour détecter les troubles du rythme ponctuels.",
    icon: <Clock className="w-10 h-10" />,
    color: "from-slate-900/10 to-slate-900/5"
  },
  {
    title: "Holter Tensionnel (MAPA)",
    desc: "Surveillance ambulatoire de la pression artérielle sur 24h pour un profil tensionnel fiable.",
    icon: <Activity className="w-10 h-10" />,
    color: "from-primary/20 to-primary/5"
  },
  {
    title: "Scanner Coronaire",
    desc: "Imagerie haute définition pour l'analyse précise des artères coronaires et des calcifications.",
    icon: <Monitor className="w-10 h-10" />,
    color: "from-secondary/20 to-secondary/5"
  },
  {
    title: "IRM Cardiaque",
    desc: "Résonance magnétique pour l'étude morphologique et fonctionnelle millimétrée des tissus du cœur.",
    icon: <ShieldCheck className="w-10 h-10" />,
    color: "from-slate-900/10 to-slate-900/5"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
};

const Specializations = () => {
  return (
    <div className="min-h-screen text-slate-900 relative overflow-hidden bg-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* ── COMPACT CLINICAL HEADER WITH ECG BACKGROUND ── */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-slate-100">
         {/* ECG Background with Light Overlay */}
         <div className="absolute inset-0 z-0">
            <img src="/ecg.jpg" alt="ECG" className="w-full h-full object-cover opacity-20 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-primary/5"></div>
         </div>

         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-slate-900 font-black tracking-[0.3em] text-[8px] uppercase">Services Spécialisés</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter mb-4 italic"
            >
              Notre Expertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Cardio-Vasculaire.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed"
            >
              Un plateau technique complet pour des diagnostics rapides et précis.
            </motion.p>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* COMPACT GRID SYSTEM */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full -translate-y-1/2 translate-x-1/2 opacity-30 group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-slate-900 group-hover:text-primary transition-colors duration-500 shadow-inner`}>
                   <div className="scale-75 group-hover:scale-90 transition-transform">{service.icon}</div>
                </div>
                
                <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tighter uppercase leading-none group-hover:text-primary transition-colors italic">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-[12px] leading-relaxed mb-6 font-medium lowercase italic first-letter:uppercase">
                  {service.desc}
                </p>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-secondary"></div>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Opérationnel</span>
                   </div>
                   <Zap className="w-3 h-3 text-secondary/30 group-hover:text-secondary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* COMPACT CALL TO ACTION */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-16 p-10 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl"
        >
           <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12"><HeartPulse className="w-24 h-24 text-white" /></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h4 className="text-2xl font-black tracking-tighter mb-1 italic">Besoin d'un bilan ?</h4>
                <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Planifiez votre consultation dès aujourd'hui.</p>
              </div>
              <a 
                href="https://wa.me/212666609028"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-10 py-5 bg-primary text-white rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-secondary hover:text-slate-900 transition-all duration-300">
                  Prendre Rendez-vous
                </button>
              </a>
           </div>
        </motion.div>
      </div>
    </div>
  );
};


export default Specializations;
