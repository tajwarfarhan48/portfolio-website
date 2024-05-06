import { FC } from 'react'

import GithubSVG from 'static/svg/Github-Logo.svg';
import LinkedinSVG from 'static/svg/Linkedin-Logo.svg';

const HERO_ICON_SIZE = 40; // Determines the size of the Hero icons

type IconInfo = {
    id: string,
    cName: string,
    href: string,
    src: string,
    alt: string, 
}

type Props = {
    icon: IconInfo
}

const HeroIcon = ({ icon }: Props) => (
    <a className={ icon.cName } target="_blank" href={ icon.href } rel="noreferrer">
        <img 
            src={ icon.src } 
            width={ HERO_ICON_SIZE }
            height={ HERO_ICON_SIZE }
            alt={ icon.alt } 
        />
    </a>
)

const HeroIconRow: FC = () => {
    const heroIcons = [
        {
            id: "heroGithubLogo",
            cName: "heroIcon heroGithubLogo", 
            href: "https://github.com/tajwarfarhan48",
            src: GithubSVG,
            alt: "Github Logo by Icons8"
        },

        {
            id: "heroLinkedinLogo",
            cName: "heroIcon heroLinkedinLogo",
            href: "https://www.linkedin.com/in/ftr01",
            src: LinkedinSVG,
            alt: "Linkedin Logo by Icons8"
        }
    ]

    return ( 
        <div className="heroIconRow">
            { heroIcons.map(i =>
                <HeroIcon key={ i.id } icon={ i } />
            ) }
        </div>
     );
}
 
export default HeroIconRow;