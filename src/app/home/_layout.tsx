import { ScrollView, Text } from 'react-native';
import { useLazyGetNowPlayingMovieQuery } from '@/src/redux/query/RKTQuery';
import { useEffect } from 'react';
import AppBar from '@/src/components/base/appbar/AppBar';

const HomeScreen = () => {
  const [fetchNowPlayingMovie, { data, isFetching }] =
    useLazyGetNowPlayingMovieQuery();

  useEffect(() => {
    fetchNowPlayingMovie();
  }, []);

  return (
    <AppBar title={'Home'}>
      <ScrollView>
        <Text>Welcome to react native </Text>
        <Text>{JSON.stringify(data, null, ' ')}</Text>
      </ScrollView>
    </AppBar>
  );
};

export default HomeScreen;
