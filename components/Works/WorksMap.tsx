import Image from 'next/image';

import { IPropsWorks, IWorksMap } from '../../interfaces/interface';

import { ItemImage, ItemInvisible } from '../../styles/Item';
import { 
    CardsItem,
    InvisibleTitle,
    InvisibleDirection,
    InvisibleText,
    InvisibleButton} from '../../styles/Works';


export const WorksMap = ({ cards, transformFront, handleTransform, transformBack }: IWorksMap) => {
    return (
        <>
        {cards.map(({ id, image, title, direction }: IPropsWorks) =>
            <CardsItem key={id}>
                <ItemImage width="23em">
                    <Image src={image} alt={title} unsized={true} />
                    <ItemInvisible
                        worksProps
                        worksPropsFront
                        transformFront={transformFront}
                        height="99%"
                        background="rgba(207, 0, 15, 0.7)"
                    >
                        <InvisibleTitle>{title}</InvisibleTitle>
                        <InvisibleDirection>{direction}</InvisibleDirection>
                        <InvisibleButton 
                            type="button" 
                            onClick={() => handleTransform(true)}
                        >View &gt;</InvisibleButton>
                    </ItemInvisible>
                    <ItemInvisible
                        worksProps
                        worksPropsBack
                        transformBack={transformBack}
                        height="99%"
                        background="rgba(215, 135, 25, 0.7)"
                    >
                        <InvisibleText>
                            This is {title} text
                        </InvisibleText>
                        <InvisibleButton 
                            type="button" 
                            onClick={() => handleTransform()}
                        >&#60; Back</InvisibleButton>
                    </ItemInvisible>
                </ItemImage>
            </CardsItem>
        )}
        </>
    )
}
