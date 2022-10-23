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


     Commit 9 - Create Login Form
    42. install react hook form for the script  validation
    43. create input boxes
    44. add login button
    45. Car.js -> redirection to login, authenticate the user and then move to shipping -> login?redirect=/shipping
    

   Connect To MongoDB
    46. install mongoose to connect with mongo db and bcryptjs to encrypt password
    47. install mongodb or use mongodb atlas
    48. save connection url in .env file - modify the URL according to the actual username & password and add the DB name before ? Query paramter
    49. Download Mongodb Compass and install it.
    50. Copy the Mondogb_URI from the env file and paste it on compass - NEW CONNECTION
    49. create db utils file to conenct to mongo db | Install MONGOOSE BEFORE LIKE IN 46. Have connect and disconenct function and pass that as an object to DB and export it
    50. Create Models - User.js with schema to create userSchema and Users
    51. create sample users and verify it in the mongo db atlas after having handler function in seed.js
  Handler Function is async and having -db.connect() , User.deleteMany(); User.insertMany(data.users); db.disconnect(); res.send({ message: 'seeded successfully' });


   Create Login API
    52. install next-auth and react-toastify
    53. In Layout, show username if logged  In 
    54. In app.js, added Session Provide to provide session throughout the app
    55. In Login Page, added send ajax request to signIn aPI function to authenticate user 
    56. create [...nextauth].js <- api / auth 
    57. In NextAuth Js added Callbacks, Providers for credential authentication with mongo db database with findOne
    58. Erro.Js inside Utils to check if any error then show error message otherwise custom show
    59. implement signin
    60. use signin in login form


    Add User Menu
    61. Install headlessui/react for the navigation and then import that in Layout.js as Menu. check user authentication
    62. Created New component 'DROPDOWNLINK'
    63. logouthandler in logout.js and added menu for user with user name and lopout
    64. added style for hover and menu item and blue to all the links
    65. Store,js - added a case for Cart_Reset
    

    Create Shipping Screen
    66. Create Component - CheckoutWizard
    67. Create Multi Step Checkout Header to show active and inactive steps - USER LOGIN > SHIPPING ADDRESS > PAYMENT METHOD > PLACE ORDER
    68. **HIGHER ORDER COMPONENT** APP.JS - created AUTH Function to verify the login user (or before rendering the component ) or not accordingly display the inner pages 
    69. Created Shipping screen and sync it with local cookie data which also get operated from Context API Store
    70. Created Unauthorized page as well
    71. STore - Set Default value for shipping address
    72. STORE - Created case - "SAVE SHIPPING ADDRESS"
    

     Create Payment Method Screen
    73. Created Payment method screen 
    74. global scss added default button style 
    75. STore - Set Default value for payment method
    76. Store - created case for Save Payment Method
