import Image from "next/image";
import traffic from "../../Assets/img/Image.png";
import Bcgimg from "../../Assets/img/lines.png";
import Frame from '../../Assets/img/Frame.png'

function Pricing() {
  return (
    <section className="pricing container">
      <div className="pricing_header">
        <div className="left_side_wrapper">
          <h1>
            Increase your business <span>traffic</span>{" "}
          </h1>
          <p>
            We are committed to processing the information in order to contact
            you and talk about your project.{" "}
          </p>
          <button>Learn More</button>
        </div>
        <div className="right_side_wrapper">
          <div className="pricing_img">
            <Image src={traffic} alt="img" />
          </div>
        </div>
      </div>
      <div className="bcg_img">
        <Image src={Bcgimg} alt="bcgimg" />
      </div>
      <div className="second_header">
          <h1> 3 Simple Ways To <span>Save</span> A Bunch</h1>
        <h1>
          Of <span>Money</span> When
          Buying A New Computer
        </h1>
        <p>
          Fully customizable and neatly organized components will help you work
          faster without limiting creative freedom.
        </p>
        <ul>
          <li>
            <h1>100+</h1>
            <p>5 Reasons To Purchase Desktop Computers</p>
          </li>
          <li>
            <h1>43,000+</h1>
            <p>
              3 Simple Ways To Save A Bunch Of Money When Buying A New Computer
            </p>
          </li>
          <li>
            <h1>30+</h1>
            <p>
              A Discount Toner Cartridge Is Better Than Ever And You Will Save
              50 Or More
            </p>
          </li>
        </ul>
      </div>
      <div className="third_header">
          <h1>Create your <span>next project</span> with startup framework</h1>
          <div className="get_start_btn">
          <button>Get Started</button>
          </div>
          <div className="frame">
              <Image src={Frame} alt="frame"/>
          </div>
      </div>
    </section>
  );
}

export default Pricing;
