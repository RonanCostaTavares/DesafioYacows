import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    backgroundColor: #d1e5d0;
    flex: 1;
    justifyContent: center;
    alignItems: center;

`;

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    backgroundColor: #8BBE8A;
    borderRadius: 30px;
    justifyContent: center;
    alignItems: center;
`;
export const CustomButtonText = styled.Text`
    fontSize: 18px;
    color: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flexDirection: row;
    justifyContent: center;
    marginTop: 50px;
    marginBottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
    fontSize: 16px;
    color: #268596;
`;
export const SignMessageButtonTextBold = styled.Text`
    fontSize: 16px;
    color: #268596;
    fontWeight: bold;
    marginLeft: 5px;
`;