const database = require('../database/continent')

async function getCountries(Continent){
	try{ 
        return await PromiseGetCountries(Continent) 
    }
    catch(error){ 
        return error 
    }
}

const PromiseGetCountries = (Continent) => {
    return new Promise((resolve, reject) => {
        try{
            resolve(database.GetCountries(Continent))
        }catch(err){
            reject(err)
        }
	})
}

module.exports = {getCountries}