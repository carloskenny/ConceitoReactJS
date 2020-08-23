module.exports = {
  presets: [
    '@babel/preset-env', //converter o código de JS mais moderno para um Js mais antigo dependendo do ambiente, entender quais os recursos mais atuais e converter para a vesão mais atual do browser
    '@babel/preset-react' //adionar as funcionalidade do react na conversão.
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};