const express = require('express');

const router = express.Router();

const { fetchRecords } = require('../controllers/records');

router.post('/', async (req, res, next) => {
  try {
    const records = await fetchRecords(req.body);
    return res.json(records);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
