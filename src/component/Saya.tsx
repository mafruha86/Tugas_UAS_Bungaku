import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Saya = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Produk Kami - Kategori</Text>

            <View style={styles.searchContainer}>
                <Icon name="search" size={24} color="#ffffff" style={styles.icon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Cari produk..."
                    placeholderTextColor="#ffffff"
                />
            </View>

            <View style={styles.categoriesContainer}>
                <Text style={[styles.categoryText, styles.allCategory]}>All</Text>
                <Text style={styles.categoryText}>Bunga Meja</Text>
                <Text style={styles.categoryText}>Hend Buket</Text>
                <Text style={styles.categoryText}>Duka Cita</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.rowContainer}>
                    <View style={styles.kotak}>
                        <Image source={require('../img/1.png')} />
                        <Text style={styles.nama}>Bunga 1</Text>
                        <Text style={styles.harga}>Rp: 2.000.000</Text>
                    </View>
                    <View style={styles.kotak}>
                        <Image source={require('../img/1.png')} />
                        <Text style={styles.nama}>Bunga 2</Text>
                        <Text style={styles.harga}>Rp: 3.000.000</Text>
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.kotak}>
                        <Image source={require('../img/1.png')} />
                        <Text style={styles.nama}>Bunga 3</Text>
                        <Text style={styles.harga}>Rp: 4.000.000</Text>
                    </View>
                    <View style={styles.kotak}>
                        <Image source={require('../img/1.png')} />
                        <Text style={styles.nama}>Bunga 4</Text>
                        <Text style={styles.harga}>Rp: 5.000.000</Text>
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.kotak}>
                        <Image source={require('../img/1.png')} />
                        <Text style={styles.nama}>Bunga 5</Text>
                        <Text style={styles.harga}>Rp: 6.000.000</Text>
                    </View>
                    <View style={styles.kotak}>
                        <Image source={require('../img/1.png')} />
                        <Text style={styles.nama}>Bunga 6</Text>
                        <Text style={styles.harga}>Rp: 7.000.000</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#191919',
        flex: 1,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ffffff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333333',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: '#ffffff',
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginEnd: 10,
        marginLeft: 10,
        marginTop: 20,
    },
    categoryText: {
        color: '#ffffff',
        fontSize: 15,
    },
    allCategory: {
        fontSize: 20,
    },
    scrollViewContainer: {
        marginTop: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginEnd: 10,
        marginLeft: 10,
    },
    kotak: {
        height: 200,
        width: 170,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 20,
    },
    nama: {
        fontSize: 20,
        color: '#191919',
        marginLeft: 10,
    },
    harga: {
        fontSize: 15,
        color: '#557C55',
        marginLeft: 10,
    }
});

export default Saya;