import * as React from 'react';
import { BottomNavigation, DefaultTheme } from 'react-native-paper';
import Home from '../home/Home';
import AddServices from '../addservices/AddServices';
import Profile from '../profile/Profile';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ccc',
    accent: 'red',
  },
};

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Home,
    albums: AddServices,
    recents: Profile,
  });

  return (
    <BottomNavigation  theme={theme}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;