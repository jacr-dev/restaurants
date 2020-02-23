import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

export default function RegisterForm() {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideRepitPassword, setHideRepitPassword] = useState(true);
    
    const Register = () => {
        console.log('register');
    }

    return (
      <View style={styles.formContainer}>
        <Input
          placeholder="Correo electronico"
          containerStyle={styles.inputForm}
          onChange={() => console.log("email actualizado")}
          rightIcon={
            <Icon
              type="material-community"
              name="at"
              iconStyle={styles.iconRigth}
            />
          }
        />
        <Input
          placeholder="Cotraseña"
          password={true}
          secureTextEntry={hidePassword}
          containerStyle={styles.inputForm}
          onChange={() => console.log("password actualizado")}
          rightIcon={
            <Icon
              type="material-community"
              name={hidePassword ? "eye-outline" : "eye-off-outline"}
              iconStyle={styles.iconRigth}
              onPress={() => setHidePassword(!hidePassword)}
            />
          }
        />
        <Input
          placeholder="Repetir cotraseña"
          password={true}
          secureTextEntry={hideRepitPassword}
          containerStyle={styles.inputForm}
          onChange={() => console.log("repetir password actualizado")}
          rightIcon={
            <Icon
              type="material-community"
              name={hideRepitPassword ? "eye-outline" : "eye-off-outline"}
              iconStyle={styles.iconRigth}
              onPress={() => setHideRepitPassword(!hideRepitPassword)}
            />
          }
        />
        <Button
          title="Unirse"
          containerStyle={styles.btnContainerRegister}
          buttonStyle={styles.btnRegister}
          onPress={Register}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    inputForm: {
        width: '100%',
        marginTop: 20
    },
    iconRigth: {
        color: '#c1c1c1'
    },
    btnContainerRegister: {
        marginTop: 20,
        width: '95%'
    },
    btnRegister: {
        backgroundColor: '#00a680'
    } 
});