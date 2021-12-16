import express from "express";
// const cookieParser = require('cookie-parser');
import  routes  from './routes.js'


module.exports = (app) => {
   
    routes(app)
    
}