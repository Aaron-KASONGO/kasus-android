import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { Button, Card, Divider, Menu, Text } from "react-native-paper";
import { roundedValue, spaceValue } from '../const/constValues';
import { FontAwesome, Entypo } from "@expo/vector-icons";


export const CardFile = ({title, subtitle}) => {
    const [visibleMenu, setVisibleMenu] = useState(false);

    const openMenu = () => setVisibleMenu(true);
    const closeMenu = () => setVisibleMenu(false);
  return (
    <View
        style={{
            marginBottom: spaceValue,
            margin: 5
        }}
    >
        <Card
            style={{
                borderRadius: roundedValue,
            }}
        >
            <Card.Content
                style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Image
                        style={{
                            width: 90,
                            height: 100,
                            borderRadius: roundedValue,
                            marginEnd: spaceValue
                        }}
                        source={{
                            uri: "https://images.pexels.com/photos/18868680/pexels-photo-18868680/free-photo-of-chiot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }}
                    />
                    <View>
                        <Text>Carte de ONEM</Text>
                        <Text>Mars 15, 2022</Text>
                    </View>
                </View>
                
                <Menu
                    visible={visibleMenu}
                    onDismiss={closeMenu}
                    anchor={<Entypo onPress={openMenu} color={"#162850"} name='dots-three-vertical' size={25} />}>
                    <Menu.Item leadingIcon={"play"} onPress={() => {}} title="Ouvrir" />
                    <Menu.Item leadingIcon={"share"} onPress={() => {}} title="Partager" />
                    <Menu.Item leadingIcon={"file-excel"} onPress={() => {}} title="En excel" />
                </Menu>
            </Card.Content>
        </Card>
    </View>
  )
}
