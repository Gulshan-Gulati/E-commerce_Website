import { useNavigate } from "react-router-dom";
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/p8.webp";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals ! Best Prices !</h2>

        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" height="60px" />
        </div>

        <p>collections</p>
        <p>for everyone</p>

        {/* 👇 Navigate to new page */}
        <div
          className="hero-latest-btn"
          onClick={() => navigate("/latest-collection")}
        >
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" height="30px" />
        </div>
      </div>

      <div className="hero-right">
        <img src={men} alt="" height="400px" />
      </div>
    </div>
  );
};

export default Hero;
