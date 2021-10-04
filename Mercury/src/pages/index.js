import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

import python from '../assets/images/python.png'
import flutter from '../assets/images/Flutter.png'
import grpc from '../assets/images/grpc.png'
import ai from '../assets/images/AI.png'


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Mercury - Ritvik Sharma" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Mercury</h2>
                </header>
                <p>
                  <a href = "https://github.com/ritviksharma4/HyperSafety_Frontend">
                  Mercury </a>, named after the Greek God Hermes who was the messenger of the Gods, is a 
                  Chat-bot service which can be integrated with various Food-Delivery brands such as 
                  Swiggy or Zomato where a User can simply type in his order and send it as a text.
                </p>
                <p>
                Mercury can then extract the essential information from the order and place the order 
                for the User accordingly.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="#desc" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src="https://imgur.com/YQLBZzn.gif" alt="" />
              </span>
            </div>
          </section>

          <section id="tech" className="main special">
            <header className="major">
              <h2>Technologies Used</h2>
            </header>
            <ul className="features">
            <li>
                <span className="icon major">
                  <img src = {ai}></img>
                </span>
                <h3>ALBERT + CRF</h3>
                <p>
                  ALBERT for contextual meaning of each word. | CRF for mapping each word to a specific slot label.
                </p>
              </li>
              <li>
                <span className="icon major">
                  <img src = {python}></img>
                </span>
                <h3>Python</h3>
                <p>
                  Python backend for Hosting ALBERT + CRF Trained Model for Food Order Processing.
                </p>
              </li>
              <li>
                <span className="icon major">
                  <img src = {grpc}></img>
                </span>
                <h3>gRPC</h3>
                <p>
                Mercury uses gRPC for implementing Speech-To-Text functionality 
                by using the Google Speech-To-Text API.
                </p>
              </li>
              <li>
                <span className="icon major">
                  <img src = {flutter}></img>
                </span>
                <h3>Flutter UI</h3>
                <p>
                  Frontend for User to send Order Details in form of messages.
                </p>
              </li>
            </ul>
          </section>

          <section id="desc" className="main special">
            <header className="major">
              <h2>Mercury Demonstration</h2>
              <p>
                Below is a video which includes a brief explanation of each component 
                of <a href = "https://github.com/ritviksharma4/Mercury">
                   Mercury</a> and a quick demo.
              </p>
              <div class="ytiframe"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="600" src="https://www.youtube-nocookie.com/embed/fgn-1RZ8AKM?rel=0" title="YouTube video player" width="100%"></iframe></div>
            </header>
            {/* Your Youtube Video */}
            <footer className="major">
              <ul className="actions">
                <li>
                <Link to="https://www.youtube.com/channel/UC2ab5BiHPZQjKPD8HVEU21g" className="button">
                    My Youtube Channel
                  </Link>
                </li>
                <li>
                <Link to="https://medium.com/@ritviksharma4/mercury-a-chat-bot-for-food-order-processing-using-albert-crf-4f644cc6c608" className="button">
                    Detailed Explanation
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
    )
  }
}

export default Index