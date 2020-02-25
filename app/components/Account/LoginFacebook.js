import React, { useState } from 'react';
import { SocialIcon } from 'react-native-elements';
import * as firebase from 'firebase';
import * as Facebook from "expo-facebook";
import { FacebookApi } from '../../utils/Social';
import Loading from '../Loading';


export default function LoginFacebook(props) {
    const { toastRef, navigation } = props;
    const [isLoading, setIsLoading] = useState(false)
    const login = async () => {
        setIsLoading(true);
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(
            FacebookApi.application_id,
            { permissions: FacebookApi.permissions }
        );

        if (type === 'success') {
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);
            await firebase.auth()
                .signInWithCredential(credentials)
                .then(() => {
                    navigation.navigate('MyAccount');
                })
                .catch(() => {
                    toastRef.current.show('Error accediendo con Facebbok, intente mas tarde')
                });
        } else if(type === 'cancel') {
            toastRef.current.show("Inicio de sesión cancelado");
        } else {
            toastRef.current.show("eror desconocido, intentelo mas tarede");
        }
        setIsLoading(false);
    };
    
    return (
        <>
            <SocialIcon 
                title='Iniciar sesión con Facebook'
                button
                type='facebook'
                onPress={login}
            />
            <Loading isVisible={isLoading} text='Iniciando sesión' />
        </>
    );
}