# nodejs
Backend Node + Express + Typescript + Swagger

## Dependencies

Express: root managment
Eslint: code-style managment
Typescript: write and generate JavaScript code that operates in a strongly typed and object-oriented manner
webpack: Webpack is a tool we can use to bundle all our JavaScript code into a single minified file

  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\" ", 
    "test": "jest",
    "serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"
  },
  
  "environment variable":
    - PORT
    
   ## Security:
   
   Dependencies:
    - Cors
    - Helmet
