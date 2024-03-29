const dotenv = require('dotenv');

const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('database connection established');
  });

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`hello app is running at ${port}....`);
});
