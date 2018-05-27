const express = require('express')
const app = express()

const port = process.env.PORT || 3000;
const environment = process.env.APP_ENV || 'no-environment';

app.get('/', (req, res) => res.send(`Hello Beanstalk ${environment}!`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))