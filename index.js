require("./db/connect.js");
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// import routing
const employeeRouter = require('./routes/employees.routes');
const loginRouter = require('./routes/authentication');
const departmentRouter = require('./routes/department.routes');
const roleRouter = require('./routes/role.routes');

const app = express();

// DB Connecting

app.get('/', (req, res) => {
    res.send('Welcome to My Organization');
})

const corsOptions = {
    origin: process.env.CORS_ALLOW_ORIGIN,
    credentials: true,
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions))

app.use('/', loginRouter);
app.use('/employee', employeeRouter);
app.use('/department', departmentRouter);
app.use('/role', roleRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App is ruuning on  Port ${PORT}`);
})
