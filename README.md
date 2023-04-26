# Shopping Cart Application

The Shopping Card Application is a basic e-commerce web app that allows users to view a list of available products, add products to a shopping cart, and "buy" the products in their cart.

# Overview

This application is a basic shopping cart for the "Penny Candy Store", an online store that sells penny candy. The goal of this project is to use Redux to maintain the global state of the application. The application has two main features:

* Display a list of all available products.
* Add items to the shopping cart, and calculate the total cost of all products in the cart.

# Features

* Display all available products with details such as product image, product name, price per unit, number of units in stock, and a small text/number input field for users to enter the number of units they want to add to their cart.
* Each product has an "add to cart" button, and when clicked, the specified number of units of that product are added to the shopping cart.
* Shopping cart displays a list of products that the user has added to the cart, along with the total cost of all products.
When a user adds a product to the cart, the same number of units should be deducted from the in-stock inventory of the product.

# Implementation Details

## Display a List of All Available Products
The product list is displayed using a Redux store. The store is initially empty, and products are added via an action called RECEIVE_PRODUCTS. The product list is stored in src/data/products.json. You can use the useProducts() hook to fetch the products, or you can import the product data JSON file directly.

Each product has an ID, name, price per unit, number of units in stock, and a product image. You need to create a component to display an individual product and use this component to display a list of products. Each product item displayed in the list should have the following visual elements:

* The name of the product.
* The product image.
* The price of a unit of the product.
* The number of units in stock.
* A small text/number input field where the user can enter the number of units of the product they want to add to their cart. This field should initially contain the value 0 for all products, and users should be able to modify the value of this field independently for each different product. In other words, if a value is entered for the Swedish Fish product, it should not affect the values for any of the other products.
* A button that says "add to cart".

## Add a Shopping Cart Widget

When the user enters a positive number of units for a specific product and clicks the "add to cart" button for that product, the specified number of units of that product are added to the shopping cart. The data for the shopping cart is also kept in the Redux store.

The shopping cart itself should be implemented as a distinct component, and visually, the shopping cart should look like one you might expect in a typical online store. Specifically, it should list the products the user has added to the cart along with the total cost of all products. Each product should be listed with the following information:

The name of the product.
The price per unit of the product.
The total number of units of the product added to the cart.
The total cost of the units of the product.

# Getting Started

To get started with this project, you will need to do the following:

Clone this repository to your local machine.
Open a terminal window and navigate to the project directory.
Run npm install to install the dependencies.
Run npm start to start the development server.
Open your web browser and go to http://localhost:3000 to view the application.

#Dependencies

This project relies on the following dependencies:

* React: A JavaScript library for building user interfaces.
* Redux: A predictable state container for JavaScript applications.
* React-Redux: A library that provides bindings between React and Redux.
* Redux-Thunk: A middleware for Redux that allows handling asynchronous actions.
* Styled Components: A library that allows writing CSS in JavaScript for styling React components.
To install these dependencies, navigate to the project directory in your terminal and run the following command:

```
npm install react redux react-redux redux-thunk styled-components

```

# Conclusion

This app provides a simple and intuitive interface for managing tasks and projects. With its powerful features, such as task assignment, due date tracking, and progress monitoring, it can help individuals and teams stay organized and productive. Additionally, the app's customizable settings and flexible integration options make it easy to adapt to different workflows and use cases. Overall, we believe that this app can be a valuable tool for anyone looking to streamline their task management process and achieve their goals more efficiently.
