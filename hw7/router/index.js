var express = require('express'),
    main = require('../controllers/index'),
    person = require('../controllers/person'),
    router = express.Router();

router.route('/').get(main);
router.route('/person').post(person);


module.exports = router;