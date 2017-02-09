// Import React and HelloText class
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { setCurrentCourse } from '../reducers/courses'
import { capitalize } from '../utils'

const mapStateToProps = (state) => ({
  courses: state.courses.courses
});

export default class Section extends Component {

  constructor() {
    super();
    this.state = {canOpen: false};
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array
  };

  static defaultProps = {
    courses: []
  };

  nextSection(s, ch, n, c) {
    this.setState({ isOpen: false });
    window.scrollTo(0, 100);
    switch (s) {
      case 'lection':
        history.pushState({}, 'lection', 'practice');
        break;
      case 'practice':
        history.pushState({}, 'practice', 'test');
        break;
      case 'test':
        this.nextChapter(ch, n, c);
        break;
    }
  }

  nextChapter(ch, n, c){
    window.result = 0;
    var co = c[0];
    $("input[name='q1']").each(function() {
      if (this.checked) if (this.value == co.answers[0]) window.result += 1;
    });
    $("input[name='q2']").each(function() {
      if (this.checked) if (this.value == co.answers[1]) window.result += 1;
    });
    $("input[name='q3']").each(function() {
      if (this.checked) if (this.value == co.answers[2]) window.result += 1;
    });
    $("input[name='q4']").each(function() {
      if (this.checked) if (this.value == co.answers[3]) window.result += 1;
    });
    $("input[name='q5']").each(function() {
      if (this.checked) if (this.value == co.answers[4]) window.result += 1;
    });
    if (!window.result) window.result = 0;
    window.total += window.result;
    $("input[type='radio']").each(function() {
      $(this).attr('disabled', 'disabled');
    });
    if (n < ch.length) {
      alert('Result: ' + window.result + ' of 1. Go to next chapter.');
    } else {
      if (window.total<5){
        var bal = 'Course not passed.';
      } else if (window.total >= 5 && window.total <= 10) {
        var bal = 'Course passed goodly.';
      } else {
        var bal = 'Course passed perfectly!';
      }
      alert('Whole result: ' + window.total + ' of ' + ch.length + '. ' + bal);
    }
  }

  checkAnswer() {
    $('textarea').each(function(){
      $(this).attr('disabled', 'disabled');
    });
    this.setState({ isOpen: true });
    $('html, body').animate({
      scrollTop: $('#answers').offset().top
    }, 10);
  }

  renderInfo(c, s){
    var ruC = '', ruS = '';
    switch (c){
      case 'Chapter1':
        ruC = 'Chapter 1';
        break;
      case 'Chapter2':
        ruC = 'Chapter 2';
        break;
      case 'Chapter3':
        ruC = 'Chapter 3';
        break;
      case 'Chapter4':
        ruC = 'Chapter 4';
        break;
      case 'Chapter5':
        ruC = 'Chapter 5';
        break;
      case 'Chapter6':
        ruC = 'Chapter 6';
        break;
      case 'Chapter7':
        ruC = 'Chapter 7';
        break;
      case 'Chapter8':
        ruC = 'Chapter 8';
        break;
      case 'Chapter9':
        ruC = 'Chapter 9';
        break;
    }
    switch (s){
      case 'lection':
        ruS = 'Lection';
        break;
      case 'practice':
        ruS = 'Practice';
        break;
      case 'test':
        ruS = 'Tests';
        break;
    }
    return ruC + ': ' + ruS
  }

  checkInfo(course) {
    const {params} = this.props;
    var indexCourse = '';
    const chapter = course.chapters.filter((chapter, index) => {
      if (chapter.cName === params.chapter) {
        indexCourse = index;
        return chapter;
      }
    });
    return [chapter[0], indexCourse];
  }

  render() {
    const { params, courses } = this.props;
    const course = courses.filter(course => course.title === params.course)[0];

    if (params.section === 'theory'){
      return <div dangerouslySetInnerHTML={{__html: course.theory}} />
    }

    const chapter = this.checkInfo(course);
    const nextCourseName = chapter[1]+1;

    return (<div>
      <h2>{this.renderInfo(chapter[0].cName, params.section)}</h2>
      <div className="description" dangerouslySetInnerHTML={{__html: chapter[0][params.section]}} />
      <div id="answers">
        {this.state.isOpen && <span>
          <p>Results:</p>
          <textarea>
            Understand something important here.
          </textarea>
          <p>Outcome:</p>
          <textarea>
            Great.
          </textarea>
        </span>}
      </div>
      {<a href="#" className="button pull-right"
          onClick={this.nextSection.bind(this, params.section, course.chapters, nextCourseName, chapter)}>{params.section !== 'test' ? 'Next' : 'Show result'}</a>
      }
      {params.section === 'practice' &&
      <a href="#" className="button pull-right -right-margined" onClick={this.checkAnswer.bind(this)}>Check</a>}
    </div>)
  }
}

export default connect(mapStateToProps)(Section);
