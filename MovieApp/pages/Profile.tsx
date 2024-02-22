import {
    View,
    Text,
    Image,
    FlatList,
    Switch,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import styles from './styles';
  import {ButtonSchema} from './Buttons';
  import {IMAGES} from '../../constants/Images';
  
  const Profile = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    const renderItem = ({item}: any) => {
      let {isBtn} = item;
      return (
        <View style={styles().btnWrapper}>
          <View style={{width: '9%', marginEnd: 10}}>
            <Image source={item.image} style={styles().icon} />
          </View>
          <View style={styles().btnText}>
            <Text style={item.text ? styles().btnTitle : styles().btnTitleNoText}>
              {item.title}
            </Text>
            {item.text ? <Text style={styles().infoTxt}>{item.text}</Text> : null}
          </View>
          <View style={{width: '14%'}}>
            {isBtn ? (
              <Switch
                trackColor={{false: '#777', true: '#777'}}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#ddd"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            ) : (
              <TouchableOpacity>
                <Image
                  source={IMAGES.rightArrow}
                  style={[styles().icon, {alignSelf: 'flex-end'}]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    };
  
    return (
      <View style={styles().container}>
        {/*            purple-section          */}
        <View style={styles().headerBackground}>
          <View>
            <Text style={styles().title}>Profile</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <View>
              <Image source={IMAGES.active} style={styles().bellImg} />
              <View style={styles().notification}></View>
            </View>
            <View style={styles().userImgWrapper}>
              <Image source={IMAGES.profile} style={styles().userImg} />
            </View>
          </View>
        </View>
        {/*            buttons-section           */}
        <FlatList
          style={styles().flatList}
          data={ButtonSchema}
          keyExtractor={(item, ind) => ind.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
  
        {/*            footer-section           */}
        <View style={styles().footerSeparator}></View>
      </View>
    );
  };
  
  export default Profile;