import styles from '../styles/Home.module.css'


import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
  function addpanier( ) {
    console.log('Adding panier');
  }

  return (
    <>
      <Header>
      </Header>

      <div className={`${styles.bodycustom}`}>
        <title>Oenophile.App</title>            

        <div className={`${styles.elipse1}`}></div>
        <div className={`${styles.elipse2}`}></div>

        {/*Accroche*/}
        <div className={`${styles.contentcontainer}`}>
          <div className="flex flex-col items-center bg- border-transparent border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl md : text-left relative  ">
            <div className="flex flex-col justify-between p-4 leading-normal">
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;800&display=swap" rel="stylesheet"/>
              <h5 className="mb-2 text-5xl tracking-tight text-gray-300">YOUR BEST WINE AGENCY</h5>
              <p className="mb-3 font-normal text-gray-300">Explore the art of wine appreciation with our meticulously curated selection of wines from the world's most prestigious terroirs. Whether you're a novice or a connoisseur, Oenophile.App invites you to delve into a world rich in flavors, history, and craftsmanship.</p>
              <div className="flex mt-4 md:mt-6 max-w-lg">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center mx-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 uppercase">shop</a>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center mx-4 text-white bg-gray-700 border border-gray-800 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-200 uppercase">More informations</a>
              </div>
            </div>
                <img className="object-cover h-full w-48 rounded-none md:h-auto md:w-48 md:rounded-lg" src="../grappe.png" alt="" />
          </div>
        </div>

        {/* Appel des Cards à l'intérieur du container */}
        <div className={`${styles.cardcontainer}`}>

          <div className={`${styles.h2}`}>
              <h2>La sélection du Sommelier</h2>
          </div>
        </div>
        <div className={`${styles.cardcontainer}`}>
          <Card title="Uby - Colombard Sauvignon- 2022" description="Vin Blanc, 0,75L" image="https://www.vinatis.com/77220-detail_default/colombard-sauvignon-blanc-n3-2022-domaine-uby.png" price="12,20 EUR" action={addpanier}/>
          <Card title="Pellehaut - Harmonie - 2022" description="Vin Rouge, 0,75L" image="https://www.vinatis.com/76830-detail_default/harmonie-de-gascogne-rouge-2022-domaine-pellehaut.png" price="9,60 EUR" action={addpanier}/>
          <Card title="Tariquet - 1ère Grives - 2022" description="Vin Blanc, 0,75L" image="https://www.vinatis.com/77636-detail_default/premieres-grives-2022-domaine-tariquet.png" price="13,40 EUR"action={addpanier}/>
        </div>

      </div>
      
      <Footer>
      </Footer>          
    </>
  );
}
