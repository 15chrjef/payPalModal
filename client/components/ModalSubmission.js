import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Modal
} from 'react-native';
	const {height, width} = Dimensions.get('window');

const ModalSubmission = () => {
	const { normalFlex, button, buttonText } = styles;
	return(
	<View style={[normalFlex, { flex: 2, justifyContent: 'space-around'}]}>
		<View style={{flexDirection: 'row', width: width * .85}}>  
			<Text style={{fontSize: 12}}>View</Text>
			<Text style={{fontSize: 12, fontWeight: 'bold', color: '#1072B7'}}> PayPal Policies</Text>
			<Text style={{fontSize: 12}}> and your payment method rights.</Text>
		</View>
		<TouchableOpacity style={[normalFlex, button]}>
			<Text style={buttonText}>Pay Now</Text>
		</TouchableOpacity>
		<View style={{flexDirection: 'row', width: width * .85, }}>
			<Text style={{fontSize: 10, color: 'gray'}}>
				If money is added to your PayPal balance before this transaction completes, 
				the additional balance may be used to complete your 
				payment. <Text style={{fontSize: 12, fontWeight: 'bold', color: '#1072B7'}}>Learn More.</Text>
			</Text>
		</View>
	</View>
	)
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

export default ModalSubmission;