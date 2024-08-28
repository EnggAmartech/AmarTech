import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, Welcome To <span className="purple">Amartech! </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />
            We specialize in manufacturing high-quality chillers designed to meet the diverse cooling needs of various industries. 
            Our mission is to provide innovative and energy-efficient solutions that ensure optimal performance and reliability.
            <br />
            At Amartech, we are committed to excellence in both our products and customer service. Our team of experts leverages cutting-edge technology 
            and extensive industry experience to deliver customized solutions that exceed expectations.
            <br />
            <br />
            Our core values include innovation, quality, and sustainability. We strive to create products that not only 
            perform exceptionally but also contribute to a greener and more sustainable future.
            <br />
            </p>
          
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(0 0 0)" }}>
            "Thank you for choosing Amartech. We look forward to partnering with you 
            to meet your cooling needs and helping your business thrive."{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
