import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from './styles.js';


const DateSelector = () => {
    return (
      <View style={styles.main}>
        <View style={styles.pageheader}>
          <Image 
          source={require('../assets/back.png')}
          style={styles.pghdimg} />
          <Text style={styles.pghdtext}>Select Date & Slot</Text>
        </View>
  
        <View style={styles.calcon}>
          <TouchableOpacity style={styles.calobjactive}>
            <Text style={{color: "white"}}>Wed <Text style={{fontWeight:"bold", fontSize:25, color: "white"}}>{'\n'}31</Text>{'\n'}May</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calobj}>
            <Text>Thu <Text style={{fontWeight:"bold", fontSize:25}}>{'\n'}1</Text>{'\n'}Jun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calobj}>
            <Text>Fri <Text style={{fontWeight:"bold", fontSize:25}}>{'\n'}2</Text>{'\n'}Jun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calobj}>
            <Text>Sat <Text style={{fontWeight:"bold", fontSize:25}}>{'\n'}3</Text>{'\n'}Jun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calobj}>
            <Text>Sun <Text style={{fontWeight:"bold", fontSize:25}}>{'\n'}4</Text>{'\n'}Jun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calobj}>
            <Text>Mon <Text style={{fontWeight:"bold", fontSize:25}}>{'\n'}5</Text>{'\n'}Jun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calobj}>
            <Text>Tues <Text style={{fontWeight:"bold", fontSize:25}}>{'\n'}6</Text>{'\n'}Jun</Text>
          </TouchableOpacity>
        </View>
  
        <ScrollView style={{width: '100%'}}>
          <View style={styles.timerow}>
            <TouchableOpacity style={styles.timecelldeactive}>
              <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timecelldeactive}>
              <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timerow}>
            <TouchableOpacity style={styles.timecell}>
              <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timecelldeactive}>
              <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timerow}>
            <TouchableOpacity style={styles.timecell}>
              <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timecellactive}>
              <Text style={styles.timewhite}>10:00 AM - 11:00 AM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timerow}>
            <TouchableOpacity style={styles.timecelldeactive}>
              <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timecell}>
              <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timerow}>
            <TouchableOpacity style={styles.timecell}>
              <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timecelldeactive}>
              <Text style={styles.time}>10:00 AM - 11:00 AM</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.bottombtn}>
        <TouchableOpacity style={styles.loginbtn}>
                  <Text style={styles.logintxt}>Next</Text>
                </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  export default DateSelector;
  