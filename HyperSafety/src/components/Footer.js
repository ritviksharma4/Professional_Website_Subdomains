import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>About Me</h2>
      <p>
      I’m aspiring to be a Data Scientist who will be a growling engine behind the changes in the world.
      I love to fiddle with technology I have never heard of before and build things that are intriguing.
      </p>
      <p>
      I am a <b>University Rank #2</b> holder from SRM University with <b>B.Tech in CSC-AIML</b> and an aspiring Data Scientist with great passion for my work.
      <a href="https://ritvik-sharma.com/">On My Website,</a> you will find the list of projects that I have done.
      </p>
    </section>
    <section>
      <h2>Contact Me</h2>
      <dl className="alt">
        <dt>Email :</dt>
        <p>
          <a href="mailto:ritviksharma4@gmail.com">ritviksharma4@gmail.com</a>
        </p>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://github.com/ritviksharma4/HyperSafety_Frontend"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://ritvik-sharma.com/"
            className="icon fa-globe alt"
          >
            <span className="label">My Website</span>
          </a>
        </li>
        <li>
        <li>
          <a
            href="https://www.linkedin.com/in/ritviksharma4/"
            className="icon fa-linkedin alt"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
          <a
            href="https://twitter.com/theritviksharma"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/theritviksharma/" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; HyperSafety. Design: <a href="https://ritvik-sharma.com/">Ritvik Sharma</a>.
    </p>
  </footer>
)

export default Footer