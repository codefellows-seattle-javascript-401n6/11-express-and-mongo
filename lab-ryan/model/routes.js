'use strict';
//root routes
app.get('/', (req, res) => {
    res.send();
});

app.post('/', () => {
    req.send(req.body);
});


module.exports = Routes;