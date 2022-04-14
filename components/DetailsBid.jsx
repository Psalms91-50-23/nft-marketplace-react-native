import { View, Text, Image } from 'react-native';
import React from 'react';
import { EthPrice } from './SubInfo';
import { COLORS, SIZES, PADDINGS } from "../constants";

const DetailsBid = ({ bid, bidLength, index }) => {

  return (
    <View style={{
      width: "100%",
      paddingLeft: PADDINGS.extraLarge + 2,
      paddingRight: PADDINGS.large,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: SIZES.base,
      marginBottom: bidLength !== index ? 0 : SIZES.extraLarge * 2 + 2
    }}>
      <Image 
        source={bid.image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
          borderRadius: 29,
        }}
      />
      <View >
        {
          index === 0 && <Text style={{
            fontSize: SIZES.font-2,
            fontStyle: "italic",
            fontWeight: "700"
          }}>
            Current Highest Bidder
          </Text>
        }
        <Text style={{
          fontFamily: SIZES.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary
          }}>
          Bid place by {bid.name}
        </Text>
        <Text style={{
          fontFamily: SIZES.regular,
          fontSize: SIZES.small - 2,
          color: COLORS.secondary
          }}>
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price}/>
    </View>
  )
}

export default DetailsBid