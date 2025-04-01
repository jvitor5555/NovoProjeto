import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PlaceCard({ title, image, location, rating, price }) { 

    return (
        
        <View style={estilo.card}>

            <View style={estilo.imageContainer}>
                <Image source={image} style={estilo.img} />
            </View>

            <Text style={estilo.center}>{title}</Text>

            <View style={estilo.row}>
                <FontAwesome name="map-marker" size={24} color="red" />
                <Text style={estilo.text}>{location}</Text>
            </View>

            <View style={estilo.row}>
                {[...Array(3)].map((_, index) => (
                    <FontAwesome key={index} name="star" size={24} color="gold" style={estilo.starMargin} />
                ))}
                <Text style={estilo.text}>{rating}</Text>
            </View>

            <Text>{price}</Text>

        </View>
    )
}

const estilo = StyleSheet.create({
    card: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        height: 280,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    imageContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 130,
        width: 130,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    text: {
        marginLeft: 5,
    },
    center: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    starMargin: {
        marginRight: 5,
    },
});
