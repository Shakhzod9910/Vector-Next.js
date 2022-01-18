import Image from "next/image";
import Google from "../../Assets/img/Google.png";
import Twitter from "../../Assets/img/Twitter.png";
import Facebook from "../../Assets/img/Facebook.png";

function Contact() {
  return (
    <section className="contact">
      <div className="send_mail container">
        <h1>There are many reasons to get down</h1>
        <p>
          There are many reasons to get down and start to get depressed about
          your situation.{" "}
        </p>
        <div className="sender">
          <input type="text" placeholder="Your Email" />
          <button>Send</button>
        </div>
        <p>No spam. Only releases, updates and discounts</p>
      </div>
      <div className="footer">
        <div className="massagers container">
          <h1>ARShakir</h1>
          <ul>
            <li>
              <Image src={Google} alt="google" />
            </li>
            <li>
              <Image src={Twitter} alt="Twitter" />
            </li>
            <li>
              <Image src={Facebook} alt="Facebook" />
            </li>
          </ul>
        </div>
        <div className="pagenation container">
          <ul>
            <li>
              <h1>First</h1>
              <ul>
                <li>First page</li>
                <li>Second page</li>
                <li>Third page</li>
                <li>Fourth page</li>
              </ul>
            </li>
            <li>
              <h1>Second</h1>
              <ul>
                <li>First page</li>
                <li>Second page</li>
                <li>Third page</li>
                <li>Fourth page</li>
              </ul>
            </li>
            <li>
              <h1>Third</h1>
              <ul>
                <li>First page</li>
                <li>Second page</li>
                <li>Third page</li>
                <li>Fourth page</li>
              </ul>
            </li>
            <li>
              <h1>Fourth</h1>
              <ul>
                <li>First page</li>
                <li>Second page</li>
                <li>Third page</li>
                <li>Fourth page</li>
              </ul>
            </li>
          </ul>
          <div className="by">
            <ul>
              <li>© Copyrights 2022</li>
              <li>Terms of service</li>
              <li>Shakhzodbek</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
