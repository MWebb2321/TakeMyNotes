const express = require('express');
const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.static('./develop/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});