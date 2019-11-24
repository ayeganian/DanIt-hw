import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class ModalButton extends Component {
  render() {
    const close = this.props.close;
    const btnsArr = this.props.actions.map((item,index) => {
      const {backgroundColor, text, isCancelBtn} = item;
      const btnWrapperStyle = {
        display: 'inline-block',
      };
      const btnStyle = {
        backgroundColor,
        color: 'white',
        border: 'none',
        width: '101px',
        height: '41px',
        marginRight: '10px',
        marginBottom: '24px',
        borderRadius: '3px',
        cursor: 'pointer',
      };
      return (
          <div key={index} style={btnWrapperStyle}>
            <button style={btnStyle} onClick={isCancelBtn ? close : null}>{text}</button>
          </div>
      );
    });
    return (
        <div>{btnsArr}</div>
    )
  }
}
ModalButton.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
};