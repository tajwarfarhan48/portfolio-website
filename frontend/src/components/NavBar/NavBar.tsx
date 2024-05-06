import { FC, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

import { debounce } from 'utils/debounce'
import { setVisibility, setPrevScroll, setExpanded } from 'features/navbar/navbar-slice'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import NavBarStyles from './NavBar.styles'

const NavBar: FC = () => {
    const dispatch = useAppDispatch()
    const prevScroll = useAppSelector( state => state.navBar.prevScroll )
    const visible = useAppSelector( state => state.navBar.visible )
    const expanded = useAppSelector( state => state.navBar.expanded )

    const handleScroll = debounce( () => { 
        const curScroll = window.scrollY

        // Scroll Down
        if ( curScroll > prevScroll ) {
            dispatch( setVisibility( curScroll < prevScroll || curScroll < 10 ) )
            dispatch( setPrevScroll( curScroll ) )
        }

        // Scroll Up
        else if ( curScroll < prevScroll ) {
            if ( curScroll < 10 ) {
                dispatch( setVisibility( true ) )
                dispatch( setPrevScroll( curScroll) )
            }

            if ( prevScroll - curScroll > 100 ) {
                dispatch( setVisibility( true ) )
                dispatch( setPrevScroll( curScroll ) )
            }
        }

     }, 10 )

    const handleActive = () => {
        const navLinkTop = document.querySelectorAll( '.navLink' )
        const navLinkOverlay = document.querySelectorAll( '.navLink-overlay' )
        const sections = document.querySelectorAll( '.section' )

        let len = sections.length 

        while( --len && window.scrollY + 300 < ( sections[len] as HTMLElement )!.offsetTop ){}

        navLinkTop.forEach( elem => elem.classList.remove( 'active' ) )
        navLinkOverlay.forEach( elem => elem.classList.remove( 'active' ) )

        if ( window.scrollY + 300 >= ( sections[len] as HTMLElement )!.offsetTop ) {
            navLinkTop[len]?.classList.add( 'active' )
            navLinkOverlay[len]?.classList.add( 'active' )
        }
    }

    const handleActiveDebounce = debounce( handleActive, 5 )

    const handleClick =  () => {
        dispatch( setExpanded( !expanded ) )
        handleActive()
    }

    useEffect( () => { 
        window.addEventListener( 'scroll', handleActiveDebounce )
        window.addEventListener( 'scroll', handleScroll )

        handleActive() 

        return () => { 
            window.removeEventListener( 'scroll', handleScroll ) 
            window.removeEventListener( 'scroll', handleActiveDebounce )
        }
     }, [ visible, prevScroll, handleScroll, handleActiveDebounce ] )

    if ( expanded ) {
        document.getElementsByTagName('html')[0]!.classList.add('expanded')
    }

    else {
        document.getElementsByTagName('html')[0]!.classList.remove('expanded')
    }

    return ( 
        <NavBarStyles style={ { top: visible ? '10px' : '-60px' } }>
            <div className="navBar">
                <p className="navBarLeft">Farhan Tajwar Romit</p>
                <div className="navLinks">
                    <a className="navLink" href="#skills">Skills</a>
                    <a className="navLink" href="#projects">Projects</a>
                    <a className="navLink" href="#education">Education</a>
                    <a className="navLink" href="#contact">Contact Me</a>
                    <a target="_blank" rel="noreferrer" className="navLink" href="https://github.com/tajwarfarhan48">GitHub</a>
                    <a target="_blank" rel="noreferrer" className="navLink" href="https://www.linkedin.com/in/ftr01">LinkedIn</a>
                </div>
                <button className="nav-open-btn" onClick={ handleClick }><FaBars /></button>
            </div>

            <AnimatePresence>
                { expanded && ( 
                    <motion.div
                        initial={{
                            y: -1000
                        }}

                        animate={{
                            y: 0,
                            transition:{
                                duration: 0.3
                            }
                        }}

                        exit={{
                            y: -1000,
                            transition:{
                                duration: 0.3
                            }
                        }}

                        className="nav-overlay"
                    >
                        <button className="nav-close-btn" onClick={ handleClick }><FaTimes /></button>
                        <a className="navLink-overlay" href="#skills" onClick={ handleClick }>Skills</a>
                        <a className="navLink-overlay" href="#projects" onClick={ handleClick }>Projects</a>
                        <a className="navLink-overlay" href="#education" onClick={ handleClick }>Education</a>
                        <a className="navLink-overlay" href="#contact" onClick={ handleClick }>Contact Me</a>
                        <a className="navLink-overlay" target="_blank" rel="noreferrer" href="https://github.com/tajwarfarhan48">GitHub</a>
                        <a className="navLink-overlay" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ftr01">LinkedIn</a>
                    </motion.div>
                ) }
            </AnimatePresence>
        </NavBarStyles>
     );
}
 
export default NavBar;