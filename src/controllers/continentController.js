const continentService = require('../services/continentService')

const getCountries = (req,res) => {
    const { continent } = req.params
    if(!continent){
        res.status(400).json({status: 400, message: "Continent must be present"})
    }
    else{
        continentService.getCountries(continent).then(Data => {      
            res.setHeader("Content-Type","application/json")
            res.writeHead(200)
            res.end(JSON.stringify(Data))
        }).catch(err => { console.log(err) })
    }
}

module.exports = { getCountries }