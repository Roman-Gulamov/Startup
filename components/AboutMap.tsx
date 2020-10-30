import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faVk, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

import { AboutPage } from '../interfaces/interface';
import { DevelopersItem, ItemImage, ItemInvisible, InvisibleLink, ItemName, ItemPosition } from '../styles/About';


export const AboutMap = ({ about }) => {
    return (
        <>
        {about.team.map(({ id, image, name, position, social }) =>
            <DevelopersItem key={id}>
                <ItemImage>
                    <Image src={image} alt={name} unsized={true} />
                    <ItemInvisible>
                        <InvisibleLink>
                            <a href={`https://www.facebook.com/${social}`}>
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                        </InvisibleLink>
                        <InvisibleLink>
                            <a href={`https://twitter.com/${social}`}>
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                        </InvisibleLink>
                        <InvisibleLink>
                            <a href={`https://vk.com/${social}`}>
                                <FontAwesomeIcon icon={faVk} size="lg" />
                            </a>
                        </InvisibleLink>
                        <InvisibleLink>
                            <a href={`https://www.linkedin.com/in/${social}`}>
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
