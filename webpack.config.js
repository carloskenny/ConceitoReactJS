const path = require('path'); //importar a biblioteca do nodeJS

module.exports = { //exportar um objeto
  entry: path.resolve(__dirname, 'src', 'index.js'), //caminho do arquivo que será convertido
  output: {
    path: path.resolve(__dirname, 'public'), // caminho do arquivo que foi convertido.
    filename: 'bundle.js' // nome do arquivo convertido
  },
  devServer:{ //passa os diretórios public onde os arquivos para execução estão. Propriedade necessária para o Live Reloading. Quando salvar as alterações no código, a página é recarregada automaticamente.
    contentBase: path.resolve(__dirname, 'public'),
  },
  module:{ //modulo de regras onde deve ser escrito para qual tipo de arquivo deve ser utilizado o loader. Cada objeto dentro do rules pode ser um loader.
    rules: [
      {
        test: /\.js$/, // /\.js$/ pesquisar todos os arquivos que terminam com .js o $ o final é pra obrigar que o arquivo tenha a extensão .js e não considerar os arquivos .jsrtefdfe por exemplo
        exclude: /node_modules/, //quando importar um arquivo que estiver dentro no node modules não fazer a conversão.
        use: {
          loader: 'babel-loader', //usar o babel para converter o arquivo
        }
      }
    ]

  },
};