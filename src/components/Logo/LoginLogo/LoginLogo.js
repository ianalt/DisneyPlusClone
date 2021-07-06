/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';
import stylesLoginLogo from './stylesLoginLogo';


const LoginLogo = () => {
    return (
        <View style={stylesLoginLogo.container}>
            <Image source={require('../../../assets/icons/disneyplus-logo.png')} style={stylesLoginLogo.img} />
        </View>
    );
};

export default LoginLogo;
