module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
  getTransformModulePath() {
    return require.resolve("react-native-svg-transformer");
  },
  getSourceExts() {
    return ["ss", "tsx", "svgx"];
  }
};
