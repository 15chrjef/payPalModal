import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Entypo';

const ModalRow = ({Title, MainInfo, Details, closeModal }) => {
	const { modalRow, modalRowButton, modalTitle} = styles;
	var grayText = Title === 'Pay With' ? { color: 'gray'} : {};
	return (
		<View style={modalRow}>
			<TouchableOpacity 
				style={modalRowButton}
				onPress={closeModal}
			>
				<Text style={modalTitle}>{Title}</Text>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<View>
						<Text>{MainInfo}</Text>
						<Text style={{...grayText, marginTop: 3, fontSize:12}}>{Details}</Text>
					</View>
					<Icon name="chevron-thin-right" size={20} color="#4F8EF7" />
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
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

export default ModalRow