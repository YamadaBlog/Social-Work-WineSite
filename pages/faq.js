import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Définition d'un composant individuel pour chaque question de la FAQ
const FaqItem = ({ question, answer }) => {
  // Déclaration d'un état local pour suivre si la réponse est ouverte ou fermée
  const [isOpen, setIsOpen] = useState(false);
 
  // Fonction pour basculer l'état ouvert/fermé de la réponse
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Rendu du composant FaqItem avec la question et la réponse
  return (
    <div className={`${styles.bodycustom}`}>
      <title>Oenophile.App</title>            
      <div className="faq-item">
        <div className="px-4 sm:px-6 lg:px-8 ">
          <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
            <h2 id="accordion-collapse-heading-1">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1" onClick={toggleOpen}>
                <question>{question}</question>
                <svg data-accordion-icon className={`w-3 h-3 rotate-180 shrink-0 ${isOpen ? 'rotate-0' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            {isOpen && 
              <div id="accordion-collapse-body-1" className="p-5 border border-b-0 border-gray-200">
                <p className="mb-2 text-gray-500 ">{answer}</p>
                <p className="text-gray-500 ">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
              </div>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant principal de la FAQ
const FAQ = () => {
  return (
    <>
      <Header />
      <div className={`${styles.bodycustom}`}>
        <title>Oenophile.App</title>            

        <div className={`${styles.elipse1}`}></div>
        <div className={`${styles.elipse2}`}></div>

      <div id="accordion-collapse" data-accordion="collapse">
        <FaqItem
          question="Quels sont les avantages d'acheter du vin en ligne par rapport à l'achat en magasin ?"
          answer="Acheter du vin en ligne offre une plus grande variété de choix, la possibilité de comparer facilement les prix et les avis des clients, ainsi que la commodité de faire vos achats depuis chez vous, sans avoir à vous déplacer physiquement dans un magasin."
        />
        <FaqItem
          question="Comment fonctionne la livraison de vin ?"
          answer="Une fois votre commande passée, notre équipe prépare soigneusement vos bouteilles de vin et les confie à notre service de livraison partenaire. Vous recevrez ensuite un numéro de suivi pour suivre l'acheminement de votre colis jusqu'à votre porte."
        />
        <FaqItem
          question="Quels sont les délais de livraison ?"
          answer="Les délais de livraison varient en fonction de votre région et des options d'expédition que vous choisissez lors du processus de commande. En général, vous pouvez vous attendre à recevoir votre commande dans un délai de 5 à 10 jours ouvrables après son expédition."
        />
        {/* Ajoutez d'autres FaqItem avec leurs questions et réponses */}
      </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;
