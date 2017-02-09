import React, {Component, PropTypes} from 'react'

class NotFound extends Component {
    render() {

      return (
        <div id="wrapper" className="-NOT-FOUND">
          <div id="page">
            <div id="content">
              <div className="title">
                <h2>Sorry, but this page doesn't exist</h2>
                <br />
              <p>This website <strong>Al Courses</strong>, free system for passing courses, created by
                <a href="https://ua.linkedin.com/in/alexkuhtin" rel="nofollow">Alex Kuhtin</a>.</p>
                <br />
              <a href="/courses" className="button">ВBack to Home</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default NotFound
