import { FC } from 'react'

import School from './School';
import UTSALogo from 'static/img/UTSA-Logo.png'
import MMLogo from 'static/img/MM-Logo.png'

export type SchoolInfoType = {
    id: string,
    image: string,
    name: string,
    degree: string,
    location: string,
    years: string,
    gpa: string 
}

const SchoolsGrid: FC = () => {
    const schools = [
        {
            id: "UTSA",
            image: UTSALogo,
            name: "University of Texas at San Antonio",
            degree: "B.Sc. in Computer Science",
            location: "San Antonio, Texas, USA",
            years: "2021 - 2025",
            gpa: "Current GPA: 3.98"
        },

        { 
            id: "MM",
            image: MMLogo,
            name: "Mastermind School",
            degree: "High School",
            location: "Dhaka, Bangladesh",
            years: "2008 - 2021",
            gpa: "Graduating GPA: 4.00"
        }
    ]

    return ( 
        <div className="schoolsGrid twoColGrid" id="schoolsGrid">
            { schools.map( s =>
                <School key={ s.id } school={ s } />
            ) }
        </div>
     );
}
 
export default SchoolsGrid;