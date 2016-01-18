import React, {Component, PropTypes} from 'react'

class NotFound extends Component {
    render() {

      return (
        <div id="wrapper" className="-NOT-FOUND">
          <div id="page">
            <div id="content">
              <div className="title">
                <h2>Извините, но такой страницы у нас нету!</h2>
                <br />
              <p>Это сайт <strong>Al Courses</strong>, бесплатная система для прохождения курсов, созданная
                <a href="https://ua.linkedin.com/in/alexkuhtin" rel="nofollow">Alex Kuhtin</a>.
                На этом сайте вы можете проверить доступные курсы и пройти их.</p>
                <br />
              <a href="/courses" className="button">Вернуться на главную</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default NotFound
