import { FC } from 'react'

import TicTacToeImage from 'static/img/Tic-Tac-Toe-Image.jpeg'
import CallToActionImage from 'static/img/Call-To-Action-Image.png'
import CarImage from 'static/img/Car-Image.jpeg'
import WWImage from 'static/img/WW_Picture.png'
import TrafficImage from 'static/img/Traffic-Image.jpeg'
import MastermindImage from 'static/img/Mastermind-Image.jpg' 
import ProgrammingLanguageImage from 'static/img/Programming-Language-Image.png'

import Project from './Project';

export type ProjectInfo = {
    id: string,
    title: string,
    caption: string,
    description: string,
    image: string,
    githubLink: string,
    devpost: boolean,
    devpostLink: string | null,
    pypi: boolean,
    pypiLink: string | null
}

const ProjectsGrid: FC = () => {
    const projects = [
        {
            id: 'project1',
            title: "Cicinlang",
            caption: "A general-purpose, procedural, interpreted programming language written in Python",
            description: "Cicinlang is a programming language written from scratch using Python that supports loops, conditional statements, variables, and functions (including partial support for anonymous functions). The interpreter for this language has been published to the Python Package Index, and so can be installed and used by anyone around the world using pip. For language documentation and instructions on how to use the language, visite the project GitHub or PyPI entry.",
            image: ProgrammingLanguageImage,
            githubLink: 'https://github.com/tajwarfarhan48/cicinlang',
            devpost: false,
            devpostLink: null,
            pypi: true,
            pypiLink: 'https://pypi.org/project/cicinlang/'
        },

        {
            id: 'project2',
            title: "Car Safety Classification",
            caption: "A machine learning model to rate car safety",
            description: "A machine learning model made using Python (sklearn, pandas and matplotlib) that uses decision tree classification and K-Nearest-Neighbors classification to predict the acceptability of a car based on a number of input factors (price, capacity,estimated safety, etc.) For more detailed information on the project and source code, please visit the project GitHub",
            image: CarImage,
            githubLink: 'https://github.com/tajwarfarhan48/car_safety_classification',
            devpost: false,
            devpostLink: null,
            pypi: false,
            pypiLink: null
        },

        {
            id: 'project3',
            title: "Mastermind Game Bot",
            caption: "A Python game bot to crack Mastermind",
            description: "Mastermind is a two-player code-cracking game invented in 1970. This bot can crack any code in the 4-peg, 8-color version of Mastermind in around 5 moves using Donald Knuth's Five-Guess Algorithm. More information on the rules of Mastermind and the Five-Guess algorithm can be found on the project GitHub.",
            image: MastermindImage,
            githubLink: 'https://github.com/tajwarfarhan48/mastermind_bot',
            devpost: false,
            devpostLink: null,
            pypi: false,
            pypiLink: null
        },

        {
            id: 'project4',
            title: "Call To Action",
            caption: "An elegant customer service solution",
            description: "This is a project made by my team at HackED 2023, a hackathon hosted by the University of Alberta. It is a browser extension made primarily using React and Plasmo, which intelligently embeds itself into Servus Credit Union's existing website to improve the online customer service experience.\n\nThe Servus Call to Action widget won the Servus Financial Award at the hackathon.\n\nFor a detailed description of the project, including all the members who worked on it,please visit the project DevPost. For the source code, visit the project GitHub",
            image: CallToActionImage,
            githubLink: 'https://github.com/johnmwilburn/Servus-Call-To-Action-JuntoHacks-',
            devpost: true,
            devpostLink: 'https://devpost.com/software/servus-call-to-action',
            pypi: false,
            pypiLink: null
        },

        {
            id: 'project5',
            title: "Who's Where?",
            caption: "A proprietary algorithm for office space allocation",
            description: "A project made by our team for TAMUhack 2023. This is a proprietary algorithm that uses machine-learning optimizations to arrange teams of employees into office floors, taking into consideration space constraints and teams' preferences for each other (in order to place compatible teams closer together).\n\nThe Who's Where? project won the CBRE Sponsor Track at TAMUhack 2023.\n\nFor more information about the project, please visite the project DevPost. For the source code, visit the project GitHub.",
            image: WWImage,
            githubLink: 'https://github.com/johnmwilburn/CBRE',
            devpost: true,
            devpostLink: 'https://devpost.com/software/who-s-where?',
            pypi: false,
            pypiLink: null 
        },

        {
            id: 'project6',
            title: "Traffic Simulator",
            caption: "A C program that simulates traffic flow",
            description: "This project was for one of my university courses. It is a traffic simulator which tries to replicate the flow of traffic through a city. It takes into account factors such as gridlocks and limited road spaces. A more thorough description of the project and the source code can be found on the project GitHub.",
            image: TrafficImage,
            githubLink: 'https://github.com/tajwarfarhan48/traffic_simulator',
            devpost: false,
            devpostLink: null,
            pypi: false,
            pypiLink: null
        },

        {
            id: 'project7',
            title: "Tic-Tac-Toe",
            caption: "A simple Flutter game",
            description: "A Tic Tac Toe game made using Flutter. The game offers options to keep score between two players, restart a round, or reset all points.\n\nFor game screenshots and source code, please visit the project GitHub",
            image: TicTacToeImage,
            githubLink: 'https://github.com/tajwarfarhan48/tic_tac_toe_flutter',
            devpost: false,
            devpostLink: null,
            pypi: false,
            pypiLink: null
        },
    ]

    return ( 
        <div className="projectsGrid threeColGrid">
            {projects.map(p =>
               <Project key={ p.id } project={ p } />
            )}
        </div>
     );
}
 
export default ProjectsGrid;