import { Link } from 'react-router-dom';
import arrow from '../assets_3d_portfolio/assets/icons/arrow.svg'


const InfoBox = ({ text, link, btnText }) => {
    return(
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'></img>
        </Link>
    </div>
    )
}

const renderContent = {
    1: (
        <h1 className="sm:text-lg text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi! I am <span className="font-semibold">Aayush Soni</span> 👋
            <br /> A software engineering grad student at Northeastern University.
        </h1>
    ),
    2: (
        <h1><InfoBox 
            text="Worked with numerous technologies and learned a lot in the process." 
            link="/about" 
            btnText="Learn more about me.">
        </InfoBox></h1>
    ),
    3: (
        <h1><InfoBox 
            text="Worked on multiple interesting projects over the years. Curious about them?" 
            link="/projects" 
            btnText="Check them out here!">
        </InfoBox></h1>
    ),
    4: (
        <h1><InfoBox 
            text="Need a fervid coworker for a project or looking for a developer?" 
            link="/contact" 
            btnText="Let's connect!">
        </InfoBox></h1>
    ),
}



const HomeInfo = ({ currentStage }) => {
    return (
        renderContent[currentStage] || null
    )
}

export default HomeInfo