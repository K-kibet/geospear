import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Title = styled.h1`
    width: 100%;
    font-size: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
`

const Wrapper = styled.div`
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Info = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const MetaInfo = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0px;
    align-items: center;
    justify-content: space-evenly;
`
const Publisher = styled.h1`
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    color: #23a1eb;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`
const Created = styled.span`
    padding: 5px 10px;
    border: 1px solid #00AE58;
`
const Topic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    color: #575757;
`

const Description = styled.p`
    width: 100%;
`
export default function Item ({data}) {
  return (
    <Container>
        <Title>{data.title}</Title>
        <Wrapper></Wrapper>
        <Info>
            <MetaInfo>
              <Publisher>
                {data.publisher}
              </Publisher>
              <Created>{data.created}</Created>
            </MetaInfo>
            <Topic>{data.topic}</Topic>
            <Description>{data.desc}</Description>
        </Info>
    </Container>
  )
}
