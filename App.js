import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, PaperProvider, MD3LightTheme as DefaultThemePaper } from 'react-native-paper';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { HomeScreenRecent } from './components/HomeScreenRecent';
import { HomeScreenFichiers } from './components/HomeScreenFichiers';
import { CameraScreen } from './components/CameraScreen';
import { SearchScreen } from './components/SearchScreen';


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const RecentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name='Kasus'
        component={HomeScreenRecent}
        options={{
          headerLeft: () => <Avatar.Image style={{ marginEnd: 10 }} size={50} source={{ uri: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} />,
          headerRight: () => <Ionicons name='settings-sharp' size={25} />,
          headerStyle: {
            
          }
        }}
      />
      <Stack.Screen
        name='Search'
        component={SearchScreen}
        options={{
          title: 'Search',
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name='Camera'
        component={CameraScreen}
        options={{
          title: 'Camera',
          animation: 'slide_from_right',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

const FileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name='Kasus'
        component={HomeScreenFichiers}
        options={{
          headerLeft: () => <Avatar.Image style={{ marginEnd: 10 }} size={50} source={{ uri: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} />
        }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <PaperProvider theme={themePaper}>
      <NavigationContainer theme={themeNavigation}>
        <Tab.Navigator
          shifting={true}
        >
          <Tab.Screen
            name="Récents"
            component={RecentStack}
            options={{
              tabBarIcon: ({color, size}) => <FontAwesome color={"#162850"} name='history' size={23} />,
            }}
          />
          <Tab.Screen
            name="Fichiers"
            component={FileStack}
            options={{
              tabBarIcon: ({color, size}) => <FontAwesome color={"#162850"} name='file-text' size={23} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const themeNavigation = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#EC9733',
    background: '#f4f4f4',
    border: '#EC9733',
    primary: '#EC9733',
    card: '#f4f4f4'
  },
};

const themePaper = {
  ...DefaultThemePaper,
  colors: {
    ...DefaultThemePaper.colors,
    primaryContainer: '#EC9733',
    onSurface: '#162850',
    secondaryContainer: "#EC9733",
    onSecondaryContainer: '#162850',
    surface: '#EC9733',
    onSurfaceVariant: "#162850",
    elevation: {
      ...DefaultThemePaper.colors.elevation,
      level3: "#D9D9D9",
      level1: '#FFFFFF'
    }
  }
}