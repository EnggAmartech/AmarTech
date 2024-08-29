import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import abc from "../../Assets/Projects/abc.jpg";
import abc1 from "../../Assets/Projects/abc1.jpg";
import abc2 from "../../Assets/Projects/abc2.jpg";
import abc3 from "../../Assets/Projects/abc3.jpg";
import abc4 from "../../Assets/Projects/air_washer.jpg";
// import abc5 from "../../Assets/Projects/aircooled.jpeg";

import abc6 from "../../Assets/Projects/abc6.jpg";
import abc7 from "../../Assets/Projects/cooling_tower.jpg";

import './project.css';
function Projects() {
  return (
    // <Container fluid className="project-section">
    //   <Particle />
    //   <Container>
    //     <h1 className="project-heading">
    //       My Recent <strong className="purple">Works </strong>
    //     </h1>
    //     <p style={{ color: "white" }}>
    //       Here are a few projects I've worked on recently.
    //     </p>
    //     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    //       <Col md={4} className="project-card">
    //         <ProjectCard
    //           imgPath={chatify}
    //           isBlog={false}
    //           title="Chatify"
    //           description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
    //           // ghLink="https://github.com/soumyajit4419/Chatify"
    //           // demoLink="https://chatify-49.web.app/"
    //         />
    //       </Col>

    //        <Col md={4} className="project-card">
    //         <ProjectCard
    //           imgPath={bitsOfCode}
    //           isBlog={false}
    //           title="Bits-0f-C0de"
    //           description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
    //           // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
    //           // demoLink="https://blogs.soumya-jit.tech/"
    //         />
    //       </Col>

    //       <Col md={4} className="project-card">
    //         <ProjectCard
    //           imgPath={editor}
    //           isBlog={false}
    //           title="Editor.io"
    //           description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
    //           // ghLink="https://github.com/soumyajit4419/Editor.io"
    //           // demoLink="https://editor.soumya-jit.tech/"              
    //         /> 
    //       </Col> 
    //       <Col md={4} className="project-card">
    //         <ProjectCard
    //           imgPath={editor}
    //           isBlog={false}
    //           title="Editor.io"
    //           description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
    //           // ghLink="https://github.com/soumyajit4419/Editor.io"
    //           // demoLink="https://editor.soumya-jit.tech/"              
    //         /> 
    //       </Col> 

    //       <Col md={4} className="project-card">
    //         <ProjectCard
    //           imgPath={leaf}
    //           isBlog={false}
    //           title="Movie Recommender System"
    //           description="Uses algorithms to suggest movies to users based on their past preferences and behaviors. It analyzes user data, extracts relevant features, and trains machine learning models to generate personalized recommendations. The goal is to provide users with a list of movies they are likely to enjoy."
    //           // ghLink="https://github.com/bhadauriaankit/movie-recommender-system"
    //           // demoLink=""
    //         />
    //       </Col>

    //       <Col md={4} className="project-card">
    //         <ProjectCard
    //           imgPath={suicide}
    //           isBlog={false}
    //           title="Ai For Social Good"
    //           description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
    //           // ghLink="https://github.com/bhadauriaankit/Suicide-detection-using-ml"
    //           // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
    //         />
    //       </Col>

    //       <Col md={4} className="project-card">
    //         <ProjectCard
    //           imgPath={medical}
    //           isBlog={false}
    //           title="Medical image segmentation"
    //           description="involves identifying and outlining lung regions affected by pneumonia in chest X-rays or CT scans. Deep learning-based methods, such as U-Net or CNN, are commonly used to automatically segment lung opacities, pleural effusions, and
    //            other pneumonia-related features. Accurate segmentation enables early diagnosis and treatment of pneumonia"
    //            // ghLink="https://github.com/bhadauriaankit/medical-image-segmentation"

    //         />
    //       </Col>
    //     </Row>
    //   </Container>
    // </Container>
    <div class="container1">

<h1 class="heading">our services </h1>

<div class="box-container1">

    <div class="box">
        {/* <img src="suicide.png" alt=""/> */}
        {/* <img className="size" src={abc} alt="brand" /> */}
        <img className="size" src={abc} alt="brand" style={{ height: '200px' }} />
        <h3>Shell and tube type chiller</h3>
        {/* <p>"A Shell and Tube type chiller is a type of refrigeration system that uses a shell and tube heat exchanger to transfer heat from  */}
            {/* a fluid to a refrigerant, cooling the fluid through a circulation of chilled water or other mediums.</p> */}
        {/* <a href="#" class="btn">read more</a> */}
    </div>

    <div class="box">
        <img className="size"src={abc1} alt="brand" style={{ height: '200px' }}/>
        <h3>Water cooled scroll chiller</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
        {/* <a href="#" class="btn">read more</a> */}
    </div>

    <div class="box">
    <img className="size"src={abc2} alt="brand" style={{ height: '200px' }}/>
        <h3>Water cooled screw chiller</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
        {/* <a href="#" class="btn">read more</a> */}
    </div>

    <div class="box">
    <img className="size"src={abc3} alt="brand" style={{ height: '200px' }} />
        <h3>Water cooled screw chiller</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
        {/* <a href="#" class="btn">read more</a> */}
    </div>

    <div class="box">
    <img className="size" src={abc4} alt="brand" style={{ height: '200px' }} />
        <h3>air washer</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p> */}
        {/* <a href="#" class="btn">read more</a> */}
    </div>

    // <div class="box">
    // <img className="size" src={abc5} alt="brand" style={{ height: '200px' }} />
    //     <h3>air cooled</h3>
        {/* <p>"A Shell and Tube type chiller is a type of refrigeration system that uses a shell and tube heat exchanger to transfer heat from a fluid to a refrigerant, 
            cooling the fluid through a circulation of chilled water or other mediums.</p> */}
        {/* <a href="#" class="btn">read more</a> */}
    // </div>
    <div class="box">
    <img className="size" src={abc6} alt="brand" style={{ height: '200px' }} />
        <h3>Skid mounted water cooled chiller</h3>
        {/* <p>"A Shell and Tube type chiller is a type of refrigeration system that uses a shell and tube heat exchanger to transfer heat from a fluid to a refrigerant, 
            cooling the fluid through a circulation of chilled water or other mediums.</p> */}
        {/* <a href="#" class="btn">read more</a> */}
    </div>
    <div class="box">
    <img className="size" src={abc7} alt="brand" style={{ height: '200px' }} />
        <h3>cooling tower</h3>
        {/* <p>"A Shell and Tube type chiller is a type of refrigeration system that uses a shell and tube heat exchanger to transfer heat from a fluid to a refrigerant, 
            cooling the fluid through a circulation of chilled water or other mediums.</p> */}
        {/* <a href="#" class="btn">read more</a> */}
    </div>

</div>

</div>

  );
}

export default Projects;
