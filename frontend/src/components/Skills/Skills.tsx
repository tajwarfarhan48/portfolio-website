import { FC } from 'react'

import SkillsGrid from './SkillsGrid';
import SkillsStyles from './Skills.styles'

const Skills: FC = () => {
    return ( 
        <SkillsStyles className="section" id='skills'>
            <div className="skillsText centerText">
                My Skills
            </div>

            <SkillsGrid />
        </SkillsStyles>
     );
}
 
export default Skills;