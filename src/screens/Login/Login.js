/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import LoginLogo from '../../components/Logo/LoginLogo/LoginLogo';
import stylesLogin from './stylesLogin';

const Login = () => {
    return (
        <View style={stylesLogin.mainContainer}>
            <LoginLogo />

            <View style={stylesLogin.loginContainer}>
                <Text style={stylesLogin.title}>Log in with your email</Text>

                <TextInput placeholder="Email" placeholderTextColor="#a8a9ad" style={stylesLogin.input} />
                <TextInput placeholder="Password" placeholderTextColor="#a8a9ad" style={stylesLogin.input} />

                <TouchableOpacity style={stylesLogin.btn}>
                    <Text style={stylesLogin.textBtn}>CONTINUE</Text>
                </TouchableOpacity>

                <View style={stylesLogin.questionBox}>
                    <Text style={stylesLogin.question}> New to Disney+?</ Text>
                    <Text style={stylesLogin.sigInLink}> SIGN UP</Text>
                </View>
            </View>
        </View>
    );
};

export default Login;
