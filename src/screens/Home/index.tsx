import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { collectDateData } from '../../utils/selectDataFromDate';

import {
  Container,
  TitleContainer,
  TitleText,
  Content,
  SaintName,
} from './styles';

interface ISant {
  celebrationDay: number;
  name: string;
}

const Home: React.FC = () => {
  const [sant, setSant] = useState<ISant>();

  useEffect(() => {
    const date = collectDateData();

    async function fetchSantOfTheDay(month: string, day: string) {
      const response = await api.get(`/sants/${month}/${day}`);

      return response.data;
    }

    const setTodaySant = async () => {
      const currentSant = await fetchSantOfTheDay(date[1], date[2]);

      setSant(currentSant);
    };

    setTodaySant();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <TitleText>Cath</TitleText>
      </TitleContainer>
      <Content>
        {sant ? (
          <SaintName>{sant?.name}</SaintName>
        ) : (
          <SaintName>Loading...</SaintName>
        )}
      </Content>
    </Container>
  );
};

export default Home;
