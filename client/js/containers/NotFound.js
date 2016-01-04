import React, {Component, PropTypes} from 'react'

class NotFound extends Component {
    render() {

      return (
        <div id="wrapper" className="-NOT-FOUND">
          <div id="page">
            <div id="content">
              <div className="title">
                <h2>Sorry, but we haven't page like this!</h2>
                <br />
              <p>This is <strong>Al Courses</strong>, a free, fully standards-compliant website for
                passing online-courses designed by <a href="https://ua.linkedin.com/in/alexkuhtin" rel="nofollow">Alex Kuhtin</a>.
                On this website you can check in left panel all available courses and pass it by clicking on it.</p>
                <br />
              <a href="/courses" className="button">Back to courses page</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default NotFound
