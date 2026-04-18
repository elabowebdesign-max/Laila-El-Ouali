import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity, ShieldCheck, HeartPulse, ChevronRight, Phone, ArrowRight,
  Heart, MapPin, Zap, Microscope, ClipboardCheck, Award, Clock, Star,
  CheckCircle2, Waves, Mail, Plus, Monitor, Shield, Heart as HeartIcon,
  Search, Camera, Navigation, Accessibility,
  ExternalLink, Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const testimonials = [
  {
    text: "Cardiologue très compétente , professionnelle , à l’écoute et surtout rassurante! Ma maman est bien suivie chez elle et je la recommande vivement",
    name: "laila Sd",
    url: "https://www.google.com/maps/contrib/105272573879067073494/place/ChIJf4JbSE-3sw0R9kTCj-16HVk/@39.6352626,-3.6213118,5z/data=!4m6!1m5!8m4!1e1!2s105272573879067073494!3m1!1e1?hl=fr&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    text: "La meilleure des cardiologues que j’ai eu la chance de connaître . Professionnalisme et humanisme",
    name: "Natacha",
    url: "https://www.google.com/maps/contrib/113273902210636451134/place/ChIJf4JbSE-3sw0R9kTCj-16HVk/@30.417888,-9.5765238,17z/data=!4m6!1m5!8m4!1e1!2s113273902210636451134!3m1!1e1?hl=fr&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    text: " الصراحة  وبدون مجاملة طبيبة قمة في الأخلاق و الاحترافية. تعطي الوقت الكافي والأذن الصاغية لكل مريض. تجربتي معها كانت جيدة فبفضل الله وبفضل هذه الطبيبة والدتي تحسنت حالتها والحمد لله",
    name: "Fatima Oubba",
    url: "https://www.google.com/maps/contrib/105887939612716506889/place/ChIJf4JbSE-3sw0R9kTCj-16HVk/@30.417888,-9.5765238,17z/data=!4m6!1m5!8m4!1e1!2s105887939612716506889!3m1!1e1?hl=fr&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    text: " El ouali est une praticienne compétente elle n’est matérialiste je la recommande pour les personne qui veulent faire un contrôle régulier 👍👍👍👍👍 …",
    name: "Belaid Boubrik",
    url: "https://www.google.com/maps/contrib/106176774950384037436/place/ChIJf4JbSE-3sw0R9kTCj-16HVk/@30.417888,-9.5765238,17z/data=!4m6!1m5!8m4!1e1!2s106176774950384037436!3m1!1e1?hl=fr&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    text: " الدكتورة ليلى الوالي طبيبة في المستوى دات تجربة كبيرة نظرا للتعامل وحسن الاستقبال الدي تعطيه للمريض تمتاز بحسن الخلق والتواصل بينها وبين المريض حتى يتسنى لها الاخير الوصول الى المبتغى",
    name: "Mahdi Morsse",
    url: "https://www.google.com/maps/contrib/114620962405999411134/place/ChIJf4JbSE-3sw0R9kTCj-16HVk/@30.417888,-9.5765238,17z/data=!4m6!1m5!8m4!1e1!2s114620962405999411134!3m1!1e1?hl=fr&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
  }
];

const cabinetImages = [
  { url: "/img1.jpeg", title: "Accueil & Réception", desc: "Un accueil chaleureux et professionnel pour votre confort dès votre arrivée." },
  { url: "/img2.jpeg", title: "Espace d'Attente", desc: "Un environnement calme et apaisant conçu pour réduire votre stress." },
  { url: "/img3.jpeg", title: "Bureau du Docteur", desc: "Un espace de consultation moderne équipé pour une expertise cardiologique complète." },
  { url: "/img4.jpeg", title: "Matériel Échographie", desc: "Technologie de pointe pour des diagnostics précis." },
  { url: "/img5.jpeg", title: "Plateau Technique", desc: "Équipements spécialisés pour le suivi cardiaque." },
  { url: "/img6.jpeg", title: "Espace Diagnostic", desc: "Confort et technologie au service de votre cœur." }
];

const ECGWaveform = () => (
  <svg viewBox="0 0 400 100" className="w-full h-full text-primary opacity-30">
    <motion.path
      d="M 0 50 L 50 50 L 60 40 L 70 60 L 80 50 L 130 50 L 140 10 L 150 90 L 160 50 L 210 50 L 220 40 L 230 60 L 240 50 L 400 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 0.5
      }}
    />
  </svg>
);

