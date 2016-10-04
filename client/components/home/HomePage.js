import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
const coverImage = require('../../images/veteran_cover.jpeg');

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <div className="main">
        <img src={coverImage}></img>
        <div className="front-header-wrapper">
          <div className="front-name">
            <span className="first">AZ</span>
            <span className="second">VET</span>
            <span className="third">SUPPORT</span>
          </div>
          <h1>Find local resources in Arizona</h1>
          <h3>Mental Health and Events for Support</h3>
        </div>
      </div>

      {/*
              Crisis</h2>
            <p>If you are in need of immediate assistance the
              <a href="http://www.veteranscrisisline.net" target="_blank">Veterans Crisis Line</a>
              is available 24/7. Their contact number is 1-800-273-8255.</p>
            <p>
              <i>" The Veterans Crisis Line connects Veterans in crisis and their families and friends with qualified, caring Department of Veterans Affairs responders through a confidential toll-free hotline, online chat, or text."</i>
            </p> */}

          {/* </div>
          <div className="col-md-4 home-page">
            <h2>
              <i className="fa fa-medkit" aria-hidden="true"></i>
              Help</h2>
            <p>The
              <a href="http://www.phoenix.va.gov/" target="_blank">Phoenix VA Health Care Systems</a>
              main facility is located in central Phoenix.</p>
            <p>650 E. Indian School Rd.</p>
            <p>Phoenix, AZ 85021</p>
            <p>602-277-5551</p>
            <p>Other Vet Centers, clinics, and offices can be found
              <a href="http://www.va.gov/directory/guide/state.asp?STATE=AZ&dnum=1" target="_blank">here</a>.</p>

          </div> */}
          {/* <div className="col-md-4 home-page">
            <h2>
              <i className="fa fa-users" aria-hidden="true"></i>
              Comradery</h2>
            <p>You are not in this fight alone. The military's teamwork philosophy extends beyond the battlefield and into the rest of your lives. Please check out our
              <Link to="/events">Events</Link>
              and
              <Link to="/forum">Forum</Link>
              pages to connect with other veterans.</p>
            <p>Also check out
              <a href="https://theveteransdirectory.org/" target="_blank">The Veterans Directory</a>
              for more great information to veterans in general.</p>


      </div>  */}

    </div>;
  }
}

HomePage.propTypes = {};

export default HomePage;
