# Readme

##Some steps for install and run

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

- import uuid :

  - npm install uuid
  - yarn add uuid