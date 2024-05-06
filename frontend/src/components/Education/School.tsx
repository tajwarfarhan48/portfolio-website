import { FC } from 'react'

import SchoolInfo from './SchoolInfo';

import { SchoolInfoType } from './SchoolsGrid';

export type SchoolProps = {
    school: SchoolInfoType
}

const School: FC<SchoolProps> = ( { school }: SchoolProps ) => {
    return ( 
        <div className="school">
            <div className="schoolLogoContainer flexCenter">
                <img 
                    src={ school.image }
                    alt="School"
                    className="schoolLogo" 
                /> 
            </div>

            <SchoolInfo school={ school }/>
        </div>
     );
}
 
export default School;