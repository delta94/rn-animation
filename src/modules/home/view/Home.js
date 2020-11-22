/**
 * KTcity App
 * Created by leduong on 22/11/2020
 */

import React, { PureComponent } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../../../components/Header';
import Colors from '../../../style/Colors';
import Fonts from '../../../style/Fonts';
import { MARGIN_hScale, MARGIN_wScale } from '../../../style/Dimensions';

const listAnimation = [
  {
    key: 'login1',
    route: 'Login1',
    title: 'Screen Login 1',
  },
];

class Home extends PureComponent {

  _renderItem = ({ item }) => (
    <Pressable
      onPress={() => this.props.navigation.navigate(item.route)}
      style={styles.wrapper}>
      <Text style={styles.titleText}>
        {'# ' + item.title}
      </Text>
    </Pressable>
  );

  render () {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ backgroundColor: Colors.accent.general }}/>
        <Header title={'Free Time Animation'}
                isColor={true}
                isLeft={false}
        />

        <FlatList data={listAnimation} renderItem={this._renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    borderBottomWidth: 1,
    borderColor: Colors.accent.extraLight,
  },
  titleText: {
    paddingLeft: MARGIN_wScale,
    color: Colors.primary.general,
    fontFamily: Fonts.Bold,
    fontSize: 20,
    paddingVertical: MARGIN_hScale,
  },
});

export default Home;
