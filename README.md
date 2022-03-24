
## Clever

- Clever é um aplicativo para monitoramento e marcação dos batimentos cardíacos/pressão arterial de quem utiliza, facilitando o acompanhamento e a consulta para aqueles que desejam ficar por dentro da sua saúde, com mais detalhes!

- Para rodar o Clever na sua máquina, de forma a aproveitar todos os recursos da aplicação, siga os passoa abaixo:

1- Faça um fork ou clone remotamente

2- Instale as dependências entrando nas pastas, executando os comandos nessa ordem:
```
cd client
yarn install


cd server
yarn install
```

3 - Depois de instalar ambos, rode localmente, em cada pasta.
```
 cd client
 yarn dev
 
 cd server
 
 yarn start (a aplicação conta com a ajuda do nodemon para rodar o servidor de um lado, na porta 3001; e a aplicação em outro, na porta 3000)
```

4 - Acesse o localhost:3000 localmente

5 - Desfrute da aplicação :)

**Essa versão não contém upload na Vercel**

***Notas***

Por não ter tanta prática com as tecnologias que utilizam de ORM e são mais do back-end, infelizmente, não se teve uma boa prática na conexão do banco e o mesmo; 
Deixei escrito nos códigos como demonstração de que tentei utilizar as ferramentas, embora tenha sentido dificuldes em fazer apenas no React;
Acredito que utilizando outras ferramentas das que não citadas nos requisitos, conseguiria algo melhor com pouco tempo, embora que simples.

****Lembrete de retorno: irei retornar e tentar refazê-lo para entender os meus passos, especialmente ao que se diz respeito ao banco de dados, do qual nunca tinha tido contato até a realização do teste****
