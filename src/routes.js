import { Router } from 'express';
import ReadSheet from './controllers/read';

const router = new Router();

router.get('/', ReadSheet.read);

export default router;
