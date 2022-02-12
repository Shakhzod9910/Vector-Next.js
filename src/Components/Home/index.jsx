import Image from "next/image"
import Vector from '../../Assets/img/Vector.png'
function About(){
    
    return(
       <section className="about container">
           <div className="left_header_wrapper">
                <h1>Many reasons to get up and start to get back in the business</h1>
                <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                <div className="buttons_wrapper">
                    <button className="learnBtn btn_learn">LEARN MORE</button>
                    <button className="learnBtn btn_demo">DEMO</button>
                </div>
                <div className="vidio">
                    
                     </video>
                    <div className="video-description">
                    <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                    <span>Watch preview</span>
                    </div>
                </div>
           </div>
           <div className="right_side_wrapper">
               <Image src={Vector} alt="vector"/>
           </div>
       </section>
    )
}

export default About
