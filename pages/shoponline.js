import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import Card from '../components/Card';
import { useState } from 'react';

export default function Shoponline() {
  // Déclaration des filtres avec leurs états
  const [categoryFilter, setCategoryFilter] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [priceRangeFilter, setPriceRangeFilter] = useState('');

  // Liste des vins 
  const cartes = [
    { title: "Uby - Colombard Sauvignon- 2022", description: "Vin Blanc, 0,75L", image: "https://www.vinatis.com/77220-detail_default/colombard-sauvignon-blanc-n3-2022-domaine-uby.png", price: "12,20 EUR", category: "Vin blanc", domain: "Uby" },
    { title: "Pellehaut - Harmonie - 2022", description: "Vin Rouge, 0,75L", image: "https://www.vinatis.com/76830-detail_default/harmonie-de-gascogne-rouge-2022-domaine-pellehaut.png", price: "9,60 EUR", category: "Vin rouge", domain: "Pellehaut" },
    { title:"Tariquet - 1ère Grives - 2022", description:"Vin Blanc, 0,75L", image:"https://www.vinatis.com/77636-detail_default/premieres-grives-2022-domaine-tariquet.png", price:"13,40 EUR", category: "Vin blanc", domain: "Tariquet"},//action={addpanier}
    { title: "Uby - Colombard Sauvignon- 2022", description: "Vin Blanc, 0,75L", image: "https://www.vinatis.com/77220-detail_default/colombard-sauvignon-blanc-n3-2022-domaine-uby.png", price: "12,20 EUR", category: "Vin blanc", domain: "Uby" },
    { title: "Pellehaut - Harmonie - 2022", description: "Vin Rouge, 0,75L", image: "https://www.vinatis.com/76830-detail_default/harmonie-de-gascogne-rouge-2022-domaine-pellehaut.png", price: "9,60 EUR", category: "Vin rouge", domain: "Pellehaut" },
    { title:"Tariquet - 1ère Grives - 2022", description:"Vin Blanc, 0,75L", image:"https://www.vinatis.com/77636-detail_default/premieres-grives-2022-domaine-tariquet.png", price:"13,40 EUR", category: "Vin blanc", domain: "Tariquet"},//action={addpanier}
    { title: "Uby - Colombard Sauvignon- 2022", description: "Vin Blanc, 0,75L", image: "https://www.vinatis.com/77220-detail_default/colombard-sauvignon-blanc-n3-2022-domaine-uby.png", price: "12,20 EUR", category: "Vin blanc", domain: "Uby" },
    { title: "Pellehaut - Harmonie - 2022", description: "Vin Rouge, 0,75L", image: "https://www.vinatis.com/76830-detail_default/harmonie-de-gascogne-rouge-2022-domaine-pellehaut.png", price: "9,60 EUR", category: "Vin rouge", domain: "Pellehaut" },
    { title:"Tariquet - 1ère Grives - 2022", description:"Vin Blanc, 0,75L", image:"https://www.vinatis.com/77636-detail_default/premieres-grives-2022-domaine-tariquet.png", price:"13,40 EUR", category: "Vin blanc", domain: "Tariquet"},//action={addpanier}
    { title: "Uby - Colombard Sauvignon- 2022", description: "Vin Blanc, 0,75L", image: "https://www.vinatis.com/77220-detail_default/colombard-sauvignon-blanc-n3-2022-domaine-uby.png", price: "12,20 EUR", category: "Vin blanc", domain: "Uby" },
    { title: "Pellehaut - Harmonie - 2022", description: "Vin Rouge, 0,75L", image: "https://www.vinatis.com/76830-detail_default/harmonie-de-gascogne-rouge-2022-domaine-pellehaut.png", price: "9,60 EUR", category: "Vin rouge", domain: "Pellehaut" },
    { title:"Tariquet - 1ère Grives - 2022", description:"Vin Blanc, 0,75L", image:"https://www.vinatis.com/77636-detail_default/premieres-grives-2022-domaine-tariquet.png", price:"13,40 EUR", category: "Vin blanc", domain: "Tariquet"},//action={addpanier}

  ];

  // Fonction filtre cartes en fonction des différents choix
  const filteredCards = cartes.filter((card) => {
    // Filtre par catégorie
    if (categoryFilter !== '' && card.category !== categoryFilter) {
      return false;
    }
    // Filtre par domaine
    if (domainFilter !== '' && card.domain !== domainFilter) {
      return false;
    }
    // Filtre par gamme de prix
    if (priceRangeFilter !== '') {
      const [minPrice, maxPrice] = priceRangeFilter.split('-');
      const price = parseFloat(card.price);
      if (price < parseFloat(minPrice) || price > parseFloat(maxPrice)) {
        return false;
      }
    }
    return true;
  });

  // Fonction pour ajouter au panier
  function addPanier() {
    console.log('Adding panier');
  }

  return (
    <>
      <Header />
      <div className={`${styles.bodycustom}`}>
        <title>Oenophile.App</title>            

        <div className={`${styles.elipse1}`}></div>
        <div className={`${styles.elipse2}`}></div>
        
          <div className={`${styles.cardcontainer}`}>
            <div className={`${styles.h2}`}>
              <h2>THE WINES CELLAR</h2>
            </div>
          </div>

          {/* Filtres */}
          <div className="filters">
            {/* Filtre par catégorie */}
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="">Toutes les catégories</option>
              <option value="Vin rouge">Vin rouge</option>
              <option value="Vin blanc">Vin blanc</option>
              <option value="Vin Rosé">Vin Rosé</option>
              {/*<option value="Champagne">Champagne</option>*/}
            </select>

            {/* Filtre par domaine */}
            <select value={domainFilter} onChange={(e) => setDomainFilter(e.target.value)}>
              <option value="">Tous les domaines</option>
              <option value="Pellehaut">Pellehaut</option>
              <option value="Uby">Uby</option>
              <option value="Tariquet">Tariquet</option>
            </select>

            {/* Filtre par gamme de prix */}
            <select value={priceRangeFilter} onChange={(e) => setPriceRangeFilter(e.target.value)}>
              <option value="">Toutes les gammes de prix</option>
              <option value="0-10">0-10€</option>
              <option value="11-15">11-15€</option>
              <option value="16-30">16€-30€</option>
              <option value="30+">&gt;30€</option> {/*&gt correspond à > */}
            </select>
          </div>

          {/* Affichage des cartes filtrées */}      
          <div className={`${styles.cardcontainer}`}>
            {filteredCards.length === 0 ? (
              <div className="no-results">
                <p>No products match your current search.</p>
                <p>You can modify your filters to find the products from our beautiful selection.</p>
              </div>
            ) : (
              filteredCards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} image={card.image} price={card.price} action={addPanier} />
              ))
            )}
          </div>
        </div>
      <Footer />
    </>
  );
}
