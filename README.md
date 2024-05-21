Notes

- React is a JS library that builds dynamic and interactive UI.
- No need to update DOM elements. React will take care of it.
- Components will help us write reusable, modular and better organized code
- React application is a tree of components with App being the root
- Uses Virtual DOM
- React is a library, Angular and Vue are Frameworks
- Install React Dev Tools to get more insight into the React App on the browser

- To create a React App: use official too "Create React App" or Vite
- Using Vite:
  - npm create vite@4.1.0
  - make required selections
  - using typescript
  - cd react-app
  - npm i
  - npm run dev
- Key files:

  - node_modules: third party libraries are installed
  - public: images/video files
  - src: Source folder of the application
  - index.html: entry point to our application <script> element
  - package.json: info about the project and its dependencies, dev dependencies
  - tsconfig.json: Typescript configuration file to tell the ts compiler how to compile our code to js

- Instead of using <div></div> to wrap into a single react element, use Fragment

- Shortcut:
  - cmd+shift+P -> wrap with abbr
  - cmd+shift+P -> format document
  - cmd+d: to select multiple similar words
  - Wrap the code with <> </> to let React know we have a Fragment
