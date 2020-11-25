const express = require('express');
const router = express.Router();
const storiesCtrl = require('../../controllers/stories');

/*---------- Public Routes ----------*/
router.use(require("../../config/auth") );
router.post('/story', storiesCtrl.create);
router.get('/story', storiesCtrl.index);
router.put('/story', storiesCtrl.update);
router.delete('/story', storiesCtrl.delete);



/*---------- Protected Routes ----------*/




module.exports = router;