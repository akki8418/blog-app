const express = require ('express');
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogController } = require('../controller/blogController');

//router object

const router = express.Router()
//routes all blog
//get|| all  blog
router.get ('/all-blog',getAllBlogsController)

//post || create blog
router.post('/create-blog',createBlogController)
// put update blog 

router.put('/update-blog/:id',updateBlogController)
//get || single blog detai
router.get('/get-blog/:id',getBlogByIdController)

// delete || delete blog
router.delete('/delete-blog/:id',deleteBlogController)

// get || user blog
router.get('/user-blog/:id',userBlogController)

module.exports = router;