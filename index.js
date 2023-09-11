/**
 * Title: Assignment Script on Module-07
 * Description: Project structure with Express Js
 * Author: SHAHIDUL ISLAM
 * Date: 11 Sep 23 
 */

const app = require('./app')

//Configuration
const dotenv = require('dotenv')
dotenv.config({path: "./config.env"})

//Running the server
app.listen(process.env.RUNNING_PORT, () => {
    console.log("Server is running on " + process.env.RUNNING_PORT)
})