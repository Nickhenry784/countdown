import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { makeSelectBackgroundType, makeSelectTurn } from './selectors';
import { decrementTurn, setBackgroundType, setTurn } from './actions';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import Buttons from './Buttons';
import backgrounds from './data/backgrounds';
import Musics from './Musics';

const key = 'App';

function App({ dispatch, turn, backgroundType }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const [isShowButtons, setShowButtons] = useState(false);

  const onSetShowButtons = () => {
    setShowButtons(!isShowButtons);
  };

  // Event Change background
  const onChangeBackground = backgroundNew => {
    if (turn <= 0) return false;
    dispatch(setBackgroundType(backgroundNew));
    dispatch(decrementTurn(1));
  };

  const onBack = () => {
    dispatch(setBackgroundType('default'));
  };

  return (
    <Layout turn={turn}>
      <Text style={appStyle.turn}>{`Turn ${turn}`}</Text>
      {backgroundType !== 'default' && (
        <TouchableOpacity
          onPress={onBack}
          onLongPress={onBack}
          style={appStyle.turn}>
          <Text style={appStyle.turn}>Back</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={onSetShowButtons}
        onLongPress={onSetShowButtons}
        style={appStyle.moreTurn}>
        <Image source={images.home.moreTurn} style={appStyle.moreTurnImage} />
      </TouchableOpacity>
      {isShowButtons && <Buttons />}
      {backgroundType === 'default' && <Musics />}
      {/* <TouchableOpacity
        onPress={onSetTurn}
        onLongPress={onSetTurn}
        style={appStyle.changeTurn}>
        <Image source={images.home.button} style={appStyle.changeTurnImage} />
      </TouchableOpacity> */}
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
