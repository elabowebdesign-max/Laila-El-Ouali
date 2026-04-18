import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Prendre <span className="text-primary">Contact</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Nous sommes à votre disposition pour toute question ou pour programmer une consultation. N'hésitez pas à nous joindre.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Informations et Horaires */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Résumé contact */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Coordonnées</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4 text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1">Adresse</span>
                    <span className="text-gray-600">Bloc A, 1er Etage, N°8, Angle Av. El Mouquaouama &amp; Rue Kadi Ayad, Résidence Yasmine - AGADIR</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-xl mr-4 text-secondary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 mb-1">Téléphones</span>
                    <div className="flex flex-col">
                      <a href="tel:+212528237046" className="text-primary hover:underline font-medium text-lg">+212 5 28 23 70 46</a>
                      <a href="tel:+212666609028" className="text-primary hover:underline font-medium text-lg">+212 6 66 60 90 28</a>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors flex items-center shadow-sm"
                >
                  RDV sur Nabady
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="#" 
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors flex items-center"
                >
                  RDV sur Med.ma
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-primary mr-3" />
                Heures d'ouverture
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="font-medium text-gray-700">Lundi - Jeudi</span>
                  <span className="text-gray-600 bg-gray-50 px-3 py-1 rounded-md">08:30 – 16:30</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="font-medium text-gray-700">Vendredi</span>
                  <div className="text-right">
                    <span className="block text-gray-600 bg-gray-50 px-3 py-1 rounded-md mb-1">08:30 – 12:00</span>
                    <span className="block text-gray-600 bg-gray-50 px-3 py-1 rounded-md">15:00 – 18:00</span>
                  </div>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Samedi</span>
                  <span className="text-gray-600 bg-gray-50 px-3 py-1 rounded-md">09:00 – 13:00</span>
                </li>
                <li className="flex justify-between items-center py-2 mt-2 bg-red-50 px-4 rounded-lg text-red-600 font-medium border border-red-100">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Formulaire & Carte */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Formulaire */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50" placeholder="Votre nom" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50" placeholder="Votre numéro" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50 resize-none" placeholder="Comment pouvons-nous vous aider ?" required></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-md">
                  Envoyer la demande
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Google Maps intégrée */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-[250px] overflow-hidden">
              {/* Note : L'URL embed réelle nécessiterait l'adresse exacte d'Agadir, ici on utilise un iframe générique d'Agadir */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d-9.6000!3d30.4200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI1JzEyLjAiTiA5wrAzNicwMC4wIlc!5e0!3m2!1sfr!2sma!4v1600000000000!5m2!1sfr!2sma" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.75rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte du cabinet"
              ></iframe>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
