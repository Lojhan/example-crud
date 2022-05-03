import * as express from 'express';

import userRoutes from './src/routes/user.route';
import bookRoutes from './src/routes/book.route';

const app = express();
app.use(express.json())

app.use('/book', bookRoutes);
app.use('/user', userRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})