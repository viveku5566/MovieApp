import React, {useEffect} from 'react';
import {View, ScrollView, ActivityIndicator, Text} from 'react-native';
import {RootState, imgBaseUrl} from '../../redux';
import ListCard from '../../components/ListCard';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import getList from '../../redux/actions/MoviesListAction';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeFlatList from '../../components/HomeFlatList/HomeFlatList';
import {StackParamList} from '../../navigation/Types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const Home: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const {movies, listLoading, error, tv, persons} = useSelector(
    (state: RootState) => state.list,
  );

  useEffect(() => {
    dispatch(getList('movie') as any);
    dispatch(getList('tv') as any);
    dispatch(getList('person') as any);
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <ListCard
        item={item}
        imageUrl={
          item.poster_path
            ? imgBaseUrl + item.poster_path
            : imgBaseUrl + item.profile_path
        }
        id={item.id}
        rate={item.vote_average ? item.vote_average : item.popularity}
      />
    );
  };

  return (
    <ScrollView style={styles().container}>
      {listLoading && (
        <View style={styles().centeredView}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      )}

      {error && (
        <View style={styles().centeredView}>
          <Text style={styles().errorText}>{error}</Text>
        </View>
      )}

      {!listLoading && !error && (
        <View style={{flex: 1, paddingVertical: 10}}>
          <HomeHeader title="Movies" />
          <HomeFlatList data={movies} renderItem={renderItem} />

          <HomeHeader title="Tv Shows" />
          <HomeFlatList data={tv} renderItem={renderItem} />

          <HomeHeader title="Actors" />
          <HomeFlatList data={persons} renderItem={renderItem} />
        </View>
      )}
    </ScrollView>
  );
};

export default Home;