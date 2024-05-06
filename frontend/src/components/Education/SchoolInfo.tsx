import { FC } from 'react'

import { SchoolProps } from './School';

const SchoolInfo: FC<SchoolProps> = ( { school }: SchoolProps ) => {
    return ( 
        <div className="schoolInfo flexCenter">
            <p className="schoolTitle">{ school.name }</p>
            <p className="schoolDegree">{ school.degree }</p>
            <p className="schoolLocation">{ school.location }</p>
            <p className="schoolDate">{ school.years }</p>
            <p className="schoolGPA">{ school.gpa }</p>
        </div>

        
     );
}
 
export default SchoolInfo;