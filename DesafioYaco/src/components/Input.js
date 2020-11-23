import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    backgroundColor: #F2F2F2;
    flexDirection: row;
    borderRadius: 30px;
    paddingLeft: 15px;
    alignItems: center;
    marginBottom: 15px;
`;


const Input = styled.TextInput`
    flex: 1;
    fontSize: 16px;
    color: #268596;
    marginLeft: 10px;
`;



export default ({IconSvg, placeholder,value,onChangeText,password }) => {
    return (
        <InputArea>
            {/* <IconSvg width="24" height="24" fill="#268596"/> */}
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                />

        </InputArea>
    );
}