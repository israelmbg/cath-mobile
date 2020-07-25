import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import api from '../../services/api';
import selectDataFromDate from '../../utils/selectDataFromDate';

import {
  Container,
  TitleContainer,
  TitleText,
  Content,
  SaintName,
} from './styles';

const Home: React.FC = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    async function fetch() {
      const response = await api.get('/sants/Jul');

      const todayDate = Number(selectDataFromDate(Date())) - 1;

      setData(response.data[todayDate].name);
    }

    fetch();
  });

  return (
    <Container>
      <TitleContainer>
        <TitleText>Cath</TitleText>
      </TitleContainer>
      <Content>
        <SaintName>{data}</SaintName>
      </Content>
    </Container>
  );
};

export default Home;
