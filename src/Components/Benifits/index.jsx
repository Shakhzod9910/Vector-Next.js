import Image from "next/image";
import Benifit from "../../Assets/img/benifit.png";
import Map from "../../Assets/img/MaskGroup.png";
import Group from "../../Assets/img/Groupt.png";
import Knife from '../../Assets/img/knife.png'
import Net from '../../Assets/img/icon7.png'
import Right from '../../Assets/img/linesright.png'

function Benifits() {
  return (
    <section className="benifits container">
      <div className="benifit_header">
        <div className="left_side_wrapper">
          <h1>
            Invest property for better <span>business</span>
          </h1>
          <p>
            We are committed to processing the information in order to contact
            you and talk about your project. We are committed to processing the
            information.
          </p>
          <button>Learn More</button>
        </div>
        <div className="right_side_wrapper">
          <div className="benifit_img">
            <Image src={Benifit} />
          </div>
          <div className="bcg_map">
            <Image src={Map} />
          </div>
        </div>
      </div>
      <div className="group">
        <div className="left_side_wrapper">
          <div className="group_img">
            <Image src={Group} />
          </div>
        </div>
        <div className="right_side_wrapper">
          <h1 className="h1">Help Finding Information Online</h1>
          <p className="p">
            Fully customizable and neatly organized components will help you
            work faster without limiting creative freedom.
          </p>
          <ul>
              <li>
                  <div className="icon">
                      <Image src={Knife} alt="icon"/>
                  </div>
                  <h1>Feature One</h1>
                  <p>Fully customizable and neatly organized components will help you work faster </p>
              </li>
              <li>
                  <div className="icon">
                      <Image src={Net} alt="icon"/>
                  </div>
                  <h1>Feature Two</h1>
                  <p>Fully customizable and neatly organized components will help you work faster </p>
              </li>
          </ul>
          <div className="bcg_right">
              <Image src={Right}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benifits;
