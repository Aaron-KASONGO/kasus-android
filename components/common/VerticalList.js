import React, { useState } from 'react'
import { CardFile } from './CardFile'
import { FlatList, View } from 'react-native'
import { DATA } from './HorizontalList'
import { Text } from 'react-native-paper'
import { Entypo } from "@expo/vector-icons";
import { spaceValue, windowHeight, windowWidth } from '../const/constValues'
import { CardGridFile } from './CardGridFile'
import { LoadingView } from './LoadingView'
import { EmptyView } from './EmptyView'

export const VerticalList = ({title, height, data, loading}) => {
  const [disposition, setDisposition] = useState(false);

  return (
    <View
    >
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginVertical: spaceValue
            }}
        >
            <View>
                <Text
                    style={{
                        marginEnd: 5
                    }}
                >
                    {title}
                </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                }}
            >
                <Entypo name="grid" size={25} style={{ marginEnd: 5 }} color={disposition ? "#EC9733": "#D9D9D9"} onPress={() => setDisposition(true)} />
                <Entypo name="list" size={25} color={!disposition ? "#EC9733": "#D9D9D9"} onPress={() => setDisposition(false)} />
            </View>
        </View>

        <View
          style={{
            height: height,
          }}
        >
          {
            loading ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: height
                }}
              >
                <LoadingView width={'100%'} height={150} />
              </View>
            ): (
              <>
                {
                  disposition ? (
                    <FlatList
                      key="_"
                      data={data}
                      renderItem={({item}) => <CardGridFile title={"show"} subtitle={"d"} />}
                      scrollEnabled={true}
                      nestedScrollEnabled={true}
                      numColumns={2}
                      keyExtractor={(item, index) => index}
                      ListEmptyComponent={
                        <View
                          style={{
                            width: windowWidth,
                            height: height,
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <EmptyView width={400} height={400} />
                        </View>
                      }
                    />

                  ): (
                    <FlatList
                      key="#"
                      data={DATA}
                      renderItem={({item}) => <CardFile title={"show"} subtitle={"d"} />}
                      keyExtractor={(item => item.id)}
                      scrollEnabled={true}
                      nestedScrollEnabled={true}
                      ListEmptyComponent={
                        <View
                          style={{
                            width: windowWidth,
                            height: height,
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <EmptyView width={400} height={400} />
                        </View>
                      }
                    />
                  )
                }
              </>
            )
          }
        </View>
    </View>
  )
}
