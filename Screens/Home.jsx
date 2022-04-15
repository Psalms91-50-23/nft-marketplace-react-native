import { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const dataReversed = NFTData.map(item => {
  item.bids.reverse();
  return item
})

const Home = () => {
  const [nftData, setNftData] = useState(dataReversed)
  const [filteredData, setFilteredData] = useState(null)

  const handleSearch = (value) => {

    if(!value.length){
      setFilteredData(null)
      return setNftData(dataReversed)
    }

    const filtered = dataReversed.filter( item => {
      if(item.name.toLowerCase().includes(value.toLowerCase())){
        return item;
      }
    })
    if(filtered.length){
      return setFilteredData(filtered);
    }
    else{
      setFilteredData(null)
      return setNftData(dataReversed);
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
            }}
            >
              <View style={{ 
                zIndex: 0,
                maxWidth: 700
                }}>
                  <HomeHeader onSearch={handleSearch} />
                  <FlatList 
                    data={filteredData ? filteredData : nftData}
                    renderItem={({ item, index }) => (
                    <NFTCard data={item} dataLength={nftData.length-1} index={index} />
                    )
                  }
                    keyExtractor={(item) => item.id} 
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