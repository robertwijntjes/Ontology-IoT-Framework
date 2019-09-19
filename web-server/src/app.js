const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require("body-parser")
const simCal = require('./utils/simCal')
const simcheck = require('./utils/SimCheck')
const contains = require('./utils/contains')
const same = require('./utils/same')
const chalk = require('chalk')
// Modules reference

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
    console.log()
    console.log('::::::::::::::::::::::::::::::::::::')
    console.log()

    console.log(chalk.red('@') + chalk.blue('Client Number') + ': ' + req.body.Client)

    if(database == null){
        console.log(chalk.red('@') + chalk.blue('Database Empty - Directly Pushing Information'))
        console.log(req.body)
        database.push(req.body)
        console.log()
    }
    if(!contains(database,req.body.Client)){
        console.log(chalk.red('@') + chalk.blue('Pushing New Clients Information'))
        console.log(req.body)
        database.push(req.body)
        console.log()
    }
    else{
        console.log(chalk.red('@') + chalk.blue('Checking Response Content for Actions'))
        for(x in database){
            if(database[x].Client == req.body.Client){
                let flip = false
                for(z in database[x].Response){
                    if(database[x].Response[z].type == req.body.Response[0].type){
                
                        if(!same(database[x].Response[z],req.body.Response[0])){
                            console.log(chalk.yellow('--- Adjusting Response Header'))
                            console.log(req.body.Response)
                            database[x].Response[z] = req.body.Response[0]
                            console.log()
                            flip = true
                        }
                        else{
                            console.log(chalk.yellow('--- Content Match - Update not Needed'))
                            console.log(database[x].Response[z])
                            console.log()
                            flip = true
                        }
                    }
                }
                if(!flip){
                    console.log(chalk.yellow('--- Adding new Response Content'))
                    console.log(req.body.Response)
                    database[x].Response.push(req.body.Response[0])
                    console.log()
                    break
                }
            }
        }
       
    }

    console.log(chalk.red('@') + chalk.blue('Whole Database'))
    for(x in database.sort(database.Client)){
        console.log(database[x])
    }
    console.log()
    
    res.send({status:result,datasize:size})

})

app.get('/interface/simcal',(req,res)=>{
    // console.log({Client:database[0].Client,Input:database[0].Response,Client:database[1].Client,Input:database[1].Respons
    console.log({Input_1:database[0].Response,Input_2:database[1].Response})
    res.send(simcheck(database[0].Response,database[1].Response))
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