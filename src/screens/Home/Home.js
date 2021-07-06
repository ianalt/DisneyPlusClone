/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import Logo from '../../components/Logo/Logo';
import MainSeries from '../../components/Series/MainSeries/MainSeries';
import Studios from '../../components/Studios/Studios';
import RecommendedSeries from '../../components/Series/RecommendedSeries/RecommendedSeries';
import KeepWatching from '../../components/Series/KeepWatching/KeepWatching';
import Footer from '../../components/Footer/Footer';
import LinearGradient from 'react-native-linear-gradient';
import stylesHome from './stylesHome';

const Home = () => {
    return (
        <LinearGradient style={stylesHome.mainContainer} colors={['#2c2f44', '#1a1d29']}>

            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                <Logo />
                <MainSeries />
                <Studios />
                <RecommendedSeries />
                <RecommendedSeries />
                <KeepWatching />
                <RecommendedSeries />
                <RecommendedSeries />
            </ScrollView>
            <Footer />
        </LinearGradient>
    );
};

export default Home;
