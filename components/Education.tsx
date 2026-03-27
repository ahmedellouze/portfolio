import { motion } from "framer-motion";

interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

const educations: Education[] = [
  {
    institution: "Institut Supérieur d'Informatique et Multimédia de Sfax",
    degree: "Maîtrise en informatique système et Multimédia",
    period: "2003 - 2008"
  },
  {
    institution: "Lycée 9 Avril - Sfax",
    degree: "Diplôme de Baccaloréat",
    period: "2003",
    details: "Section : Technique"
  }
];

export default function Education() {
  return (
    <motion.section
      id="education"
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
        Formation
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="ml-5 flex-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">{edu.institution}</h3>
                <p className="text-sm text-cyan-400 mt-1 font-medium">{edu.period}</p>
              </div>
            </div>
            <p className="text-lg font-semibold text-gray-200 mb-2">{edu.degree}</p>
            {edu.details && (
              <p className="text-gray-400">{edu.details}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
