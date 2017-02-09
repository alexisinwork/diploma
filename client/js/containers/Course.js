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
        ruName = 'Overview';
        break;
      case 'Chapter2':
        ruName = 'Motor programming: command Move';
        break;
      case 'Chapter3':
        ruName = 'States and events. Sensors';
        break;
      case 'Chapter4':
        ruName = 'Loops';
        break;
      case 'Chapter5':
        ruName = 'Branches in NXT-G';
        break;
      case 'Chapter6':
        ruName = 'Creating your custom elements. Sub commands: My block';
        break;
      case 'Chapter7':
        ruName = 'Variables and constants';
        break;
      case 'Chapter8':
        ruName = 'Flows';
        break;
      case 'Chapter9':
        ruName = 'Manage robot movements';
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
             <h2>All info about course</h2>
               <span>You will pass this course here</span>
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
                      <li>Description</li>
                    </Link>
                    <Link to={`/courses/${course.title}/Overview/theory`}
                          key={course.theory}>
                      <li>General information</li>
                    </Link>
                    {course.chapters.map((chapter, index) => {return <div key={chapter.cName}>
                      <li>Chapter {index+1}: {this.renderChapter(chapter.cName)}
                        <ul className="chapter">
                          <Link to={`/courses/${course.title}/${chapter.cName}/lection`}>
                            <li>Lection</li>
                          </Link>
                          <Link to={`/courses/${course.title}/${chapter.cName}/practice`}>
                            <li>Practice</li>
                          </Link>
                          <Link to={`/courses/${course.title}/${chapter.cName}/test`}>
                            <li>Tests</li>
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
                      <h2>Description</h2>
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
