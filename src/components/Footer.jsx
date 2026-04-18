import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Dr Laila El Ouali Logo" className="w-12 h-auto object-contain bg-white/10 rounded-lg p-1" />
              <div>
                <h2 className="text-xl font-bold leading-tight">Dr Laila El Ouali</h2>
                <p className="text-xs text-secondary tracking-widest uppercase mt-0.5">Cardiologue</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Votre cardiologue de confiance à Agadir. Expertise en imagerie cardiaque multimodale pour un diagnostic précis et un suivi personnalisé.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Liens Rapides</h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'À propos du Dr Laila', path: '/about' },
                { name: 'Nos Spécialisations', path: '/specializations' },
                { name: 'Conseils & Articles', path: '/articles' },
                { name: 'Prendre Rendez-vous', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-secondary flex items-center text-sm transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Coordonnées</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-5 h-5 mr-3 text-secondary shrink-0" />
                <span>Résidence Yasmine, Agadir</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="w-5 h-5 mr-3 text-secondary shrink-0" />
                <span>+212 5 28 23 70 46</span>
              </li>
            </ul>
          </div>

          {/* Heures d'ouverture */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Horaires</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between items-center">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-secondary" /> Lun - Jeu:</span>
                <span>08:30 - 16:30</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-secondary" /> Vendredi:</span>
                <span>08:30 - 12:00<br />15:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-secondary" /> Samedi:</span>
                <span>09:00 - 13:00</span>
              </li>
              <li className="flex justify-between items-center text-gray-500">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Dimanche:</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dr Laila El Ouali. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Fait avec soin pour le cabinet médical.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer