import { Colors } from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import institutions from '../assets/data/institutions.json'; // JSON 파일 불러오기
import RegionModal from './region-modal';

/* search 참고 : https://www.youtube.com/watch?v=Q4S9M9rJAxk */

const API_ENDPOINT = process.env.EXPO_PUBLIC_API_URL;
const SERVICE_KEY = process.env.EXPO_PUBLIC_SERVICE_KEY

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

    // 강남구가 기본값 
    const [region, setRegion] = useState<string>('서울특별시');
    const [city, setCity] = useState<string>('강남구');
    const [code, setCode] = useState<string>('3220000');

    useEffect(() => {
        setIsLoading(true);
        fetchData(code);
    }, [code]);



    const fetchData = async (code: string) => {
        try {
            const params = {
                type: 'json',
                // MED_OFFICE_NM: medOfficeName,
                // LCTN_ROAD_NM_ADDR: locationAddress,
                instt_code: code,
                serviceKey: SERVICE_KEY,
                // numOfRows: 1
            };

            const url = buildUrlWithParams(API_ENDPOINT, params);


            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }

            const data: ApiResponse = await response.json();

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

    {/* 지역및 도시 데이터 가져오기*/ }
    const handleRegionSelect = (selectedRegion: string) => {
        console.log('Selected Region:', selectedRegion);
        setRegion(selectedRegion)
        // Handle selected region here
    };
    const handleCitySelect = (selectedCity: string) => {
        console.log('Selected City:', selectedCity);
        setCity(selectedCity);
        setCode(getCode(region, selectedCity));
    };

    {/* 기관코드 필터링 */ }
    const getCode = (province: string, city: string) => {
        return institutions
            .filter(entry => entry.province === province && entry.city === city)
            .map(entry => entry.institution_code)[0] || '';
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
            <View style={styles.modalContainer}>
                <TextInput
                    placeholder='Search'
                    clearButtonMode='always'
                    style={styles.searchInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={searchQuery}
                    onChangeText={(query) => handleSearch(query)}
                />
                {/* 모달 */}
                <RegionModal onRegionSelect={handleRegionSelect} onCitySelect={handleCitySelect} />
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.estblRegNo}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View>
                            <Text style={styles.textName}>중개사무소명 : {item.medOfficeNm} </Text>
                            <Text style={styles.textName}>대표자명 : {item.rprsvNm}</Text>
                            <Text style={styles.textNum}>개설등록번호 : {item.estblRegNo}</Text>
                            <Text style={styles.textNum}>도로명주소 : {item.lctnRoadNmAddr}</Text>
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
        flexDirection: 'column',

    },
    modalContainer: {
        flexDirection: 'column',

    }
    ,
    searchInput: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: Colors.light.border,
        borderWidth: 1,
        borderRadius: 8,
    },
    textName: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '600',
    },
    textNum: {
        fontSize: 14,
        marginLeft: 10,
        color: 'grey',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    itemContainer: {
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#F9F9F9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },

});
