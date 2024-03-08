import "../../stylesheets/layout/cardsContainer.css";
import Select from "../ui/Select";
import { VscSettings } from "../../assets/icons";
import { useEffect, useState } from "react";
import Card from "../ui/Card";
import Pagination from "../ui/Pagination";
import axe from '../../assets/axe.png';
import partyHat from '../../assets/blue-partyhat.png';

export default function CardsContainer() {
    const [cards, setCards] = useState([]);

    function createCards() {
        let n = 15;
        let arr = [];
        for (let i = 0; i < n; i++) {
            i < 8
                ? arr.push({
                      onSale: true,
                      title: "Blue Partyhat",
                      description:
                          "Blue Partyhats are some of the most expensive discontinued items within the game. Initially obtained in a 2001 Christmas event in which players opened Christmas Crackers to receive the item, the Blue Partyhat can no longer be acquired this way. If players wish to get their hands on this wearable item, they will need to trade with a player already possessing a Blue Partyhat. It is rumored the Blue Partyhat was originally stolen from Elfinlocks ashes by the Wise Old Man. ",
                      image: partyHat,
                      price: "$450.00",
                      discount: "$522.50",
                  })
                : arr.push({
                      onSale: false,
                      title: "3rd Age Pickaxe",
                      description:
                          "Requiring an attack level of 65 to wield and 61 Mining to use, the 3rd Age Pickaxe shares the same mining speed and special attack as the Dragon Pickaxe. The 3rd Age Pickaxe can be obtained as a possible reward from the master Treasure Trails.",
                      image: axe,
                      price: "$450.00",
                      discount: "$522.50",
                  });
        }
        setCards(arr);
    }

    useEffect(() => {
        createCards();
    }, []);

    const sort = ['Featured', 'Price: (Low to high)', 'Price: (High to low)']

    return (
        <div className="cardsContainer">
            <div className="cardsContainer_top">
                <span className="cardsContainer_top-cardsAmount">
                    Showing 20 - from 125
                </span>
                <div className="cardsContainer_top-sortBy">
                    <Select
                        icon={<VscSettings className="smallIcon rotate" />}
                        label={"Sort by"}
                        placeholder={"Featured"}
                        type={"small"}
                        options={sort}
                    />
                </div>
            </div>

            <div className="cardsContainer_cards">
                {cards.map((card) => (
                    <Card
                        onSale={card.onSale}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        price={card.price}
                        discount={card.discount}
                    />
                ))}
            </div>
            <Pagination />
        </div>
    );
}
