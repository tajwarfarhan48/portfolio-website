import { FC } from 'react'

import ContactGrid from './ContactGrid';
import EmailPNG from 'static/img/Email Logo.png';
import ContactStyles from './Contact.styles'

const Contact: FC = () => {
    return ( 
        <ContactStyles className="section" id='contact'>
            <div className="contact">
                <p className="contactHeading centerText">Contact Me</p>
                <div className="emailDiv flexCenter">
                    <img className="emailImage inline" src={ EmailPNG } alt="Email Logo" width="20" height="20" />
                    <p className="emailText inline">farhantajwar.romit@my.utsa.edu</p>
                </div>
                <p className="invitation centerText">...or use this form!</p>
                <ContactGrid />
            </div>
        </ContactStyles>
     );
}
 
export default Contact;