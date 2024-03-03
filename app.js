const express = require('express');

const app = express();
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');

const userRouter = require('./routes/userRoutes');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); //to use middleware:===middleware is just a function that can modify the incoming data
// app.use(express.static('./public/overview.html'));
app.use((req, res, next) => {
  console.log('hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
// );

// const getAllTours = (req, res) => {
//   console.log(req.requestTime);
//   res.status(200).json({
//     status: 'success',
//     requestTime: req.requestTime,
//     results: tours.length,
//     data: {
//       tours: tours,
//     },
//   });
// };
// const getTourById = (req, res) => {
//   // console.log(req.params);    // to get parameter from request
//   const id = req.params.id * 1; //to cover string to number
//   if (id > tours.length) {
//     return res.status(404).json({
//       status: 'failed',
//       message: 'Invalid id provided',
//     });
//   }

//   const tour = tours.find((el) => el.id === id); // to get an object from tours whose id is equal to parameter id
//   res.status(200).json({
//     status: 'success',
//     data: {
//       tours: tour,
//     },
//   });
// };
// const postTour = (req, res) => {
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);
//   tours.push(newTour);

//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({ status: 'success', data: { tours: newTour } });
//     }
//   );
// };
// const patchTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'failed',
//       message: 'Invalid id provided',
//     });
//   }
//   res.status(200).json({
//     status: 'success',
//     data: { tour: '<updadated tour here>' },
//   });
// };
// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'failed',
//       message: 'Invalid id provided',
//     });
//   }
//   res.status(204).json({
//     status: 'success',
//     data: null,
//   });
// };

// const getAllUsers = (req, res) => {
//   res.status(200).json({
//     status: 'error',
//     message: 'route not found',
//   });
// };
// const patchUserbyid = (req, res) => {
//   res.status(200).json({
//     status: 'error',
//     message: 'route not found',
//   });
// };
// const deleteUser = (req, res) => {
//   res.status(200).json({
//     status: 'error',
//     message: 'route not found',
//   });
// };
// const postUser = (req, res) => {
//   res.status(200).json({
//     status: 'error',
//     message: 'route not found',
//   });
// };
// const getuserbyid = (req, res) => {
//   res.status(200).json({
//     status: 'error',
//     message: 'route not found',
//   });
// };
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:x/:y/:z?', (req, res) => {})  //=> ? to make it optional paprameters
// app.get('/api/v1/tours/:id', getTourById);
// app.post('/api/v1/tours', postTour);
// app.patch('/api/v1/tours/:id', patchTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users/', userRouter);

module.exports = app;
