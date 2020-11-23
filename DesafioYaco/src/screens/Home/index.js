import React, { useState , useEffect,useContext} from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';


import Api from '../../Api';

import { 
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    HeaderIconCard,

    InputArea,
    Input,

    LoadingIcon,

    //List
    ListArea,
    Area,
    Picture,
    InfoArea,
    ProductName,
    ProductPrice,
    CardArea 

} from './styles';


export default () => {

    const navigation = useNavigation();
    const {dispatch: userDispatch } = useContext(UserContext); 
    const { state: user} = useContext(UserContext)


    const[serchText, setserchText] = useState('');
    const[refreshing, setRefreshing] = useState(false);
    const[loading , setLoading] = useState(false);
    const[listProduct, setListProduct] = useState([]);
    const[selectProduct, setSelectProduct] = useState([]);


    


    const getProduct = async () => {
        setLoading(true);
        setListProduct([]);

        let res = await Api.getProducts();

        if(res){
            setListProduct(res.products)
            
        }else{
            alert("Ocorreu um erro, tente novamente mais tarde.")
        }

        setLoading(false);
        
    }



    useEffect(() => {
        getProduct();
    }, []);

    const handleSelectclik =  (id) => {

        selectProduct.push(listProduct[id - 1])
   
        userDispatch({
            type: 'setNameAndCar',
            payload:{
                name:user.name,
                car: selectProduct,
            }
        });
    }


    const getProductSearch = () => {

    }

    const onRefresh = async () => {
        setRefreshing(false)
        getPokemon();

    }

    const Logout = async () => {
        await AsyncStorage.removeItem('Name')
        await AsyncStorage.removeItem('Age')
        
        navigation.reset({
            routes:[{name:'Preload'}]
        })
    }

 
    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>

                <HeaderArea>
                    <HeaderTitle numberOfLines={0}>Olá {user.name} a loja Yacows tem algumas promoções para você.</HeaderTitle>
                    <HeaderIconCard onPress={Logout}>
                        <Icon name="logout" size={30}/>
                    </HeaderIconCard>

                </HeaderArea>

                <InputArea>
                    <Input 
                        placeholder="Qual produto você procura?"
                        placeholderTextColor="#000"
                        value={serchText}
                        onChangeText={t=>setserchText(t)}
                        onEndEditing={getProductSearch}
                    
                    />
                    
                </InputArea>

                {loading &&
                    <LoadingIcon size="large" color="#FFF"/>
                }
                

                <ListArea>
                    {listProduct.map((item,k)=>(
                        <Area  key={k} onPress={() => handleSelectclik(item.id)}>
            
                        <Picture source={require('../../assets/unnamed.png')}/>
            
                        <InfoArea>
                            <ProductName>{item.title}</ProductName>
            
                            <ProductPrice>R$ {item.unit_price}</ProductPrice>
                        </InfoArea>
            
                        <CardArea>
                            <Icon name="shoppingcart" size={40}/>
                        </CardArea>
            
                    </Area>
                    ))}
                </ListArea>
            </Scroller>

            
        </Container>
    );
}
