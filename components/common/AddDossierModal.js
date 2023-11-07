import React, { useState } from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Button, Dialog, Portal, Text, TextInput } from 'react-native-paper'
import { createDossier, getUsers } from '../../data/request';

export const AddDossierModal = ({visible, setVisible}) => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [creation, setCreation] = useState(false);

    const handleCreatingDossier = () => {
        setCreation(false)
        setLoading(true)
        createDossier(name)
            .then(response => {
                console.log(response)
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
                setCreation(true)
            })
    }
  return (
    <View>
        <Portal>
            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <Dialog.Title>Créer un dossier</Dialog.Title>
                
                {
                    loading ? (
                        <>
                            <Dialog.Content>
                                <ActivityIndicator size={"large"}  animating={true} />
                            </Dialog.Content>
                        </>
                    ): (
                        <>
                            <Dialog.Content>
                                {creation && <Text variant='labelSmall' style={{ color: 'red'}}>Echec de création</Text>}
                                <TextInput
                                    mode='flat'
                                    label = 'Nom du dossier'
                                    placeholder='Fiche de stage'
                                    value={name}
                                    onChangeText={name => setName(name)}
                                />
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={() => setVisible(false)}>Annuler</Button>
                                <Button onPress={handleCreatingDossier}>Créer</Button>
                            </Dialog.Actions>
                        </>
                    )
                }
            </Dialog>
        </Portal>
    </View>
  )
}
