import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {spokenLanguages} from '../../redux/actions';
import {movideDetailAPI} from '../../redux/actions/MovieDetailsAction';
import {imgBaseUrl} from '../../redux';

type DetailsCompProps = {
  movieDetails: movideDetailAPI;
};

const DetailsComponent: React.FC<DetailsCompProps> = ({movieDetails}) => {
  return (
    <ScrollView style={styles().container}>
      <Image
        source={{
          uri: movieDetails.backdrop_path
            ? imgBaseUrl + movieDetails.backdrop_path
            : imgBaseUrl + movieDetails.profile_path,
        }}
        resizeMode="cover"
        style={styles().imgStyle}
      />
      <Text style={styles().titleText}>
        {movieDetails.title || movieDetails.name}
      </Text>
      <Text style={styles().overViewText}>
        {movieDetails.biography
          ? movieDetails.biography
          : movieDetails.overview}
      </Text>
      <Text style={styles().voteText}>
        <Text style={{fontWeight: 'bold'}}>Rating:</Text>{' '}
        {Math.ceil(movieDetails.vote_average) ||
          Math.ceil(movieDetails.popularity)}
      </Text>

      <View>
        <Text style={{fontWeight: 'bold', color: '#fff'}}>Languages:</Text>
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          {movieDetails.spoken_languages?.map((lang: spokenLanguages) => (
            <Text key={lang.iso_639_1} style={styles().langsText}>
              {' '}
              {lang.english_name}
              {','}
            </Text>
          ))}
        </View>
      </View>
      {movieDetails.birthday ? (
        <Text style={styles().dateText}>
          Birth Date: {movieDetails.birthday}
        </Text>
      ) : movieDetails.release_date ? (
        <Text style={styles().dateText}>
          Release Date: {movieDetails.release_date}
        </Text>
      ) : (
        <Text style={styles().dateText}>
          Release Date: {movieDetails.last_air_date}
        </Text>
      )}

      <TouchableOpacity style={styles().pressableWrapper}>
        <Text style={styles().pressableText}>Add to Favourites</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailsComponent;