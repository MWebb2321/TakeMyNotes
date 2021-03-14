const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('develop/public'));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});