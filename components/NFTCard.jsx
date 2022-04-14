import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { COLORS, SIZES, SHADOWS, assets, PADDINGS } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';

const NFTCard = ({ data, index, dataLength }) => {

  const navigation = useNavigation();
  var currentBidAt = Math.max.apply(null, 
    data.bids.map((bidder) => {
        return bidder.price
      }));
    data.bids = data.bids.reverse();
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderColor: COLORS.white,
      borderWidth: 1,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,
      maxWidth: 700,
      marginBottom: index !== dataLength 
      &&  Platform.OS !== 'ios' || Platform.OS !== 'android' ? SIZES.font :  SIZES.large * 12,
      marginTop: index === 0 ? SIZES.base : 0 
      }}
    >
      <View style={{
        width: "100%",
        height: 250
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
        <CircleButton 
          imgUrl={assets.heart} 
          right={10} 
          top={10}
          position={"absolute"}
        />
      </View>
      <SubInfo />
      <View style={{
        width: "100%",
        padding: PADDINGS.large
      }}>
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View  style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <View>
            { data.bids.length ? 
            <Text style={{
              fontSize: SIZES.font - 2,
              fontStyle: "italic",
              marginBottom: SIZES.base - 4,
              paddingLeft: PADDINGS.large - 2
            }}>
              Current bid at
            </Text>
            :
            <Text style={{
              fontSize: SIZES.font - 2,
              fontStyle: "italic",
              marginBottom: SIZES.base - 4,
              paddingLeft: PADDINGS.large
            }}>
              Starting bid at
            </Text>
            }
            <EthPrice price={data.bids.length ? currentBidAt : data.price }/>
          </View>
          <RectButton 
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data } )}
          />
        </View>
      </View>
    </View>
  )
}

export default NFTCard