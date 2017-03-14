import Expo from 'expo';
import React from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Modal
} from 'react-native';
const {height, width} = Dimensions.get('window');

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      modalVisible: false,
      shipping: '',
      bank: '',
      price: ''
    }
  }
  handlePress(){
    var self = this;
    axios.get('http://localhost:3000/data')
    .then(data => { 
      const { shipping, bank, price } = data.data
      self.setState({ 
        modalVisible: true ,
        shipping,
        bank,
        price
      })
    })
    .catch(err => {console.log( err)})
  }
  closeModal(){
    this.setState({ modalVisible: false })
  }
  render() {
    const {shipping, bank, price } = this.state
    const { container, button, buttonText, normalFlex, modal, modalTitle, modalRow, modalRowButton } = styles;
    return (
      <View style={[container, normalFlex]}>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          style={[container, modal ]}
          >
         <View style={[{marginTop: height * .05}, normalFlex ]}>
          <View style={modal}>
            <View style={modalRow}>
              <TouchableOpacity 
                style={modalRowButton}
                onPress={this.closeModal.bind(this)}
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
              onPress={this.closeModal.bind(this)}
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
              <TouchableOpacity 
                style={[modalRowButton, {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}
                onPress={this.closeModal.bind(this)}
              >
                <Text style={{fontWeight: 'bold'}}>Total</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center'}}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontWeight: 'bold'}}>${price}</Text>
                  </View>
                  <Icon name="chevron-thin-right" style={{marginLeft: 10 }} size={20} color="#4F8EF7" />
               </View>
              </TouchableOpacity>
            </View>

            <View style={[normalFlex, { flex: 2, justifyContent: 'space-around'}]}>
              <View style={{flexDirection: 'row', width: width * .85}}>  
                <Text style={{fontSize: 12}}>View</Text>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#1072B7'}}> PayPal Policies</Text>
                <Text style={{fontSize: 12}}> and your payment method rights.</Text>
              </View>
              <TouchableOpacity onPress={this.handlePress.bind(this)} style={[normalFlex, button]}>
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
            <View style={{flex:1}}>
            </View>
          </View>
         </View>
        </Modal>
        <TouchableOpacity onPress={this.handlePress.bind(this)} style={[normalFlex, button]}>
          <Text style={buttonText}>Initiate Payment</Text>
        </TouchableOpacity>
      </View>
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

Expo.registerRootComponent(App);
