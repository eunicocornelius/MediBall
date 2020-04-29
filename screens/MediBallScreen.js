import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {    AppRegistry,
    StyleSheet,
    Text,
    View,
    Component,
    Image,
    Animated,
    Easing,
    PanResponder, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default class MediBallScreen extends React.Component {

    constructor(props){
        super(props);

        //Keep track of where the image is
        this.state = {
            pan: new Animated.ValueXY(),
            scale: new Animated.Value(1),
            second: '00',
            milli: '00',
        };
    }
componentDidMount(){

}
componentWillMount(){
    this._panResponder = PanResponder.create({
        onMoveShouldSetResponderCapture: () => true, //Allow movement of View
        onMoveShouldSetPanResponderCapture: () => true, //Allow Draggability

        //Gets Access to the element
        onPanResponderGrant: (e,gestureState) => {
            // Set the initial value to the current state
            this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});

            // Initially, set the value of x and y to 0 (the center of the screen)
            this.state.pan.setValue({x:0,y:0});
            Animated.timing(
                this.state.scale,
                { toValue:200,
                duration: 100000,
                easing: Easing.ease,
                delay: 0 }
            ).start();
            this.start();
        },

        //Tracks when the element moves(onPress)
        onPanResponderMove: Animated.event([
            // When we drag/pan the object, set the delate to the states pan position
            null, {dx: this.state.pan.x, dy: this.state.pan.y}
        ]),

        //Tracks when the element is released(onRelease)
        onPanResponderRelease: (e, {vx,vy}) => {
            // Flatten the offset to avoid erratic behavior
            this.state.pan.flattenOffset();
            Animated.spring(
                this.state.scale,
                { toValue:1,
                duration: 500,
                easing: Easing.ease,
                delay: 0,
                friction: 3}
            ).start();
            clearInterval(this.state.timer);
            this.setState({
            second: '00',
            milli: '00'
        });
        }
    });
}

start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.milli) + 1).toString(),
                count = this.state.second;

            if( Number(this.state.milli) == 99 ) {
                count = (Number(this.state.second) + 1).toString();
                num = '00';
            }

            self.setState({
                second: count.length == 1 ? '0'+count : count,
                milli: num.length == 1 ? '0'+num : num
            });
        }, 0);
        this.setState({timer});
    }

  render() {

      // Destructure the value of pan from the state
      let {pan, scale} = this.state

      // Calculate the x and y transform from the pan value
      let [translateX, translateY] = [pan.x,pan.y];

      let rotate = '0deg';

      // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
      let imageStyle = {transform: [{translateX}, {translateY}, {rotate}, {scale}]};

    return (
      <View style={styles.container}>
        <Animated.View style={imageStyle}{...this._panResponder.panHandlers}>
            <Animated.View style={[styles.circle ]}/>
        </Animated.View>
        <Text style={styles.second}>{this.state.second}</Text>
        <Text style={styles.milli}>{this.state.milli}</Text>
      </View>
    );
  }
}

MediBallScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle:{
      width: 50,
      height: 50,
      borderRadius: 50/2,
      backgroundColor: 'powderblue'
    },
    second: {
      fontSize: 45,
      textAlign: 'center',
      height: 60,
      margin: 10,
    },
    milli: {
        fontSize:15,
        position: 'relative',
        top: -33,
        right: -40
    },
});