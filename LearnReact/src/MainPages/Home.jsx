import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      
      <section className="hero">
        <h1>Learn React with Kifayat</h1>
        <p>Learn React, UI Design & Frontend Development</p>
        <Link to="/learnreact"><button>Get Started</button></Link>
      </section>

     
      <section className="courses">
        <h2 style={{paddingBottom:"15px"}}>Featured Courses</h2>

        <div className="course-grid">
          <div className="card">React Basics</div>
          <div className="card">UI Design</div>
          <div className="card">Frontend Development</div>
        </div>
      </section>

      
      <section className="why">
        <h2 style={{paddingBottom:"15px"}}>Why Choose Us</h2>

        <div className="why-grid">
          <div>⚡ Fast Learning</div>
          <div>🎯 Practical Skills</div>
          <div>💻 Real Projects</div>
        </div>
      </section>

     

    </div>
  );
}

export default Home;