import React from 'react';
import {Image, SafeAreaView, ScrollView, View, Text} from 'react-native';
import {ProfileTabNavigation} from '../../navigation/MainNavigation';

import globalStyle from '../../assets/styles/main';
import style from './style';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>Emmanuel Robertsen</Text>
        </View>
        <View style={style.profileStatsContainer}>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>45</Text>
            <Text style={style.singleStatText}>Following</Text>
          </View>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>30M</Text>
            <Text style={style.singleStatText}>Followers</Text>
          </View>
          <View style={style.singleStatContainer}>
            <Text style={style.singleStatNumber}>100</Text>
            <Text style={style.singleStatText}>Posts</Text>
          </View>
        </View>
        <View style={style.border} />
        <View style={{height: '100%'}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
