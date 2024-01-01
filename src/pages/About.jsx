import myPhoto from "../assets/images/wesAvatar.png";

export default function About() {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="dev-name">Wesley Alcântara</h1>
        <h6 className="dev-tittle">Full Stack Junior Developer</h6>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src={myPhoto}
            alt="My Photo"
            className="img-fluid profile-image"
            style={{ borderRadius: "15px" }}
          />
          <ul className="list-unstyled mt-3">
            <li>
              <strong>Passionate:</strong> Cooking, video games, technology and
              nerd stuff in general.
            </li>
            <li>
              <strong>Skills:</strong> Problem solving, sense of urgency and a
              great chef!
            </li>
            <li>
              <strong>Interests:</strong> Cars, DIY projects and 3D printing.
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <section className="right-container text-left">
            <p>
              Hey there! I'm Wes, a Full Stack Junior Developer. My original
              career was as a professional Chef, but due to a wrist injury, I
              was forced to hang up my apron and explore new opportunities. This
              experience rekindled my passion and curiosity for the tech field.
              I thrive in high-pressure environments and enjoy problem-solving.
              I graduated from the University of Toronto's School of Continuing
              Studies Coding Bootcamp in 2024, acquiring a range of skills along
              the way, including HTML/CSS + Bootstrap, JavaScript ES6 + JQuery,
              MongoDB, Express.js, React, and Node.js (MERN stack), SQL + NoSQL,
              GitHub, MVC, Object-Oriented Programming (OOP), and
              Object-Relational Mapping (ORM).
            </p>
            <br />
            <p>
              In a previous life, I wore the hat of an Executive Chef of a 300
              seat italian restaurant. Cooking isn't just a skill; it's a
              creative expression that taught me the art of multitasking,
              urgency, and maintaining a sense of calm under pressure. My
              journey in the culinary world has contributed to my
              problem-solving abilities and instilled a strong sense of
              discipline.
            </p>
            <br />
            <p>
              Feel free to explore my GitHub for a glimpse into my coding
              journey. I'm always up for a chat about tech, culinary adventures,
              or anything in between. Connect with me on LinkedIn and let's
              embark on new possibilities together! Looking forward to the
              exciting journey ahead!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
