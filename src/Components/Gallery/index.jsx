import Image from "next/image"
import Firms from '../../Assets/img/Group.png'
import icon1 from '../../Assets/img/icon1.png'
import icon2 from '../../Assets/img/icon2.png'
import icon3 from '../../Assets/img/icon3.png'
import icon4 from '../../Assets/img/icon4.png'
import icon5 from '../../Assets/img/icon5.png'
import icon6 from '../../Assets/img/icon6.png'
function Gallery(){
    
    return(
        <section className="gallery ">
            <div className="container">
            <div className="firms">
                <Image src={Firms}/>
            </div>
            <div className="gallery_header">
            <h1>Your choice</h1>
            <p>There are many reasons to get down and start to get depressed about your situation.</p>
            </div>
            <ul className="gallery_items">
                <li>
                    <div className="item_header">
                        <div className="item_icon">
                            <Image src={icon1} alt="icon" />
                        </div>
                        <h1>Ecstatic elegance</h1>
                    </div>
                    <p>Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.</p>
                </li>
                <li>
                    <div className="item_header">
                        <div className="item_icon">
                            <Image src={icon2} alt="icon" />
                        </div>
                        <h1>Folly words widow</h1>
                    </div>
                    <p>Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.</p>
                </li>
                <li>
                    <div className="item_header">
                        <div className="item_icon">
                            <Image src={icon3} alt="icon" />
                        </div>
                        <h1>Possible procured trifling</h1>
                    </div>
                    <p>We me rent been part what. An concluded sportsman offending so provision mr education.</p>
                </li>
                <li>
                    <div className="item_header">
                        <div className="item_icon">
                            <Image src={icon4} alt="icon" />
                        </div>
                        <h1>Open game</h1>
                    </div>
                    <p>Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.</p>
                </li>
                <li>
                    <div className="item_header">
                        <div className="item_icon">
                            <Image src={icon5} alt="icon" />
                        </div>
                        <h1>Endeavor</h1>
                    </div>
                    <p>Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. </p>
                </li>
                <li>
                    <div className="item_header">
                        <div className="item_icon">
                            <Image src={icon6} alt="icon" />
                        </div>
                        <h1>Comfort pursuit</h1>
                    </div>
                    <p>Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.</p>
                </li>
            </ul>
            </div>
        </section>
    )
}

export default Gallery