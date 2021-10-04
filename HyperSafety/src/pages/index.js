import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

import python from '../assets/images/python.png'
import flutter from '../assets/images/Flutter.png'
import node from '../assets/images/NodeJS.png'

const style_spacing = {
  lineHeight: "2.5",
}

const styles_light = {
  fontWeight: "regular",
}

const code_style = {
  backgroundColor: "transparent",
}

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
        <Helmet title="HyperSafety - Ritvik Sharma" />

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
                  <h2>HyperSafety</h2>
                </header>
                <p style = {style_spacing}>
                  The <a href = "https://github.com/ritviksharma4/HyperSafety_Frontend">
                  HyperSafety Flutter Frontend</a> of 
                  the <a href = "https://github.com/ViVek6301/HyperSafety_Backend">HyperSafety Backend</a> and 
                  the <a href = "https://github.com/ritviksharma4/HyperSafety_Service">HyperSafety ML Service</a>, 
                  an Employee Management Project in which images and details of Employees can be uploaded, 
                  which would then be used to detect whether or not Employees are wearing a mask in the 
                  Workplace. The HyperSafety Frontend can then be used by the Higher-ups to check which 
                  Employees have been caught without a mask.
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
                <img src="https://imgur.com/V5o0nKJ.gif" alt="" />
              </span>
            </div>
          </section>

          <section id="tech" className="main special">
            <header className="major">
              <h2 >Technologies Used</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major">
                  <img height = "250px" src = {python}></img>
                </span>
                <h3 style= {styles_light}>Python</h3>
                <p style= {styles_light}>
                  Python backend for Hosting Mask-Detection & Face Recognition ML Services
                </p>
              </li>
              <li>
                <span className="icon major">
                  <img height = "250px" src = {node}></img>
                </span>
                <h3 style= {styles_light}>NodeJS</h3>
                <p style= {styles_light}>
                  REST API which connects to a MySQL database to perform various Admin Operations such as Adding-Deleting Employees.
                  Updates Python image database depending upon Admin Operations.
                </p>
              </li>
              <li>
                <span className="icon major">
                  <img height = "250px" src = {flutter}></img>
                </span>
                <h3 style= {styles_light}>Flutter UI</h3>
                <p style= {styles_light}>
                  Frontend for Admin Operations : Adding Employees | Deleting Employees | Viewing Records | Resetting Records
                </p>
              </li>
            </ul>
          </section>

          <section id="desc" className="main special">
            <header className="major">
              <h2 >Mask-Detection & Face-Recognition</h2>
              <span>
                <img height = "200px" src="https://imgur.com/uGBHQtv.gif" alt="" />
              </span>
              <p style= {styles_light}>
                Demo of what HyperSafety does.
              </p>              
            </header>
            <p style= {styles_light} className="content">
              <h3 >Mask Detection</h3>
              For mask detection, I have trained this model
              using <span >CNNs</span> and 
              <span >
                <a href = "https://github.com/X-zhangyang/Real-World-Masked-Face-Dataset"> Face Mask Dataset
                </a></span>. After cleaning and labeling, this dataset contains 5,000 masked faces of 
                525 people and 90,000 normal faces. The verification dataset contains 4015 face images of 
                426 people, which is further organized into 7178 masked and non-masked sample pairs, 
                including 3589 pairs of the same identity and 3589 pairs of different identities.
                I used the GPUs which are available on <a href = "https://research.google.com/colaboratory/">
                  Google Colab</a> for training and achieved an accuracy of 
                  <span > 98.95%</span>. <br></br><br></br>
                <h3 >Face Recognition</h3>   
                In the event of a person not wearing a mask, I send that frame to the 
                <span >
                <a href = "https://github.com/ageitgey/face_recognition"> Face Recognition Service</a>
                </span> for identification. <br></br>
                Here I already have the face encodings of all existing employees. So now when a frame is
                received from OpenCV, I find the location of the face in the frame using face_locations
                and then encode it with face_encodings. <br></br>
                Now, I will find the most probable match of this encoding by comparing it with other employees'
                face encodings.
            </p>
            <footer className="major">
              <ul className="actions">
              </ul>
            </footer>
            <header className="major">
              <h2 >NodeJS - Python Backend</h2>
            </header>
            <p style= {styles_light} className="content">
            <h3 >NodeJS Backend</h3>
            <span ><a href = "https://github.com/ViVek6301/HyperSafety_Backend">
               NodeJS </a></span> connects the HyperSafety 
              <span ><a href = "https://github.com/ritviksharma4/HyperSafety_Frontend"> frontend 
              </a></span> and 
                 <span ><a href = "https://github.com/ritviksharma4/HyperSafety_Service"> services </a></span> 
                to the SQL database, which is a REST API for processing each user's request depending 
                on the route.
                There are 2 primary end-points: <code style = {code_style}>/admin_services</code>, which is used for logging in and signing up new admins 
                and <code style = {code_style}>/employee_services</code>, which is used for services such as adding/deleting employees, 
                resetting warnings and displaying records.<br></br>
                It also communicates with the python backend for updating employee warnings in the database upon identification.
            <h3 >Python Backend</h3>
            The machine learning model for Mask-Detection & Face-Recognition are hosted on the python backend.
            The face encodings of known employees are stored on the python backend for comparing them with the incoming frames 
            of the person who was found to NOT have a mask. <br></br>
            After identification, the details are sent to the NodeJS backend for updating the employee's warnings in the database. 
            </p>
            <footer className="major">
              <ul className="actions">
              </ul>
            </footer>
          </section>

          <section id="demo" className="main special">
            <header className="major">
              <h2>HyperSafety Demonstration</h2>
              <p>
                Below is a video which includes a brief explanation of each component 
                of <a href = "https://github.com/ritviksharma4/HyperSafety_Frontend">
                   HyperSafety</a> and a quick demo.
              </p>
              <div class="ytiframe"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="600" src="https://www.youtube-nocookie.com/embed/LwRyr8F4fns?rel=0" title="YouTube video player" width="100%"></iframe></div>
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
    )
  }
}

export default Index