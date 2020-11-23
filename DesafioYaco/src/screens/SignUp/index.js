import React, { useState ,  useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';
import Input from '../../components/Input'

import { 
    Container, 
    InputArea,
    CustomButton,
    CustomButtonText,

} from './styles'


export default () => {

    const {dispatch: userDispatch } = useContext(UserContext); 
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [ageField, setAgeField] = useState('');

    const handleSignClick = async () => {
        if(nameField != ''){

                await AsyncStorage.setItem('Name', nameField);

                userDispatch({
                    type: 'setNameAndCar',
                    payload:{
                        name: nameField,
                    }
                });

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                })

        }else {
            alert("Preencha os campos!")
        }
    }

    return (
        <Container>
            {/* <Icon name="pokemon-go" size={100}/> */}
            <InputArea>
                <Input 
                    // IconSvg={}
                    placeholder="Digite seu Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            
            </InputArea>

            
        </Container>
    );
}