Steps to follow:
1- npx create-next-app nextshop
2- npm run dev
3- add tailwind css - https://tailwindcss.com/docs/guides/nextjs | npx tailwindcss init -p
4- add tailwind config - content
5- styles > globals.css > add @tailwind base; | @tailwind components; | @tailwind utilities; at the top
6- Get rid of 'import styles from '../styles/Home.module.css'' from pages > index.js and remove this css from styles

Next Commit -
7- Create components > Layout.js
8- Create Header, Main, Footer in Layout Component and move head from index.js to layout.js and get rid of all the content from index.js
9- add styles from tailwind as classname in htmle elements for header, main container and footer
