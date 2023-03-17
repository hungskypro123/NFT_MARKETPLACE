import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList, TouchableOpacity } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import DetailsBid from "../components/DetailsBid";
import DetailsDesc from "../components/DetailsDesc";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
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
        left: 15,
        top: StatusBar.currentHeight + 10
      }}
      onPress={() => navigation.goBack()}
    >
      <Image
        source={assets.left}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
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
        right: 15,
        top: StatusBar.currentHeight + 10
      }}
    >
      <Image
        source={assets.heart}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true} />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.1)",
          zIndex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.small,
            borderRadius: SIZES.extraLarge,
            minWidth: 170,
            ...SHADOWS.dark,
          }}
          onPress={null}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.large,
              color: COLORS.white,
              textAlign: "center",
            }}
          >
            Place a bid
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
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

            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
