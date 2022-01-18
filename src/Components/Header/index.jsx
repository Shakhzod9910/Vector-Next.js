import Logo from "../../Assets/img/Logo.png"
import Image from "next/image"
function Header(){
    
    return(
        <header className="container">
            <div className="navbar">
                <div className="nav">
                <div className="img">
                <Image className="logo" src={Logo} alt="Logo"/>
                </div>
                <ul>
                    <li>ABOUT</li>
                    <li>GALLERY</li>
                    <li>PRICING</li>
                    <li>FAQ</li>
                    <li>BENIFITS</li>
                </ul>
                </div>
                <div className="log_buttons">
                    <button className="sign_btn sign_in">SIGN IN</button>
                    <button className="sign_btn sign_up">SIGN UP</button>
                </div>
            </div>
        </header>
    )
}

export default Header