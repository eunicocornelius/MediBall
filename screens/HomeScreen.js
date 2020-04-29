import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.welcomeContainer}>
        <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Text style={styles.title}>What is MediBall?</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>MediBall is a minigame made to help people that are dealing with patience issues.</Text>
        </View>

        <View style={styles.otherContainer}>
          <Text style={styles.title}>How to play MediBall?</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>All you need to do is press the MediBall bar on the navbar below and press the blue ball to start playing. Just press the ball, watch it grow, and hold without releasing it since it is a patience game. The timer will reset whenever you release the ball. Have fun :)</Text>
        </View>

        <View style={styles.otherContainer}>
          <Text style={styles.title}>Why MediBall?</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>MediBall helps people with stress management and is currently testing and improving ways in order for people to feel more at ease.</Text>
        </View>

        
      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'left',
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  otherContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 60,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  descriptionText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
