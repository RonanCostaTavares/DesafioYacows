import React, { useState , useEffect,useContext} from 'react';
import { RefreshControl , Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import Icon from 'react-native-vector-icons/AntDesign';


import Api from '../../Api';

import { 
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    HeaderIconCard,

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
    const[listOk , setListOk] = useState(false);
    const[listProduct, setListProduct] = useState([]);
    const[selectProduct, setSelectProduct] = useState([]);


    


    const getProduct = async () => {
        setLoading(true);
        setListProduct(user.car)

        
        setLoading(false);


    }



    useEffect(() => {
        getProduct();
    }, []);

    const handleSelectclik =  async (id) => {
        
            if (id > -1) {
                listProduct.splice(id, 1);
            }
        userDispatch({
            type: 'setNameAndCar',
            payload:{
                name:user.name,
                car: listProduct,
            }
        });

        onRefresh();
   
    }

    const removeItems = async() => {
        var i = 0;
        console.log(listProduct.length)
        while (i == listProduct.length) {
            listProduct.splice(i,1);
            console.log(i)
            i++;
        }

        userDispatch({
            type: 'setNameAndCar',
            payload:{
                name:user.name,
                car: listProduct,
            }
        });

        onRefresh();
          
    }

    const onRefresh = async () => {
        setRefreshing(false)
        getProduct();

    }

 
    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>

                <HeaderArea>
                    <HeaderTitle numberOfLines={0}>Olá {user.name} esse é seu carrinho de compras</HeaderTitle>
                    <HeaderIconCard onPress={removeItems}>
                        <Icon name="minuscircle" color="red" size={40}/>
                        <Text style={{width:70,textAlign:"center",alignSelf:"center"}}>Remover todos</Text>
                    </HeaderIconCard>

                </HeaderArea>

                {loading &&
                    <LoadingIcon size="large" color="#FFF"/>
                }
                
                   
                    <ListArea>
                        {listProduct.map((item,k)=>(
                            <Area  key={k} onPress={() => handleSelectclik(k)}>
                
                            <Picture source={require('../../assets/unnamed.png')}/>
                
                            <InfoArea>
                                <ProductName>{item.title}</ProductName>
                
                                <ProductPrice>R$ {item.unit_price}</ProductPrice>
                            </InfoArea>
                
                            <CardArea>
                                <Icon name="minuscircle" color="red" size={40}/>
                            </CardArea>
                
                        </Area>
                        ))}
                    </ListArea>
                
            </Scroller>

            
        </Container>
    );
}