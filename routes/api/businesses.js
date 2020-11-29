const express = require('express');
const router = express.Router();
const businesessCtrl = require('../../controllers/businesses');

/*---------- Public Routes ----------*/
router.use(require("../../config/auth") );
router.post('/business', businesessCtrl.create);
router.get('/business', businesessCtrl.index);
router.put('/business', businesessCtrl.update);
router.delete('/business', businesessCtrl.delete);



/*---------- Protected Routes ----------*/




module.exports = router;