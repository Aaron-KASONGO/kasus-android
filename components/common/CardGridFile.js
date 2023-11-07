import React, { useState } from 'react'
import { Dimensions, View } from 'react-native'
import { Card, Menu, Text } from 'react-native-paper'
import { Entypo } from "@expo/vector-icons";
import { spaceValue } from '../const/constValues';

const {width, height} = Dimensions.get("screen")

export const CardGridFile = ({title, subtitle}) => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);
  return (
    <View>
        <Card
            style={{
                width: width * 0.45,
                margin: 5,
                justifyContent: 'center',
            }}
        >
            <Card.Cover style={{height: 120}} source={{ uri: "https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} />
            <Card.Title title="Carte de ONEM" subtitle="Mars 15, 2022" right={() => (
              <Menu
                visible={visibleMenu}
                onDismiss={closeMenu}
                anchor={<Entypo name='dots-three-vertical' color={"#162850"} onPress={openMenu} size={20} style={{ marginEnd: spaceValue }} />}>
                <Menu.Item leadingIcon={"play"} onPress={() => {}} title="Ouvrir" />
                <Menu.Item leadingIcon={"share"} onPress={() => {}} title="Partager" />
                <Menu.Item leadingIcon={"file-excel"} onPress={() => {}} title="En excel" />
              </Menu>
              )} />
        </Card>
    </View>
  )
}
