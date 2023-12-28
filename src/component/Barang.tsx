import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Barang = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>TOKO BUNGA 24 JAM</Text>
                <Text style={styles.customerServiceText}>Customer Service 24 jam</Text>
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
        flex: 1,
        backgroundColor: '#191919',
    },
    headerContainer: {
        width: 381,
        height: 97,
        backgroundColor: '#557C55',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 1,
    },
    headerText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    customerServiceText: {
        color: '#ffffff',
        fontSize: 16,
        marginTop: 5,
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
    },
});

export default Barang;