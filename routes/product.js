const express = require('express')
const router = express.Router()
const connection = require('../db/database')

router.get('/coffee', async (req, res) => {
    connection.query('SELECT * FROM product WHERE category_prod = "coffe"', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
            })
        } else {
            return res.status(200).json({
                message: "Get Product Success",
                dataProd: rows
            })
        }
    })
})

router.get('/maincourse', async (req, res) => {
    connection.query('SELECT * FROM product WHERE category_prod = "MainCourse"', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
            })
        } else {
            return res.status(200).json({
                message: "Get Product Success",
                dataProd: rows
            })
        }
    })
})

router.get('/others', async (req, res) => {
    connection.query('SELECT * FROM product WHERE category_prod = "Others"', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
            })
        } else {
            return res.status(200).json({
                message: "Get Product Success",
                dataProd: rows
            })
        }
    })
})

router.get('/snack', async (req, res) => {
    connection.query('SELECT * FROM product WHERE category_prod = "Snaks"', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
            })
        } else {
            return res.status(200).json({
                message: "Get Product Success",
                dataProd: rows
            })
        }
    })
})

router.post('/order', async (req, res) => {
    const { userID, prodID, jmlh, total } = req.body

    //const encrytedPassword = await bcrypt.hash(pass, 10) //di encrypt. 10 umunya seperti itu di dokumen
    connection.query(`INSERT INTO pesanan_user (user_ID,product_id,jmlh_pesanan,total_price)  VALUES (${userID}, ${prodID},${jmlh}, "${total}")`, (err, result) => {
        if (err) throw err
        res.status(200).json({
            registered: result,
            metadata: "register success"
        })
    })
})

module.exports = router