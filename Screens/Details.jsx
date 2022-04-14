
import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS, assets, PADDINGS } from "../constants"
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, 
  DetailsDesc, DetailsBid } from '../components';
import React from 'react';

const DetailsHeader = ({ data, navigation }) => {

  return (
    <View style={{
      width: "100%",
      height: 250,
      position: "relative",
      }}>
      <Image 
        source={data.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        width: "100%",
        paddingHorizontal: PADDINGS.large,
        top: StatusBar.currentHeight + 10
        }}>
          <CircleButton 
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
          />
          <CircleButton 
            imgUrl={assets.heart}
          />
      </View>
    </View>
  )
}

const Details = ({ route, navigation }) => {
  const { data } = route.params; 
  return (
    <SafeAreaView style={{
      flex: 1,
      }}>
        <FocusedStatusBar 
          barStyle="dark-content"
          backgroundColor="rgba(255,255,255,0.5)"
          translucent={true}
        />
        <View style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            paddingVertical: SIZES.font,
            justContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.5)",
            zIndex: 1,

          }}>
          <RectButton 
            minWidth={170}
            fontSize={SIZES.large}
            {...SHADOWS.dark}
          />
        </View>
        <FlatList 
          data={data.bids}
          renderItem={({ item, index }) => <DetailsBid bid={item} index={index} bidLength={data.bids.length-1}/>}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ 
            paddingBottom: PADDINGS.large * 3,
            }}
          ListHeaderComponent={() => (
            <React.Fragment>
              <DetailsHeader 
                data={data} 
                navigation={navigation}
              />
              <SubInfo />
              <View >
                <DetailsDesc data={data}/>
                {data.bids.length > 0 && (
                  <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                    paddingLeft: PADDINGS.extraLarge,
                    
                    }}>
                    Current Bids
                  </Text>
                  )
                }
              </View>
            </React.Fragment>
          )}
        />
    </SafeAreaView>
  )
}

export default Details