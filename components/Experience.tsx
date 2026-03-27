import { motion } from "framer-motion";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  projects?: { name: string; description: string; technologies: string[] }[];
}

const experiences: Experience[] = [
  {
    company: "Sifast",
    position: "Développeur Web Senior – Symfony – IA – API Platform",
    period: "2021 - PRÉSENT",
    description: [
      "Conception de l'architecture back-end avec Symfony 6.4 & API Platform",
      "Intégration de l'IA GPT-4 pour l'analyse intelligente de documents PDF",
      "Création de prompts dynamiques adaptés au contexte réglementaire",
      "Optimisation des performances via Messenger, Redis, RabbitMQ",
      "Sécurisation d'accès avec Keycloak & gestion avancée des rôles"
    ],
    projects: [
      {
        name: "Ingea Connect – Plateforme de conformité ICPE",
        description: "Conception de l'architecture back-end avec Symfony 6.4 & API Platform. Intégration de l'IA GPT-4 pour l'analyse intelligente de documents PDF. Création de prompts dynamiques adaptés au contexte réglementaire. Optimisation des performances via Messenger, Redis, RabbitMQ. Sécurisation d'accès avec Keycloak & gestion avancée des rôles.",
        technologies: ["PHP 8.1", "Symfony", "Doctrine", "API Platform", "PhpSpreadsheet", "Dompdf", "OpenAI/GPT-4", "Docker", "GitLab CI", "Jenkins", "Keycloak", "MySQL", "Redis", "RabbitMQ"]
      },
      {
        name: "Yeah Digital – Analyse d'avis clients par IA",
        description: "Développement complet d'un moteur d'analyse sémantique avec intelligence artificielle IA. Extraction des KPIs, catégorisation des sentiments, génération de rapports PDF/Excel. Intégration d'un dashboard interactif avec Next.js et React. Création d'un système d'authentification JWT.",
        technologies: ["PHP 8.3", "Next.js", "React", "Symfony", "Doctrine", "API Platform", "PhpSpreadsheet", "Dompdf", "OpenAI/GPT-4", "Docker", "GitLab CI", "Jenkins", "Keycloak", "MySQL"]
      }
    ]
  },
  {
    company: "Technology Travel and Tourism",
    position: "Chef de projet & développeur Web",
    period: "2015 - 2020",
    description: [
      "Direction du développement d'une solution complète de gestion commerciale & réservation B2B/B2C",
      "Interconnexion XML avec des milliers de fournisseurs hôteliers",
      "Automatisation des processus métier : génération de documents (PDF), envois d'e-mails automatiques, appels d'API REST",
      "Intégration des paiements en ligne : Tunisie Monétique, GPGcheckout",
      "Conception des interfaces d'administration pour la gestion front et back-office"
    ],
    projects: [
      {
        name: "Flexis – Plateforme OTA pour agences de voyages",
        description: "Direction du développement d'une solution complète de gestion commerciale & réservation B2B/B2C. Interconnexion XML avec des milliers de fournisseurs hôteliers. Automatisation des processus métier : génération de documents (PDF), envois d'e-mails automatiques, appels d'API REST. Intégration des paiements en ligne : Tunisie Monétique, GPGcheckout. Conception des interfaces d'administration pour la gestion front et back-office.",
        technologies: ["PHP 7", "HTML", "JavaScript", "jQuery", "CSS", "Zend Framework", "MySQL"]
      },
      {
        name: "Nemo – Solution de commercialisation hôtelière multicanal (B2B/B2C/XML)",
        description: "Développement complet du site client (front office) & back office pour la gestion. Réservations, Comptes clients, Contrats et relevés. Création d'une interface fluide et opérationnelle, pensée pour l'efficacité utilisateur.",
        technologies: ["PHP 7", "HTML", "JavaScript", "jQuery", "CSS", "Zend Framework", "MySQL"]
      }
    ]
  },
  {
    company: "MadamePop",
    position: "Développeur Web & Administration serveur",
    period: "2012 - 2014",
    description: [
      "Création de boutiques PrestaShop sur-mesure",
      "Intégration des Templates graphiques personnalisés respectant l'identité visuelle des marques",
      "Mise en place de fonctionnalités spécifiques au métier (personnalisation de produits, gestion des déclinaisons complexes)",
      "Administration des serveurs web et maintenance complète de l'infrastructure technique",
      "Suivi opérationnel : mise à jour de modules, corrections de bugs, support technique"
    ],
    projects: [
      {
        name: "Madamepopandkids",
        description: "Boutique en ligne spécialisée dans les produits personnalisés",
        technologies: ["PHP", "PrestaShop", "WordPress", "HTML", "JavaScript", "jQuery", "CSS", "MySQL"]
      }
    ]
  },
  {
    company: "2IWEB",
    position: "Développeur Web e-commerce PrestaShop",
    period: "2009 - 2012",
    description: [
      "Participation au développement de sites e-commerce sous PrestaShop",
      "Intégration de Templates personnalisés, alignés avec les chartes graphiques des marques",
      "Prise en charge de l'ensemble du cycle de développement : analyse, développement, mise en production, maintenance"
    ],
    projects: [
      {
        name: "Madamepopandkids & Je Porte mon bébé",
        description: "Sites e-commerce complets",
        technologies: ["PHP", "PrestaShop", "WordPress", "HTML", "JavaScript", "jQuery", "CSS", "MySQL"]
      }
    ]
  },
  {
    company: "Virtuel Arts",
    position: "Développeur Web",
    period: "2009 - 2009",
    description: [
      "Participation au développement du site vitrine Soretras",
      "Intégration d'un moteur de recherche personnalisé pour faciliter la navigation et améliorer l'accessibilité utilisateur"
    ],
    projects: [
      {
        name: "Soretras",
        description: "Site vitrine avec moteur de recherche personnalisé",
        technologies: ["PHP", "HTML", "JavaScript", "jQuery", "CSS", "MySQL"]
      }
    ]
  },
  {
    company: "Hamadi Abid (HA)",
    position: "Responsable informatique & Gestion des stocks",
    period: "2008 - 2008",
    description: [
      "Responsable de l'infrastructure informatique de l'entreprise : maintenance du parc informatique, support utilisateurs, gestion des logiciels métiers",
      "Gestion opérationnelle des stocks : suivi des entrées/sorties, optimisation des niveaux de stock, reporting",
      "Rôle transversal combinant compétences techniques et logistiques"
    ]
  }
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
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
        Expérience Professionnelle
      </motion.h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-violet-500"></div>
        
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`relative mb-12 md:mb-16 ${isEven ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"}`}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 ${
                isEven
                  ? "md:left-auto md:right-0 md:transform md:translate-x-1/2"
                  : "md:left-0 md:transform md:-translate-x-1/2"
              } left-0 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full border-4 border-slate-950 shadow-lg shadow-cyan-500/50`}></div>
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">{exp.company}</h3>
                    <span className="text-sm text-cyan-400 mt-1 md:mt-0 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-200 mb-4">{exp.position}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full mt-2 mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <h4 className="font-semibold mb-3 text-gray-200">Projets réalisés :</h4>
                      {exp.projects.map((project, i) => (
                        <div key={i} className="mb-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/20 transition">
                          <h5 className="font-semibold text-cyan-400 mb-2">{project.name}</h5>
                          <ul className="space-y-1 mb-3">
                            {project.description.split('. ').filter(desc => desc.trim()).map((desc, j) => (
                              <li key={j} className="text-sm text-gray-400 flex items-start">
                                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full mt-1.5 mr-2"></span>
                                <span>{desc.trim()}{j < project.description.split('. ').filter(desc => desc.trim()).length - 1 ? '.' : ''}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, j) => (
                              <span
                                key={j}
                                className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
