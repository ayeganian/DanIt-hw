import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ModalButton from "../Button/ModalButton";
import {ModalContainer, ModalHeader, ModalText} from "./1modalStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class ModalContent extends Component {
  render() {
    const {header, closeButton, text, close, actions} = this.props;
    return (
        <div>
          <ModalContainer>
            <ModalHeader>
              <div>{header}</div>
              <div>
                {closeButton&&
              (<div><FontAwesomeIcon  icon={faTimes} style={{cursor:'pointer'}} onClick={close}/></div>)
                }
              </div>
            </ModalHeader>
            <ModalText>{text}</ModalText>
            <ModalButton actions={actions} close={close}/>
          </ModalContainer>
        </div>
    )
  }
}
ModalContent.propTypes = {
  header: PropTypes.string,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
  actions: PropTypes.array,
  close: PropTypes.func,
};