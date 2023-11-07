import React, { useState } from 'react'
import { View } from 'react-native'
import { spaceValue } from './const/constValues'
import { SearchComponent } from './common/SearchComponent'
import { VerticalList } from './common/VerticalList'
import { DATA } from './common/HorizontalList'

export const HomeScreenFichiers = ({navigation}) => {
  const [loadingFile, setLoadingFile] = useState(false);
  return (
    <View
        style={{
            marginHorizontal: spaceValue,
        }}
    >
        <SearchComponent navigation={navigation} />
        <VerticalList loading={loadingFile} title={"Tous les fichiers"} height={'86%'} data={DATA} />
    </View>
  )
}
