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


   20.Handle Add To Cart
   21. define react context add Store.js in utils and create StoreProvider
   22. define cart items initialState, Create Reducer with action and state, PAss this to StoreProvider with value and wrap it to appjs component which will be available for all children, dividing it in below steps:
   23. create addd to cart action
   24. add reducer
   25. create store provider
   26. handle add to cart button in [slug].js

    Create Cart Page
   27. create cart.js page
   28. use context to get cart items in cart page
   29. list items in cart items in table
   30. redirect to cart screen after add to cart
   31. add heroicon close button
   32. add redirect router in slug-product page to cart
   33. add redirect to shipping from cart
   34. REMOVE Item from cart case added in store .js reducer

    Update Quanity In The Cart
    35.  add select box for quantity - add UpdateCartHandler function in cart.js and replace total quantity with select option with quantity numbers
    36. handle select box change by writing code in UpdateCartHandler function and dispatch that with reducer - ADD_CART_ITEM  

     Save Cart Items
    37. install js-cookie package to save cart item in cookie
    38. save and retreive cart items in cookies. Store js to store the cookie fetch the cookie
    39. Dynamic from next/dynamic -> to get rid of hydration failed error and load Cart.js in client side
    40. Layout.js -> useState and useEffect to calculate and update the cartItem count and update the change in header menu and get rid of hydration failed error
    41. add eslint rule node:yes to get rid of eslint error in promise in dynamic function