import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import institutions from '../assets/data/institutions.json'; // JSON 파일 불러오기
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface RegionModalProps {
    onRegionSelect?: (region: string) => void;
    onCitySelect?: (city: string) => void;
}

const RegionModal: React.FC<RegionModalProps> = ({ onRegionSelect, onCitySelect }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [cityModalVisible, setCityModalVisible] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    // 시/군/구 중복값 제거
    const uniqueProvinces: string[] = Array.from(
        new Set(institutions.map(entry => entry.province).filter((province): province is string => province !== undefined))
    ).sort();

    // city 항목 필터링
    const getCities = (province: string) => {
        return institutions
            .filter(entry => entry.province === province)
            .map(entry => entry.city)
            .filter((city): city is string => city !== undefined)
            .sort();
    }

    const handleRegionPress = (region: string) => {
        setSelectedRegion(region);
        if (onRegionSelect) {
            onRegionSelect(region);
        }
        setCityModalVisible(true); // 도시 모달 열기

    };

    const handleCityPress = (city: string) => {
        setSelectedCity(city);
        setCityModalVisible(false); // 도시 모달 닫기
        setModalVisible(false);    // 지역 모달도 닫기
        if (onCitySelect) {
            onCitySelect(city);
        }
    };

    const renderRegionItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={[
                styles.itemButton,
                selectedRegion === item && styles.selectedButton,
            ]}
            onPress={() => handleRegionPress(item)}
        >
            <Text style={styles.textStyle}>{item}</Text>
        </TouchableOpacity>
    );

    const renderCityItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={[
                styles.itemButton,
                selectedCity === item && styles.selectedButton,
            ]}
            onPress={() => handleCityPress(item)}
        >
            <Text style={styles.textStyle}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Button to open the region modal */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}
                    style={styles.modalButton}>
                    <View  style={styles.buttonIconContainer}>
                    <Text style={styles.modalButtonText} >지역</Text>
                    <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </View>
                </TouchableOpacity>

            </View>
            {/* Region Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                {/* 모달 외부 영역 */}
                <TouchableOpacity
                    style={styles.centeredView}
                    activeOpacity={1}
                    onPressOut={() => setModalVisible(false)}  // 모달 외부를 클릭했을 때 닫힘
                >

                    <TouchableOpacity style={styles.modalView} activeOpacity={1}>
                        <Text style={styles.regionModalTitle}>지역을 선택해주세요</Text>
                        <FlatList
                            data={uniqueProvinces}
                            keyExtractor={(item) => item}
                            renderItem={renderRegionItem}
                            contentContainerStyle={styles.listContainer}
                        />
                        {/* <TouchableOpacity
                            style={styles.applyButton}
                            onPress={() => {
                                setModalVisible(false);
                                console.log('Selected Region:', selectedRegion);
                            }}
                        >
                            <Text style={styles.textStyle}>선택</Text>
                        </TouchableOpacity> */}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>

            {/* City Modal */}
            {selectedRegion && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={cityModalVisible}
                    onRequestClose={() => {
                        setCityModalVisible(!cityModalVisible);
                    }}

                >
                    {/* 모달 외부 영역 */}
                    <TouchableOpacity style={styles.centeredView}
                        activeOpacity={1}
                        onPressOut={() => setCityModalVisible(false)} >
                        {/* 모달 창 내부 영역 */}

                        <TouchableOpacity style={styles.modalView} activeOpacity={1}>
                            <View style={styles.cityHeader}>
                                {/* Back Button */}
                                <TouchableOpacity onPress={() => setCityModalVisible(false)} activeOpacity={1}>
                                    <Ionicons name="chevron-back" size={24} color="black" style={styles.iconStyle} />
                                </TouchableOpacity>

                                {/* Modal Title */}
                                <Text style={styles.cityModalTitle}>
                                    {selectedRegion}의 {'\n'} 도시를 선택해주세요
                                </Text>

                            </View>
                            {/* List of Cities */}
                            <FlatList
                                data={getCities(selectedRegion)}
                                keyExtractor={(item) => item}
                                renderItem={renderCityItem}
                                contentContainerStyle={styles.listContainer}
                            />
                            {/* <TouchableOpacity
                                style={styles.applyButton}
                                onPress={() => setCityModalVisible(false)}
                            >
                                <Text style={styles.textStyle}>Apply</Text>
                            </TouchableOpacity> */}
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-start'

    },
    buttonContainer: {
        marginVertical: 20,
        backgroundColor: Colors.light.background,
        borderRadius: 10,
        overflow: 'hidden',
    },

    buttonIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    modalButton: {
        padding: 5,
        borderColor:Colors.light.border,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent:'center',
        alignItems: 'center'
        
    },
    modalButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        lineHeight: 18,
        marginHorizontal:10

    },



    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        height: 500,
        marginHorizontal: 20,
    },

    regionModalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 15,

    },
    cityModalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        lineHeight: 24
    },
    itemButton: {
        width: '100%',
        padding: 10,
        paddingHorizontal: 50,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
    },
    selectedButton: {
        backgroundColor: Colors.primary.tabIconSelected,
    },
    applyButton: {
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'dimgray',
    },

    cityHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        width: '100%',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
    },
    listContainer: {
        flexGrow: 1,
    },

    iconStyle: {
        paddingVertical: 0,
    },

});

export default RegionModal;
