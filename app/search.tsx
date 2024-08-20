import { Colors } from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_ENDPOINT = 'http://api.data.go.kr/openapi/tn_pubr_public_med_office_api';
const SERVICE_KEY = 'SERVICE_KEY';

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

const Search: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<MedOfficeItem[]>([]);
    const [pageNo, setPageNo] = useState<number>(1);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);

    const [province, setProvince] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [town, setTown] = useState<string>('');

    // 예시 데이터
    const provinces: string[] = ['전라남도', '서울특별시', '경기도'];
    const cities: Record<string, string[]> = {
        '전라남도': ['신안군', '목포시'],
        '서울특별시': ['강남구', '서초구'],
        '경기도': ['수원시', '용인시']
    };
    const towns: Record<string, string[]> = {
        '신안군': ['압해읍', '비금면'],
        '강남구': ['역삼동', '삼성동'],
        '수원시': ['팔달구', '영통구']
    };

    useEffect(() => {
        if (province && city && town) {
            setIsLoading(true);
            fetchData(searchQuery, province, city, town, 1);
        }
    }, [province, city, town]);

    const fetchData = async (medOfficeName: string, province: string, city: string, town: string, pageNo: number) => {
        try {
            const params = {
                type: 'json',
                MED_OFFICE_NM: '서전공인중개사무소',
                LCTN_ROAD_NM_ADDR: `전라남도 신안군 압해읍 압해로 881`,
                serviceKey: SERVICE_KEY,
                numOfRows: '10',
                pageNo: pageNo.toString(),
            };

            const url = buildUrlWithParams(API_ENDPOINT, params);

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }

            const data: ApiResponse = await response.json();
            const fetchedItems = data.response.body.items;
            setTotalCount(parseInt(data.response.body.totalCount));

            setData(prevData => (pageNo === 1 ? fetchedItems : [...prevData, ...fetchedItems]));
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
            setIsFetchingMore(false);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setPageNo(1);
        if (province && city && town) {
            fetchData(query, province, city, town, 1);
        }
    };

    const loadMoreData = () => {
        if (!isFetchingMore && data.length < totalCount) {
            setIsFetchingMore(true);
            fetchData(searchQuery, province, city, town, pageNo + 1);
            setPageNo(prevPageNo => prevPageNo + 1);
        }
    };

    if (isLoading && pageNo === 1) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} color={Colors.primary.tabIconSelected} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder="Search by Office Name"
                clearButtonMode="always"
                style={styles.searchInput}
                autoCapitalize="none"
                autoCorrect={false}
                value={searchQuery}
                onChangeText={handleSearch}
            />

            <Picker
                selectedValue={province}
                onValueChange={(itemValue: string) => setProvince(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Select Province" value="" />
                {provinces.map((prov) => (
                    <Picker.Item key={prov} label={prov} value={prov} />
                ))}
            </Picker>

            {province && (
                <Picker
                    selectedValue={city}
                    onValueChange={(itemValue: string) => setCity(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select City/County" value="" />
                    {(cities[province] || []).map((city) => (
                        <Picker.Item key={city} label={city} value={city} />
                    ))}
                </Picker>
            )}

            {city && (
                <Picker
                    selectedValue={town}
                    onValueChange={(itemValue: string) => setTown(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Town/District" value="" />
                    {(towns[city] || []).map((town) => (
                        <Picker.Item key={town} label={town} value={town} />
                    ))}
                </Picker>
            )}

            <FlatList
                data={data}
                keyExtractor={(item) => item.estblRegNo}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View>
                            <Text style={styles.textName}>{item.medOfficeNm} {item.rprsvNm}</Text>
                            <Text style={styles.textEmail}>{item.telno}</Text>
                        </View>
                    </View>
                )}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.5}
                ListFooterComponent={isFetchingMore ? <ActivityIndicator size="small" color={Colors.primary.tabIconSelected} /> : null}
            />
        </SafeAreaView>
    );
};

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
        marginBottom: 10,
    },
    picker: {
        height: 50,
        marginVertical: 10,
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
});
