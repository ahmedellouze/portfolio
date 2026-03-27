import { motion } from "framer-motion";

interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Langages de programmation",
    icon: "💻",
    skills: ["PHP 8.1/8.3", "HTML5", "JavaScript", "TypeScript", "CSS3"]
  },
  {
    category: "Frameworks & Bibliothèques",
    icon: "🧱",
    skills: ["Symfony", "Doctrine", "API Platform", "React", "Next.js", "Zend Framework", "PrestaShop", "WordPress", "jQuery"]
  },
  {
    category: "Intelligence Artificielle / NLP",
    icon: "🤖",
    skills: ["OpenAI / GPT-4", "Analyse sémantique", "Extraction de KPIs", "Catégorisation de sentiments"]
  },
  {
    category: "DevOps & Intégration continue",
    icon: "⚙️",
    skills: ["Docker", "GitLab CI", "Jenkins", "Keycloak", "Git"]
  },
  {
    category: "Bases de données & Messagerie",
    icon: "🗄️",
    skills: ["MySQL", "Redis", "RabbitMQ"]
  },
  {
    category: "Outils & Autres",
    icon: "🛠️",
    skills: ["PhpSpreadsheet", "Dompdf", "REST APIs", "XML", "JSON"]
  }
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-24 px-6 max-w-6xl mx-auto bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
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
        Compétences Techniques
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
              <h3 className="text-xl font-bold text-gray-200">{category.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition cursor-default"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Languages Section */}
      <motion.div
        className="mt-16 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          Langues
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/20 transition">
            <span className="text-lg text-gray-200 font-medium">Français</span>
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm rounded-full font-semibold shadow-lg shadow-cyan-500/25">
              Professionnelle
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/20 transition">
            <span className="text-lg text-gray-200 font-medium">Anglais</span>
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm rounded-full font-semibold shadow-lg shadow-cyan-500/25">
              Débutant
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
