import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Image, View } from 'react-native';
import { images } from 'assets/images';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { layoutStyle } from './style';
import { makeSelectBackgroundType } from './selectors';

function Layout({ children, backgroundType }) {
  return (
    <ImageBackground
      source={images.home.background}
      style={layoutStyle.background}>
      <View style={layoutStyle.children}>{children}</View>
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
