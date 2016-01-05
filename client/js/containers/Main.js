import React, {Component, PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'
import { connect } from 'react-redux';
import { checkUser, createNewUser, currentUser, logOut } from '../reducers/user';
import { fetchCourses } from '../reducers/courses';
import { capitalize } from '../utils';

const mapStateToProps = (state) => ({
    user: state.user,
    courses: state.courses.courses
});

export class Main extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        user: PropTypes.object,
        courses: PropTypes.array
    };

    static defaultProps = {
        user: {}
    };

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
      window.total = 0;
      this.props.dispatch(fetchCourses());
      localStorage.getItem('username') && this.props.dispatch(checkUser({
        username: localStorage.getItem('username'),
        password: localStorage.getItem('password')
      }));
    }

    renderCoursesTitles() {
        const {courses} = this.props;
        return (
            <ul>
                {courses.map(course => (
                    <Link to={`/courses/${course.title}`} key={course.title}>
                        <li>{course.title === 'robotics' && 'Робототехника'}</li>
                    </Link>)
                )}
              <li>Нанотехнологии</li>
              <li>Программирование на Javascript</li>
              <li>Веб-технологии</li>
              <li>Психология</li>
              <li>Экономика</li>
              <li>Математика</li>
            </ul>
        )
    }

    renderCourses() {
        const {courses} = this.props;
        return (
            <ul>
                {courses.map(course => (
                    <div key={course._id} className="course">
                        <h2>{course.title === 'robotics' && 'Робототехника'}<small> создан {course.author}</small></h2>
                        <div className="published">Опубликован: {course.dataPublished}</div>
                        <div>Обновлен: {course.dataChanged}</div>
                        <p>{capitalize(course.description)}</p>
                        <Link to={`/courses/${course.title}`}
                              key={course.title} className="button -describe">
                            <li>Перейти к курсу</li>
                        </Link>
                    </div>
                ))}
              <div className="course -example">
                <h2>Нанотехнологии<small> создается Alena</small></h2>
                <div className="published">Опубликован: Не опубликован</div>
                <div>Обновлен: Не обновлен</div>
                <p>Данный курс предназначен для тех, кто владеет основной информацией по теории и
                  планирует научиться использовать знания на практике.</p>
                <li className="button disabled">Перейти к курсу</li>
              </div>
              <div className="course -example">
                <h2>Программирование на Javascript<small> создается Alex</small></h2>
                <div className="published">Опубликован: Не опубликован</div>
                <div>Обновлен: Не обновлен</div>
                <p>Данный курс предназначен для тех, кто владеет основной информацией по теории и
                  планирует научиться использовать знания на практике.</p>
                <li className="button disabled">Перейти к курсу</li>
              </div>
              <div className="course -example">
                <h2>Веб-технологии<small> создается Maylo</small></h2>
                <div className="published">Опубликован: Не опубликован</div>
                <div>Обновлен: Не обновлен</div>
                <p>Данный курс предназначен для тех, кто владеет основной информацией по теории и
                  планирует научиться использовать знания на практике.</p>
                <li className="button disabled">Перейти к курсу</li>
              </div>
              <div className="course -example">
                <h2>Психология<small> создается Merimor</small></h2>
                <div className="published">Опубликован: Не опубликован</div>
                <div>Обновлен: Не обновлен</div>
                <p>Данный курс предназначен для тех, кто владеет основной информацией по теории и
                  планирует научиться использовать знания на практике.</p>
                <li className="button disabled">Перейти к курсу</li>
              </div>
              <div className="course -example">
                <h2>Экономика<small> создается Alena</small></h2>
                <div className="published">Опубликован: Не опубликован</div>
                <div>Обновлен: Не обновлен</div>
                <p>Данный курс предназначен для тех, кто владеет основной информацией по теории и
                  планирует научиться использовать знания на практике.</p>
                <li className="button disabled">Перейти к курсу</li>
              </div>
              <div className="course -example">
                <h2>Математика<small> создается Sherlock</small></h2>
                <div className="published">Опубликован: Не опубликован</div>
                <div>Обновлен: Не обновлен</div>
                <p>Данный курс предназначен для тех, кто владеет основной информацией по теории и
                  планирует научиться использовать знания на практике.</p>
                <li className="button disabled">Перейти к курсу</li>
              </div>
            </ul>
        )
    }

    creatingUser() {
      const user = {
        username: this.refs.usernameSign.value,
        password: this.refs.passwordSign.value,
        firstname: this.refs.nameSign.value
      };
      this.props.dispatch(createNewUser(user));
    }

    login() {
      const {isLoading, username} = this.props.user;
      const user = {username: this.refs.usernameLog.value, password: this.refs.passwordLog.value};
      this.props.dispatch(checkUser(user));
    }

    logOut() {
      localStorage.setItem('username', '');
      localStorage.setItem('password', '');
      this.props.dispatch(logOut());
    }

    render() {
      const { sidebar, user } = this.props;
      // TODO: Change to React-style
      user.username && $('#myModalLogin').modal('hide') || $('#myModalSignin').modal('hide');
      if (!user.isLoading && user.username) {
        if (this.refs.usernameLog.value){
          localStorage.setItem('username', this.refs.usernameLog.value);
          localStorage.setItem('password', this.refs.passwordLog.value);
          this.refs.usernameLog.value = '';
          this.refs.passwordLog.value = '';
        }
        if (this.refs.usernameSign.value){
          localStorage.setItem('username', this.refs.usernameSign.value);
          localStorage.setItem('password', this.refs.passwordSign.value);
          this.refs.usernameSign.value = '';
          this.refs.passwordSign.value = '';
          this.refs.nameSign.value = '';
        }
      }

        return (
            <div>
                <div id="header-wrapper">
                    <div id="header" className="container-fluid">
                        <div id="logo">
                            <h1><IndexLink to="/" activeClassName="current_page_item">AL Courses</IndexLink></h1>
                        </div>
                        <div id="menu">
                            <ul>
                                <li><IndexLink to="/courses" activeClassName="current_page_item">Курсы</IndexLink></li>
                                <li><Link to="/about" activeClassName="current_page_item">О нас</Link></li>
                                <li><Link to="/reviews" activeClassName="current_page_item">Отзывы</Link></li>
                                <li><Link to="/contacts" activeClassName="current_page_item">Контакты</Link></li>
                            </ul>
                        </div>
                        <div id="login">
                          {!user.username ? <ul>
                              <li><a href="" data-toggle="modal" data-target="#myModalLogin" >Войти</a></li>
                              <li><a href="" data-toggle="modal" data-target="#myModalSignin">Зарегистрироваться</a></li>
                          </ul> : <ul>
                            <li><a href="#">Привет, {user.firstname}</a></li>
                            <li><IndexLink to="/courses" activeClassName="current_page_item" onClick={this.logOut.bind(this)}>Выйти</IndexLink></li>
                          </ul>}

                          <div className="modal fade" id="myModalLogin" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                  <h4 className="modal-title" id="myModalLabel">Войти</h4>
                                </div>
                                <div className="modal-body">
                                  <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Логин:</label>
                                    <input ref="usernameLog" type="text" className="pull-right form-control" id="exampleInputEmail1" placeholder="Username" />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Пароль:</label>
                                    <input ref="passwordLog" type="password" className="pull-right form-control" id="exampleInputPassword1" placeholder="Password" />
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-default" data-dismiss="modal">Отмена</button>
                                  <button type="button" className="btn btn-primary" onClick={this.login.bind(this)}>Войти</button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="modal fade" id="myModalSignin" role="dialog" aria-labelledby="myModalLabel">
                              <div className="modal-dialog" role="document">
                                  <div className="modal-content">
                                      <div className="modal-header">
                                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                          <h4 className="modal-title" id="myModalLabel">Зарегистрироваться</h4>
                                      </div>
                                      <div className="modal-body">
                                        <div className="form-group">
                                          <label htmlFor="exampleInputEmail2">Логин:</label>
                                          <input ref="usernameSign" type="text" className="pull-right form-control" id="exampleInputEmail2" placeholder="Username" />
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="exampleInputPassword2">Пароль:</label>
                                          <input ref="passwordSign" type="password" className="pull-right form-control" id="exampleInputPassword2" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor="exampleInputName2">Имя:</label>
                                          <input ref="nameSign" type="text" className="pull-right form-control" id="exampleInputName2" placeholder="Name" />
                                        </div>
                                      </div>
                                      <div className="modal-footer">
                                          <button type="button" className="btn btn-default" data-dismiss="modal">Отмена</button>
                                          <button type="button" className="btn btn-primary" onClick={::this.creatingUser}>Зарегистрироваться</button>
                                      </div>
                                  </div>
                              </div>
                          </div>

                        </div>
                    </div>
                </div>

                {sidebar || <div>
                    <div id="header-featured"></div>
                    <div id="banner-wrapper">
                        <div id="banner" className="container">
                            <h2>Здесь вы найдете бесплатные онлайн курсы созданные для вашего успеха</h2>
                            <span>На этом сайте вы можете создавать курсы для всех, а также проходить курсы других</span>
                        </div>
                    </div>

                    <div id="wrapper">
                        <div id="page">
                            <div>
                                <div id="courses">
                                    <p>Курсы</p>
                                    {this.renderCoursesTitles()}
                                </div>
                                <div id="content">
                                    <div className="title">
                                        <h2>Доступные курсы</h2>
                                        <span className="byline">Здесь вы можете выбрать курс и пройти его!</span> </div>
                                        {this.renderCourses()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

                <div id="copyright" className="container">
                    <p>Copyright &copy; 2016. All rights reserved. | Photos by <a href="http://google.com/">Google</a> |
                        Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a> &
                        <a href="https://github.com/alexisinwork" rel="nofollow"> Alex Kuhtin</a>.</p>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Main);

