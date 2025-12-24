import db from "../config/db.js";

//menampilkan data dari tabel
//sql ? SELECT * FROM categories
export const getCategori = (req, res) => {
    db.query("SELECT * FROM categories", (err, results) => {
        //jika ada error
        if(err) res.status(500).json({ message: err});

        //jika berhasil
        res.json(results);
    });
};

//menyimpan data
//sql ? INSERT INTO categories (name) VALUES (?)
export const insertCategori = (req, res) => {
    const {name} =  req.body;

    db.query(
        "INSERT INTO categories (name) VALUES (?)",
        [name],
        (err, results) => {
            //jika ada error
            if(err) res.status(500).json({ message: err});

            //jika berhasil
            res.json({ message: "Kategori berhasil disimpan"});
        }
    );
};

//menampilkan data berdasarkan id
//sql ? SELECT * FROM categories WHERE id=?
export const showCategori = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM categories WHERE id=?", [id], (err, results) => {
        //jika error
        if(err) res.status(500).json({ message: err});


        //jika data tidak ditemukan
        if(results.length === 0) {
            return res.status(400).json({ message: "Kategori tidak ditemukan"});
        }

        //jika ditemukan
        res.json(results[0]);
    });
};

//update data
//sql ? UPDATE categories SET name=? WHERE id=?
export const updateCategori = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    db.query(
        "UPDATE users SET name=? WHERE id=?", 
        [name, id],
        (err, results) => {
            //jika error
            if( err) res.status(500).json({ message: err});

            //jika berhasil
            res.json({ message: "Kategori berhasil diupdate"});
        }
    );
};

//delete data berdasarkan id
//sql ? DELETE FROM categories WHERE id=?
export const deleteCategori = (req, res) => {
    const {id} = req.params;

    db.query("DELETE FROM categories WHERE id=?", [id], (err, results) => {
        //jika error
        if(err) res.results(500).json({ message: err});


        //jika berhasil
        res.json({ message: "Kategori berhasil dihapus"});
    });
};