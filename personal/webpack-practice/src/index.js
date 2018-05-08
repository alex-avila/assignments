import _ from 'lodash';
import './style/sass/main.sass';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }

  document.body.appendChild(component());
