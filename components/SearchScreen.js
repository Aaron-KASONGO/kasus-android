import React, { useState } from 'react'
import { View } from 'react-native'
import { roundedValue, spaceValue } from './const/constValues'
import { SearchComponent } from './common/SearchComponent'
import { VerticalList } from './common/VerticalList'
import { DATA } from './common/HorizontalList'
import { Searchbar } from 'react-native-paper'

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query)
  return (
    <View
      style={{
        marginHorizontal: spaceValue
     }}
    >
      <Searchbar
            style={{
                borderRadius: roundedValue,
                marginVertical: spaceValue
            }}
            placeholder="Recherche"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
      <VerticalList title={"Résultats"} data={DATA} />
    </View>
  )
}
