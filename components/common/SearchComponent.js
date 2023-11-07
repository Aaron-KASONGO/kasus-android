import { View } from 'react-native'
import { Searchbar, TouchableRipple } from "react-native-paper";
import { roundedValue, spaceValue } from '../const/constValues';

export const SearchComponent = ({navigation}) => {
  return (
    <View>
      <TouchableRipple
        style={{
          borderRadius: roundedValue,
          marginVertical: spaceValue
        }}
        onPressIn={() => navigation.navigate("Search")}
      >
        <Searchbar
          style={{
            borderRadius: roundedValue,
          }}
          placeholder="Recherche"
          editable={false}
        />
      </TouchableRipple>
    </View>
  )
}
