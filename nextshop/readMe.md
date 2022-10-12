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


List Products:
10- Add Data.js + Add Images + Render PRoducts
11- ProductItem.js to display products and to render the data.js from map function in index js
12- added images folder
13- added 2 new class - card and primary button from tailwind

 Create Product Details
   13. create product page - [slug] page
   14. create 3 columns
   15. show image in first column
   16. show product info in second column
   17. show add to cart action on third column
   18. add styles
   19. Add dependency - @types/react - to fix auto import  from react