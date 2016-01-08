import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { capitalize } from '../utils'
import {Link, IndexLink} from 'react-router'
import { checkUser } from '../reducers/user'
import { fetchCourses } from '../reducers/courses'

const mapStateToProps = (state) => ({
  user: state.user,
  courses: state.courses.courses,
  isLoaded: state.courses.isLoaded
});

export default class Course extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object,
    courses: PropTypes.array,
    isLoaded: PropTypes.bool
  };

  static defaultProps = {
    user: {},
    courses: [],
    isLoaded: false
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(fetchCourses());
  }

  renderChapter(name) {
    var ruName = '';
    switch (name){
      case 'Chapter1':
        ruName = 'Обзор';
        break;
      case 'Chapter2':
        ruName = 'Программирование моторов: команда Move';
        break;
      case 'Chapter3':
        ruName = 'Состояния и события. Сенсоры';
        break;
      case 'Chapter4':
        ruName = 'Циклы';
        break;
      case 'Chapter5':
        ruName = 'Ветвление в NXT-G';
        break;
      case 'Chapter6':
        ruName = 'Создание собственных блоков. Подпрограммы: My block';
        break;
      case 'Chapter7':
        ruName = 'Переменные и константы';
        break;
      case 'Chapter8':
        ruName = 'Потоки';
        break;
      case 'Chapter9':
        ruName = 'Управление движением робота при помощи системы с отрицательной обратной связью';
        break;
    }
    return ruName;
  }

  render() {
    const { params, isLoaded, courses, section } = this.props;
    const course = courses.filter(course => course.title === params.course)[0];

    return (
      <div>
        <div id="banner-wrapper">
          <div id="banner" className="container">
             <h2>Здесь вы увидите всю информацию по курсу</h2>
               <span>На этой странице вы будете проходить ваш курс</span>
             </div>
          </div>

        {isLoaded && <div id="wrapper">
            <div id="page">
              <div>
                <div id="courses">
                  <p>{course.title === 'robotics' && 'Робототехника'}</p>
                  <ul>
                    <Link to={`/courses/${course.title}`}
                          key={course.title}>
                      <li>Описание</li>
                    </Link>
                    <Link to={`/courses/${course.title}/Overview/theory`}
                          key={course.theory}>
                      <li>Общая информация курса</li>
                    </Link>
                    {course.chapters.map((chapter, index) => {return <div key={chapter.cName}>
                      <li>Часть {index+1}: {this.renderChapter(chapter.cName)}
                        <ul className="chapter">
                          <Link to={`/courses/${course.title}/${chapter.cName}/lection`}>
                            <li>Лекция</li>
                          </Link>
                          <Link to={`/courses/${course.title}/${chapter.cName}/practice`}>
                            <li>Практика</li>
                          </Link>
                          <Link to={`/courses/${course.title}/${chapter.cName}/test`}>
                            <li>Тесты</li>
                          </Link>
                        </ul>
                      </li>
                      </div>
                    })}
                  </ul>
                </div>
                <div id="content" className="courseInfo">
                  <div className="title">
                    {section || <div>
                      <h2>Описание</h2>
                      <p className="description">{course.description}</p>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>)
  }
}

export default connect(mapStateToProps)(Course);
