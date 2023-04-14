const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //Origen
  entry: './src/index.js',
  // destino
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  //Permite identificar las extensiones del proyecto
  resolve: {
    extensions: ['.js']
  },

  
  module: {

    //Reglas para el uso de babel
    rules: [
      {

        test: /\.js?$/, //cualquier archivo js dentro de la raiz
        exclude: /node_modules/, //excluir la carpeta node_modules
        use: {
          loader: 'babel-loader' //nos ayuda a preparar el proyecto para que quede listo para cualquier navegador
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}