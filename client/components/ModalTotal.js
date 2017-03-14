import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const {height, width} = Dimensions.get('window');

const ModalTotal = ({ price, closeModal }) => {
	return(
		<View style={[styles.modalRow, { flex: .7, backgroundColor: '#F7F9FA'}]}>
			<TouchableOpacity 
				style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
				onPress={closeModal}
			>
				<Text style={{fontWeight: 'bold', marginLeft: 20}}>Total</Text>
				<View style={{flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center'}}>
					<View style={{alignItems: 'center', justifyContent: 'center'}}>
					<Text style={{fontWeight: 'bold'}}>${price}</Text>
					</View>
					<Icon name="chevron-thin-right" style={{marginLeft: 10, marginRight:10 }} size={20} color="#4F8EF7" />
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
  modalRow: {
    flex: 2, 
    justifyContent: 'center',
  }
});
export default ModalTotal