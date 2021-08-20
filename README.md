# blog-website

## Simple Node.js Blog Website

This is a fairly simple blog-type website made with the following technologies : 

- Node.js for backend queries
- MongoDB Atlas for the blog's database, you can update this easily on your local computer by using another app, located here : https://github.com/alex-more/blog-manager
- Html + CSS frontend.

The design is nothing special, as I am still learning about Web development and quickly wanted to move on to a more robust and complex web application.

## User Guide

First clone this repo, and if you want to be able to update blog posts more easily in a nice little browser window, you can also clone the blog-manager at the previously mentioned URL.

You need to have Node.js installed, and you need to make a MongoDB account and setup a cluster on MongoDB Atlas (it's free). You also need to make a user to connect to that database cluster.

In this application, as well as the blog-manager, you need to look in the file named "server.js" and replace <your_username> and <your_password> with your username and password for the db cluster (not your MongoDB username and password).

You need to run "npm run devStart" to launch the application, and it will be on port 5000 by default, which can be changed easily near the top of the "server.js" file.

## IMPORTANT 
Since your database username and password will be visible in the source code, you should NOT keep this code in a public repo as is. Instead you should use a .env file.
