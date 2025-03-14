import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { useLazyGetNowPlayingMovieQuery} from "@/src/redux/query/RKTQuery";
import {useEffect} from "react";

export default function HomeScreen() {
  const [fetchNowPlayingMovie, { data, isFetching }] = useLazyGetNowPlayingMovieQuery();

  useEffect(() => {
    fetchNowPlayingMovie()
  }, []);

  console.log('data', isFetching)
  return (
    <ScrollView>
      <Text>Welcome to react native </Text>
      <Text>{JSON.stringify(data, null, ' ')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
