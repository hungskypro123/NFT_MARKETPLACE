import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from './../constants/index'

const NFTCard = ({ data }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View
                style={{
                    width: "100%",
                    height: 250,
                }}
            >
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
                <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: COLORS.white,
                        position: "absolute",
                        borderRadius: SIZES.extraLarge,
                        alignItems: "center",
                        justifyContent: "center",
                        ...SHADOWS.light,
                        right: 10,
                        top: 10
                    }}
                    onPress={null}
                >
                    <Image
                        source={assets.heart}
                        resizeMode="contain"
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    width: "100%",
                    paddingHorizontal: SIZES.font,
                    marginTop: -SIZES.extraLarge,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ flexDirection: "row" }}>
                    {[assets.person02, assets.person03, assets.person04].map(
                        (imgUrl, index) => (
                            <Image
                                key={`People-${index}`}
                                source={imgUrl}
                                resizeMode="contain"
                                style={{
                                    width: 48,
                                    height: 48,
                                    marginLeft: index === 0 ? 0 : -SIZES.font,
                                }}
                            />
                        )
                    )}
                </View>
                <View
                    style={{
                        paddingHorizontal: SIZES.font,
                        paddingVertical: SIZES.base,
                        backgroundColor: COLORS.white,
                        borderRadius: SIZES.font,
                        justifyContent: "center",
                        alignItems: "center",
                        ...SHADOWS.light,
                        elevation: 1,
                        maxWidth: "50%",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.small,
                            color: COLORS.primary,
                        }}
                    >
                        Ending in
                    </Text>
                    <Text
                        style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.medium,
                            color: COLORS.primary,
                        }}
                    >
                        12h 30m
                    </Text>
                </View>
            </View>

            <View style={{ width: "100%", padding: SIZES.font }}>
                <View>
                    <Text
                        style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.large,
                            color: COLORS.primary,
                        }}
                    >
                        {data.name}
                    </Text>
                    <Text
                        style={{
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.small,
                            color: COLORS.primary,
                        }}
                    >
                        by {data.creator}
                    </Text>
                </View>

                <View
                    style={{
                        marginTop: SIZES.font,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={assets.eth}
                            resizeMode="contain"
                            style={{ width: 20, height: 20, marginRight: 2 }}
                        />
                        <Text
                            style={{
                                fontFamily: FONTS.medium,
                                fontSize: SIZES.font,
                                color: COLORS.primary,
                            }}
                        >
                            {data.price}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: SIZES.small,
                            borderRadius: SIZES.extraLarge,
                            minWidth: 120,
                        }}
                        onPress={() => navigation.navigate("Details", { data })}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.semiBold,
                                fontSize: SIZES.font,
                                color: COLORS.white,
                                textAlign: "center",
                            }}
                        >
                            Place a bid
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
    }
})

export default NFTCard

