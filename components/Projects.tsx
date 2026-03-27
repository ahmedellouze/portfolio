import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  company?: string;
}

const projects: Project[] = [
  {
    name: "Ingea Connect – Plateforme de conformité ICPE",
    description: "Conception de l'architecture back-end avec Symfony 6.4 & API Platform. Intégration de l'IA GPT-4 pour l'analyse intelligente de documents PDF. Création de prompts dynamiques adaptés au contexte réglementaire. Optimisation des performances via Messenger, Redis, RabbitMQ. Sécurisation d'accès avec Keycloak & gestion avancée des rôles.",
    technologies: ["PHP 8.1", "Symfony", "Doctrine", "API Platform", "PhpSpreadsheet", "Dompdf", "OpenAI/GPT-4", "Docker", "GitLab CI", "Jenkins", "Keycloak", "MySQL", "Redis", "RabbitMQ"],
    company: "Sifast"
  },
  {
    name: "Yeah Digital – Analyse d'avis clients par IA",
    description: "Développement complet d'un moteur d'analyse sémantique avec intelligence artificielle IA. Extraction des KPIs, catégorisation des sentiments, génération de rapports PDF/Excel. Intégration d'un dashboard interactif avec Next.js et React. Création d'un système d'authentification JWT.",
    technologies: ["PHP 8.3", "Next.js", "React", "Symfony", "Doctrine", "API Platform", "PhpSpreadsheet", "Dompdf", "OpenAI/GPT-4", "Docker", "GitLab CI", "Jenkins", "Keycloak", "MySQL"],
    company: "Sifast"
  },
  {
    name: "Flexis – Plateforme OTA pour agences de voyages",
    description: "Direction du développement d'une solution complète de gestion commerciale & réservation B2B/B2C. Interconnexion XML avec des milliers de fournisseurs hôteliers. Automatisation des processus métier : génération de documents (PDF), envois d'e-mails automatiques, appels d'API REST. Intégration des paiements en ligne : Tunisie Monétique, GPGcheckout. Conception des interfaces d'administration pour la gestion front et back-office.",
    technologies: ["PHP 7", "HTML", "JavaScript", "jQuery", "CSS", "Zend Framework", "MySQL"],
    company: "Technology Travel and Tourism"
  },
  {
    name: "Nemo – Solution de commercialisation hôtelière multicanal",
    description: "Développement complet du site client (front office) & back office pour la gestion. Réservations, Comptes clients, Contrats et relevés. Création d'une interface fluide et opérationnelle, pensée pour l'efficacité utilisateur.",
    technologies: ["PHP 7", "HTML", "JavaScript", "jQuery", "CSS", "Zend Framework", "MySQL"],
    company: "Technology Travel and Tourism"
  },
  {
    name: "Madamepopandkids",
    description: "Boutique en ligne spécialisée dans les produits personnalisés avec fonctionnalités spécifiques au métier (personnalisation de produits, gestion des déclinaisons complexes).",
    technologies: ["PHP", "PrestaShop", "WordPress", "HTML", "JavaScript", "jQuery", "CSS", "MySQL"],
    company: "MadamePop"
  },
  {
    name: "Fast Minder",
    description: "Application Symfony pour la gestion des campagnes de tests fonctionnels (tests manuels et semi-automatiques).",
    technologies: ["PHP", "Symfony", "MySQL"],
    company: "Sifast"
  },
  {
    name: "Fast Visio",
    description: "Plateforme de planification et de suivi d'événements.",
    technologies: ["PHP", "Symfony"],
    company: "Sifast"
  },
  {
    name: "Fast Rush",
    description: "Système de gestion de contenus multimédia, intégré à NextCloud.",
    technologies: ["PHP", "Symfony", "NextCloud"],
    company: "Sifast"
  },
  {
    name: "Mooven / Activité Sportive",
    description: "Solutions de suivi d'activité physique dans le secteur sport & santé.",
    technologies: ["PHP", "Symfony"],
    company: "Sifast"
  },
  {
    name: "E-commerce PrestaShop",
    description: "Sites e-commerce complets : Allo Tapis, Matel Pro, Lampea.",
    technologies: ["PHP", "PrestaShop", "MySQL"],
    company: "Sifast"
  },
  {
    name: "Je Porte mon bébé",
    description: "Site e-commerce complet développé sous PrestaShop.",
    technologies: ["PHP", "PrestaShop", "WordPress", "HTML", "JavaScript", "jQuery", "CSS", "MySQL"],
    company: "2IWEB"
  },
  {
    name: "Soretras",
    description: "Site vitrine avec moteur de recherche personnalisé pour faciliter la navigation et améliorer l'accessibilité utilisateur.",
    technologies: ["PHP", "HTML", "JavaScript", "jQuery", "CSS", "MySQL"],
    company: "Virtuel Arts"
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
        Projets Réalisés
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">{project.name}</h3>
              {project.company && (
                <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20">
                  {project.company}
                </span>
              )}
            </div>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded hover:bg-cyan-500/10 hover:text-cyan-400 transition cursor-default border border-white/10 hover:border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
