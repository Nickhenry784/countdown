import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { SizedBox } from 'sizedbox';
import { makeSelectBackgroundType, makeSelectTurn } from './selectors';
import { decrementTurn, setBackgroundType, setTurn } from './actions';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';

const key = 'App';

function App({ dispatch, turn, backgroundType }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const [isShowButtons, setShowButtons] = useState(true);
  const [number, onChangeNumber] = useState(null);
  const [inputNumber, onChangeInputNumber] = useState(null);
  const [pause, setPause] = useState(false);

  const intervalRef = useRef();

  const decreaseNum = () => onChangeNumber(prev => prev - 1);

  useEffect(() => {
    if (!pause) {
      setTimeout(decreaseNum, 2000);
    }
  }, [number, pause]);

  const onClickShoppingButtons = () => {};

  const onClickPauseButtons = () => {
    setPause(!pause);
  };

  const onClickStartButton = () => {
    setShowButtons(!isShowButtons);
    onChangeNumber(inputNumber > 999 ? 999 : inputNumber);
  };

  return (
    <Layout turn={turn}>
      {isShowButtons && (
        <>
          <TouchableOpacity
            onPress={onClickShoppingButtons}
            onLongPress={onClickShoppingButtons}
            style={appStyle.shoppingButton}>
            <Image
              source={images.home.shopping}
              style={appStyle.shoppingImage}
            />
          </TouchableOpacity>
          <View style={appStyle.viewCenter}>
            <TextInput
              style={appStyle.input}
              onChangeText={onChangeInputNumber}
              value={inputNumber}
              placeholder="Nhập giá trị"
              keyboardType="numeric"
            />
            <SizedBox vertical={10} />
            <TouchableOpacity
              onPress={onClickStartButton}
              onLongPress={onClickStartButton}>
              <ImageBackground
                source={images.home.button}
                style={appStyle.startImage}>
                <Text style={appStyle.textStartButton}>START</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </>
      )}
      {!isShowButtons && (
        <>
          <TouchableOpacity
            onPress={onClickStartButton}
            onLongPress={onClickStartButton}
            style={appStyle.textBack}>
            <Text style={appStyle.textBack}>Back</Text>
          </TouchableOpacity>
          <View style={appStyle.viewCenter}>
            <ImageBackground
              source={images.home.clock}
              style={appStyle.clockStyle}>
              <Text style={appStyle.textClock}>{number}</Text>
            </ImageBackground>
            <SizedBox vertical={50} />
            <TouchableOpacity
              onPress={onClickPauseButtons}
              onLongPress={onClickPauseButtons}>
              <ImageBackground
                source={images.home.button}
                style={appStyle.startImage}>
                <Text style={appStyle.textStartButton}>
                  {pause ? 'PLAY' : 'PAUSE'}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
}

App.propTypes = {
  turn: PropTypes.number,
  dispatch: PropTypes.func,
  backgroundType: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  backgroundType: makeSelectBackgroundType(),
});

export default connect(mapStateToProps)(App);
