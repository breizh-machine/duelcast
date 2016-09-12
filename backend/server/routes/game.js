import express from 'express';
import gameCtrl from '../controllers/game';

const router = express.Router();	// eslint-disable-line new-cap

router.route('/game')
    .get(gameCtrl.view)

export default router;
