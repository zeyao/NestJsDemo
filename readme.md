# Readme

## Some steps for install and run

#### install Homebrew 
http://brew.sh/
https://www.jianshu.com/p/934edae009e1



#### Install yarn
https://yarn.bootcss.com/docs/install/#mac-stable

- using homebrew : brew install yarn

#### Install node js

- Install node js https://nodejs.org/en/download/
- Test install success:

 - node -v
 - npm -v

#### Install cli
   
- Install cli -: 
  - npm install -g @nestjs/cli
  - yarn global add @nestjs/cli
   
- Test install success:
  - check nest --version


- when run terminal :
  - run : export PATH=$PATH:/usr/local/git/bin:/usr/local/bin

#### project start
- start project:
  - yarn start:dev


- create module:

  - nest g module tasks
  - nest g controller tasks --no-spec
  - nest g service tasks --no-spec


#### add dependency

- import uuid dependency :

  - npm install uuid
  - yarn add uuid

- add typeORM : yarn add @nestjs/typeorm typeorm pg


#### testing frmk - Jest

- https://jestjs.io/docs/en/getting-started
- yarn add --dev jest
- yarn global add jest
- Run command : yarn test



#### Running docker mode

- postgres db is setup at folder db
- to start db go to db folder, run `docker-compose.yaml`
- db post is 5555

- start app at docker mode run `docker-compose up` under root folder