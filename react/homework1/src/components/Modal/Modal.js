import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ModalWrapper, ModalBoxSetup, ModalBg} from "./modalStyles";
import ModalContent from "./ModalContent";


export default class Modal extends Component {
  render() {
    const {visible1, visible2, dismiss} = this.props;

    let children = [
        <ModalContent header='Do you want to delete this file?'
                                  closeButton={true}
                                  text='Once you delete this file, it won’t be possible to undo this action.
                                  Are you sure you want to delete it?'
                                  close={dismiss}
                                  actions={[
                                    {backgroundColor: '#b3382c', text: 'Ok', isCancelBtn: false},
                                    {backgroundColor: '#b3382c', text: 'Cancel', isCancelBtn: true}
                                  ]}/>,
      <ModalContent header='Do react project?'
                    closeButton={false}
                    text='Use some magic and we will do something awesome'
                    close={dismiss}
                    actions={[
                      {backgroundColor: '#2cb373', text: 'Do now', isCancelBtn: false},
                      {backgroundColor: '#2cb373', text: 'Postpone', isCancelBtn: true}
                    ]}/>
                    ];
    return (
        <React.Fragment>
          {visible1 ? (
              <ModalWrapper>
                <ModalBoxSetup>{children[0]} </ModalBoxSetup>
                <ModalBg onClick={dismiss}/>
              </ModalWrapper>
          ) : null}
          {visible2 ? (<ModalWrapper>
            <ModalBoxSetup>{children[1]} </ModalBoxSetup>
            <ModalBg onClick={dismiss}/>
          </ModalWrapper>) : null}
        </React.Fragment>
    );
  }
}
Modal.propTypes = {
  dismiss: PropTypes.func,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
};

