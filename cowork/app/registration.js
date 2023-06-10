import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

const Register = () => {
    return (
        <View style={styles.main}>
              <Text style={styles.regheading}>  Create an Account</Text>
              <View style={styles.reginputarea}>
              <Text style={{fontSize:18, padding: 5}}>Full Name</Text>
              <TextInput
                label="Name"
                returnKeyType="next"
                autoCapitalize="none"
                autoCompleteType="text"
                style={styles.input}
              />
              <Text style={{fontSize:18, padding: 5}}>Mobile Number</Text>
              <TextInput
                label="Number"
                returnKeyType="next"
                autoCapitalize="none"
                autoCompleteType="number"
                style={styles.input}
              />
              <Text style={{fontSize:18, padding: 5}}>Password</Text>
              <TextInput
                label="Password"
                returnKeyType="done"
                secureTextEntry
                style={styles.input}
              />
            </View>
            <View style={styles.bottombtn}>
              <TouchableOpacity style={styles.loginbtn}>
                <Text style={styles.logintxt}>Create an Account</Text>
              </TouchableOpacity>
              <Text style={styles.botomtxtprompt}>Existing user? Log in</Text>
            </View>
            <StatusBar style="auto"/>
  
        </View>
    )
  }
  
  export default Register;
