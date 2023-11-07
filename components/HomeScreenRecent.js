import React, { useEffect, useState } from 'react'
import { Platform, Text, View } from 'react-native'
import { SearchComponent } from './common/SearchComponent'
import { DATA, HorizontalList } from './common/HorizontalList'
import { spaceValue } from './const/constValues';
import { CardFile } from './common/CardFile';
import { VerticalList } from './common/VerticalList';
import { CardGridFile } from './common/CardGridFile';
import { FAB, Portal } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";
import { AddDossierModal } from './common/AddDossierModal';
import { getUsers } from '../data/request';
import { LoadingView } from './common/LoadingView';

export const HomeScreenRecent = ({navigation}) => {
    const [state, setState] = useState({ open: false });
    const [image, setImage] = useState(null);
    const [hasMediaPermission, setHasMediaPermission] = useState(false);
    const [hasCameraPermission, setHasCameraPermission] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const [loadingDossier, setLoadingDossier] = useState(false);
    const [loadingFile, setLoadingFile] = useState(false);

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    const getMediaPermission = async () => {
        if (Platform.OS === "android") {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status === "granted") {
                setHasMediaPermission(true)
            } else {
                alert("Permission denied !")
            }
        }
    }

    const getCameraPermission = async () => {
        if (Platform.OS === "android") {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status === "granted") {
                setHasCameraPermission(true)
            } else {
                alert("Permission denied !")
            }
        }
    }

    const pickImage = async () => {
        if (hasMediaPermission) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            console.log(result);

            if (!result.canceled) {
                setImage(result.assets[0].uri)
            } else {
                setImage(null)
            }
        } else {
            getMediaPermission();
        }
    }

    const goTakePicture = () => {
        if (hasCameraPermission) {
            navigation.navigate("Camera");
        } else {
            getCameraPermission();
        }
    }

    const creerDossier = () => {

    }

    useEffect(() => {
        getMediaPermission();
        getCameraPermission();
    }, []);

    return (
        <View
            style={{
                marginHorizontal: spaceValue
            }}
        >
            <SearchComponent navigation={navigation} />
            <HorizontalList loading={loadingDossier} navigation={navigation} title={"Mes dossiers"} setModalVisible={setModalVisible} />
            <VerticalList loading={loadingFile} title={"Mars 19, 2022"} height={'68%'} data={DATA} />
            <Portal>
                <FAB.Group
                open={open}
                style={{
                    marginBottom: 90,
                    marginRight: 10
                }}
                visible
                icon={open ? 'calendar-today' : 'plus'}
                actions={[
                    {
                    icon: 'upload',
                    label: 'Charger',
                    onPress: () => pickImage(),
                    },
                    {
                    icon: 'camera',
                    label: 'Camera',
                    onPress: () => goTakePicture(),
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                    // do something if the speed dial is open
                    }
                }}
                />
        </Portal>
        <AddDossierModal visible={modalVisible} setVisible={setModalVisible} />
        </View>
    )
}


