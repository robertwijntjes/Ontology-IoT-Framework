const chalk = require('chalk')
const contains = require('./contains')
const same = require('./same')

const db_sort = (database,req) =>{
    console.log()
    console.log(':::::::::::::::::      Results      :::::::::::::::::::')
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
            console.log('BEGIN')
            console.log(database[x])
            console.log('END')
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
    console.log()
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::')
    
    console.log()

    return database.sort(database.Client)
}

module.exports = db_sort