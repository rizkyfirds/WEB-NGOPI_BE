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

router.get('/snacks', async (req, res) => {
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

module.exports = router