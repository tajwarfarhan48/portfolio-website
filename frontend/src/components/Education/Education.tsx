import { FC } from 'react'

import SchoolsGrid from './SchoolsGrid';
import EducationStyles from './Education.styles'

const Education: FC = () => {
    return ( 
        <EducationStyles className="section" id='education'>
            <div className="educationText centerText">
                My Education
            </div>

            <SchoolsGrid />
        </EducationStyles>
     );
}
 
export default Education;