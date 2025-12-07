"use client";

import React, { useState } from "react";

type Project = {
  title: string;
  period: string;
  tech: string;
  description: string;
  highlights: string[];
  images?: string[];
};

const projects: Project[] = [
  {
    title: "A9DHILI – Application mobile intelligente de délégation d’achats",
    period: "2024 – Projet de fin d’année, Polytech Monastir",
    tech: "Flutter, Spring Boot, REST API, Authentication multi-rôles, WebSockets (chat temps réel)",
    description:
      "Application mobile permettant à des clients de déléguer leurs achats à des livreurs, avec gestion des magasins, des commandes, des trajets optimisés et une messagerie temps réel.",
    highlights: [
      "Authentification multi-rôles : client, livreur, admin",
      "Gestion complète des commandes, magasins et statuts",
      "Interface moderne avec thème vert harmonisé",
      "Intégration d’IA pour recommandation de produits et optimisation des trajets",
    ],
    images: [
      "/projects/A9DHILI/pagedacc2.png",
      "/projects/A9DHILI/Fruit.png",
      "/projects/A9DHILI/avis.png",
      "/projects/A9DHILI/paiment.png",
      "/projects/A9DHILI/Livreur.png",
    ],
  },
  {
    title: "EcoDetect – Tri intelligent des déchets par vision artificielle",
    period: "2024 – Stage JIOTIFY",
    tech: "YOLO, Deep Learning, Python, ESP32-CAM, Web Interface",
    description:
      "Système embarqué de détection et classification de déchets via vision artificielle pour l’industrie.",
    highlights: [
      "Préparation et entraînement du dataset (annotation, nettoyage, data augmentation)",
      "Optimisation du modèle pour un déploiement temps réel sur ESP32-CAM",
      "Réduction de la latence et amélioration des performances mémoire/vitesse",
      "Interface web pour visualisation en temps réel et démonstration en environnement industriel",
    ],
    images: [
      "/projects/EcoDetect/EcoDetect1.png",
      "/projects/EcoDetect/EcoDetect2.png",
      "/projects/EcoDetect/EcoDetect3.png",
    ],
  },
  {
    title: "Plateforme interne de gestion documentaire",
    period: "2025 – Stage ANYPLI",
    tech: "Angular, Node.js, MongoDB, REST API, UX/UI",
    description:
      "Application web interne pour la gestion et la centralisation de documents métiers.",
    highlights: [
      "Conception et développement full-stack de la plateforme",
      "Interfaces ergonomiques et responsives adaptées aux workflows métiers",
      "Intégration d’une IA de reconnaissance vocale (Speech-to-Text) pour générer automatiquement des documents",
    ],
    images: [
      "/projects/DocManager/dash.png",
      "/projects/DocManager/reclamation.png",
    ],
  },
  {
    title: "SmartMarket – Application web de gestion de produits et commandes",
    period: "Projet académique",
    tech: "Angular, Node.js, Express, MongoDB",
    description:
      "Application web permettant la gestion des produits, des commandes et d’un tableau de bord administrateur.",
    highlights: [
      "Authentification sécurisée et gestion des rôles",
      "Tableau de bord admin avec suivi des commandes",
      "API RESTful pour la gestion des ressources",
    ],
    images: ["/projects/SmartMarket/Marcket.png"],
  },
  {
    title: "Application de réservation de salles",
    period: "Projet académique",
    tech: "Flutter, Spring Boot, JWT, Notifications",
    description:
      "Application mobile de réservation de salles avec gestion des créneaux, rôles utilisateurs et notifications.",
    highlights: [
      "Gestion des créneaux et réservation en temps réel",
      "Rôles multiples (admin / utilisateur)",
      "Interface calendrier et notifications intelligentes",
    ],
    images: ["/projects/Reservation/Reservation1.png"],
  },
  {
    title: "Gestionnaire de tâches (To-Do App)",
    period: "Projet personnel",
    tech: "React, Flask, MySQL",
    description:
      "Application simple pour gérer les activités quotidiennes avec création, modification et suivi des tâches.",
    highlights: [
      "Architecture full-stack légère",
      "API Flask pour la persistance des données",
      "Interface intuitive pour la gestion des tâches",
    ],
    images: ["/projects/Todo/todo1.png"],
  },
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-3 text-center md:text-left">
          Mes Projets
        </h1>
        <p className="text-gray-600 mb-10 text-center md:text-left max-w-2xl">
          Une sélection de projets académiques, professionnels et personnels
          mettant en valeur mon expérience en développement Full-Stack, IA et
          déploiement d’applications.
        </p>

        <div className="grid gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition"
            >
              {/* Header du projet */}
              <div className="flex flex-col gap-1 mb-3">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <span className="text-xs inline-flex w-fit px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  {project.period}
                </span>

                {/* Badges tech */}
                <div className="flex flex-wrap gap-2 mt-2 text-xs">
                  {project.tech.split(",").map((t) => (
                    <span
                      key={t.trim()}
                      className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700"
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                {project.description}
              </p>

              {/* Points forts */}
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {/* Images */}
              {project.images && project.images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.images.map((src, index) => (
                    <img
                      key={src + index}
                      src={src}
                      alt={`${project.title} capture ${index + 1}`}
                      className="w-full h-28 md:h-32 object-cover rounded-lg shadow cursor-pointer hover:scale-105 transition"
                      onClick={() => setSelectedImage(src)}
                    />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </main>
  );
}
