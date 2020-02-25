import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { validateEmail } from '../../utils/Validation';
import * as firebase from 'firebase';
import { withNavigation } from 'react-navigation';
import Loading from '../Loading';

function RegisterForm(props) {
    const { toastRef, navigation } = props;
    const [hidePassword, setHidePassword] = useState(true);
    const [hideRepitPassword, setHideRepitPassword] = useState(true);
    const [isVisibleLoading, setIsVisibleLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repitPassword, setRepitPassword] = useState('');
    
    
    const Register = async () => {
        setIsVisibleLoading(true);
        if (!email || !password || !repitPassword) {
            toastRef.current.show('Todos los campos son obligatorios');
        } else {
            if (!validateEmail(email)) {
                toastRef.current.show('El email no es correcto');
            } else {
                if (password !== repitPassword) {
                    toastRef.current.show("las contraseñas no son iguales");
                } else {
                    await firebase.auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() =>  {
                        navigation.navigate('MyAccount');
                    })
                    .catch(() => {
                        toastRef.current.show('Error al crear la cuenta, intentelo más tarde');
                    })
                }

            }
        }
        setIsVisibleLoading(false);
    }

    return (
      <View style={styles.formContainer}>
        <Input
          placeholder="Correo electronico"
          containerStyle={styles.inputForm}
          onChange={e => setEmail(e.nativeEvent.text)}
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
          onChange={e => setPassword(e.nativeEvent.text)}
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
          onChange={e => setRepitPassword(e.nativeEvent.text)}
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
        <Loading text='Creando cuenta' isVisible={isVisibleLoading} />
      </View>
    );
}

export default withNavigation(RegisterForm);

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