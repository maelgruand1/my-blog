// src/components/BlogList.tsx
import React from 'react';
import ReactImage from './images/image.png';
import ReactImage2 from './images/image2.png';
import CleanCode from './images/cleanCode.png';

const BlogList: React.FC = () => {
  return (
    <div>
      <br /><br /><br />
      <h2>Liste des articles</h2>

      <div className="blog-post">
        <h3>Article 1: Introduction à React</h3>
        <img src= {ReactImage} alt="Introduction à React" className="blog-image" />
        <p>
          Découvrez les bases de React, la bibliothèque JavaScript populaire pour créer des interfaces utilisateur dynamiques et réactives.
        </p>
        <a className="read-more" onClick={() => alert('Indisponible!')}>Lire plus</a>
      </div>

      <div className="blog-post">
        <h3>Article 2: Comprendre TypeScript</h3>
        <img src={ReactImage2} alt="Comprendre TypeScript" className="blog-image" />
        <p>
          Apprenez comment TypeScript améliore le développement JavaScript en ajoutant des types statiques et une meilleure vérification des erreurs.
        </p>
        <a className="read-more" onClick={() => alert('Indisponible!')}>Lire plus</a>
      </div>

      <div className="blog-post">
        <h3>Article 3: Meilleures pratiques en développement web</h3>
        <img src={CleanCode} alt="Meilleures pratiques" className="blog-image" />
        <p>
          Explorez les meilleures pratiques pour écrire du code web maintenable, optimisé et sécurisé.
        </p>
        <a className="read-more" onClick={() => alert('Indisponible !')}>Lire plus</a>
      </div>
    </div>
  );
};

export default BlogList;
