Messenger project

The new working messenger will be here soon. Detail information will be added later with update. 

Proposed project design - https://www.figma.com/file/lnCmqWQcpAxPpVEmMRSSvh/YandexChat?node-id=0%3A1

Installation:

    - npm run dev - command used for launch local parcel server, recomended use for check code changes.

    - npm run start - command used for launch local Node JS server on localhost:3000/. Used library "express" allow server to shere static files.    

    - npm run build - needed for launch product build.

    - npm run lint:ts - check code format in typeScript files.

    - npm run lint:ts:fix - auto fix errors and warnings in typeScrip files.

    - npm run lint:css - check code format in css files.

    - npm run lint:css:fix - auto fix errors and warnings in css files.  


The app registration page is working on https://practicummessenger.netlify.app/auth

<img src="./src/assets/attention.png" alt="Attention"/>
 postcss-preset-env - added to project for netlify build. There are problems with variables in css during netlify build process without it.
