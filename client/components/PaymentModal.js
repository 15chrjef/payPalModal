import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import ModalTotal from './ModalTotal';
import ModalSubmission from './ModalSubmission';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
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
    const { container, button, buttonText, normalFlex, modal, modalTitle, modalRow, modalRowButton } = styles;
    return (
			<Modal
				animationType={"fade"}
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {alert("Modal has been closed.")}}
				style={[container, modal ]}
				>
				<View style={[{marginTop: height * .05}, normalFlex ]}>
				<View style={modal}>
					<View style={modalRow}>
						<TouchableOpacity 
							style={modalRowButton}
							onPress={closeModal}
						>
							<Text style={modalTitle}>Ship To</Text>
							<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
								<View>
									<Text>{shipping.name}</Text>
									<Text style={{marginTop: 3, fontSize:12}} >{shipping.address}</Text>
								</View>
								<Icon name="chevron-thin-right" size={20} color="#4F8EF7" />
							</View>
						</TouchableOpacity>
					</View>

					<View style={modalRow}>
					<TouchableOpacity 
						style={modalRowButton}
						onPress={closeModal}
					>
						<Text style={modalTitle}>Pay With</Text>
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<View>
								<Text>{bank.type}</Text>
								<Text style={{marginTop: 3, color: 'gray', fontSize:12}}>{bank.card}</Text>
							</View>
							<Icon name="chevron-thin-right" size={20} color="#4F8EF7" />
						</View>
					</TouchableOpacity>
					</View>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#1072B7',
    width: width * .85,
    height: 50,
    borderRadius: 5
  },
  normalFlex: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  modal: {
    width: width,
    height: height,
    backgroundColor: 'white',
  },
  modalTitle: {
    fontWeight: 'bold',
    marginBottom: 8
  },
  modalRow: {
    flex: 2, 
    justifyContent: 'center',
  },
  modalRowButton: {
    marginLeft: 20,
    marginRight: 10
  }
});