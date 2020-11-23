import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { UserContext } from '../contexts/UserContext';



const TabArea = styled.View `
    height: 70px;
    backgroundColor: #d1e5d0;
    flexDirection: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    marginBottom: 15px;

`;
const Div = styled.View`
    backgroundColor: #000;
    width:2px;
    marginBottom: 18px;

`;


export default ({ navigation}) => {


    const goTo = (screenName) => {
        navigation.navigate(screenName);

    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <Icon name="home" size={25}/>
                <Text>Home</Text>
            </TabItem>
            <Div/>
            <TabItem onPress={()=>goTo('Carrinho')}>
                <Icon name="shoppingcart" size={25}/>
                <Text>Carrinho</Text>
            </TabItem>
        </TabArea>
    );
}