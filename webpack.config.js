const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      serveIndex: true
    },
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT
  },
  entry: {
    kuba: './index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }],
        exclude: '/node_modules/'
      },
      {
        test: /\.(?<ext>png|svg|jpg|jpeg|gif|mp4|ogg|webm|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]'
            }
          }
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          keep_fnames: true,
          safari10: true
        }
      })
    ]
  },
  output: {
    clean: true,
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: process.env.PUBLIC_PATH
  },
  performance: {
    hints: process.env.HINTS,
    maxAssetSize: Number(process.env.MAX_ASSET_SIZE),
    maxEntrypointSize: Number(process.env.MAX_ENTRYPOINT_SIZE)
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZER_MODE
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
