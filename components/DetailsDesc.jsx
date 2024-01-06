import { View, Text } from 'react-native';
import { useState } from 'react';
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS, PADDINGS } from "../constants"

const DetailsDesc = ({ data }) => {

    const [text, setText] = useState(data.description.slice(0,100))
    const [readMore, setReadMore] = useState(false)

    var highestBidder = Math.max.apply(null, 
        data.bids.map((bidder) => {
            return bidder.price}));
  return (
      <>
        <View style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: PADDINGS.smallMedium

            }}>
            <NFTTitle 
                title={data.name}
                subTitle={data.creator}
                titleSize={SIZES.extraLarge}
                subTitleSize={SIZES.font}
            />
            <View style={{
                alignItems: "flex-end",
                paddingRight: PADDINGS.medium 
                }}>
                {
                    data.bids.length ? 
                        <Text>
                            Current Bid at
                        </Text>
                    :
                    <Text>
                        Starting Bid
                    </Text>
                }
                <EthPrice price={ data.bids.length ? highestBidder : data.price } />
            </View>
        </View>
        <View style={{
           marginVertical: SIZES.extraLarge * 1.5,
           paddingHorizontal: PADDINGS.medium - 1
            }}>
            <Text style={{
                fontSize: SIZES.font,
                // fontFamily: FONTS.semiBold,
                color: COLORS.primary,
                paddingLeft: PADDINGS.mediumLarge
                }}>
                Description
            </Text>
            <View style={{
                marginTop: SIZES.base
                }}>
                <Text style={{
                    fontSize: SIZES.small,
                    fontFamily: FONTS.regular,
                    color: COLORS.secondary,
                    lineHeight: SIZES.large,
                    marginBottom: !data.bids.length ? 20 : 0,
                    paddingHorizontal: PADDINGS.mediumLarge
                    }}>
                    {text}
                    {!readMore && '...'}
                    <Text 
                        style={{
                            fontSize: SIZES.small,
                            // fontFamily: FONTS.semiBold,
                            color: COLORS.secondary,
                            lineHeight: SIZES.large,
                            
                        }} 
                        onPress={() => {
                            if(!readMore){
                                setText(data.description)
                                setReadMore(true)
                            }else{                               
                                setText(data.description.slice(0,100))
                                setReadMore(false)
                            }
                        }}
                    >
                    {readMore ? " Show Less" : " Read More"}
                    </Text>
                </Text>
            </View>
        </View>
      </>
  )
}

export default DetailsDesc