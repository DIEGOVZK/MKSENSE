# MKSENSE

MKSENSE é um sistema de gerenciamento IoT para telemetria remota de dados sensoriais de subsistemas conectados.  O sistema faz uso da conectividade WiFi e protocolos `HTTP` e `TCP` para transporte de dados. MKSENSE também é capaz de armazenar os dados coletados e fazer gerenciamento dinâmico de banco de dados para armazenamento dos dados sensoriais.

## Visão geral da estrutura do projeto:
```
MKSENSE
│   EXECUTE JS FILE - START SERVER.bat 
│   BUILD JS FILE FROM TS FILE.bat 
│   MKSENSE.drawio.png
│   package-lock.json
│   tsconfig.json
│   package.json
│   Grapher.py
│   README.md
│   LICENCE
│
└─── build
│   │   ...

└─── images
│   │   fig_10.png
│   │   fig_20.png
│   │   fig_30.png
│   │   ...

└─── sensorData
│   │   SensorialData_PORT_1.csv
│   │   SensorialData_PORT_2.csv
│   │   SensorialData_PORT_3.csv
│   │   ...
│   
└─── src
    │   UI.ts
    │   app.ts
    │   DBA.ts
    │   UI_Server.ts
    │   DBA_Users.ts
    │   FileSystem.ts
    │   DBA_Manager.ts
    │   Client_User.ts
    │   LocalServer.ts
    │   UI_DataBase.ts
    │   Client_Master.ts
    │   DataBase_Connection.ts
```
   
### [MKSENSE - MAIN:](https://github.com/DIEGOVZK/MKSENSE/tree/main) 
Na reaiz do projeto foram criados os arquivos de execução e compilação .bat para facilitar a execução do projeto. Além dos arquivos de gerenciamento e configuração .json que armanejam as informações internas do projeto e faz gerenciamento de pacotes do NODE.js e do NPM. O projeto foi desenvolvido em linguagem de programação Typescript, que é uma linguagem de programação orientada a objetos.

### [build](https://github.com/DIEGOVZK/MKSENSE/tree/main/build)
Para executar os arquivos escritos em typescript, é necessário compilar os arquivos para JavaScript, para isso utiliza-se os comandos de console salvos no arquivo .bat, que compila os arquivos e os salva na pasta build.

### [images](https://github.com/DIEGOVZK/MKSENSE/tree/main/images)
As imagens que são geradas pelo arquivo Grapher.py são salvas na pasta images. Elas são usadas para visualização gráfica dos dados sendo recebidos.

### [sensorData](https://github.com/DIEGOVZK/MKSENSE/tree/main/sensorData)
Os arquivos de dados sensoriais são salvos na pasta sensorData. Eles são utilizados como backup temporário para o sistema ser à prova de quedas de conexão com a internet.

### [src](https://github.com/DIEGOVZK/MKSENSE/tree/main/src)
Arquivo onde todas as classes e funções do projeto são escritas. Todos os arquivos tem a extensão de TypeScript.

# UML do projeto
<p float="left">
  <img style="background-color:#FFFFFF" src="https://github.com/DIEGOVZK/MKSENSE/blob/main/MKSENSE.drawio.png" width="100%">
</p>

# Instalação do MKSENSE