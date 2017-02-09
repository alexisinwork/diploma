import React, {Component, PropTypes} from 'react'

class AboutUs extends Component {
    render() {
        return (
          <div>
            <div id="header-featured-about"></div>
            <div id="banner-wrapper">
                <div id="banner" className="container">
                <h2>We want to tell you something about us</h2>
            <span>You will find here info about us</span>
            </div>
            </div>

            <div id="wrapper">
                <div id="page">
                    <div id="content" className="-left-margined">
                        <p>This is <strong>Al Courses</strong>, free, definitely standart website to test your skills,
                          developed by <a href="https://ua.linkedin.com/in/alexkuhtin" rel="nofollow">Alex Kukhtin</a>.
                          On left panel you can see "Courses" and pass it bt clicking on it.</p>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default AboutUs
