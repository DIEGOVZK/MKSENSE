# MKSENSE

MKSENSE é um sistema de gerenciamento IoT para telemetria remota de dados sensoriais de subsistemas conectados.  O sistema faz uso da conectividade WiFi e protocolos `HTTP` e `TCP` para transporte de dados. MKSENSE também é capaz de armazenar os dados coletados e fazer gerenciamento dinâmico de banco de dados para armazenamento dos dados sensoriais.

## Visão geral da estrutura do projeto:
```
MKSENSE
│   EXECUTE JS FILE - START SERVER.bat 
│   BUILD JS FILE FROM TS FILE.bat 
│   MKSENSE.drawio.png
│   package-lock.json
│   serverConfig.txt
│   tsconfig.json
│   package.json
│   Grapher.py
│   README.md
│   LICENCE
│   
└─── src
│   │   DataBase_Connection.ts
│   │   Client_Master.ts
│   │   Client_User.ts
│   │   LocalServer.ts
│   │   DBA_Manager.ts
│   │   FileSystem.ts
│   │   UI_DataBase.ts
│   │   UI_Server.ts
│   │   DBA_Users.ts
│   │   DBA.ts
│   │   app.ts
│   │   UI.ts
│
└─── build
│   │   ...
│
└─── sensorData
│   │   SensorialData_PORT_1.csv
│   │   SensorialData_PORT_2.csv
│   │   SensorialData_PORT_3.csv
│   │   ...
│
└─── images
│   │   fig_10.png
│   │   fig_20.png
│   │   fig_30.png
│   │   ...
│
└─── examples
│   │   ESP8266_http.h
│   │   ESP8266_http.c
|   |   ...
│
└─── media
    │   ...
```


### [MKSENSE - MAIN:](https://github.com/DIEGOVZK/MKSENSE/tree/main) 
Na reaiz do projeto foram criados os arquivos de execução e compilação .bat para facilitar a execução do projeto. Além dos arquivos de gerenciamento e configuração .json que armanejam as informações internas do projeto e faz gerenciamento de pacotes do NODE.js e do NPM. O projeto foi desenvolvido em linguagem de programação Typescript, que é uma linguagem de programação orientada a objetos.

### [src](https://github.com/DIEGOVZK/MKSENSE/tree/main/src)
Arquivo onde todas as classes e funções do projeto são escritas. Todos os arquivos tem a extensão de TypeScript.

### [build](https://github.com/DIEGOVZK/MKSENSE/tree/main/build)
Para executar os arquivos escritos em typescript, é necessário compilar os arquivos para JavaScript, para isso utiliza-se os comandos de console salvos no arquivo .bat, que compila os arquivos e os salva na pasta build.

### [sensorData](https://github.com/DIEGOVZK/MKSENSE/tree/main/sensorData)
Os arquivos de dados sensoriais são salvos na pasta sensorData. Eles são utilizados como backup temporário para o sistema ser à prova de quedas de conexão com a internet.

### [examples](https://github.com/DIEGOVZK/MKSENSE/tree/main/examples)
Exemplo de código em `c` para microcontrolador, neste caso o ESP8266, para utilização no envio de dados para o servidor.

### [images](https://github.com/DIEGOVZK/MKSENSE/tree/main/images)
As imagens que são geradas pelo arquivo Grapher.py são salvas na pasta images. Elas são usadas para visualização gráfica dos dados sendo recebidos.

### [media](https://github.com/DIEGOVZK/MKSENSE/tree/main/media)
Todos os arquivos de documentação do projeto são arquivados em aqui.


## UML do projeto
<p float="left">
  <img style="background-color:#FFFFFF" src="https://github.com/DIEGOVZK/MKSENSE/blob/main/media/MKSENSE.drawio.png" width="100%">
</p>


## Instalação do MKSENSE

É necessário que você tenha instalado uma versão 16.15.0 ou mais recente do Node.js: https://nodejs.org/. Depois, no diretório raiz do projeto, execute o comando `npm install` para instalar todos os pacotes necessários. Se tudo ocorreu bem, execute o arquivo `EXECUTE JS FILE - START SERVER.bat` para iniciar o servidor. Caso precise alterar as configurações, antes de iniciar o servidor reconstrua o projeto usando o arquivo `BUILD JS FILE FROM TS FILE.bat`.

> Para configurar as configurações do servidor, realize a modificação do arquivo serverConfig.txt  


## Tutorial de utilização do MKSENSE - Master

## Tutorial de utilização do MKSENSE - User
Para realizar upload dos dados ao banco de dados via MKSENSE, é necessário compilar o programa usado no [exemplo](https://github.com/DIEGOVZK/MKSENSE/tree/main/examples), ou equivalente, no microcontrolador ou sistema de sensoriamento. Depois o sistema deverá se conectar na mesma rede do sistema MKSENSE para o envio dos dados, a especificação da porta e IP também é importante. Uma vez que o usuário é configurado no arquivo [serverConfig.txt](https://github.com/DIEGOVZK/MKSENSE/tree/main/serverConfig.txt) e o sistema está conectado, é possível realizar o upload dos dados ao banco de dados.


## Galeria do MKSENSE

### 🛰 TinySat
O projeto MKSENSE foi utilizado para a aplicação de um curso de introdução a sistemas satelitais para cerca de 25 alunos da ETE. Lá os 9 grupos construíram um sistema de telemetria para o satelite, que envia os dados por uma rede IoT a um servidor local MKSENSE, que gerencia os dados sensoriais coletados e os armazena em um banco de dados. Depois são gerados gráficos dos dados, que podem ser analizados para tirar conclusões das missões realizadas com os pequenos satélites educacionais.

Essa missão confirmou o funcionamento da primeira versão do projeto MKSENSE.

<p float="left">
  <img style="background-color:#FFFFFF" src="https://github.com/DIEGOVZK/MKSENSE/blob/main/media/TinySat%20V1.jpeg" width="49%">
  <img style="background-color:#FFFFFF" src="https://github.com/DIEGOVZK/MKSENSE/blob/main/media/gp%20TinySat%20V1.jpeg" width="49%">
</p>