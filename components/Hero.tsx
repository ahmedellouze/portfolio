import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-[75vh] flex flex-col justify-center items-center px-6 relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background - Aurora Gradient Overlay - Modern 2024/2025 Style */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-violet-950/90 via-fuchsia-950/85 to-slate-950/90"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
      {/* Aurora Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-[128px] animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-violet-500/15 rounded-full blur-[128px] animate-pulse z-0" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-white">
      <motion.div
        className="text-center max-w-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Ahmed Ellouze
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mb-6 font-semibold text-cyan-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Développeur Full Stack PHP Sénior
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition cursor-default">
            14+ ans d'expérience
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition cursor-default">
            Expert Symfony & API Platform
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition cursor-default">
            Architecte Back-end & IA
          </span>
        </motion.div>
        
        <motion.p
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Concepteur de solutions web robustes, performantes et sécurisées. 
          Je pilote des projets complexes — e-commerce, conformité réglementaire, 
          interconnexion API/XML — en intégrant les dernières avancées IA pour 
          optimiser l'analyse de données et l'expérience utilisateur.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="/Ellouze-AHMED-27-03-26.pdf"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition transform hover:scale-105 shadow-lg shadow-cyan-500/25 backdrop-blur-sm"
          >
            Télécharger mon CV
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 hover:border-white/50 transition transform hover:scale-105"
          >
            Me Contacter
          </a>
        </motion.div>
         </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.section>
  );
}
