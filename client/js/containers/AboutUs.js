import React, {Component, PropTypes} from 'react'

class AboutUs extends Component {
    render() {
        return (
          <div>
            <div id="header-featured-about"></div>
            <div id="banner-wrapper">
                <div id="banner" className="container">
                <h2>Здесь мы расскажем вам кое-что о нас</h2>
            <span>Вы найдете здесь информацию о наших курсах</span>
            </div>
            </div>

            <div id="wrapper">
                <div id="page">
                    <div id="content" className="-left-margined">
                        <p>Это <strong>Al Courses</strong>, свободный, полностью соответствующий стандартам веб-сайт для прохождения онлайн-курсов,
                          разработанный <a href="https://ua.linkedin.com/in/alexkuhtin" rel="nofollow">ALEX KUHTIN</a>.
                          На этом сайте вы можете проверить в левой панели на странице "Курсы" все доступные курсы и пройти его, нажав на нее.</p>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default AboutUs
