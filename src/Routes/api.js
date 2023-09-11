const express = require('express')
const router = express.Router()

//Import all the controller file to use here as a callback function
const blogController = require('../Controllers/blogController')
const commentController = require('../Controllers/commentController')
const messageController = require('../Controllers/messageController')
const portfolioController = require('../Controllers/portfolioController')
const productController = require('../Controllers/productController')

//creating route 
//BlogController related API
router.get('/blogCreate', blogController.create)
router.get('/blogRead', blogController.read)
router.get('/blogDelete', blogController.delete)
router.get('/blogUpdate', blogController.update)

//CommentController related API
router.get('/commentCreate', commentController.create)
router.get('/commentRead', commentController.read)
router.get('/commentDelete', commentController.delete)
router.get('/commentUpdate', commentController.update)

//MessageController related API
router.get('/messageCreate', messageController.create)
router.get('/messageRead', messageController.read)
router.get('/messageDelete', messageController.delete)
router.get('/messageUpdate', messageController.update)

//PortfolioController related API
router.get('/portfolioCreate', portfolioController.create)
router.get('/portfolioRead', portfolioController.read)
router.get('/portfolioDelete', portfolioController.delete)
router.get('/portfolioUpdate', portfolioController.update)

//ProductController related API
router.get('/productCreate', productController.create)
router.get('/productRead', productController.read)
router.get('/productDelete', productController.delete)
router.get('/productUpdate', productController.update)

//Export this file
module.exports = router;
