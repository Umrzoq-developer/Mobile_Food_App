import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

const ResultDetail = ({result}) => {
    return (
        <View style={styles.viewStyle}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.secondaryStyle}>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    secondaryStyle: {
        opacity: 0.4
    }
});

export default ResultDetail;
