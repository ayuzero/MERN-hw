var express = require('express'),
    index = require('../controllers/index'),
    sewing = require('../controllers/sewing'),
    cookie = require('../controllers/cookie'),
    felted_wool = require('../controllers/felted_wool'),
    doll_house = require('../controllers/doll_house'),
    cart = require('../controllers/cart'),
    interact = require('../controllers/interact'),
    person  = require('../controllers/person'),
    create = require('../controllers/create'),
    readall = require('../controllers/readall'),
    read = require('../controllers/read'),
    del = require('../controllers/del'),
    update = require('../controllers/update'),
    router = express.Router();

router.route('/').get(index);
router.route('/index').get(index);
router.route('/felted_wool').get(felted_wool);
router.route('/cookie').get(cookie);
router.route('/sewing').get(sewing);
router.route('/doll_house').get(doll_house);
router.route('/cart').get(cart);
router.route('/interact').get(interact);

router.route('/interact/person')
    .post(create)
    .get(readall);

router.route('/interact/person/:id')
    .get(read)
    .put(update)
    .delete(del);

module.exports = router;
