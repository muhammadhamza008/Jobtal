const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const db = require('./db');

const app = express();
const port = process