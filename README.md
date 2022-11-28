Messenger project

The application is a messenger for communication. This allows you to communicate between connected people in real time. This is the MVP version. Work continues...

Proposed project design - https://www.figma.com/file/lnCmqWQcpAxPpVEmMRSSvh/YandexChat?node-id=0%3A1

Installation:

    - npm run dev - command used for launch local webpack dev server, recomended use for check code changes.

    - npm run start - run local server with app from docker conteiner. This command includes work for creating conteiner befor run.    

    - npm run build - create app docker conteiner.

    - npm run lint:ts - check code format in typeScript files.

    - npm run lint:ts:fix - auto fix errors and warnings in typeScrip files.

    - npm run lint:css - check code format in css files.

    - npm run lint:css:fix - auto fix errors and warnings in css files.  


The app registration page is working on https://practicummessenger.netlify.app/auth
and also on https://practicummessanger.herokuapp.com/

<img src="./src/assets/attention.png" alt="Attention"/>
 postcss-preset-env - added to project for netlify build. There are problems with variables in css during netlify build process without it.

This line add for test integration with lianer
