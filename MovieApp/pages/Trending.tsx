import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import getTrending from '../../redux/actions/TrendingAction';
import {RootState, imgBaseUrl} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import ListCard from '../../components/ListCard';
import HomeHeader from '../../components/HomeHeader/HomeHeader';

const Trending: React.FC = () => {
  const dispatch = useDispatch();
  const {trendings, trendLoading, trendError} = useSelector(
    (state: RootState) => state.trending,
  );

  useEffect(() => {
    dispatch(getTrending() as any);
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
    <View style={{flex: 1, backgroundColor: '#222'}}>
      {trendLoading && (
        <View>
          <ActivityIndicator color={'red'} size={'large'} />
        </View>
      )}

      {trendError && (
        <View>
          <Text>{trendError}</Text>
        </View>
      )}

      {!trendLoading && !trendError && (
        <View style={{paddingHorizontal: 10}}>
          <HomeHeader title="Trending  &  New Coming" />
          <FlatList
            style={{alignSelf: 'center'}}
            data={trendings}
            renderItem={renderItem}
            keyExtractor={(item: any) => `item-${item.id}`}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default Trending;