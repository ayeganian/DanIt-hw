import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const {backgroundColor, text, handleModalOpen} = this.props;
    const btnStyle = {
      backgroundColor,
      border: 'none',
      padding: '12px',
      margin: '20px',
      fontWeight: 'bold',
      width: '15vw',
      cursor: 'pointer',
    };
    return (
        <div>
          <button style={btnStyle} onClick={handleModalOpen}>{text}</button>
        </div>
    );
  }
}
Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  handleModalOpen: PropTypes.func,
};
Button.defaultProps = {
  backgroundColor: 'blue',
  text: 'hello world',
};

