import { SkillInfo } from "./SkillsGrid";

const SKILL_LOGO_SIZE = 200; // Determines the size of the skill logo

type Props = {
    skill: SkillInfo
}

const Skill = ( { skill }: Props ) => {
    return ( 
        <div className="skill">
            <div className="skillLogo">
                <img 
                    src={ skill.logo }
                    width={ SKILL_LOGO_SIZE }
                    height={ SKILL_LOGO_SIZE }
                    alt={ skill.alt }
                />
            </div>
            <p className="skillTitle centerText">{ skill.title }</p>
            <p className="skillDescription centerText">{ skill.description }</p>
        </div>
     );
}
 
export default Skill;