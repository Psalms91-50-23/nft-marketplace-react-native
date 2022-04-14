import {  Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES, FONTS, PADDINGS } from '../constants';


export const CircleButton = ({ 
  imgUrl, 
  handlePress,
  position,
  ...props
 }) => {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: COLORS.white,
        width: 40,
        height: 40,
        position:  position? position : "relative",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props
      }}
      onPress={handlePress}
    >
      <Image 
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  )
}

export const RectButton = ({ 
  minWidth, 
  fontSize, 
  handlePress, 
  ...props
 }) => {

  return (
    <TouchableOpacity 
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: PADDINGS.largeExtraLarge,
        ...props
      }}
      onPress={handlePress}
    >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: "center",
      }}>
        Place Bid
      </Text>
    </TouchableOpacity>
  )
}

