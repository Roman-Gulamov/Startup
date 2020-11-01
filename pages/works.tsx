import { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import Image from 'next/image';

import { AppWrapper } from '../components/AppWrapper';
import { WorksPage, IWorksKeys, IPropsWorks } from '../interfaces/interface';

import loading from '../assets/images/loading.svg';
import { Loading } from '../styles/Loading';
import { ItemImage, ItemInvisible } from '../styles/Item';
import { 
    WorksSort,
    SortItem,
    WorksCards,
    CardsItem,
    InvisibleTitle,
    InvisibleDirection,
    InvisibleButton} from '../styles/Works';


const Works = ({ works: serverWorks }: WorksPage): JSX.Element => {
    const [activeClass, setActiveClass] = useState<string>('All');
    const [works, setWorks] = useState<IWorksKeys>(serverWorks);
    const [cards, setCards] = useState<Array<any>>(serverWorks ? serverWorks.cards : []);
    
    const filterWorks = (title: string): boolean | void => {
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

    const searchActive = (direction: string): string => {
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
            setCards(json.cards);
        }

        !serverWorks ? load() : null;
    }, [])


    if (!works) {
        return (
            <AppWrapper title='| Works'>
                <Loading>
                    <img src={loading} alt="loading..." />
                </Loading>
            </AppWrapper>
        )
    } else {
        return (
            <AppWrapper title="| Works">
                <WorksSort>
                    {works.directions.map(({ id, direction }: IPropsWorks) =>
                        <SortItem
                            key={id}
                            onClick={() => filterWorks(direction)}
                            activeClass={searchActive(direction)}
                            >{direction}
                        </SortItem>
                    )}
                </WorksSort>
                <WorksCards>
                    {cards.map(({ id, image, title, direction }: IPropsWorks) =>
                        <CardsItem key={id}>
                            <ItemImage width="23em">
                                <Image src={image} alt={title} unsized={true} />
                                <ItemInvisible
                                    worksProps
                                    height="99%"
                                    background="rgba(207, 0, 15, 0.7)"
                                >
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


Works.getInitialProps = async ({ req }: NextPageContext) => {
    if (!req) {
        return {works: null}
    }

    const response = await fetch(`${process.env.API_URL}/works`);
    const works: IWorksKeys = await response.json();

    return {
        works
    }
}