const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require("body-parser")
// System Modules

const simCal = require('./utils/simCal')
const simcheck = require('./utils/SimCheck')
const chalk = require('chalk')
const db_sort = require('./utils/db_sort')
// Custom Modules


const doh = require('./utils/Complex/SDAMO/DOH')
const sb = require('./utils/Complex/SDAMO/SB')
const scd = require('./utils/Complex/SDAMO/SCD')
// SDAMO Algorithm

const density = require('./utils/Complex/TLND/density')
const link_weight = require('./utils/Complex/TLND/link_weight')
const node_depth = require('./utils/Complex/TLND/node_depth')
const type_of_link = require('./utils/Complex/TLND/type_of_link')
// TLND Algorithm

const result_comp = require('./utils/result_comp')

const app = express()
const port = process.env.PORT || 3000
// application initilization

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
// Define paths for Express config


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// Setup handlebars engine and views location

app.use(express.static(publicDirectoryPath))
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
// Setup static directory to serve and bodyparser

var database = []

// Ghost Database

app.get('', (req, res) => {
    res.render('index', {
        title: '服务器接口',
        bodytext: '这个页用来分析服务信息',
        name: 'Robert Wijntjes'
    })
})



app.get('/about', (req, res) => {
    res.render('about', {
        title: '关于我',
        textbody:'这个网站用来展示IoT服务器的接口',
        name: 'Robert Wijntjes'
    })
})


app.get('/interface',(req,res)=>{
    const message = {
        helpText: '未来有内容，正在还没写完',
        title: '接口',
        name: 'Robert Wijntjes'
    }
    res.render('interface',message)
})


app.post('/interface/data',(req,res)=>{
    const result = simCal(req.body)
    const size = req.get("content-length")
    const rf_db = db_sort(database,req)
    
    res.send({status:result,datasize:size,data:rf_db})

})

app.get('/interface/simcal',(req,res)=>{
    // console.log(database[0].Response[0].operation)
    res.send(simcheck(database[0].Response[0].operation,database[1].Response[1].operation))
})

app.get('/interface/tlnd',(req,res)=>{

    res.send(result_comp(database,['tlnd_dist','tlnd_node_density','tlnd_weight','type_of_link']))

})


app.get('/help', (req, res) => {
    res.render('help', {
        helpText: '未来有内容，正在还没写完',
        title: '帮助',
        name: 'Robert Wijntjes'
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Robert Wijntjes',
        errorMessage: '找不到你搜的文档'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Robert Wijntjes',
        errorMessage: '找不到你搜的页'
    })
})


app.listen(port, () => {
    console.log('正在服务在端口 ' + port)
})