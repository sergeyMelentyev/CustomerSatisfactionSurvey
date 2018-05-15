**ИСПОЛЬЗУЕМЫЙ СТЕК**

Deployment: Heroku CLI (6.x)

Server: Node (9.x), Express (4.x)

DataBase: Mongodb (3.x)

Client: Javascript (ES6), React (16.x), Redux (4.x), Router (4.x), Axios (0.x)

Utils: NPM (5.x), Webpack (4.x), Babel-core (6.x)


***


**INSTALL PROJECT**

npm init

npm install --save react react-dom react-router-dom redux react-redux redux-thunk

npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react axios css-loader style-loader
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin 
npm install --save-dev nodemon mongodb passport passport-google-oauth20 cookie-session


***


**BUILD PROJECT**

npm run install

npm run webpack-dev-server

npm run webpack-dev-client


***


**ОПИСАНИЕ**

SPA приложение на React для компаний, желающих удобным способом организовать массовую рассылку писем своим клиентам с целью получения фитбека об их продуктах и услугах.
Авторизация компаний через Google-oAuth2.0, личный кабинет, список проведенных ранее опросов с результатами опросов.
Новые опросы возможно организовать после пополнения кошелька реальными деньгами.
На стороне сервера Node + Express, хранение данных о компаниях и проведенных опросах в MongoDB.