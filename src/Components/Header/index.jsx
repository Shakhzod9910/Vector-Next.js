import Logo from "../../Assets/img/Logo.png"
import Image from "next/image"
import Menu from "../../Assets/img/menu.png"
import Back from "../../Assets/img/back.png"
import { useRef } from "react"

function Header(){
    const active = useRef(null)
    const x = useRef(null)
    const y = useRef(null)

    function menuActive(evt){
        active.current.classList.add('active')
        x.current.classList.add("orem")
        y.current.classList.add("xact")
    }
    function menuClose(evt){
        active.current.classList.remove('active')
        x.current.classList.remove("orem")
        y.current.classList.remove("xact")
    }
    return(
        <header className="container">
            <div className="navbar">
                <div className="nav">
                <div className="img">
                <Image className="logo" src={Logo} alt="Logo"/>
                </div>
                <ul ref={active}>
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
                    <div className="menu">
                        <div className="open" ref={x}><Image src={Menu} onClick={menuActive}/></div>
                        <div className="close" ref={y}><Image src={Back} onClick={menuClose}/></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
