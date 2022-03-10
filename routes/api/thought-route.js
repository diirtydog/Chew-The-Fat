const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
} = require('../../controllers/thought-controllers');

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

router
    .route('/:id')
    .get(getThoughtById)

module.exports = router;