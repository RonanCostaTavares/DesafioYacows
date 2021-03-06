import React,{useEffect , useContext} from 'react';
import { Container , LoadingIcon} from './styles'
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';


export default () => {

    const {dispatch: userDispatch } = useContext(UserContext); 
    const navigation = useNavigation();

    useEffect(()=> {

        const check = async() => {
            const name = await AsyncStorage.getItem('Name');

            if(name){

                userDispatch({
                    type: 'setNameAndCar',
                    payload:{
                        name: name,
                    }
                });

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                })
            }else {
                navigation.reset({
                    routes: [{name: 'SignUp'}]
                })
            }

        }
        check();
    }, []);


    return (
        <Container>
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}