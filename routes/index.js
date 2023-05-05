const express = require('express');
const router = express.Router();

router.use('/git',require('./git'));

module.exports = router;