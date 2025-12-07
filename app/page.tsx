import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
    {/* Logo / Nom */}
    <Link href="#about" className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
        SS
      </div>
      <span className="font-semibold tracking-tight text-gray-900">
        Sarra Soualmia
      </span>
    </Link>

    {/* Liens de navigation */}
    <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-600">
      <a
        href="#about"
        className="px-3 py-1 rounded-full hover:bg-gray-100 hover:text-black transition"
      >
        Accueil
      </a>
      <Link
        href="/projects"
        className="px-3 py-1 rounded-full hover:bg-gray-100 hover:text-black transition"
      >
        Projets
      </Link>
      <a
        href="#skills"
        className="px-3 py-1 rounded-full hover:bg-gray-100 hover:text-black transition"
      >
        Compétences
      </a>
      <a
        href="#contact"
        className="px-3 py-1 rounded-full hover:bg-gray-100 hover:text-black transition"
      >
        Contact
      </a>
    </nav>

    {/* Bouton CV */}
    <a
      href="/CV_Sarra_Soualmia.pdf"
      download
      className="inline-flex px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
    >
      Télécharger CV
    </a>
  </div>
</header>


      {/* HERO */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 pt-16 pb-16 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Colonne texte */}
        <div className="space-y-5">
          <span className="inline-flex px-4 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium">
            Ingénieure Logiciel & IA · Full-Stack
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Sarra Soualmia
          </h1>

          <h2 className="text-lg md:text-xl text-gray-600">
            Ingénieure Logiciel – Full-Stack | IA | Deep Learning
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            Développeuse passionnée par l’innovation, spécialisée en
            développement web/mobile, vision artificielle et architectures
            modernes. J’aime concevoir des solutions robustes, performantes et
            centrées utilisateur, du prototype au déploiement.
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href="/CV_Sarra_Soualmia.pdf"
              download
              className="px-6 py-3 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              Télécharger CV
            </a>

            <a
              href="/projects"
              className="px-6 py-3 rounded-md border border-gray-800 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
            >
              Voir mes projets
            </a>
          </div>
        </div>

        {/* Colonne photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-emerald-200 blur-2xl opacity-60" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200">
              <Image
                src="/pic.jpg"
                alt="Photo de Sarra Soualmia"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
     <section id="skills" className="max-w-6xl mx-auto px-6 pb-20 pt-10">
  <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
    Compétences
  </h2>

  <p className="text-gray-600 mb-8 text-center md:text-left max-w-3xl">
    Un profil Full-Stack et IA complet, couvrant le développement web & mobile,
    les architectures backend, la vision artificielle, les bases de données et
    la gestion de projet, avec une forte capacité à transformer un besoin métier
    en solution technique concrète.
  </p>

  <div className="grid gap-6 md:grid-cols-3 text-sm">
    {/* Développement Web Front-End */}
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
      <h3 className="font-semibold mb-3 text-gray-900">
        Développement Web Front-End
      </h3>
      <ul className="space-y-1 text-gray-700">
        <li>Next.js, React, Angular</li>
        <li>TypeScript, JavaScript (ES6+)</li>
        <li>HTML5, CSS3, Tailwind, Bootstrap</li>
        <li>Intégration d&apos;API REST & WebSockets</li>
        <li>Design responsive & bonnes pratiques UX</li>
      </ul>
    </div>

    {/* Développement Backend */}
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
      <h3 className="font-semibold mb-3 text-gray-900">
        Développement Back-End
      </h3>
      <ul className="space-y-1 text-gray-700">
        <li>Node.js, Express</li>
        <li>Spring Boot (Java)</li>
        <li>Conception d&apos;API RESTful</li>
        <li>Authentification JWT, Spring Security</li>
        <li>Architecture MVC & bonnes pratiques</li>
      </ul>
    </div>

    {/* Mobile */}
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
      <h3 className="font-semibold mb-3 text-gray-900">
        Développement Mobile
      </h3>
      <ul className="space-y-1 text-gray-700">
        <li>Flutter / Dart</li>
        <li>Navigation & gestion d&apos;état</li>
        <li>Consommation d&apos;APIs & sécurisation</li>
        <li>Interfaces modernes & animations</li>
        <li>Messagerie & mise à jour temps réel</li>
      </ul>
    </div>

    {/* IA & Vision */}
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
      <h3 className="font-semibold mb-3 text-gray-900">
        Intelligence Artificielle & Vision
      </h3>
      <ul className="space-y-1 text-gray-700">
        <li>Python, NumPy, Pandas, OpenCV</li>
        <li>YOLOv5 / YOLOv8, Deep Learning</li>
        <li>Traitement d&apos;images & de vidéos</li>
        <li>Création & annotation de datasets</li>
      </ul>
    </div>

   {/* Bases de données, Cloud & DevOps */}
<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
  <h3 className="font-semibold mb-3 text-gray-900">
    Bases de données, Cloud & DevOps
  </h3>

  <ul className="space-y-1 text-gray-700">

    {/* Bases de données */}
    <li className="font-medium text-gray-900">Bases de données</li>
    <li className="ml-3">MongoDB, MySQL, PostgreSQL, Supabase</li>
    <li className="ml-3">Modélisation SQL & NoSQL</li>
    <li className="ml-3">Requêtes optimisées, indexation</li>

    {/* Docker */}
    <li className="font-medium text-gray-900 mt-3">Docker</li>
    

    {/* Kubernetes */}
    <li className="font-medium text-gray-900 mt-3">Kubernetes (notions)</li>
    

    {/* DevOps */}
    <li className="font-medium text-gray-900 mt-3">DevOps & CI/CD</li>
  
    {/* Cloud */}
    <li className="font-medium text-gray-900 mt-3">Cloud & Déploiement</li>

  </ul>
</div>

    

    {/* Soft Skills & Méthodes */}
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
      <h3 className="font-semibold mb-3 text-gray-900">
        Soft Skills & Méthodologies
      </h3>
      <ul className="space-y-1 text-gray-700">
        <li>Gestion de projet Agile / Scrum</li>
        <li>Travail en équipe & leadership</li>
        <li>Communication FR / EN</li>
        <li>Résolution de problèmes & esprit analytique</li>
        <li>Organisation, autonomie & sens du détail</li>
      </ul>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-600 mb-4">
            Disponible pour un stage de fin d&apos;études ou une opportunité en
            développement logiciel, IA ou Full-Stack.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm">
            <div className="space-y-1">
              <a
                href="mailto:sarra.soualmia@gmail.com"
                className="block text-indigo-600"
              >
                📧 sarahsouelmia@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sarra-souelmia-a80807279/"
                target="_blank"
                className="block text-blue-600"
              >
                🔗 LinkedIn
              </a>
              <a
                href="https://github.com/sarrasouelmia"
                target="_blank"
                className="block text-gray-800"
              >
                🐙 GitHub
              </a>
            </div>
            <p className="text-gray-500 text-xs md:text-right">
              Portfolio développé avec Next.js &amp; Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-4 text-center text-xs text-gray-400 border-t">
        © {new Date().getFullYear()} Sarra Soualmia — Portfolio personnel
      </footer>
    </main>
  );
}
