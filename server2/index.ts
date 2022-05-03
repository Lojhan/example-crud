import * as express from 'express';
import EmailRouter from './src/routes/email.route';

const app = express();
app.use(express.json());

app.use(EmailRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})