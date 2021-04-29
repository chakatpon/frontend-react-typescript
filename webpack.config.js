var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    resolve: {extensions: ['.ts','.tsx','.js']},
    module: {
        rules: [
          { 
            test: /\.tsx?$/,
            exclude: /node_modules/, 
            loader: 'babel-loader'
          },
          {
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
          }, 
          {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
          },
          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 100000
                }
              }
            ]
          }
        ]
      },
      plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })]
}