import * as express from 'express';
import router from './src/routes/base.route';

const app = express();
app.use(express.json());

app.use('/folha', router);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})