const HeartBeatCircle = () => (
  <div className="relative">
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="absolute inset-0 bg-primary/20 rounded-full"
    />
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      className="absolute inset-x-0 inset-y-0 -m-4 bg-primary/10 rounded-full"
    />
    <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary/10">
      <HeartIcon className="w-8 h-8 text-primary fill-primary/10 animate-pulse" />
    </div>
  </div>
);

const Home7 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#fcfdfe] text-slate-900 font-sans overflow-x-hidden selection:bg-primary selection:text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── ANIMATED CARDIOLOGY HERO ── */}
      <section className="relative flex items-center pt-24 pb-16 overflow-hidden bg-white min-h-[90vh]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2">
            <ECGWaveform />
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 opacity-40" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
          <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#377876 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div className="lg:col-span-7 text-center lg:text-left" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-6 justify-center lg:justify-start">
              <HeartBeatCircle />
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/10 mb-1">
                  <Star className="w-3 h-3 text-primary fill-current" />
                  <span className="text-primary font-black tracking-widest text-[9px] uppercase">Service de Prestige</span>
                </div>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest leading-none">Cardiologie Interventionnelle</p>
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-4xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
              Chaque <span className="text-primary italic">Battement</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary">Mérite l'Excellence.</span> <br />
              Votre vie, notre mission.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base lg:text-lg text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Découvrez une approche médicale où la <span className="text-primary font-bold">précision diagnostique</span> rencontre l'empathie, au sein d'un cabinet équipé des dernières innovations technologiques.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Link to="/contact" className="group relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg overflow-hidden transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-primary/40">
                <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-3"><Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />+212 5 28 23 70 46</span>
              </Link>
        
            </motion.div>
          </motion.div>
          <motion.div className="lg:col-span-5 relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className="relative z-10 w-full aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white ring-1 ring-slate-100">
              <img src="/profil.png" alt="Consultation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="absolute -bottom-5 left-4 md:-bottom-10 md:-left-10 z-20 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/50 w-36 md:w-56"
            >
              <div className="flex items-center gap-2 md:gap-2.5 mb-2 md:mb-3">
                <div className="w-7 h-7 md:w-9 md:h-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Activity className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-[8px] md:text-[9px] font-black tracking-widest uppercase text-slate-400">Analyse Pulsation</span>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <div className="w-full h-1 md:h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div animate={{ width: ["10%", "90%", "10%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-primary rounded-full"></motion.div>
                </div>
                <div className="w-3/4 h-1 md:h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div animate={{ width: ["80%", "20%", "80%"] }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-secondary rounded-full"></motion.div>
                </div>
              </div>
              <p className="mt-2 md:mt-3 text-[9px] md:text-[10px] font-black text-slate-900 uppercase">Synchronisation Patient</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BENTO DIAGNOSTIC SECTION (REDESIGNED COMPACT) ── */}
      <section className="py-16 bg-[#fcfdfe]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-xl">
              <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Plateau Technique d'Excellence</span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-[0.95]">Examens & <br /><span className="text-primary italic">Diagnostics.</span></h2>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-4 px-5 py-2.5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><ShieldCheck className="w-5 h-5" /></div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-tight">Équipements <br />Certifiés 2026</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[180px] gap-4">

            {/* MAIN CARD: IMAGING (Span 8 cols, 2 rows) */}
            <motion.div whileHover={{ y: -5 }} className="md:col-span-8 row-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-lg">
              <img src="/Imagerie cardiaque.png" alt="Imagerie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <div className="flex gap-2">
                  <span className="bg-primary text-[8px] font-black px-3 py-1.5 rounded-full text-white uppercase tracking-widest">Haute Précision</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white max-w-sm text-left">
                <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-3 text-white uppercase tracking-tighter leading-none">Imagerie Cardiaque <br /> Avancée</h3>
                <p className="text-slate-200 font-medium text-[10px] md:text-[12px] leading-relaxed mb-4">Scanner coronaire et IRM cardiaque pour une étude morphologique précise.</p>
                <div className="flex gap-3">
                  <div className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Scanner</div>
                  <div className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[8px] md:text-[9px] font-black uppercase tracking-widest">IRM</div>
                </div>
              </div>
            </motion.div>

            {/* SECONDARY CARD: RHYTHMOLOGY (Span 4 cols, 2 rows) */}
            <motion.div whileHover={{ y: -5 }} className="md:col-span-4 md:row-span-2 bg-primary p-8 rounded-[2.5rem] flex flex-col shadow-md group relative overflow-hidden">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 border border-white/20 shadow-inner"><HeartPulse className="w-6 h-6" /></div>
              <h3 className="text-xl font-black mb-3 text-white leading-tight uppercase tracking-tighter">Rythmologie & <br />Tension</h3>
              <p className="text-white/80 font-medium leading-relaxed mb-6 flex-grow text-xs italic">Surveillance continue des troubles du rythme.</p>
              <ul className="space-y-3">
                {[
                  { title: "Holter ECG 24h", icon: <Clock className="w-3.5 h-3.5" /> },
                  { title: "MAPA (Tension)", icon: <Zap className="w-3.5 h-3.5" /> },
                  { title: "Pacemaker", icon: <Activity className="w-3.5 h-3.5" /> }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-[10px] font-black text-white uppercase tracking-widest">
                    <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">{item.icon}</div>
                    {item.title}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* TERTIARY CARD: STRESS TEST (Span 4 cols, 1 row) */}
            <motion.div whileHover={{ y: -5 }} className="md:col-span-4 bg-white p-6 rounded-[2.5rem] shadow-md border border-slate-50 flex items-center gap-4 group">
              <div className="w-12 h-12 shrink-0 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all"><Activity className="w-6 h-6" /></div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tighter">Épreuve d'Effort</h4>
                <p className="text-[9px] text-slate-400 font-bold uppercase mt-0.5 tracking-widest">Analyse Dynamique</p>
              </div>
            </motion.div>

            {/* QUATERNARY CARD: ECHOGRAPHY (Span 4 cols, 1 row) */}
            <motion.div whileHover={{ y: -5 }} className="md:col-span-4 bg-slate-900 p-6 rounded-[2.5rem] shadow-md flex items-center gap-4 group">
              <div className="w-12 h-12 shrink-0 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-slate-900 transition-all"><Waves className="w-6 h-6" /></div>
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-tighter">Écho-Doppler</h4>
                <p className="text-[9px] text-white/40 font-bold uppercase mt-0.5 tracking-widest">Cardiaque</p>
              </div>
            </motion.div>

            {/* QUINARY CARD: CONSULTATION (Span 4 cols, 1 row) */}
            <motion.div whileHover={{ y: -5 }} className="md:col-span-4 bg-secondary p-6 rounded-[2.5rem] shadow-md flex items-center gap-4 group">
              <div className="w-12 h-12 shrink-0 bg-white/20 rounded-xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-secondary transition-all"><ClipboardCheck className="w-6 h-6" /></div>
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-tighter">Bilan Santé</h4>
                <p className="text-[9px] text-white/60 font-bold uppercase mt-0.5 tracking-widest">Prévention</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CASES CLINICS (MEDICAL MONITOR DESIGN) ── */}
      <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
            <div className="max-w-xl">
              <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Résultats Cliniques</span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-4 italic">Monitorage de <br /> <span className="text-primary">Performance.</span></h2>
            </div>
            <div className="flex gap-4">
              <div className="h-14 px-6 bg-slate-900 rounded-2xl flex items-center gap-4 shadow-xl">
                <Activity className="w-5 h-5 text-primary animate-pulse" />
                <div className="text-left leading-none">
                  <p className="text-[10px] text-white font-black uppercase tracking-widest mb-1">Status Patient</p>
                  <p className="text-[12px] text-primary font-bold">Stable / Post-Op</p>
                </div>
              </div>
            </div>
          </div>

          {/* THE MEDICAL MONITOR INTERFACE */}
          <div className="bg-white rounded-[4rem] border-[12px] border-slate-100 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left sidebar: Data Points */}
              <div className="lg:col-span-3 border-r border-slate-100 p-8 space-y-8 bg-slate-50/50">
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Diagnostic Feed</p>
                  {[
                    { label: "Coronarographie", time: "09:12 AM", status: "Done" },
                    { label: "Dilatation ATC", time: "09:45 AM", status: "Success" },
                    { label: "Normalisation", time: "10:05 AM", status: "Active" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white rounded-[1.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                      <div className={`absolute left-0 top-0 h-full w-1 ${i === 1 ? 'bg-primary' : 'bg-secondary'}`}></div>
                      <p className="text-[11px] font-black text-slate-900 uppercase mb-1">{item.label}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] text-slate-400 font-bold tracking-widest underline decoration-primary/30 font-mono">{item.time}</span>
                        <span className="text-[8px] font-black text-primary px-2 py-0.5 bg-primary/10 rounded-full">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Live Flow Rate</p>
                  </div>
                  <div className="h-20 flex items-end gap-1">
                    {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                      <div key={i} className="flex-grow bg-primary/20 rounded-t-sm transition-all duration-1000 group-hover:bg-primary" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main: Comparison View */}
              <div className="lg:col-span-9 p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Before */}
                  <div className="flex-1 space-y-4">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-xl border-4 border-slate-50 group/img">
                      <div className="absolute top-6 left-6 z-10 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-[9px] font-black tracking-widest">VUE PRE-OP</div>
                      <img src="/avant.gif" alt="Before" className="w-full aspect-[4/3] object-cover group-hover/img:scale-105 transition-transform duration-700" />
                    </div>
                    {/* Title placed below the GIF */}
                    <div className="flex flex-col gap-2 p-5 bg-red-600/5 rounded-[1.5rem] border border-red-100">
                      <p className="text-[12px] text-red-600 font-black uppercase tracking-widest leading-none">Thrombose Coronaire Droite</p>
                      <p className="text-[10px] text-red-900/60 font-bold uppercase tracking-widest">Obstruction Totale détectée</p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="flex-1 space-y-4">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-xl border-4 border-primary/10 group/img">
                      <div className="absolute top-6 left-6 z-10 bg-primary/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-[9px] font-black tracking-widest">VUE POST-OP</div>
                      <img src="/Apres.gif" alt="After" className="w-full aspect-[4/3] object-cover group-hover/img:scale-105 transition-transform duration-700" />
                    </div>
                    {/* Title placed below the GIF */}
                    <div className="flex flex-col gap-2 p-5 bg-primary/5 rounded-[1.5rem] border border-primary/10">
                      <p className="text-[12px] text-primary font-black uppercase tracking-widest leading-none">Dilatation ATC Réussie</p>
                      <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">Reprise du flux à 100%</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12"><HeartPulse className="w-32 h-32 text-white" /></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                      <h4 className="text-2xl font-black text-white italic tracking-tighter mb-2">Résultat Final de l'Intervention</h4>
                      <p className="text-slate-400 text-xs font-medium max-w-lg leading-relaxed lowercase">Dilatation réalisée avec succès. Pose d'un stent de dernière génération. Circulation sanguine rétablie sans complications.</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-secondary font-black text-4xl mb-1 tabular-nums">100%</p>
                        <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">Flux Sanguin</p>
                      </div>
                      <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT MINI-BIO ENRICHED ── */}
      <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <motion.div className="lg:w-1/2 relative flex justify-center" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary/10 rounded-full blur-[60px] opacity-50"></div>
              <img src="/droperation.png" alt="Dr Laila" className="rounded-[4rem] w-full aspect-[4/5] object-cover relative z-10 shadow-2xl" />
              <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 z-20 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl border-8 border-white">
                <p className="text-secondary font-black text-3xl leading-none italic mb-1">10+</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Années de Pratique</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest leading-tight">Lauréate Faculté <br />de Médecine Fès</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:w-1/2 text-left" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 text-secondary font-bold tracking-widest text-[11px] uppercase mb-6"><span className="w-12 h-1 bg-secondary rounded-full"></span> À propos du Docteur</div>
            <h2 className="text-4xl md:text-4xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">Une Expertise <span className="text-primary italic">Pluridisciplinaire.</span></h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">Le Docteur Laila El Ouali allie perfectionnement académique et expérience clinique de terrain pour offrir une prise en charge globale, allant de la consultation au suivi expert.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shadow-sm"><Award className="w-6 h-6" /></div>
                <div><h4 className="font-black text-sm text-slate-900 uppercase">DIU Bordeaux</h4><p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Échocardiographie</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm"><Microscope className="w-6 h-6" /></div>
                <div><h4 className="font-black text-sm text-slate-900 uppercase">DIU Paris</h4><p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Imagerie Multimodale</p></div>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">Découvrir son parcours <ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── CABINET GALLERY (3-IMAGE MINIMALIST) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="text-left">
              <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-3 block">Perspective Cabinet</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Confort & Technologie.</h2>
            </div>
            <p className="text-slate-400 text-xs font-medium max-w-xs md:text-right">Un cadre apaisant conçu pour votre bien-être cardiaque.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* 1. Main Image: Bureau du Docteur */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 relative h-[300px] md:h-[450px] rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-xl"
            >
              <img src="/img1.jpeg" alt="Bureau du Docteur" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-2 italic">Ton professionnel & rassurant</h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed max-w-md">Un espace d'échange confidentiel et serein, dédié à l'écoute et au diagnostic précis.</p>
              </div>
            </motion.div>

            {/* Side Images Stack */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {/* 2. Espace Accueil */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative h-[213px] rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-lg"
              >
                <img src="/img2.jpeg" alt="Espace Accueil" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-black text-sm uppercase tracking-tighter mb-1">Espace Accueil</h3>
                  <p className="text-slate-300 text-[10px] font-medium leading-tight">Un accueil bienveillant pour votre confort dès votre arrivée.</p>
                </div>
              </motion.div>

              {/* 3. Plateau Technique */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative h-[213px] rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-lg"
              >
                <img src="/img3.jpeg" alt="Plateau Technique" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-black text-sm uppercase tracking-tighter mb-1">Plateau Technique</h3>
                  <p className="text-slate-300 text-[10px] font-medium leading-tight">Équipements de pointe pour un suivi cardiaque de haute précision.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SLIDER (PREMIUM GOLD COMPACT) ── */}
      <section className="py-12 bg-secondary overflow-hidden relative">
        {/* ECG Animation Background for Testimonials */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg viewBox="0 0 1000 200" className="w-[200%] h-full text-white/40">
            <motion.path
              d="M 0 100 L 100 100 L 120 80 L 140 120 L 160 100 L 250 100 L 270 20 L 290 180 L 310 100 L 400 100 L 420 80 L 440 120 L 460 100 L 550 100 L 570 20 L 590 180 L 610 100 L 700 100 L 720 80 L 740 120 L 760 100 L 850 100 L 870 20 L 890 180 L 910 100 L 1000 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ x: [0, -500], pathLength: 1 }}
              transition={{
                x: { duration: 15, repeat: Infinity, ease: "linear" },
                pathLength: { duration: 2, ease: "easeInOut" }
              }}
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-white/80 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Paroles de Patients</span>
            <h2 className="text-3xl font-black text-white mb-12 tracking-tighter">Votre confiance est notre récompense.</h2>
          </motion.div>

          <div className="relative min-h-[280px] h-auto mb-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.6 }}
                className="w-full flex flex-col items-center justify-center p-4 text-center"
              >
                <a
                  href={testimonials[currentTestimonial].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-8 py-8 rounded-[3rem] shadow-2xl relative group/card hover:-translate-y-2 transition-transform duration-500 cursor-pointer block"
                >
                  <HeartPulse className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-secondary bg-white p-2 rounded-full border-4 border-slate-50 shadow-lg group-hover/card:scale-110 transition-transform" />

                  <p className="text-xl md:text-xl text-slate-900 font-bold italic leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div className="flex flex-col items-center mb-6">
                    <div className="w-8 h-1 bg-secondary mb-3 rounded-full"></div>
                    <p className="font-black text-slate-900 text-m uppercase tracking-widest">{testimonials[currentTestimonial].name}</p>
                    <p className="text-secondary/40 font-black text-[8px] uppercase tracking-[0.3em] mt-1">Avis Patient Vérifié</p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-secondary font-black text-[9px] uppercase tracking-widest border border-secondary/20 px-4 py-2 rounded-full group-hover/card:bg-secondary group-hover/card:text-white transition-all">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
                    Lire l'avis original
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-10 mb-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-8 h-1 rounded-full transition-all duration-500 ${currentTestimonial === i ? 'bg-white w-12' : 'bg-white/30'}`} />
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <a
              href="https://www.google.com/maps/place/Dr+EL+OUALI+Laila/@30.417888,-9.5790987,17z/data=!4m8!3m7!1s0xdb3b74f485b827f:0x591d7aed8fc244f6!8m2!3d30.417888!4d-9.5765238!9m1!1b1!16s%2Fg%2F11k4nxhmv8"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-secondary transition-all group"
            >
              Voir les avis réels sur Google Maps <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── NEW UNIQUE LOCATION & CONTACT SECTION (LUXURY MODERN COMPACT) ── */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-5/12 flex flex-col pt-4">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="inline-block px-3 py-0.5 bg-primary/10 text-primary text-[9px] font-black uppercase tracking-[0.2em] rounded-full mb-4">Localisation & Accès</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-5">
                  Où nous <span className="text-primary italic">Trouver ?</span>
                </h2>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                  Situé au cœur d'Agadir, notre cabinet vous accueille dans un cadre moderne et serein.
                </p>
                {/* Vertical Interactive Hours Timeline */}
                <div className="space-y-4 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center z-10 group-hover:bg-primary transition-colors duration-300">
                      <Clock className="w-4 h-4 text-primary group-hover:text-white" />
                    </div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Lundi — Jeudi</h4>
                    <p className="text-slate-500 font-bold text-sm">08:30 — 16:30 <span className="text-[10px] ml-2 font-black text-primary/60 uppercase tracking-tighter">(Continu)</span></p>
                  </div>

                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center z-10 group-hover:border-primary transition-colors duration-300">
                      <Clock className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                    </div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Vendredi</h4>
                    <div className="flex flex-col gap-1">
                      <p className="text-slate-500 font-bold text-sm">Matin : 08:30 — 12:00</p>
                      <p className="text-slate-500 font-bold text-sm">Après-midi : 15:00 — 18:00</p>
                    </div>
                  </div>

                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center z-10 group-hover:border-primary transition-colors duration-300">
                      <Star className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                    </div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Samedi</h4>
                    <p className="text-slate-500 font-bold text-sm">09:00 — 13:00</p>
                  </div>

                  <div className="relative pl-12 group opacity-50">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center z-10">
                      <div className="w-4 h-0.5 bg-slate-400"></div>
                    </div>
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Dimanche</h4>
                    <p className="text-slate-400 font-bold text-sm italic">Fermé</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: THE MAP VISION + CONTACTS BELOW */}
            <div className="lg:w-7/12 flex flex-col gap-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-full min-h-[300px] rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white ring-1 ring-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.1378124037805!2d-9.579098699999999!3d30.417887999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b74f485b827f%3A0x591d7aed8fc244f6!2sDr%20EL%20OUALI%20Laila!5e0!3m2!1sfr!2sma!4v1712882370000!5m2!1sfr!2sma"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="absolute top-4 left-4 right-4 md:right-auto md:w-64 bg-white/90 backdrop-blur-xl p-5 rounded-[2rem] shadow-xl border border-white/50">
                  <h4 className="text-sm font-black text-slate-900 tracking-tighter mb-1">Dr EL OUALI Laila</h4>
                  <p className="text-[10px] text-slate-500 font-bold leading-tight">Angle Av. El Mouquaouama & Rue Kadi Ayad, Agadir</p>
                </div>

                <div className="absolute bottom-4 right-4">
                  <a href="https://www.google.com/maps/place/Dr+EL+OUALI+Laila/@30.417888,-9.5790987,17z/data=!3m1!4b1!4m6!3m5!1s0xdb3b74f485b827f:0x591d7aed8fc244f6!8m2!3d30.417888!4d-9.5765238!16s%2Fg%2F11k4nxhmv8?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-black text-[10px] hover:bg-slate-900 transition-all shadow-xl">
                    <Navigation className="w-4 h-4" /> ITINÉRAIRE
                  </a>
                </div>
              </motion.div>

              {/* Contacts & Socials below the map */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8 grid grid-cols-2 gap-3">
                  <a href="tel:+212528237046" className="group p-4 bg-primary/5 rounded-[1.5rem] border border-primary/10 hover:bg-primary transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[7px] font-black text-primary uppercase tracking-[0.2em] group-hover:text-white/70">Fixe Cabinet</p>
                        <p className="text-xs font-black text-slate-900 group-hover:text-white">05 28 23 70 46</p>
                      </div>
                    </div>
                  </a>

                  <a href="https://wa.me/212666609028" target="_blank" className="group p-4 bg-secondary/5 rounded-[1.5rem] border border-secondary/10 hover:bg-secondary transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-white/20 group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                      </div>
                      <div>
                        <p className="text-[7px] font-black text-secondary uppercase tracking-[0.2em] group-hover:text-white/70">WhatsApp / Pro</p>
                        <p className="text-xs font-black text-slate-900 group-hover:text-white">06 66 60 90 28</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="md:col-span-4 flex items-center justify-center gap-4 bg-slate-50 border border-slate-100 rounded-[1.5rem] p-3">
                  <a href="https://web.facebook.com/p/Cabinet-de-cardiologie-Dr-El-Ouali-Laila-100094622019526/" target="_blank" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 shadow-lg shadow-blue-600/20 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
                  </a>
                  <a href="https://www.instagram.com/dr_laila_elouali/" target="_blank" className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 shadow-lg shadow-pink-600/20 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTAs ── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black mb-10 tracking-tighter">Votre santé cardiaque est notre <span className="text-primary italic">priorité absolue.</span></h2>

        </div>
      </section>

    </div>
  );
};

export default Home7;
