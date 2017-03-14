import React from 'react';
import ModalTotal from './ModalTotal';
import ModalSubmission from './ModalSubmission';
import ModalRow from './ModalRow';
import {
  StyleSheet,
  View,
  Dimensions,
  Modal
} from 'react-native';
const {height, width} = Dimensions.get('window');

export default class PaymentModal extends React.Component {
	constructor(props){
		super(props)
	}
  render() {
    const {shipping, bank, price, modalVisible, closeModal } = this.props
    const { modal, modalRow } = styles;
    return (
			<Modal
				animationType={"fade"}
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {alert("Modal has been closed.")}}
				style={modal}
				>
				<View style={{marginTop: height * .05}}>
				<View style={modal}>
					<ModalRow Title='Ship To' MainInfo={shipping.name} Details={shipping.address} closeModal={closeModal}/>
					<ModalRow Title='Pay With' MainInfo={bank.type} Details={bank.card} closeModal={closeModal}/>
					<View style={[modalRow, { flex: .7, backgroundColor: '#F7F9FA'}]}>
						<ModalTotal price={price} closeModal={closeModal}/>
					</View>
					<ModalSubmission/>
					<View style={{flex:1}}>
					</View>
				</View>
				</View>
			</Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    width: width,
    height: height,
    backgroundColor: 'white',
  },
  modalRow: {
    flex: 2, 
    justifyContent: 'center',
  },
});