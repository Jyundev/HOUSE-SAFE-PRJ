import { Colors } from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_ENDPOINT = 'https://randomuser.me/api/?results=30';

// API 응답의 데이터 항목 타입 정의
interface DataItem {
    login: {
        username: string;
    };
    picture: {
        thumbnail: string;
    };
    name: {
        first: string;
        last: string;
    };
    email:string
}

// API 응답 전체 구조 타입 정의
interface ApiResponse {
    results: DataItem[];
}

const Search = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<DataItem[]>([]);
    const [fullData, setFullData] = useState<DataItem[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        fetchData(API_ENDPOINT);
    }, []);

    const fetchData = async (url: string) => {
        try {
            const response = await fetch(url);
            const json: ApiResponse = await response.json();
            setData(json.results);
            setFullData(json.results);
        } catch (error) {
            setError(error as Error);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filteredData = fullData.filter(item =>
            item.name.first.toLowerCase().includes(query.toLowerCase()) ||
            item.name.last.toLowerCase().includes(query.toLowerCase()) ||
            item.email.toLowerCase().includes(query.toLowerCase())
        );
        setData(filteredData);
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} color='#5500dc' />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Error in fetching data...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder='Search'
                clearButtonMode='always'
                style={styles.searchInput}
                autoCapitalize='none'
                autoCorrect={false}
                value={searchQuery}
                onChangeText={(query) => handleSearch(query)}
            />

            <FlatList
                data={data}
                keyExtractor={(item) => item.login.username}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
                        <View>
                            <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
                            <Text style={styles.textEmail}>{item.email}</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20,

    },
    searchInput: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: Colors.light.border,
        borderWidth: 1,
        borderRadius: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '600',
    },
    textEmail: {
        fontSize: 14,
        marginLeft: 10,
        color: 'grey',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});
