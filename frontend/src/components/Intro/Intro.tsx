import { FC } from 'react'

import IntroText from './IntroText'
import IntroStyles from './Intro.styles'

const Intro: FC = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return ( 
        <div style={ style }>
        <IntroStyles>
            <IntroText />
            
            <div className="introPicContainer">
                <div className="introPic"></div>
            </div>
        </IntroStyles>
        </div>
     );
}
 
export default Intro;