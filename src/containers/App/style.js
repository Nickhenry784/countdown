import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  turn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '6%',
    left: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  moreTurn: {
    position: 'absolute',
    top: '1%',
    right: '3%',
  },
  moreTurnImage: {
    resizeMode: 'contain',
    width: 140,
    height: 80,
  },
  changeTurn: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '20%',
  },
  changeTurnImage: {
    width: 80,
    height: 80,
  },
});

export const musicsStyle = StyleSheet.create({
  musicWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '50%',
  },
  musicButton: {
    padding: 10,
    backgroundColor: 'gray',
  },
  musicButtonTitle: {
    color: 'green',
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  land: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
  },
  children: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
    elevation: 3,
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: '20%',
    position: 'absolute',
    zIndex: 3,
    elevation: 3,
  },
  button: {
    color: 'white',
    width: '50%',
    textAlign: 'center',
    padding: 10,
  },
  buttonText: {
    backgroundColor: '#222',
    borderRadius: 10,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#bbb',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
