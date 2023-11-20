const database = require('../database/country')

async function getStadiums(Country){
	try{ 
        return await PromiseGetStadiums(Country) 
    }
    catch(error){ 
        return error 
    }
}

const PromiseGetStadiums = (Country) => {
    return new Promise((resolve, reject) => {
        try{
            resolve(database.GetStadiums(Country))
        }catch(err){
            reject(err)
        }
	})
}

module.exports = {getStadiums}