import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Image, View } from 'react-native';
import { images } from 'assets/images';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { layoutStyle } from './style';
import { makeSelectBackgroundType } from './selectors';
import backgrounds from './data/backgrounds';

function Layout({ children, backgroundType }) {
  const backgroundSelected = backgrounds.filter(
    background => background?.backgroundType === backgroundType,
  );
  const backgroundImage =
    backgroundSelected[0]?.background || images?.home?.background5;

  return (
    <ImageBackground source={backgroundImage} style={layoutStyle.background}>
      <View style={layoutStyle.children}>{children}</View>
      <Image source={images.home.land} style={layoutStyle.land} />
    </ImageBackground>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  backgroundType: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  backgroundType: makeSelectBackgroundType(),
});

export default connect(mapStateToProps)(Layout);
