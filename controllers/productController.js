import db from "../config/db.js";

//menampilkan data produk dari tabel
//sql ? SELECT * FROM products
export const getProduct = (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        //jika ada error
        if(err) res.status(500).json({ message: err});

        //jika berhasil
        res.json(results);
    });
};

//menyimpan data
//sql ? INSERT INTO products (category_id, name, price) VALUES (?,?,?)
export const insertProduct = (req, res) => {
    const {name, price, category_id} =  req.body;

    db.query(
        "INSERT INTO products (name, price, category_id) VALUES (?,?,?)",
        [name, price, category_id],
        (err, results) => {
            //jika ada error
            if(err) res.status(500).json({ message: err});

            //jika berhasil
            res.json({ message: "Produk berhasil disimpan"});
        }
    );
};

//menampilkan data berdasarkan id
//sql ? SELECT * FROM categories WHERE id=?
export const showProduct = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM products WHERE id=?", [id], (err, results) => {
        //jika error
        if(err) res.status(500).json({ message: err});


        //jika data tidak ditemukan
        if(results.length === 0) {
            return res.status(400).json({ message: "Produk tidak ditemukan"});
        }

        //jika ditemukan
        res.json(results[0]);
    });
};

//update data
//sql ? UPDATE products SET name=?, price=? WHERE id=?
export const updateProduct = (req, res) => {
    const {id} = req.params;
    const {name, price} = req.body;

    db.query(
        "UPDATE products SET name=?, price=? WHERE id=?", 
        [name, price, id],
        (err, results) => {
            //jika error
            if( err) res.status(500).json({ message: err});

            //jika berhasil
            res.json({ message: "Produk berhasil diupdate"});
        }
    );
};

//delete data berdasarkan id
//sql ? DELETE FROM products WHERE id=?
export const deleteProduct = (req, res) => {
    const {id} = req.params;

    db.query("DELETE FROM categories WHERE id=?", [id], (err, results) => {
        //jika error
        if(err) res.results(500).json({ message: err});


        //jika berhasil
        res.json({ message: "Produk berhasil dihapus"});
    });
};