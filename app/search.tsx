import { Colors } from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


/* search 참고 : https://www.youtube.com/watch?v=Q4S9M9rJAxk */

const API_ENDPOINT = 'http://api.data.go.kr/openapi/tn_pubr_public_med_office_api';
const SERVICE_KEY = '37FLUq/RkLHRLoNJsFNlVuoFnd4IeO1BMZiY8MM+piMYRszFf0Yui/NvCjB8Bw7nD2xHz0VMiUBuqdP02X2S2w=='

// API 응답의 데이터 항목 타입 정의
interface ApiResponse {
    response: {
        body: {
            items: MedOfficeItem[];
            totalCount: string;
            numOfRows: string;
            pageNo: string;
        };
    };

}
/**
 * 
 */
interface MedOfficeItem {
    medOfficeNm: string; 
    estblRegNo: string;
    opbizLreaClscSe: string;
    lctnRoadNmAddr: string;
    lctnLotnoAddr: string;
    telno: string;
    estblRegYmd: string;
    ddcJoinYn: string;
    rprsvNm: string;
    latitude: string;
    longitude: string;
    medSpmbrCnt: string;
    ogdpLreaCnt: string;
    hmpgAddr: string;
    crtrYmd: string;
    insttCode: string;
}

// 쿼리 파라미터를 URL에 추가하는 함수
const buildUrlWithParams = (baseUrl: string, params: Record<string, string>): string => {
    const queryString = new URLSearchParams(params).toString();
    return `${baseUrl}?${queryString}`;
};

const Search = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<MedOfficeItem[]>([]);
    const [fullData, setFullData] = useState<MedOfficeItem[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        fetchData('서전공인중개사무소', '전라남도 신안군 압해읍 압해로 881');
    }, []);

    const fetchData = async (medOfficeName: string, locationAddress: string) => {
        try {
            const params = {
                type: 'json',
                MED_OFFICE_NM: medOfficeName,
                LCTN_ROAD_NM_ADDR: locationAddress,
                serviceKey: SERVICE_KEY
            };

            const url = buildUrlWithParams(API_ENDPOINT, params);

            console.log(url);

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }

            const data: ApiResponse = await response.json();
            console.log(data.response.body.items);

            setData(data.response.body.items);
            setFullData(data.response.body.items);

        } catch (error) {
            setError(error as Error);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // const filteredData = fullData.filter(item =>
        //     item.name.first.toLowerCase().includes(query.toLowerCase()) ||
        //     item.name.last.toLowerCase().includes(query.toLowerCase()) ||
        //     item.email.toLowerCase().includes(query.toLowerCase())
        // );
        // setData(filteredData);
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
                keyExtractor={(item) => item.estblRegNo}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View>
                            <Text style={styles.textName}>{item.medOfficeNm} {item.lctnRoadNmAddr}</Text>
                            <Text style={styles.textEmail}>{item.telno}</Text>
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
