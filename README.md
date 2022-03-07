# employeesdb

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## VueJS_CRUD_Firebase-Router
This is my project for "Employees" , CRUD database :Firebase ,using VUE.js, and Router and bootstap.



## Installation      
      install npm
              Vue
              Firebase
              Bootstrap
              jQuery
              popper              
              VueRouter
              bootstrapVue 
       
       You should file called "node_modules"
       
       
### Firebase 
       You need to Creat account on Firebase webiste
       Then, Add Project
       In ,Project settings 
           App nickname:employees
       Get SDK , get npm web script 
       Copy-Paste from script to Firebase.js in src to "const Config".
       
###  DB collection
      In firebase website , go to firestore database
      make a collection called "employees"
      and fields is "name","department","age".

### Router
     you have router file and components
     In router file , you have index.js
     1-import VueRouter --- Very Important to do that
     2-Import 4 files from compoents 
               which are List/show/edit/add employess
     3- routes 
           make :path, name,component
           
           
### babel.config.js
```
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
```







