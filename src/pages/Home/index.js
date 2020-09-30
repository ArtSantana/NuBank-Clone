import React, {useEffect} from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {StatusBar} from 'react-native';
import {Container} from './styles';
import colors from '../../assets/colors';

function Home() {
  useEffect(() => {
    navigationColor();
  }, []);

  async function navigationColor() {
    try {
      await changeNavigationBarColor(colors.primary, false);
    } catch (e) {}
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
    </Container>
  );
}

export default Home;
