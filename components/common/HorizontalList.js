import React from 'react'
import { FlatList, View } from 'react-native'
import { CardFolder } from './CardFolder'
import { spaceValue, windowWidth } from '../const/constValues';
import { FontAwesome } from "@expo/vector-icons";
import { Text } from 'react-native-paper';
import { LoadingView } from './LoadingView';
import { EmptyView } from './EmptyView';

export const DATA = [
    
  ];

export const HorizontalList = ({title, setModalVisible, navigation, loading}) => {
  return (
    <View>
      <View
            style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginVertical: spaceValue
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                }}
            >
                <Text
                  style={{
                    marginEnd: 5
                  }}
                >
                    {title}
                </Text>
                <FontAwesome name='plus' color={"#EC9733"} size={20} onPress={() => setModalVisible(true)} />
            </View>
            <View
            >
                <Text theme={{ colors: { onSurface: "#EC9733"} }} onPress={() => console.log("pressed !")}>Afficher</Text>
            </View>
      </View>

      {
        loading ? (
          <LoadingView width={'100%'} height={100} />
        ): (
          <FlatList
            data={DATA}
            renderItem={({item}) => <CardFolder />}
            keyExtractor={item => item.id}
            horizontal
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={
              <View
                style={{
                  width: windowWidth,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <EmptyView width={200} height={200} />
              </View>
            }
          />
        )
      }
    </View>
  )
}
