import { FC } from 'react'

import HeroIconRow from './HeroIconRow'
import HeroStyles from './Hero.styles'

const Hero: FC = () => {
    return ( 
        <HeroStyles>
            <div className="profilePicture"></div>

            <div className="heroText">
                <h1 className="heroTitle">HEY THERE</h1>
                <p className="heroDescription">I'm Farhan, and I like making stuff</p>
                <HeroIconRow />
            </div>
        </HeroStyles>
    )
}
 
export default Hero;