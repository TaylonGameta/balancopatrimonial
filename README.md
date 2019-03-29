# Balanco Patrimonial
Projeto criado para o trabalho de administração financeira.

## Instalação

```bash
npm install
```
```bash
npm start
```

## Configurando
Vá para a pasta /src/components/main e crie um arquivo chamado config.js, que receberá o conteúdo inicial do firebase.
Ex:
```javascript
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);
```

## Link
https://balancopatrimonial.xyz
