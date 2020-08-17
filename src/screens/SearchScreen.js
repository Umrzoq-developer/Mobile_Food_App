import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

//components
import SearchBar from "../cmponents/SearchBar";
import ResultsList from "../cmponents/ResultsList";

//hook
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filteredResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    };

    if (!results.length > 0) {
        return (
            <View>
                <SearchBar
                    term={term}
                    onTermChange={(e) => setTerm(e)}
                    onTermSubmit={() => searchApi(term)}
                />
                <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginVertical: 50}}> Topilmadi</Text>
            </View>
        )
    }
    return (
        <View style={styles.viewSearch}>
            <SearchBar
                term={term}
                onTermChange={(e) => setTerm(e)}
                onTermSubmit={() => searchApi(term)}
            />
            {results.length < 0 && <Text>Please Enter valid name</Text>}
            {(errorMessage.length > 0 && results.length < 0) && <Text>{errorMessage}</Text>}

            {/*Results list*/}
            <ScrollView style={styles.scrollStyle}>
                <ResultsList
                    results={filteredResultsByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filteredResultsByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filteredResultsByPrice('$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    viewSearch: {
        flex: 1
    },
    scrollStyle: {
        marginVertical: 20,
    }
});

export default SearchScreen;
