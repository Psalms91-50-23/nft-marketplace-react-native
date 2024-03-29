import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, assets, PADDINGS } from "../constants";

const HomeHeader = ({ onSearch }) => {

  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: PADDINGS.largeExtraLarge,
      maxWidth: 700,

    }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

      }}>
        <Image 
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 25
          }}
        />
        <View style={{
          width: 45,
          height: 45
        }}>
          <Image 
            source={assets.person02}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%"
            }}
          />
          <Image 
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{
        marginVertical: SIZES.font / 4
      }}>
        <Text style={{
          // fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.white,
          marginTop: SIZES.base / 4
        }}>
          Hello, Jessica Tan 👋
        </Text>
      </View>
      <View style={{
        marginVertical: SIZES.font
      }}>
        <Text style={{
          // fontFamily: FONTS.bold,
          fontSize: SIZES.large,
          color: COLORS.white,
          marginTop: SIZES.base / 4
        }}>
          Lets Find Your Next Masterpiece!
        </Text>
      </View>
      <View style={{
        marginTop: SIZES.base / 2
      }}>
        <View style={{
          width: "100%",
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2
        }}>
          <Image 
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput 
            placeholder="Search NFTs"
            style={{
              flex: 1,
              color: COLORS.white,
              fontSize: SIZES.large
            }}
            placeholderTextColor={COLORS.white}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader