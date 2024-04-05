import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Footer from '@/components/Footer'

export default function TrustUs() {

  
    return (
        <> 
            <Header>
            </Header>
            <div className={`${styles.bodycustom}`}>
                <title>Oenophile.App</title>            

                <div className={`${styles.elipse1}`}></div>
                <div className={`${styles.elipse2}`}></div>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">POURQUOI NOUS FAIRE CONFIANCE ?
                        </h1>
                    </div>
                 </div>
                <div className="mx-auto max-w-[40rem] prose text-white ">
                        <p>Chez Oenophile.App, nous comprenons l'importance de la confiance dans le choix de vos partenaires en matière de vin. Notre engagement envers l'excellence, notre histoire riche, nos valeurs fondamentales et nos partenariats soigneusement sélectionnés sont autant de raisons pour lesquelles vous pouvez avoir confiance en nous pour vous guider dans votre exploration du monde du vin.</p>
                        <div className={`${styles.h3}`}>NOTRE HISTOIRE</div>
                        <p>Fondée par des passionnés de vin désireux de partager leur amour pour les grands crus, Oenophile.App est née de l'ambition de proposer une sélection de vins d'exception, provenant des régions viticoles les plus prestigieuses du monde. Depuis nos débuts modestes, notre entreprise s'est développée pour devenir un acteur majeur dans le domaine de la distribution de vins, tout en restant fidèle à notre engagement initial envers la qualité et l'authenticité.</p>
                        <div className={`${styles.h3} `}>NOS ENGAGEMENTS</div>
                        <p>Chez Oenophile.App, nous nous engageons à offrir à nos clients des vins de la plus haute qualité, sélectionnés avec soin par notre équipe d'experts passionnés. Nous nous efforçons également de fournir un service client exceptionnel, en offrant des conseils personnalisés et un soutien continu à nos clients tout au long de leur voyage œnologique.</p>
                        <div className={`${styles.h3} `}>NOS VALEURS</div>
                        <p>Nos valeurs fondamentales reposent sur l'intégrité, la qualité et le service. Nous croyons en la transparence dans nos transactions, en la recherche constante de l'excellence dans nos produits et en l'engagement envers la satisfaction totale de nos clients.</p>
                        <div className={`${styles.h3} `}>CHOIX METICULEUX DE NOS PRODUITS</div>
                        <p>Nous avons choisi de mettre en avant les Vins de Gascogne en raison de leur richesse et de leur diversité. Située dans le sud-ouest de la France, la région de Gascogne est réputée pour ses sols riches et son climat favorable, qui permettent la production de vins élégants et aromatiques. Les particularités des vins de Gascogne, tels que leur fraîcheur, leur vivacité et leur caractère fruité, en font des compagnons parfaits pour une grande variété de plats et d'occasions.</p>
                        <div className={`${styles.h3} `}>NOS PARTENAIRES</div>
                        <p>ANous sommes fiers de compter parmi nos partenaires des domaines viticoles renommés tels que Pellehaut, Uby et Tariquet. Ces domaines, réputés pour leur engagement envers la qualité et leur savoir-faire artisanal, nous permettent de proposer à nos clients une sélection exceptionnelle de vins de Gascogne, reflétant parfaitement l'essence et la diversité de cette région viticole fascinante.</p>
                </div>
            </div>
            <Footer>
            </Footer>
        </>
    )
}
            