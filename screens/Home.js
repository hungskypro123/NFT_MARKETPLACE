import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import NFTCard from "../components/NFTCard";
import { COLORS, NFTData } from './../constants/index'
import HomeHeader from './../components/HomeHeader'

const Home = () => {
    const [nftData, setNftData] = useState(NFTData);

    const handleSearch = (value) => {
        if (value.length === 0) {
            setNftData(NFTData);
        }

        const filteredData = NFTData.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredData.length === 0) {
            setNftData(NFTData);
        } else {
            setNftData(filteredData);
        }
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#001F2D" />
            <View style={{ flex: 1, zIndex: 0 }}>
                <FlatList
                    data={nftData}
                    renderItem={({ item }) => <NFTCard data={item} />}
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                />
            </View>
            <View style={{
                zIndex: -1,
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
            }}>
                <View style={{ backgroundColor: COLORS.primary, height: 300 }} />
                <View style={{ flex: 1, backgroundColor: COLORS.white }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Home