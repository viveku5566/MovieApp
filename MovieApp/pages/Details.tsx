import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {RootState} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import getMovieDetails from '../../redux/actions/MovieDetailsAction';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../navigation/Types';
import DetailsComponent from '../../components/DetalisCard/DetailsComponent';

type Props = NativeStackScreenProps<StackParamList, 'Detalis'>;

const Detalis: React.FC<Props> = ({route}) => {
  const dispatch = useDispatch();
  const {movieDetails, movieLoading, movieError} = useSelector(
    (state: RootState) => state.movieDetails,
  );
  const item = route.params.item;

  useEffect(() => {
    dispatch(getMovieDetails(item.id.toString(), item.media_type) as any);
  }, []);

  return (
    <>
      {movieLoading && (
        <View>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      )}

      {movieError && (
        <View>
          <Text>{movieError}</Text>
        </View>
      )}

      {!movieLoading && !movieError && (
        <DetailsComponent movieDetails={movieDetails} />
      )}
    </>
  );
};

export default Detalis;