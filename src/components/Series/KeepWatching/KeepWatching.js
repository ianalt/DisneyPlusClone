/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import imgAvengers from '../../../assets/img/keep-watching/avengers-scene.jpg';
import imgCloneWars from '../../../assets/img/keep-watching/clonewars-scene.jpg';
import imgHercules from '../../../assets/img/keep-watching/hercules-scene.jpg';
import imgNatGeo from '../../../assets/img/keep-watching/natgeo-scene.jpg';
import { KeepWatchingCard } from './KeepWatchingCard/KeepWatchingCard';
import stylesKeepWatching from './stylesKeepWatching';


const KEEPWATCHING = [
    {
        title: 'Avengers',
        image: imgAvengers,
        season: null,
        timeRemaining: 'Restam 9min',
    },

    {
        title: 'Clone Wars',
        image: imgCloneWars,
        season: 'T7:E12 – Vitória e Morte',
        timeRemaining: 'Restam 9min',
    },

    {
        title: 'Hércules',
        image: imgHercules,
        season: null,
        timeRemaining: 'Restam 35min',
    },

    {
        title: 'National Geographic',
        image: imgNatGeo,
        season: null,
        timeRemaining: 'Restam 1h12min',
    },
];

const KeepWatching = () => {
    return (
        <View style={stylesKeepWatching.container}>
            <Text style={stylesKeepWatching.title}>Continue Assistindo</Text>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={KEEPWATCHING} renderItem={({ item }) => <KeepWatchingCard content={item} />} keyExtractor={item => item.title} />
        </View>
    );
};

export default KeepWatching;
