const express = require('express');
const router = express.Router();
const monkeysControllers = require("../controllers/monkey");

router.get('/', monkeysControllers.getAllMonkeys);
router.get('/:id', monkeysControllers.getMonkeyById);
router.post('/', monkeysControllers.createMonkey);
router.put('/:id', monkeysControllers.updateMonkey);
router.delete('/:id', monkeysControllers.deleteMonkey);

module.exports = router;
