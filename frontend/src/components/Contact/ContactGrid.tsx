import { FC, FormEventHandler } from 'react'
import axios from 'axios'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { triggerFailureAlert, triggerSuccessAlert } from 'features/alert/alert-slice'
import { setName, setEmail, setMessage } from 'features/contact/contact-slice'

const ContactGrid: FC = () => {
    const dispatch = useAppDispatch()
    const name = useAppSelector( state => state.contact.name )
    const email = useAppSelector( state => state.contact.email )
    const message = useAppSelector( state => state.contact.message )

    const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()

        const reEmail = /^[\w!.#$%&'*+/=?`{|}~^-]+@[\w!.#$%&'*+/=?`{|}~^-]+.[A-z]{2,6}$/
        const reOthers = /^[^<>]+$/
        
        if ( reEmail.exec( email ) && reOthers.exec( name ) && reOthers.exec( message ) ) {
            document.getElementById( 'emailField' )?.classList.remove( 'error' )

            let emailURL = '/'

            console.log( process.env )

            if ( process.env.REACT_APP_MODE === 'testing' )
                emailURL = 'http://localhost:3001/'

            console.log( emailURL )

            axios
                .post( emailURL, {
                theNameText: name,
                theEmailText: email,
                theMessageText: message
            } )
                .then( _ => { 
                    dispatch( triggerSuccessAlert( 'Message Sent!' ) ) 
                    dispatch( setName( '' ) )
                    dispatch( setEmail( '' ) )
                    dispatch( setMessage( '' ) )
                } )
                .catch( _ => { 
                    console.log(_)
                    dispatch( triggerFailureAlert( 'Could not send message. Please try again.' ) )
                } )
        }

        else if ( !reOthers.exec( name ) ) {
            const nameField = document.getElementById( 'nameField' )

            nameField?.classList.add( 'error' )
            nameField?.focus()
            dispatch( triggerFailureAlert( 'Please do not use the following characters in the name field: "<", ">"' ) )
        }
        
        else if ( !reEmail.exec( email ) ) {
            const emailField = document.getElementById( 'emailField' )

            emailField?.classList.add( 'error' )
            emailField?.focus()
            dispatch( triggerFailureAlert( 'Please enter a valid email' ) )
        }

        else if ( !reOthers.exec( message ) ) {
            const messageField = document.getElementById( 'messageField' )

            messageField?.classList.add( 'error' )
            messageField?.focus()
            dispatch( triggerFailureAlert( 'Please do not use the following characters in the message field: "<", ">"' ) )
        }
    }

    return ( 
        <form onSubmit={ handleSubmit }>
            <div className="contactGrid">
                
                <div className="name formSpacing">
                    <label htmlFor="nameField" className="fieldLabel nameLabel block"><p className="inline-block">Name</p><p className="redText">*</p></label>
                    <input required id="nameField" className="nameField formWidth" value={ name } onChange={ e => { 
                        e.target.classList.remove( 'error' )
                        dispatch( setName( e.target.value ) ) 
                    } } />
                </div>

                <div className="email formSpacing">
                    <label htmlFor="emailField" className="fieldLabel emailLabel block"><p className='inline-block'>Email</p><p className="redText">*</p></label>
                    <input required id="emailField" className="emailField formWidth" value={ email } onChange={ e => {
                        e.target.classList.remove( 'error' )
                        dispatch( setEmail( e.target.value ) )
                    } } />
                </div>

                <div className="message formSpacing">
                    <label htmlFor="messageField" className="fieldLabel messageName block"><p className='inline-block'>Message</p><p className="redText">*</p></label>
                    <textarea required id="messageField" className="messageField formWidth" value={ message } onChange={ e => {
                        e.target.classList.remove( 'error' )
                        dispatch( setMessage( e.target.value ) ) 
                    } } />
                </div>

            </div>
            <button className="submitButton" type="submit">Submit</button>
        </form>
     );
}
 
export default ContactGrid;