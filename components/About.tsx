import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        À propos de moi
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Développeur Full Stack PHP Sénior avec plus de 14 ans d'expérience dans le développement web. 
            Expert en Symfony et API Platform, je suis spécialisé dans l'architecture back-end et l'intégration 
            de l'intelligence artificielle (GPT-4/NLP) dans les applications web.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Passionné par la conception de solutions web robustes, performantes et sécurisées, je pilote des 
            projets complexes dans divers domaines : e-commerce, conformité réglementaire, interconnexion 
            API/XML. J'intègre les dernières avancées en IA pour optimiser l'analyse de données et l'expérience utilisateur.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            À la recherche de défis technologiques à fort impact, je suis toujours prêt à relever de nouveaux 
            challenges et à contribuer à des projets innovants.
          </p>
        </motion.div>
        
        <motion.div
          className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            Points forts
          </h3>
          <ul className="space-y-4">
            {[
              "Architecture back-end robuste et scalable",
              "Intégration IA (GPT-4) pour l'analyse de données",
              "Optimisation des performances (Redis, RabbitMQ)",
              "Sécurisation avancée (Keycloak, JWT)",
              "Gestion de projets complexes et équipes",
              "Expertise e-commerce et API/XML"
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-300">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
