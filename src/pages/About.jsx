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
              <strong>Passionate:</strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </li>
            <li>
              <strong>Skills:</strong> Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </li>
            <li>
              <strong>Interests:</strong> Viverra ipsum nunc aliquet bibendum.
              Ullamcorper a lacus vestibulum sed.
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <section className="right-container text-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra ipsum nunc aliquet bibendum. Ullamcorper a lacus
              vestibulum sed arcu non odio euismod. Faucibus ornare suspendisse
              sed nisi lacus sed viverra tellus in. Gravida arcu ac tortor
              dignissim convallis. Pretium quam vulputate dignissim suspendisse
              in. Sagittis orci a scelerisque purus semper eget duis. Molestie
              ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.
              Felis imperdiet proin fermentum leo vel. Turpis tincidunt id
              aliquet risus feugiat in ante. Diam donec adipiscing tristique
              risus. Sit amet dictum sit amet justo donec.
            </p>
            <br />
            <p>
              Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Tempus egestas
              sed sed risus pretium. Non consectetur a erat nam at. Suscipit
              adipiscing bibendum est ultricies integer quis auctor elit sed.
              Dui sapien eget mi proin sed libero. Quam adipiscing vitae proin
              sagittis nisl rhoncus mattis rhoncus. Varius quam quisque id diam
              vel. Mattis ullamcorper velit sed ullamcorper morbi tincidunt
              ornare. Faucibus turpis in eu mi bibendum neque egestas congue
              quisque. Nulla pharetra diam sit amet. Malesuada nunc vel risus
              commodo viverra maecenas accumsan. Egestas purus viverra accumsan
              in nisl. Ut diam quam nulla porttitor massa id. Facilisis volutpat
              est velit egestas dui id ornare. Mauris rhoncus aenean vel elit
              scelerisque mauris. Justo donec enim diam vulputate.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
