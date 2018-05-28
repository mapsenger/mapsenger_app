/**
 * Created by JNEP on 4/3/18.
 */
import React from 'react-dom';
import PropTypes from 'prop-types';

// button needs to have primary / secondary color scheme
// stateless

// props.buttonType =

function Button(props){
  return (
    <button
      style = {props.buttonType === 'primary' ? 'green' : 'blue'}
    >
      Submit
    </button>
  )
}

Button.proptypes = {
  buttonType: PropTypes.sting.isRequired
};

module.exports = Button;
