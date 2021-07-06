/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import stylesKeepWatching from '../stylesKeepWatching';

export const KeepWatchingCard = ({ content }) => {

    return (
        <TouchableOpacity style={stylesKeepWatching.btnKeepWatching}>
            <Image style={stylesKeepWatching.img} source={content.image} resizeMode={'contain'} />
            <View style={stylesKeepWatching.description}>
                <Text style={stylesKeepWatching.contentTitle}>
                    {content.title}
                </Text>

                {content.season !== null ?
                    <Text style={stylesKeepWatching.season}>
                        {content.season}
                    </Text>
                    : null}

                <Text style={stylesKeepWatching.timeRemaining}>
                    {content.timeRemaining}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
