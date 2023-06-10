import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from './styles.js';


const BookingHistory = () => {
    return (
        <View style={styles.main}>
          <View style={styles.pageheader}>
            <Image 
            source={require('../assets/back.png')}
            style={styles.pghdimg} />
            <Text style={styles.pghdtext}>Booking History</Text>
          </View>
          <ScrollView style={{marginHorizontal: '10%'}}>
            <TouchableOpacity style={styles.bckcontent}>
              <Text style={{width: '50%', fontSize: 16}}>Desk ID:</Text><Text style={{width: '50%', fontSize: 16}}>12345</Text>
              <Text style={{width: '50%', fontSize: 16}}>Name:</Text><Text style={{width: '50%', fontSize: 16}}>Supriya Thete</Text>
              <Text style={{width: '50%', fontSize: 16}}>Booked on:</Text><Text style={{width: '50%', fontSize: 16}}>31 May 2022 at 02:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bckcontent}>
              <Text style={{width: '50%', fontSize: 16}}>Desk ID:</Text><Text style={{width: '50%', fontSize: 16}}>12345</Text>
              <Text style={{width: '50%', fontSize: 16}}>Name:</Text><Text style={{width: '50%', fontSize: 16}}>Supriya Thete</Text>
              <Text style={{width: '50%', fontSize: 16}}>Booked on:</Text><Text style={{width: '50%', fontSize: 16}}>31 May 2022 at 02:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bckcontent}>
              <Text style={{width: '50%', fontSize: 16}}>Desk ID:</Text><Text style={{width: '50%', fontSize: 16}}>12345</Text>
              <Text style={{width: '50%', fontSize: 16}}>Name:</Text><Text style={{width: '50%', fontSize: 16}}>Supriya Thete</Text>
              <Text style={{width: '50%', fontSize: 16}}>Booked on:</Text><Text style={{width: '50%', fontSize: 16}}>31 May 2022 at 02:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bckcontent}>
              <Text style={{width: '50%', fontSize: 16}}>Desk ID:</Text><Text style={{width: '50%', fontSize: 16}}>12345</Text>
              <Text style={{width: '50%', fontSize: 16}}>Name:</Text><Text style={{width: '50%', fontSize: 16}}>Supriya Thete</Text>
              <Text style={{width: '50%', fontSize: 16}}>Booked on:</Text><Text style={{width: '50%', fontSize: 16}}>31 May 2022 at 02:00 PM</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
    )
  }
  
  export default BookingHistory;