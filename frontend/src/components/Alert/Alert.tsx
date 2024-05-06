import { useEffect, FC } from 'react'
import ReactDOM from 'react-dom'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { hideAlert } from 'features/alert/alert-slice'
import { AlertType } from 'features/alert/alert-slice'
import AlertStyles from './Alert.styles'

const Alert: FC = () => {
    const visible = useAppSelector( state => state.alert.visible )
    const type = useAppSelector( state => state.alert.type )
    const message = useAppSelector( state => state.alert.message )
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch( hideAlert() )
    }

    useEffect( () => {
        let timerID: NodeJS.Timeout = setTimeout( () => {
            dispatch( hideAlert() )
        }, 3000 )

        return () => { clearTimeout( timerID ) }
    } )

    const typeName = type === AlertType.Success ? 'success' : 'failure'
    const fade = visible ? 'fade-in' : 'fade-out'
    const cName = `alertBox ${typeName} ${fade}`

    return ReactDOM.createPortal(
            <AlertStyles>
                    <div className={ cName }>
                        <p className="alertMessage">{ message }</p>
                        <button className="alertButton" onClick={ handleClick }>X</button>
                    </div>
            </AlertStyles>, 
            document.getElementById('alert-portal-root')!
    )
}

export default Alert