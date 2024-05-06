import { FC } from 'react'

import FooterStyles from './Footer.styles'

const Footer: FC = () => {
    return ( 
        <FooterStyles id="footer">
            <p><a target="_blank" rel="noreferrer" href="https://icons8.com">Icons by Icons8</a></p>
            <p><a target="_blank" rel="noreferrer" href="https://github.com/tajwarfarhan48">My GitHub</a></p>
            <p><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ftr01">My LinkedIn</a></p>
        </FooterStyles>
     );
}
 
export default Footer;