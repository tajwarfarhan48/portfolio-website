import { FC } from 'react'

import Skill from './Skill';

import NodeJsSVG from 'static/svg/NodeJS-Logo.svg';
import CPlusPlusSVG from 'static/svg/CPlusPlus-Logo.svg';
import FlutterSVG from 'static/svg/Flutter-Logo.svg';
import JsSVG from 'static/svg/JS-Logo.svg';
import PythonSVG from 'static/svg/Python-Logo.svg';
import ReactSVG from 'static/svg/React-Logo.svg';

export type SkillInfo = {
    id: string,
    title: string,
    description: string,
    logo: string,
    alt: string
}

const SkillsGrid: FC = () => {
    const skills = [
        {
            id: "ReactJS",
            title: "ReactJS",
            description: 
                "I have developed several frontends with React, along with styled-components for styling, and Redux for complex state management. I also have experience hosting full-stack React+NodeJS applications on Fly.io, GitHub Pages, and many other platforms, along with devloping streamlined CI/CD pipelines. This website is one such project.",
            logo: ReactSVG,
            alt: "ReactJS Logo by Icons8"
        },

        {
            id: "Python",
            title: "Python",
            description: 
                "I have over 3 years of experience using Python for coursework, building websites using Django, and crafting machine learning models using scikit-learn, NumPy and Pandas. My Python projects include a car safety classification model, among several others.",
            logo: PythonSVG,
            alt: "Python Logo by Icons8"
        },

        {
            id: "C/C++",
            title: "C/C++",
            description: 
                "I have used C/C++ for more than 2 years for personal projects and coursework. I am proficient in dynamic memory allocation (malloc, alloc, realloc), implementing data structures and algorithms (stacks, queues, graphs, trees, Hamming Code, etc.), file I/O, and many other tasks in the C language. One of my most noteworthy C projects is a traffic simulation program.",
            logo: CPlusPlusSVG,
            alt: "C Plus Plus Logo by Icons8"
        },

        {
            id: "HTML, CSS & Javascript",
            title: "HTML, CSS & Javascript",
            description:
                "Over the past 2 years, I have developed various websites using HTML, CSS and JavaScript, including a tic-tac-toe website. I am also familiar with technologies such as Bootstrap and Tailwind CSS. I am comfortable with DOM manipulation, setting various types of event listeners, and querying elements by id, class, or tag type in JavaScript.",
            logo: JsSVG,
            alt: "Javascript Logo by Icons8"
        },

        {
            id: "Flutter",
            title: "Flutter",
            description:
                "I have used Flutter extensively to develop mobile applications. I also have experience connecting Flutter frontends to Firebase instances in order to integrate Google's Realtime Database functionality into my applications. My largest Flutter project is a fully-functioning Tic-Tac-Toe game designed for Android and iOS",
            logo: FlutterSVG,
            alt: "Flutter Logo by Icons8"
        },

        {
            id: "Express + MySQL/MongoDB",
            title: "Express + MySQL/MongoDB",            
            description: "I have made several NodeJS REST APIs using Express. I am skilled in connecting NodeJS backends to both MySQL and NoSQL (MongoDB) databases. I also have experience using Jest for running extensive backend tests to ensure smooth and fast CRUD operations.",
            logo: NodeJsSVG,
            alt: "Node.js logo by Icons8"
        }
    ]

    return (
        <div className="skillsGrid threeColGrid">
            { skills.map(s =>
                <Skill key={ s.id } skill={ s } />    
            ) }
        </div> 
    );
}
 
export default SkillsGrid;