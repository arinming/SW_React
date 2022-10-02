import React from 'react'
import Navbar from '../../components/Navbar'
import PageContainer from '../../components/PageContainer';
import Buttons from '../../components/Button';
import Card from '../../components/Card';
import Users from '../../components/Users';
import Titles from '../../components/Titles';
import styled from '@emotion/styled';
import Sheet from '../../components/Sheet';
import Profile from '../../components/Profile';



const SheetList = () => {
  return (
    <div>
      <Navbar />
      <MainPageContainer>
      <PageContainer>
        <Buttons />
      </PageContainer>
      <ContentBox>
      <Titles
              width='464px'
              height='117px'
              fontSize='70px'
              fontWeight='900'
            >악보 리스트</Titles>
      
      <Card
        title='기다린 만큼, 더'
        body='검정치마'
       />
       <Card
        title='기다린 만큼, 더'
        body='검정치마'
       />
       <Card
        title='기다린 만큼, 더'
        body='검정치마'
       />
       <Users />
       </ContentBox>
       </MainPageContainer>
       <Profile />
    </div>
  )
}


const ContentBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 75px;
`;

const MainPageContainer = styled.div`
  width: 100%;
  height: inherit;
  background: #EDEDED;
`;



export default SheetList
