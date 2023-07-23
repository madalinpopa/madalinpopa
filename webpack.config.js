const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  /**
   * Entry point for the application.
   */
  mode: 'production',
  entry: [
    path.resolve(__dirname, 'src/assets/app.js'),
    // path.resolve(__dirname, 'src/assets/css/main.css'),
  ],
  /**
   * Output configuration.
   */
  output: {
    path: path.resolve(__dirname, 'src/assets/js/'),
    filename: 'main.js',
    clean: true
  },
  /**
   * Module configuration.
   *
   */
  module: {
    rules: [
      /**
       * JS Bable
       */
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      /**
       * CSS loader.
       */
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          // Extract css to own file
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Use postcss
          "postcss-loader",
          // Compiles Sass to CSS
          // "sass-loader",
        ]
      }
    ]
  },
  /**
   * Optimization configuration.
   */
  optimization: {
    minimize: false,
  },
  /**
   * Plugins configuration.
   */
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
    }),
  ]
}
