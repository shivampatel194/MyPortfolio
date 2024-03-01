import React from 'react'
import './skills.css'
import mobileAppIcon from '../../assets/mobileapp.png'
import webIcon from '../../assets/webdesign.png'
import backendIcon from '../../assets/backend.png'
import uiIcon from '../../assets/uidesign.png'



const Skills = () => {
  return (
    <section className='skills'>
        <span className='wid'>What i can do</span> <br/> 
        <span className='para'> "I have a solid background in both frontend and backend technologies and am a versatile developer. With a strong foundation in Flutter, my area of expertise lies in developing cross-platform mobile applications that prioritize providing captivating and intuitive user experiences. My vast experience with Node.js on the backend ensures dependable and expandable server-side solutions. I use React.js's power as a frontend developer to make user interfaces that are both aesthetically pleasing and intuitive. I approach application development holistically, with a passion for creating seamless digital experiences and an acute eye for detail."</span>
        <br/>
        <div className='fullSkillBox'>
            <div className='skillsBox'>
                <img className='skillImg' src={mobileAppIcon} alt='mobileAppIcon'></img>
                <div className='skillBar'>
                    <span className='skillTitle'>Mobile Application Development</span>
                    <span className='skillDes'>I am a seasoned Flutter developer with one year of hands-on experience in crafting dynamic and efficient mobile applications. My expertise lies in seamlessly integrating various APIs and implementing robust data management using Data Structures and Algorithms. Through my work, I have demonstrated a strong proficiency in Flutter framework, ensuring the delivery of high-quality, performance-driven apps that meet both user and business requirements.</span>
                </div>
            </div>

            <div className='skillsBox'>
                <img className='skillImg' src={webIcon} alt='webIcon'></img>
                <div className='skillBar'>
                    <span className='skillTitle'>Web Development</span>
                    <span className='skillDes'>Experienced web designer proficient in React.js, HTML, and CSS, with a keen eye for creating visually appealing and user-friendly interfaces. Leveraging a deep understanding of front-end development, I specialize in crafting responsive and engaging web designs that seamlessly integrate with React.js for optimal user experiences.</span>
                </div>
            </div>
            
            <div className='skillsBox'>
                <img className='skillImg' src={backendIcon} alt='backend'></img>
                <div className='skillBar'>
                    <span className='skillTitle'>Back-End Developer</span>
                    <span className='skillDes'>Seasoned backend developer with expertise in Node.js, specializing in the creation of robust APIs and proficient data management using MongoDB. My skill set includes architecting scalable and efficient backend solutions, ensuring seamless communication between servers and databases. Through extensive experience, I have demonstrated a commitment to delivering high-performance and reliable backend systems to meet diverse project requirements.</span>
                </div>
            </div>

            <div className='skillsBox'>
                <img className='skillImg' src={uiIcon} alt='uiIcon'></img>
                <div className='skillBar'>
                    <span className='skillTitle'>UI/UX Design</span>
                    <span className='skillDes'>Versatile UI/UX designer skilled in crafting engaging and intuitive experiences for both mobile and desktop platforms. Proficient in utilizing Figma, I bring creativity and attention to detail to every design project. My work focuses on delivering aesthetically pleasing interfaces that prioritize user experience, resulting in visually compelling and user-friendly applications.</span>
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default Skills