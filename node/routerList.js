const router = require('./router');

router.addRoute('menu', require('./routers/menu'));
router.addRoute('shop', require('./routers/shop'));
router.addRoute('project', require('./routers/project'));
router.addRoute('people', require('./routers/people'));

module.exports = router;