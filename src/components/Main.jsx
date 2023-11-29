import React from "react";

function Main() {
  return (
    <body>
      <figure class="background-image">
        <figcaption class="background-caption">Portfolio</figcaption>
      </figure>
      <div class="main-containers">
        <p id="about-me" class="left-container">
          About
          <br />
          Me
        </p>
        <section class="right-container">
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
      <div class="main-containers">
        <p id="work" class="left-container">
          Work
        </p>
        <figure class="right-container-images">
          <figure class="right-container-top-img">
            <div class="top-image-centering">
              <a
                class="image-container-link-top"
                href="https://wesleyhas.github.io/prework-study-guide/"
                target="_blank"
              >
                <img
                  src="./assets/images/prework-study-guide.png"
                  class="img-1"
                />
                <div class="top-image-captions">
                  <p>PreWork Study Guide</p>
                  <p class="captions-top-description">HTML/CSS</p>
                </div>
              </a>
            </div>
          </figure>
          <figure class="right-container-bottom-img">
            <a
              class="image-container-link"
              href="https://wesleyhas.github.io/horiseon-web-expertise/"
              target="_blank"
            >
              <img src="./assets/images/horiseon.png" class="img-2" />
              <div class="bottom-image-captions">
                <p>Horiseon</p>
                <p class="captions-bottom-description">HTML/CSS</p>
              </div>
            </a>
            <a
              class="image-container-link"
              href="https://scs-bc-project-1-group-1.github.io/personalized-information-hub/"
              target="_blank"
            >
              <img
                src="./assets/images/personalized-information-hub.png"
                class="img-2"
              />
              <div class="bottom-image-captions">
                <p>Personalized Information Hub</p>
                <p class="captions-bottom-description">HTML/CSS/JS</p>
              </div>
            </a>
          </figure>
          <figure class="right-container-bottom-img">
            <a
              class="image-container-link"
              href="https://github.com/Team-1-UofT-Project2/critter-sitter"
              target="_blank"
            >
              <img src="./assets/images/home-page.png" class="img-2" />
              <div class="bottom-image-captions">
                <p>Critter Sitter</p>
              </div>
            </a>
            <a class="image-container-link" href="">
              <img src="./assets/images/coming-soon.png" class="img-2" />
              <div class="bottom-image-captions">
                <p>Coming Soon</p>
              </div>
            </a>
          </figure>
        </figure>
      </div>
    </body>
  );
}

export default Main;
