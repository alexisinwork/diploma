import React, {Component, PropTypes} from 'react'

class Contacts extends Component {
    render() {
        return (
            <div>
                <div id="header-featured-contacts"></div>
                <div id="banner-wrapper">
                    <div id="banner" className="container">
                        <h2>Здесь найдете все возможные способы связи с нами</h2>
                        <span>Ниже вы можете прочесть всю необходимую информацию</span>
                    </div>
                </div>

                <div id="wrapper">
                    <div id="page">
                        <div id="content" className="-left-margined">
                          <p><b>Телефон:</b> +38 (063) 155-13-24</p>
                          <p><b>Почта:</b> alexkuhtin1995@gmail.com</p>
                          <p><b>Skype:</b> alex_kuhtin</p>
                          <p><b>LinkedIn:</b> <a href="https://ua.linkedin.com/in/alexkuhtin">alexkuhtin</a></p>
                          <p><b>Github:</b> <a href="https://github.com/alexisinwork">alexkuhtin</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts
