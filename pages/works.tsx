import { useEffect, useState } from 'react';
import Image from 'next/image';

import loading from '../assets/images/loading.svg';
import { Loading } from '../styles/Loading';
import { AppWrapper } from '../components/AppWrapper';
import { 
    WorksSort,
    SortItem,
    WorksCards,
    CardsItem,
    ItemImage,
    ItemInvisible,
    InvisibleTitle,
    InvisibleDirection,
    InvisibleButton} from '../styles/Works';


const Works = ({ works: serverWorks }) => {
    const [activeClass, setActiveClass] = useState('All');
    const [works, setWorks] = useState(serverWorks);
    const [directions, setDirections] = useState(serverWorks? serverWorks.directions : []);
    const [cards, setCards] = useState(serverWorks? serverWorks.cards : []);
    
    const filterWorks = (title): void => {
        setActiveClass(title);
        setCards([]);
        
        works.cards.map((data) => {
            const cardsDirection = data.direction;

            if (cardsDirection === title) {
                setCards(oldData => [...oldData, data]);
            } else if (title === 'All') {
                setCards(serverWorks? serverWorks.cards : works.cards);
            } else {
                return false;
            }
        })
    }

    const searchActive = (direction) => {
        if (activeClass === "" && direction === "All") {
            return "All"
        } else if (activeClass === direction) {
            return activeClass
        }
    }
    
    useEffect(() => {
        const load = async () => {
            const response = await fetch(`${process.env.API_URL}/works`);
            const json = await response.json();
            setWorks(json);
            setDirections(json.directions);
            setCards(json.cards);
        }

        !serverWorks ? load() : null;
    }, [])


    if (!works) {
        return (
            <AppWrapper title='| About'>
                <Loading>
                    <img src={loading} alt="loading..." />
                </Loading>
            </AppWrapper>
        )
    } else {
        return (
            <AppWrapper title="| About">
                <WorksSort>
                    {directions.map(({ id, direction }) =>
                        <SortItem
                            key={id}
                            onClick={() => filterWorks(direction)}
                            activeClass={searchActive(direction)}
                            >{direction}
                        </SortItem>
                    )}
                </WorksSort>
                <WorksCards>
                    {cards.map(({ id, image, title, direction }) =>
                        <CardsItem key={id}>
                            <ItemImage>
                                <Image src={image} alt={title} unsized={true} />
                                <ItemInvisible>
                                    <InvisibleTitle>{title}</InvisibleTitle>
                                    <InvisibleDirection>{direction}</InvisibleDirection>
                                    <InvisibleButton type="button">View &gt;</InvisibleButton>
                                </ItemInvisible>
                            </ItemImage>
                        </CardsItem>
                    )}
                </WorksCards>
            </AppWrapper>
        )
    }
}

export default Works;


Works.getInitialProps = async ({ req }) => {
    if (!req) {
        return {works: null}
    }

    const response = await fetch(`${process.env.API_URL}/works`);
    const works = await response.json();

    return {
        works
    }
}