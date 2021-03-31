const controller = {};

controller.list = (req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM clientes', (err, clientes) => {
            if (err) {
                res.json(err);
            }
            console.log(clientes);
            res.render('clientes', {
                data: clientes
            });
        });
    });
};

module.exports = controller;
