import Expo from 'expo';
import React from 'react';
import axios from 'axios';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import PaymentModal from './components/PaymentModal'
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
    const { container, button, buttonText, normalFlex } = styles;
    return (
      <View style={[container, normalFlex]}>
        <PaymentModal closeModal={this.closeModal.bind(this)} {...this.state}/>
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
  }
});

Expo.registerRootComponent(App);
