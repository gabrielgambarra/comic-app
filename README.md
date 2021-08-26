# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live demo

https://comic-app.vercel.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Features desenvolvidas:

- Listagem de personagens;
- Possibilidade de favoritar um personagem;
- Página de detalhes do personagem;
- Página para rota não econtrada;
- Página de favoritos;
- Possibilidade de editar dados do personagem;

## Considerações

O tempo dado para o desenvolvimento do desafio é perfeito, porém, eu não pude utilizá-lo na sua totatilidade. Com isso, tomei algumas decisões:

- Utilizei o Context API ao invés do Redux, por ter mais familiaridade e conseguir desenvolver o teste.
- Como dito na entrevista técnica, o meu contato com testes se resumia em ter aberto o site do jest e dado uma olhada. Para não prejudicar o desenvolvimento do resto do desafio, não impletei os testes.
- A melhor forma de superar o problema de CORS que a lib estava gerando seria eu mesmo criar uma mini API com CORS e disponibilizar isso para que o front acessasse as informações sem problema. Mas preferi utilizar algo pronto que é CORS Anywhere. O serviço está no heroku, então se demorar um pouco mais o primeiro load, deve ser o server startando lá.
