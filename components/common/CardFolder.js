import React from 'react'
import { View } from 'react-native'
import { Card, Text } from "react-native-paper";
import { roundedValue, spaceValue } from '../const/constValues';
import { FontAwesome } from "@expo/vector-icons";

export const CardFolder = () => {
  return (
    <View
        style={{
            width: 160,
            marginEnd: spaceValue,
            margin: 5
        }}
    >
        <Card
            style={{
                borderRadius: roundedValue
            }}
        >
            <Card.Content>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: 'center'
                    }}
                >
                    <FontAwesome name='folder' size={40} />
                    <Text>11 Jav</Text>
                </View>
                <Text>Fichier Important</Text>
            </Card.Content>
        </Card>
    </View>
  )
}
