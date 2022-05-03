import * as express from 'express';

import routes from './src/routes/base.route';

const app = express();
app.use(express.json())

app.use('/folha', routes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})