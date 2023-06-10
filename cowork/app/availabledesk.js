import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from './styles.js';


const AvailableDesk = () => {
    return (
          <View style={styles.main}>
            <View style={styles.pageheader}>
              <Image 
              source={require('../assets/back.png')}
              style={styles.pghdimg} />
              <Text style={styles.pghdtext}>Available Desks</Text>
            </View>
            <Text style={{marginHorizontal: '10%', fontSize: 18, marginBottom: 10,}}>Wed 31 May, 05:00 - 06:00 PM</Text>
            <View style={styles.gridcontainer}>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>1</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>2</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>3</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>4</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>5</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>6</Text></TouchableOpacity>
            </View>
  
            <View style={styles.gridcontainer}>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>7</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>8</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>9</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>10</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>11</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>12</Text></TouchableOpacity>
            </View>
  
            <View style={styles.gridcontainer}>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>13</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockactive}><Text style={styles.gridnumberwhite}>14</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>15</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>16</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>17</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>18</Text></TouchableOpacity>
            </View>
  
            <View style={styles.gridcontainer}>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>19</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>20</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>21</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>22</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>23</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>24</Text></TouchableOpacity>
            </View>
  
            <View style={styles.gridcontainer}>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>25</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>26</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>27</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>28</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>29</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>30</Text></TouchableOpacity>
            </View>
  
            <View style={styles.gridcontainer}>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>31</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>32</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>33</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>34</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>35</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>36</Text></TouchableOpacity>
            </View>        
  
            <View style={styles.gridcontainer}>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>37</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblock}><Text style={styles.gridnumber}>38</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>39</Text></TouchableOpacity>
              <TouchableOpacity style={styles.gridblockinactive}><Text style={styles.gridnumber}>40</Text></TouchableOpacity>
            </View>
  
            <View style={styles.bottombtn}>
              <TouchableOpacity style={styles.loginbtn}>
                <Text style={styles.logintxt}>Book Desk</Text>
              </TouchableOpacity>
            </View>
          </View>
      )
  }
  
  export default AvailableDesk;
  