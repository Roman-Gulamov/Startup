import { useEffect, useState } from 'react';

import { AppWrapper } from '../components/AppWrapper';
import { WorksMap } from '../components/Works/WorksMap';
import searchActive from '../components/Works/searchActive';

import { NextPageContext } from 'next';
import { WorksPage, IWorksKeys, IPropsWorks } from '../interfaces/interface';

import loading from '../assets/loading.svg';
import { Loading } from '../styles/Loading';
import { 
    WorksSort,
    SortItem,
    WorksCards } from '../styles/Works';


const Works = ({ works: serverWorks }: WorksPage): JSX.Element => {
    const [activeClass, setActiveClass] = useState<string>('All');
    const [works, setWorks] = useState<IWorksKeys>(serverWorks);
    const [cards, setCards] = useState<Array<any>>(serverWorks ? serverWorks.cards : []);
    const [transformFront, setTransfromFront] = useState<string>('360deg');
    const [transformBack, setTransfromBack] = useState<string>('180deg');


    useEffect(() => {
        const load = async () => {
            const response = await fetch(`${process.env.API_URL}/works`);
            const json = await response.json();
            setWorks(json);
            setCards(json.cards);
        }

        !serverWorks ? load() : null;
    }, [])

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
    
    const handleTransform = (side: boolean) => {
        if (side) {
            setTransfromFront('180deg');
            setTransfromBack('360deg');
        } else {
            setTransfromFront('360deg');
            setTransfromBack('180deg');
        }
    }


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
                            activeClass={searchActive(direction, activeClass)}
                            >{direction}
                        </SortItem>
                    )}
                </WorksSort>
                <WorksCards>
                    <WorksMap 
                        cards={cards}
                        transformFront={transformFront}
                        handleTransform={handleTransform}
                        transformBack={transformBack}
                    />
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