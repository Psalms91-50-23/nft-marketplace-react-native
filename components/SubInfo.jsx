import { View, Text, Image } from 'react-native'
import { SIZES, COLORS, SHADOWS, assets, FONTS, PADDINGS } from '../constants'

const IMAGES = [ assets.person02, assets.person03, assets.person04, 
  assets.person05, assets.person06, assets.person07,
assets.person08, assets.person09 ]

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View style={{
      paddingHorizontal: PADDINGS.large,
      marginLeft: -3
    }}>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary,
      }}>{title}</Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.primary
      }}>{subTitle}</Text>
    </View>
  )
}

export const EthPrice = ({ price }) => {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: PADDINGS.large - 4

    }}>
      <Image 
        source={assets.eth}
        resizeMode="contain"
        style={{
          width: 15,
          height: 15,
          marginRight: 2,
          marginLeft: -1
        }}
      />
      <Text style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary
      }}>{price.toFixed(2)}</Text>
    </View>
  )
}

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <View style={{
      width: 48,
      height: 48,
      marginLeft: index === 0 ? 0 : -SIZES.large-3,
      marginRight: index === IMAGES.length-1 ? 3 : 0,
      paddingHorizontal: index === 0 || index === 1 || index === 2 ? 1 : 3,
      paddingVertical:index === 0 || index === 1 || index === 2 ? 1 : 3,
      borderRadius: SIZES.extraLarge,
      backgroundColor: COLORS.white
    }}>
      <Image 
        source={imgUrl}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: SIZES.extraLarge,
        }}
      />
    </View>
  )
}

export const People = () => {
  return (
    <View style={{
      flexDirection: "row"
    }}>
      {IMAGES.map((imgUrl,index) => (
        <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
      ))}
    </View>
  )
}

export const EndDate = () => {

  const days = Math.floor(Math.random()*10);
  const hours = Math.floor(Math.random()*24)+1;
  const mins = Math.floor(Math.random()*59)+1;

  return (
    <View style={{
      paddingHorizontal: SIZES.base-2,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      marginLeft: SIZES.base,
      alignItems: "center",
      ...SHADOWS.light,
      elevation: 1,
      maxWidth:"50%"
    }}>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
      }}>Ending In</Text>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.font - 2,
        color: COLORS.primary
      }}>{days}d {hours}h {mins}m</Text>
    </View>
  )
}

export const SubInfo = ({ days, hours, mins}) => {
  return (
    <View style={{
        width: "100%",
        paddingHorizontal: PADDINGS.large,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
    }}>
      <People />
      <EndDate days={days} hours={hours} mins={mins}/>
    </View>
  )
}

