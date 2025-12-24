import db from "../config/db.js";

//menampilkan data dari tabel
//sql ? SELECT * FROM users
export const getUser = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        //jika ada error
        if(err) res.status(500).json({ message: err});

        //jika berhasil
        res.json(results);
    });
};



//menyimpan data
//sql ? INSERT INTO users (name, email, password) values (?,?,?)
export const insertUser = (req, res) => {
    const {name, email, password} =  req.body;

    db.query(
        "INSERT INTO users (name, email, password) VALUES (?,?,?)",
        [name, email, password],
        (err, results) => {
            //jika ada error
            if(err) res.status(500).json({ message: err});

            //jika berhasil
            res.json({ message: "Data berhasil disimpan"});
        }
    );
};


//menampilkan data berdasarkan id
//sql ? SELECT * FROM users WHERE id=?
export const showUser = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM users WHERE id=?", [id], (err, results) => {
        //jika error
        if(err) res.status(500).json({ message: err});


        //jika data tidak ditemukan
        if(results.length === 0) {
            return res.status(400).json({ message: "User tidak ditemukan"});
        }

        //jika ditemukan
        res.json(results[0]);
    });
};


//update data
//sql ? UPDATE users SET name=?, email=? WHERE id=?
export const updateUser = (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;

    db.query(
        "UPDATE users SET name=?, email=? WHERE id=?", 
        [name, email, id],
        (err, results) => {
            //jika error
            if( err) res.status(500).json({ message: err});

            //jika berhasil
            res.json({ message: "Data berhasil diupdate"});
        }
    );
};

//delete data berdasarkan id
//sql ? 
export const deleteUser = (req, res) => {
    const {id} = req.params;

    db.query("DELETE FROM users WHERE id=?", [id], (err, results) => {
        //jika error
        if(err) res.results(500).json({ message: err});


        //jika berhasil
        res.json({ message: "Data berhasil dihapus"});
    });
};