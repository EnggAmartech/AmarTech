// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import abc from "../../Assets/abc.png";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

// function Home() {
//   return (
//     <section style={{
//       backgroundImage: window.innerWidth > 400 ? `url(${abc})` : 'none',
//       backgroundSize: 'contain',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'right'}}>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header text-black">
//               <h1 style={{ paddingBottom: 19 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name text-black"> Ankit Singh</strong>
//               </h1>

//               <div style={{ padding: 20, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;
import React from 'react';
import './hero.css';
import image from "../../Assets/image.jpg";
// import abc from './abc.png';
import Type from "./Type";
// import Home2 from "./Home2";
// import Home2 from "./Home2";

function Home() {
  return (
    <section className="hero">
    
        <div className="hero-content">
          <h1>Welcome to Our Business</h1>
          <p>We offer amazing products and services.</p>
          <button className="learn-more-button" onClick={'#'}>Learn More</button>
          
          <h1 style={{ paddingBottom: 55 }}  className="heading-name ">
          AmarTech
          <strong className="main-name text-black"> Engineers</strong>
        </h1>
        
       
          <Type />
       
       </div>
       <img class="small-image" src={image} alt="brand" />


  
    
    </section>

  );
}

export default Home;

