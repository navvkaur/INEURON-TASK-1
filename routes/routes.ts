import express from 'express';
const router= express();
const controller = require('../controllers/crud_operation')


router.post('/add-detail',controller.addDetails);
router.get('/get-detail',controller.getDetails);
router.delete('/delete-detail/:id',controller.deleteDetails);
router.post('/edit-detail/:id',controller.editDetails);




export default router;