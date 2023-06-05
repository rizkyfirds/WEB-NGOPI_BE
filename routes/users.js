const express = require('express')
const router = express.Router()
const connection = require('../db/database')

router.get('/', async (req, res) => {
    connection.query('SELECT * FROM user ORDER BY user_ID', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
            })
        } else {
            return res.status(200).json({
                status: true,
                message: "Get Users Success",
                data: rows
            })
        }
    })
})

router.post('/', async (req, res) => {
    const { nama, email, pass } = req.body

    //const encrytedPassword = await bcrypt.hash(pass, 10) //di encrypt. 10 umunya seperti itu di dokumen
    connection.query(`INSERT INTO user (nama,pass, email)  VALUES ("${nama}", ${pass},"${email}")`, (err, result) => {
        if (err) throw err
        res.status(200).json({
            registered: result,
            metadata: "register success"
        })
    })
})

router.post('/login', async (req, res) => {
    const { email, pass } = req.body
    try{
        connection.query(`SELECT * FROM user WHERE email="${email}" AND pass = ${pass}`, (err, data) => {
            //console.log(data)
            res.status(200).json({
                userData: data,
                metadata: "Login Success"
            })
        })
    }catch{
        res.status(400).json({
            error: "data invalid"
        })
    }
})

router.get('/forgotpassword', async (req, res) => {
    const {nama, email} = req.body
    connection.query(`SELECT * FROM user WHERE nama="${nama}" AND email="${email}" `, function (err, rows) {
        //console.log(email,rows.data[0])
        if (err) {
            return res.status(500).json({
                status: false,
                message: "server error",
            })
        } else {
            if(rows != null){
                return res.status(200).json({
                    status: true,
                    rows //postmand dapet tapi fe undefined
                })
            }else{
                return res.status(200).json({
                    status: false,
                    message: "data invalid"
                })
            }
        }
    })
})


router.put('/changepassword', async (req, res) => {
        const { pass, newpass,id } = req.body //ngambil data dari fe
        connection.query(`SELECT * FROM user WHERE user_ID="${id}" `, function (err, rows) {
            if (err) {
                return res.status(500).json({
                    message: "server error",
                })
            } else {
                connection.query(`UPDATE user SET pass = "${newpass}" WHERE user_ID="${id}" AND pass ="${pass}"`, function (err, rows) {
                    if (err) {
                        return res.status(500).json({
                            status: false,
                            message: "server error"
                        })
                    } else {
                        return res.status(200).json({
                            status: true,
                            message: "user updated"
                        })
                    }
                
                })
            }
        
        })
    })

module.exports = router