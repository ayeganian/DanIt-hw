import React, {Component} from 'react';
import Button from '../Button/Button'
import Modal from "../Modal/Modal";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstModalOpen: false,
      isSecondModalOpen: false,
    };
  }
  dismiss = () => {
    this.setState({isFirstModalOpen: false});
    this.setState({isSecondModalOpen: false})
  };
  handleFirstModalOpen = () => {
    this.setState({isFirstModalOpen: !this.state.isFirstModalOpen})
  };
  handleSecondModalOpen = () => {
    this.setState({isSecondModalOpen: !this.state.isSecondModalOpen})
  };

  render() {
    const dashboardStyle={
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    };
    return (
        <div style={dashboardStyle}>
            <Button backgroundColor='teal' text='Open first modal' handleModalOpen={this.handleFirstModalOpen} />
            <Button backgroundColor='violet' text='Open second modal'  handleModalOpen={this.handleSecondModalOpen}/>
            <Modal
              visible1={this.state.isFirstModalOpen}
              visible2={this.state.isSecondModalOpen}
              dismiss={this.dismiss}
          />
        </div>
    );
  }

}
