module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-module-resolver',
      {
        extensions: ['.js', '.ios.js', '.android.js', '.json', 'ts', 'tsx'],
        alias: {
          src: './src',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        safe: true,
        allowUndefined: false,
      },
    ],
  ],
};
