import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faVk, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

import { AboutPage, IAboutTeam } from '../interfaces/interface';
import { ItemImage, ItemInvisible } from '../styles/Item';
import { 
    DevelopersItem, 
    InvisibleLink, 
    ItemName, 
    ItemPosition } from '../styles/About';


export const AboutMap = ({ about }: AboutPage): JSX.Element => {
    return (
        <>
        {about.team.map(({ id, image, name, position, social }: IAboutTeam) =>
            <DevelopersItem key={id}>
                <ItemImage width="17em">
                    <Image src={image} alt={name} unsized={true} />
                    <ItemInvisible
                        aboutProps
                        height="98.6%"
                        background="rgba(0, 0, 0, 0.3)"
                    >
                        <InvisibleLink>
                            <a href={`https://www.facebook.com/${social}`} target="_blank">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                        </InvisibleLink>
                        <InvisibleLink>
                            <a href={`https://twitter.com/${social}`} target="_blank">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                        </InvisibleLink>
                        <InvisibleLink>
                            <a href={`https://vk.com/${social}`} target="_blank">
                                <FontAwesomeIcon icon={faVk} size="lg" />
                            </a>
                        </InvisibleLink>
                        <InvisibleLink>
                            <a href={`https://www.linkedin.com/in/${social}`} target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                        </InvisibleLink>
                    </ItemInvisible>
                </ItemImage>
                <ItemName>{name}</ItemName>
                <ItemPosition>{position}</ItemPosition>
            </DevelopersItem>
        )}
        </>
    )
}
