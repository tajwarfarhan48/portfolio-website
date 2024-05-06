import styled from 'styled-components'

const SkillsStyles = styled.div`
    background-color: #252525;
    color: white;

    .skillsText {
        font-size: var( --fs-l );
        font-weight: 300;
        padding: 30px 15px 15px 15px;
    }

    .skillsGrid {
        .skill {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px 50px 15px 50px;

            .skillTitle {
                font-size: var( --fs-m );
                font-weight: 800;
                color: #ffd166;
            }

            .skillDescription {
                font-size: var( --fs-xxs );
                font-weight: 300;
                letter-spacing: 1.5px;
            }
        }
    }
`

export default SkillsStyles