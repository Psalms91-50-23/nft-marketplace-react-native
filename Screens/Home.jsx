import { useState } from 'react';
import { Text, View, SafeAreaView, FlatList,
  ScrollView } from 'react-native';
import { Platform } from 'react-native';
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {

  const [nftData, setNftData] = useState(NFTData)

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData)
    const filteredData = NFTData.filter( item => 
      item.name.toLowerCase().includes(value.toLowerCase())
      );
    if(filteredData.length){
      setNftData(filteredData)
    }else{
      setNftData(NFTData)
    }
}

  return (
      <SafeAreaView style={{ 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        }}
      >
          <FocusedStatusBar background={COLORS.primary}/>
          <View style={{ 
            flex: 1,
            maxWidth: 700,
            width: "100%",
            // position: "relative"
            }}
            // alwaysBounceVertical={ Platform.OS === "ios" ? true : false }
            // fadingEdgeLength={ Platform.OS === "android" ? 4 : 0 }
            // showsVerticalScrollIndicator={ Platform.OS === "android" ? true : "none"}
            >
              <View style={{ 
                zIndex: 0,
                maxWidth: 700
                }}>
                  <HomeHeader onSearch={handleSearch} />
                  <FlatList 
                    data={nftData}
                    renderItem={({ item, index }) => <NFTCard data={item} dataLength={nftData.length-1} index={index} />}
                    keyExtractor={(item) => item.id}
                    // showsVerticalScrollIndicator={false}
                    // fadingEdgeLength={ Platform.OS === "android" ? 4 : 0 }
                    // showsVerticalScrollIndicator={ Platform.OS === "android" ? true : "none"}
                    // ListHeaderComponent={<HomeHeader />}   
                  /> 
              </View>
              <View style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: -1
                }}>
              <View style={{ 
                height: 300, 
                backgroundColor: COLORS.primary,
                }}
              />
              <View style={{ flex: 1, backgroundColor: COLORS.white }}/>
            </View>
          </View>
      </SafeAreaView>
  )
}

export default Home