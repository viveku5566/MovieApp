import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../navigation/Types';
import {movideDetailAPI} from '../../redux/actions';

type listCardProps = {
  item: movideDetailAPI;
  imageUrl: string;
  rate: string;
  id: string;
};

const ListCard: React.FC<listCardProps> = ({imageUrl, rate, item}) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <TouchableOpacity
      style={styles().wrapper}
      onPress={() => navigation.navigate('Detalis', {item})}>
      <Image
        source={{uri: imageUrl}}
        style={styles().imgStyle}
        resizeMode="cover"
      />
      <View style={styles().rateWrapper}>
        <Text style={styles().rateText}>{Math.ceil(+rate)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;