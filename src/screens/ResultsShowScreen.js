import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from "../api/yelp";

import Loader from 'react-native-easy-content-loader';


const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResults(id);
    }, []);

    if (!result) {
        return (
            <View style={{marginTop: 50, position: 'relative'}}>
                <Loader
                    primaryColor='rgba(195, 191, 191, 1)'
                    secondaryColor='rgba(218, 215, 215, 1)'
                    animationDuration={500}
                    loading={true}
                >
                    <View
                        style={{
                            height: 1000, // required,
                            width: 300, // required,
                            borderRadius: 50,
                            top: 500,
                            marginTop: 200
                        }}
                    >
                        <Text>Loading...</Text>
                        <Text>Mine Text</Text>
                    </View>
                </Loader>
            </View>
        )
    }


    return (
        <View>
            <Text style={styles.Name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return <Image style={styles.photoStyle} source={{uri: item}}/>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    Name: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    photoStyle: {
        width: 300,
        height: 200,
        borderRadius: 4,
        alignSelf: 'center',
        marginVertical: 10
    }
});

export default ResultShowScreen;
