const express = require(`express`);
const mongoose = require(`mongoose`);
const bodyParser = require(`body-parser`);
const app = express();
const server = require(`http`).Server(app);


mongoose.connect(`mongodb+srv://USUARIO:SIDXQOaeYiFKLJ6u@cluster0-tqifr.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use((req, res, next) => {
    next();
});

app.use(bodyParser.json());
app.use(require(`./routes`))
app.listen(`3333`)