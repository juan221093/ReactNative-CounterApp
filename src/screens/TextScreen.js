import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

 const TextScreen = () => {
     const [name, setName] = useState('');
     const [password, setPassword] = useState('');

     return <View>
         <Text>Type You Name</Text>
        
         <TextInput 
            autoCapitalize = 'none'
            autoCorrect = {false}
            value = {name}
            onChangeText={(newValue)=> setName(newValue)}
            style={styles.input} />

        <Text>My Name is {name}</Text>

        <Text>Enter Password</Text>
        
        <TextInput 
           autoCapitalize = 'none'
           autoCorrect = {false}
           value = {password}
           onChangeText={(newPass)=> setPassword(newPass)}
           style={styles.input} />

           {password.length < 5 ? <Text>Password needs 5 characters at least</Text> : null }

     </View>
 };

 const styles = StyleSheet.create({
     input:{
         margin: 15,
         borderColor: 'black',
         borderWidth: 1,
         height: 50
     }

 });
 export default TextScreen;