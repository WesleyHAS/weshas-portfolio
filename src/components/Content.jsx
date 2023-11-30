function Content() {
  return (
    <body>
      <figure className="background-image">
        <figcaption className="background-caption">Portfolio</figcaption>
      </figure>
      <div className="main-containers">
        <p id="about-me" className="left-container">
          About
          <br />
          Me
        </p>
        <section className="right-container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          ipsum nunc aliquet bibendum. Ullamcorper a lacus vestibulum sed arcu
          non odio euismod. Faucibus ornare suspendisse sed nisi lacus sed
          viverra tellus in. Gravida arcu ac tortor dignissim convallis. Pretium
          quam vulputate dignissim suspendisse in. Sagittis orci a scelerisque
          purus semper eget duis. Molestie ac feugiat sed lectus vestibulum
          mattis ullamcorper velit sed. Felis imperdiet proin fermentum leo vel.
          Turpis tincidunt id aliquet risus feugiat in ante. Diam donec
          adipiscing tristique risus. Sit amet dictum sit amet justo donec.
          <br />
          <br />
          Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed
          sed risus pretium. Non consectetur a erat nam at. Suscipit adipiscing
          bibendum est ultricies integer quis auctor elit sed. Dui sapien eget
          mi proin sed libero. Quam adipiscing vitae proin sagittis nisl rhoncus
          mattis rhoncus. Varius quam quisque id diam vel. Mattis ullamcorper
          velit sed ullamcorper morbi tincidunt ornare. Faucibus turpis in eu mi
          bibendum neque egestas congue quisque. Nulla pharetra diam sit amet.
          Malesuada nunc vel risus commodo viverra maecenas accumsan. Egestas
          purus viverra accumsan in nisl. Ut diam quam nulla porttitor massa id.
          Facilisis volutpat est velit egestas dui id ornare. Mauris rhoncus
          aenean vel elit scelerisque mauris. Justo donec enim diam vulputate.
        </section>
      </div>
      <div className="main-containers">
        <p id="work" className="left-container">
          Work
        </p>
        <figure className="right-container-images">
          <figure className="right-container-top-img">
            <div className="top-image-centering">
              <a
                className="image-container-link-top"
                href="https://wesleyhas.github.io/prework-study-guide/"
                target="_blank"
              >
                <img
                  src="./assets/images/prework-study-guide.png"
                  className="img-1"
                />
                <div className="top-image-captions">
                  <p>PreWork Study Guide</p>
                  <p className="captions-top-description">HTML/CSS</p>
                </div>
              </a>
            </div>
          </figure>
          <figure className="right-container-bottom-img">
            <a
              className="image-container-link"
              href="https://wesleyhas.github.io/horiseon-web-expertise/"
              target="_blank"
            >
              <img src="./assets/images/horiseon.png" className="img-2" />
              <div className="bottom-image-captions">
                <p>Horiseon</p>
                <p className="captions-bottom-description">HTML/CSS</p>
              </div>
            </a>
            <a
              className="image-container-link"
              href="https://scs-bc-project-1-group-1.github.io/personalized-information-hub/"
              target="_blank"
            >
              <img
                src="./assets/images/personalized-information-hub.png"
                className="img-2"
              />
              <div className="bottom-image-captions">
                <p>Personalized Information Hub</p>
                <p className="captions-bottom-description">HTML/CSS/JS</p>
              </div>
            </a>
          </figure>
          <figure className="right-container-bottom-img">
            <a
              className="image-container-link"
              href="https://github.com/Team-1-UofT-Project2/critter-sitter"
              target="_blank"
            >
              <img src="./assets/images/home-page.png" className="img-2" />
              <div className="bottom-image-captions">
                <p>Critter Sitter</p>
              </div>
            </a>
            <a className="image-container-link" href="">
              <img src="./assets/images/coming-soon.png" className="img-2" />
              <div className="bottom-image-captions">
                <p>Coming Soon</p>
              </div>
            </a>
          </figure>
        </figure>
      </div>
    </body>
  );
}

export default Content;
