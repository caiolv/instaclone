# InstaClone

Este projeto foi feito para treinar os conhecimentos de front-end na criação de um clone do feed do Instagram utilizando React Native, Styled Components e React Navigation 5.


<p align="center">
  <a href="https://www.linkedin.com/in/caio-oliveira-b1365a124/">
    <img alt="linkedin" src="https://img.shields.io/badge/-Caio%20Oliveira-0a66c2?logo=Linkedin&logoColor=white">
  </a>

  <a href="./LICENSE"> 
    <img  alt="License" src="https://img.shields.io/github/license/caiolv/instaclone">
  </a>
</p>

<p align="center">

<img alt="demo" src="../assets/demo.gif?raw=true" width="30%">

</p>


## Instalação

Você precisará ter apenas o [NodeJS](https://nodejs.org) instalado na sua máquina, e após isso, clonar este repositório:
```sh
  $ git clone https://github.com/caiolv/instaclone.git
```

Depois disso acesse a pasta que você deseja e instale as dependências executando o seguinte comando:
```sh
  $ yarn install
```

## Executando a aplicação

Execute o comando a baixo para inicializar o servidor com o json-server com o arquivo [server.json](server.json):
```sh
  $ yarn json-server server.json -d 1000 -w   
```

Execute o comando a baixo para inicializar no simulador de iPhone:
```sh
  $ yarn react-native run-ios
```