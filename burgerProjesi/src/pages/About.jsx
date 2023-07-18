import React from "react";
import "../styles/About.css"
import banner from "../assets/banneryeni.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum
          minima placeat dolores corrupti. Debitis, facilis quas non et officiis
          nihil, quaerat sunt cum natus dignissimos in ullam, consequatur
          doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nobis exercitationem vel sequi error quos officiis labore. Iusto
          provident porro, soluta rerum delectus magnam ea, recusandae nemo eos
          nisi vitae quis! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Unde exercitationem minus veniam autem alias, id officiis enim,
          laudantium explicabo praesentium amet consequuntur voluptate atque
          eveniet laborum commodi. Reprehenderit, odit totam.
        </p>
      </div>
    </div>
  );
}

export default About;
