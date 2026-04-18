import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, UserCheck, ShieldCheck, Monitor, HeartPulse, Shield, Stethoscope, Zap, Activity } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full bg-[#fcfdfe] text-slate-900 font-sans overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── LUXURY LIGHT HERO HEADER WITH ECG BACKGROUND ── */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-slate-100">
        {/* ECG Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/ecg.jpg" alt="ECG Background" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/40 to-primary/5"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>

        {/* Subtle ECG Move Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200/50 -translate-y-1/2 overflow-hidden hidden md:block">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-1/4 h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-slate-100 shadow-xl mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-slate-900 font-black tracking-[0.3em] text-[10px] uppercase">Excellence Médicale</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tighter mb-8 italic"
          >
            L'Expertise au <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Cœur de l'Humain.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Découvrez le parcours d'une cardiologue dévouée à l'innovation diagnostique et au bien-être de chaque patient.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-24 relative z-20 pb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* ── PROFESSIONAL IDENTITY CARD ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 sticky top-24"
          >
            <div className="bg-white rounded-[4rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative rounded-[3rem] overflow-hidden mb-10 shadow-2xl aspect-[4/5]">
                <img
                  src="/Médecin.png"
                  alt="Dr Laila El Ouali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-black text-2xl tracking-tighter leading-tight">Dr Laila <br /> El Ouali</p>
                  <p className="text-secondary font-black text-[10px] uppercase tracking-widest mt-2">Cardiologue Interventionnelle</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <Award className="w-5 h-5" />, text: "Lauréate Faculté de Médecine de Fès" },
                  { icon: <UserCheck className="w-5 h-5" />, text: "Ancien médecin CHP Fès & Taroudant" },
                  { icon: <BookOpen className="w-5 h-5" />, text: "DIU Échocardiographie - Bordeaux" },
                  { icon: <Monitor className="w-5 h-5" />, text: "DIU Imagerie Multimodale - Paris" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all shadow-sm">
                      {item.icon}
                    </div>
                    <p className="text-[13px] font-black text-slate-900 group-hover/item:text-primary transition-colors">{item.text}</p>
                  </div>
                ))}
              </div>


            </div>
          </motion.div>

          {/* ── BIOGRAPHY & TIMELINE ── */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Ma Vision</span>
              <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter leading-none italic">Un Diagnostic <br /> sans Compromis.</h3>
              <p className="text-slate-600 leading-relaxed mb-16 text-lg font-medium italic">
                "Ma mission est d'allier l'excellence technologique de l'imagerie moderne à une approche profondément humaine. Chaque patient mérite une écoute attentive et un diagnostic ultra-précis pour protéger ce qu'il a de plus précieux : son cœur."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                {[
                  { title: "Écoute Active", desc: "Attention particulière accordée à votre vécu.", icon: <Heart className="w-6 h-6" /> },
                  { title: "Humanité", desc: "Un accompagnement bienveillant au quotidien.", icon: <Shield className="w-6 h-6" /> },
                  { title: "Rigueur", desc: "Mise à jour constante des protocoles médicaux.", icon: <Zap className="w-6 h-6" /> }
                ].map((val, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">{val.icon}</div>
                    <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tighter text-sm">{val.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-bold uppercase tracking-widest">{val.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic">Mon Parcours <span className="text-primary">Professionnel.</span></h3>
              <div className="space-y-12 relative border-l-4 border-slate-100 pl-10 ml-6">
                {[
                  {
                    cat: "Formation",
                    title: "Faculté de Médecine de Fès",
                    desc: "Spécialisation en cardiologie avec félicitations du jury.",
                    color: "bg-primary"
                  },
                  {
                    cat: "Expérience",
                    title: "Hôpitaux Universitaires",
                    desc: "Postes de praticien au CHP de Fès et Taroudant, gestion des cas complexes et urgences cardiaques.",
                    color: "bg-secondary"
                  },
                  {
                    cat: "Spécialisation",
                    title: "Expertise Européenne",
                    desc: "Perfectionnement en Imagerie Multimodale (Scanner/IRM) et Échocardiographie avancée (Bordeaux/Paris).",
                    color: "bg-slate-900"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className={`absolute -left-[54px] top-0 w-8 h-8 rounded-full border-4 border-white shadow-lg ${item.color}`}></div>
                    <span className="text-[10px] font-black text-slate-400 mb-2 block uppercase tracking-widest">{item.cat}</span>
                    <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tighter">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
