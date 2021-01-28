module.exports =
  process.env.NODE_ENV === 'test'
    ? { presets: ['module:metro-react-native-babel-preset'] }
    : {};
