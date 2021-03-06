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
const {type_of_link,type_of_links} = require('./utils/Complex/TLND/type_of_link')
// TLND Algorithm


const ancestor_sim = require('./utils/Complex/slo/ancestor_sim')
const ant = require('./utils/Complex/slo/ant')
const common_prop = require('./utils/Complex/slo/common_prop')
const syn = require('./utils/Complex/slo/synonym_array')
const term = require('./utils/Complex/slo/term_name')
// SLO Algorithm


const hyb_dist = require('./utils/Complex/hybrid/hyb_distance')
const hyb_dense = require('./utils/Complex/hybrid/hyb_density')
const hyb_dense_dist = require('./utils/Complex/hybrid/hyb_dense_dist')
const hyb_dist_jia = require('./utils/Complex/hybrid/hyp_dist_jia')

const non_bias_cal = require('./utils/Complex/hybrid/final_cal')
// hybrid Algorithm

const {tlnd_prep,sdamo_prep,slo_prep,hyb_prep} = require('./utils/payload_prep/result prep')

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

// app.get('/interface/simcal',(req,res)=>{
//     res.send(simcheck(database[0].Response[0].operation,database[1].Response[1].operation))
// })

// app.get('/interface/tlnd',(req,res)=>{
//     const result = tlnd_prep(database,['tlnd_dist','tlnd_node_density','tlnd_weight','tlnd_link_cal'])
//     const a = density(result.density[0].value,result.density[1].value)
//     const b = link_weight(result.weight[0].value,result.weight[1].value)
//     const c = node_depth(result.dist[0].value,result.dist[1].value)
//     const d = type_of_link(result.link[0].value,result.link[1].value)
//     const tlnd = a + b + c + d


//     res.send({tlnd_result:tlnd,density:a,weight:b,node_depth:c,link:d})
// })

// app.get('/interface/sdamo',(req,res)=>{
//     const result = sdamo_prep(database,['distance_center','ancestor_search'])

//     const a = doh(result.depth_of_heirarchy[0].value,result.depth_of_heirarchy[1].value)
//     const b = sb(result.depth_of_heirarchy[0].value,result.depth_of_heirarchy[1].value)
//     const c = scd(result.semantic_coincidence_degree[0].value,result.semantic_coincidence_degree[1].value)
//     const sdamo = a+b+c


//     res.send({sdamo_result:sdamo,depth_of_heirarchy: a,semantic_bias: b,semantic_coincidence_degree: c})
// })

// app.get('/interface/slo',(req,res)=>{
//     const result = slo_prep(database,['common_prop','synonyms_array','ancestor_search','nodename'])
//     const common_properties = common_prop(result.common_prop[0].value,result.common_prop[1].value)
//     const synonyms = syn(result.synonyms_array[0].value,result.synonyms_array[1].value)
//     const ancestor = ancestor_sim(result.ancestor_search[0].value,result.ancestor_search[1].value)
//     const nodesname = term(result.nodename[0].value,result.nodename[1].value)

//     const slo = common_properties + synonyms + ancestor + nodesname
//     res.send({SLO:slo,common_properties,synonyms,ancestor,nodesname})
// })

app.get('/interface/hyb',(req,res)=>{
    const result = hyb_prep(database,['distance_center','ancDest','term_name','linkDest'])
    console.log(result.link_type)

    const distance = hyb_dist(result.distance_center[0].value,result.distance_center[1].value,database[0].height,database[1].height)
    const density = hyb_dense(result.ancestor_density[0].value,result.ancestor_density[1].value,database[0].density,database[1].density)
    const density_dist = hyb_dense_dist(result.ancestor_density[0].value,result.ancestor_density[1].value,database[0].total_density,database[1].total_density)
    const distance_jia = hyb_dist_jia(result.distance_center[0].value,result.distance_center[1].value,database[0].height,database[1].height)
    const levenstein = term(result.levenstein[0].value,result.levenstein[1].value)
    const link_compare = type_of_links(result.link_type[0].value,result.link_type[1].value)

    const final_result = non_bias_cal(distance,density,density_dist,distance_jia,levenstein,link_compare)
    
    res.send({
        FINAL_CALCULATION:{
            final_result
        },
        sub_results:{
            distance,
            distance_jia,
            density,
            density_dist,
        },
        testing:{
            link_compare,
            levenstein
        
        }
    })
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