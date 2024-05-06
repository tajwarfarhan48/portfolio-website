import { FC } from 'react'

const IntroText: FC = () => {
    return ( 
        <div className="introText">
            <p className="introTitle">A little bit about me...</p>

            <div className="introPreambles">
                <p className="introPreamble">I'm a sophomore CS major at UTSA with a passion for web development and machine learning. I want to create projects that have a meaningful impact on other people's lives and make them go, "Hmm, I didn't know you could do that with tech."</p>

                <p className="introPreamble">Notable highlights of my life include a serene trip to Maldives I will never forget, representing my country Bangladesh in the World Schools Debating Championship, and getting to pursue a university education thousands of miles away from home.</p>

                <p className="introPreamble">In my free time, you can either see me huddled in my room binging One Piece, playing some ukulele chords way off-tune, or cooking up something delicious in the kitchen.</p>
            </div>
            
        </div>
     );
}
 
export default IntroText;