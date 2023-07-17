import "./App.css";
import "bulma/css/bulma.css";
import Angularlogo from "./images/angular.jpg";
import Bootstraplogo from "./images/bootstrap5.png";
import Weblogo from "./images/kompleweb.jpg";
import Frontendlogo from "./images/ccsharp.png";
import Course from "./Course";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angularlogo}
                title="Angular"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis porro voluptatem aliquam repellat dolores ut, pariatur sapiente, nam cum neque asperiores eaque nemo adipisci, soluta ipsum! Omnis ullam natus illo."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstraplogo}
                title="Bootstrap5"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis porro voluptatem aliquam repellat dolores ut, pariatur sapiente, nam cum neque asperiores eaque nemo adipisci, soluta ipsum! Omnis ullam natus illo."
              />
            </div>
            <div className="column">
              <Course
                image={Weblogo}
                title="Web"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis porro voluptatem aliquam repellat dolores ut, pariatur sapiente, nam cum neque asperiores eaque nemo adipisci, soluta ipsum! Omnis ullam natus illo."
              />
            </div>
            <div className="column">
              <Course
                image={Frontendlogo}
                title="Frontend"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis porro voluptatem aliquam repellat dolores ut, pariatur sapiente, nam cum neque asperiores eaque nemo adipisci, soluta ipsum! Omnis ullam natus illo."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
