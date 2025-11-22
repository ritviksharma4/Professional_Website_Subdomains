import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { Waypoint } from 'react-waypoint';
import Header from '../components/Header';
import Layout from '../components/layout';
import Nav from '../components/Nav';
import VideoWithFullscreen from '../components/VideoFullScreen';
import bedrock from '../assets/images/BedRock.png';
import apigateway from '../assets/images/ApiGateway.png';
import typescript from '../assets/images/TypeScript.png';
import architecture from '../assets/images/Architecture.png';
import video from '../assets/images/Demo.mp4';

const style_spacing = {
  lineHeight: '2.5',
};

const styles_bold = {
  fontWeight: 'bold',
};

const styles_light = {
  fontWeight: 'regular',
};

const code_style = {
  backgroundColor: 'transparent',
};

const ResponsiveImage = ({ src, alt }) => {
  const [imgWidth, setImgWidth] = useState(null); // start null until we know window

  useEffect(() => {
    // Only run in browser
    if (typeof window !== 'undefined') {
      const updateWidth = () => {
        setImgWidth(Math.round(window.innerWidth * 0.8));
      };
      updateWidth(); // initial
      window.addEventListener('resize', updateWidth);
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }
    // If window is undefined (SSR) we simply do nothing.
  }, []);

  // While building (SSR) we can render nothing or a placeholder
  if (imgWidth === null) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: `${imgWidth}px`,
          height: 'auto',
          maxWidth: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
    };
  }

  _handleWaypointEnter = () => {
    this.setState({ stickyNav: false });
  };

  _handleWaypointLeave = () => {
    this.setState({ stickyNav: true });
  };

  render() {
    return (
      <Layout>
        <Helmet title="MyCFO.ai - Ritvik Sharma" />

        <Header />

        <Waypoint 
          onEnter={this._handleWaypointEnter} 
          onLeave={this._handleWaypointLeave} 
        />

        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div
              className="spotlight"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
                backgroundColor: "transparent",
              }}
            >
              <span
                className="image"
                style={{ width: "120%", maxWidth: "700px", backgroundColor: "transparent" }}
              >
                <VideoWithFullscreen src={video} />
              </span>
              <div className="content" style={{ maxWidth: '700px' }}>
                <header className="major">
                  <h2>MyCFO.ai</h2>
                </header>
                <p style={style_spacing}>
                  Just provide your raw financial data and any relevant compliance or policy documents. MyCFO.ai’s multi-agent system processes them end-to-end, returning structured insights and real-time visualizations so you get a full financial dashboard with zero front-end parsing or manual effort.
                </p>
              </div>
            </div>
          </section>

          <section id="tech" className="main special">
            <header className="major">
              <h2>Technologies Used</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major">
                  <img height="250px" src={bedrock} alt="AWS BedRock logo" />
                </span>
                <h3 style={styles_light}>AWS BedRock</h3>
                <p style={styles_light}>
                  Created an Orchestration of Multi-Agent to support individual functions of a CFO!
                </p>
              </li>
              <li>
                <span className="icon major">
                  <img height="250px" src={apigateway} alt="AWS API Gateway logo" />
                </span>
                <h3 style={styles_light}>AWS API-Gateway</h3>
                <p style={styles_light}>
                  Connecting the user on the frontend with AWS for processing requests and sending back CFO insights as a response!
                </p>
              </li>
              <li>
                <span className="icon major">
                  <img height="250px" src={typescript} alt="TypeScript logo" />
                </span>
                <h3 style={styles_light}>TypeScript</h3>
                <p style={styles_light}>
                  Frontend for the User. Includes a default dashboard and custom Query-based dashboards.
                </p>
              </li>
            </ul>
          </section>

          <section id="desc" className="main special">
            <header className="major">
              <h2>Solution Architecture</h2>
              <span>
                <ResponsiveImage 
                  src={architecture}
                  alt="Solution Architecture"
                />
              </span>
              <p style={styles_light}>
                MyCFO.ai routes your request through a secure gateway to a cloud engine that consults stored company documents, processes everything with AI agents, and sends results back instantly—no servers to manage.
              </p>
            </header>
            <p style={styles_light} className="content">
              <h3>AWS Api-Gateway</h3>
              Receives the user’s request, securely forwards it into the system, and ensures every query reaches the right backend service without delays.
              <br/><br/>
              <h3>AWS Lambda</h3>
              Filters spam or invalid requests, manages backend logic, and sends only clean, structured instructions to the supervisor agent—keeping the system efficient.
              <br/><br/>
              <h3>Supervisor Agent (Face of Bedrock)</h3>
              Acts as the CFO brain, understanding the request, assigning tasks to specialized agents, and unifying their outputs into one coherent response.
              <br/><br/>
              <h3>Collaborator Agents (Worker Agents of Bedrock)</h3>
              Specialized mini-experts that analyze budgets, compliance rules, forecasts, or risks, each handling one task and returning focused insights to the supervisor.
              <br/><br/>
              <h3>Knowledge Base + S3</h3>
              Provides agents with accurate context by storing company documents, rules, and financial data, ensuring every analysis is grounded in your real information.
              <br/><br/>
              <h3>Response Back to the User</h3>
              The system sends the supervisor’s final structured output back through Lambda and API Gateway, delivering insights to the user within seconds.
            </p>
          </section>

          <section id="demo" className="main special">
            <header className="major">
              <h2>MyCFO.ai in Action!</h2>
              <p>
                Below is our <b>Columbia University x Amazon Hackathon-Winning</b> Demo!
              </p>
              <div className="ytiframe">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  frameBorder="0"
                  height="600"
                  src="https://www.youtube.com/embed/M37FyOThIJg?si=S2WIyLy_60XSJ-uw"
                  title="YouTube video player"
                  width="100%"
                ></iframe>
              </div>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="https://www.youtube.com/channel/UC2ab5BiHPZQjKPD8HVEU21g" className="button">
                    My Youtube Channel
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="other" className="main special">
            <header className="major">
              <h2>Other Projects</h2>
              <p>
                I have worked on many more fascinating projects!
                <br />
                You can check them out right here!
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="https://ritvik-sharma.com/archive" className="button">
                    Project Archive
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Index;