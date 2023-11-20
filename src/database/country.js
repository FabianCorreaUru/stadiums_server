const fs = require('fs')

const GetStadiums = (Country) => {
    try {
        const file = fs.readFileSync('./src/database/tables/'+Country+".json",'utf8')        
        return JSON.parse(file)
    } catch (err) {
        console.error(err)
    }
}

module.exports = { GetStadiums }
