import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

const Dash = () => {
    return (
        <View style={styles.main}>
          <View style={styles.dashhead}>
          <SafeAreaView style={{flexDirection: 'row', alignItems: "center"}}>
            <Image source={require('../assets/logo.png')}/ >
            <Text style={styles.dashtxt}>Co-working</Text>
          </SafeAreaView>
          <TouchableOpacity style={styles.dashhdbtn}>
            <Text style={{color: '#ffffff', fontSize: 17}}>Booking History</Text>
          </TouchableOpacity>
          </View>
  
          <View style={styles.dashcontent}>
            <View style={styles.contentbox}>
              <Image
              source={require("../assets/meettable.png")} 
              />
            </View>
            <View style={styles.contentbox}>
            <Image
              source={require("../assets/meetingroom.png")} 
              />
            </View>
            <Text style={styles.contenttxt}>Book Work Station</Text>
            <Text style={styles.contenttxt}>Meeting Room</Text>
          </View>
        </View>
    )
  }
  
  export default Dash;
  
