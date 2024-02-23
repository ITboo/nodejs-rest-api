import { db } from "../database.js";

export const itemModel = {
    getAllItems: function () {
        return new Promise((res, rej) => {
            db.all('SELECT *FROM items', [], (err, rows) => {
                if (err) {
                    rej(err)
                } else {
                    res(rows)
                }
            })
        })
    },
    getItemById: function (id) {
        return new Promise((res, rej) => {
            db.get('SELECT * FROM items WHERE id=?', [id], (err, rows) => {
                if (err) {
                    rej(err)
                } else {
                    res(rows)
                }
            })
        })
    },
    createItem: function (item) {
        return new Promise((res, rej) => {
            db.run('INSERT INTO items(name, description) VALUES(?, ?)', [item.name, item.description], (err) => {
                if (err) {
                    rej(err)
                } else {
                    res(this.lastID)
                }
            })
        })
    },
    updateItem: function (id, item) {
        return new Promise((res, rej) => {
            db.run('UPDATE items SET name=?, description=? WHERE id=?', [item.name, item.description, item.id], (err) => {
                if (err) {
                    rej(err)
                } else {
                    res(this.changes)
                }
            })
        })
    },
    deleteItem: function (id) {
        return new Promise((res, rej) => {
            db.run('DELETE FROM items WHERE id=?', [id], (err) => {
                if (err) {
                    rej(err)
                } else {
                    res(this.changes)
                }
            })
        })
    }
}