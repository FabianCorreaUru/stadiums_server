const countryService = require('../services/countryService')

const getStadiums = (req,res) => {
    const { country } = req.params
    if(!country){
        res.status(400).json({status: 400, message: "Country must be present"})
    }
    else{
        countryService.getStadiums(country).then(Data => {      
            res.setHeader("Content-Type","application/json")
            res.writeHead(200)
            res.end(JSON.stringify(Data))
        }).catch(err => { console.log(err) })
    }
}

module.exports = { getStadiums }