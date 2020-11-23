import React, { Component } from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    backgroundColor: #d1e5d0;
    flex: 1;
    
`;
 export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
 `;


export const HeaderArea = styled.View`
    flexDirection: row;
    alignItems: center;

`;
export const HeaderTitle = styled.Text`
    width: 250px;
    fontSize: 24px;
    fontWeight: bold;
    color: #000;
`;
export const HeaderIconCard = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    marginLeft: 70px;
    `;
export const FilterOrder = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
    backgroundColor: #8BBE8A;
`;


export const InputArea = styled.View`
    backgroundColor: #F2F2F2;
    height: 60px;
    borderRadius: 30px;
    flexDirection: row;
    alignItems: center;
    paddingLeft: 20px;
    paddingRight: 20px;
    marginTop: 30px;
`;
export const Input = styled.TextInput`
    flex: 1;
    fontSize: 16px;
    color: #000;
`;
export const LocaitonFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;


export const LoadingIcon = styled.ActivityIndicator`
    marginTop: 50px;
`;

export const ListArea = styled.TouchableOpacity`
    marginTop: 30px;
    marginBottom: 30px;
`;


export const Area = styled.TouchableOpacity`
    backgroundColor: #FFF;
    marginBottom: 20px;
    borderRadius: 20px;
    padding: 15px;
    flexDirection: row;
`;

export const Picture = styled.Image`
    width: 88px;
    height: 88px;
    borderRadius: 20px;
`;

export const InfoArea =  styled.View`
    marginLeft: 10px;
    width: 170px;
    justifyContent: center;
    alignItems: center;
`;

export const ProductName = styled.Text`
    fontSize: 17px; 
    fontWeight: bold; 
`;
export const ProductPrice = styled.Text`
    fontSize: 17px; 
    fontWeight: bold; 
    marginTop: 10px;
`;

export const CardArea = styled.View`
    justifyContent: center;
    alignItems: center;
    marginLeft: 10px;
    width: 80px;
    height: 80px;
`;