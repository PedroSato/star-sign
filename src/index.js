const express = require(`express`);
const mongoose = require(`mongoose`);
const bodyParser = require(`body-parser`);
const app = express();



mongoose.connect(`mongodb+srv://USUARIO:SIDXQOaeYiFKLJ6u@cluster0-tqifr.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.use(bodyParser.json());
app.use(require(`./routes`))

module.exports = app
