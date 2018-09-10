# mean-crud
Back-End and Front-End API with MEAN Stack

## BACKEND : server-api (node/express + mongodb)
> npm install -g express-generator
  express serverapi
  cd serverapi
  npm install
  OR
  npm install express -S -E
> npm install mongoose cors body-parser -S -E
> npm install -g nodemon
> npm start / nodemon (http://localhost:3000)

## FRONTEND > client-api (angular)
> npm install -g @angular/cli
  ng new clientapi --style=scss (ng serve / ng serve --host 0.0.0.0 --port 4201)(http://localhost:4200)
> ng g component component/home (to generate component)
> ng g service app-service (to generate service)
> ng generate module app-routing --flat --module=app (--flat: path set to src/app, --module=to register the import)

> ng add @angular/material --styleext=scss
  OR
  
> ng generate @angular/material:materialNav --name navbar --styleext=scss
> ng generate @angular/material:materialDashboard --name dashboard --styleext=scss
> ng generate @angular/material:materialTable --name table --styleext=scss

## OTHERS
> To detect used port & kill the task to release port
  netstat -a -o -n
  taskkill /F /PID 7184
> Changing default style sheet in existing Ajs6 Application
  
