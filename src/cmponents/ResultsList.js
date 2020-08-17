import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from "react-navigation";
import ResultDetail from "./ResultDetail";

const ResultsList = ({title, results, navigation}) => {
    return (
        <View stle={styles.viewStyleResults}>
            {results.length>0 && <Text style={styles.titleStyle}>{title}</Text>}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Result', {id: item.id})}>
                            <ResultDetail
                                result={item}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    viewStyleResults: {
        marginVertical: 10,
    }
});

export default withNavigation(ResultsList);
