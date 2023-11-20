const Collection = {
    Sudamerica: [
        { name: 'Argentina', flag: 'ar' },
        { name: 'Bolivia', flag: 'bo' },
        { name: 'Brasil', flag: 'br' },
        { name: 'Chile', flag : 'cl' },
        { name: 'Colombia', flag: 'co' },
        { name: 'Ecuador', flag: 'ec' },
        { name: 'Paraguay', flag: 'py' },
        { name: 'Peru', flag: 'pe' },
        { name: 'Uruguay', flag: 'uy' },           
        { name: 'Venezuela', flag : 've' } 
    ],
    Europa: [
        { name: 'Austria', flag: 'at' },
        { name: 'Alemania', flag: 'de' },
        { name: 'Belgica', flag: 'be' },
        { name: 'Croacia', flag: 'hr' },           
        { name: 'Dinamarca', flag: 'dk' },
        { name: 'España', flag: 'es' },
        { name: 'Escocia', flag: 'gb-sct' },
        { name: 'Francia', flag: 'fr' },
        { name: 'Grecia', flag: 'gr' },
        { name: 'Holanda', flag : 'nl' },
        { name: 'Inglaterra', flag : 'gb-eng' },       
        { name: 'Italia', flag: 'it' },            
        { name: 'Portugal', flag: 'pt' },
        { name: 'Polonia', flag: 'pl' },
        { name: 'República Checa', flag: 'cz' }, 
        { name: 'Rumania', flag: 'ro' },
        { name: 'Suecia', flag: 'se' },
        { name: 'Suiza', flag: 'ch' },
        { name: 'Turquia', flag: 'tr' }, 
        { name: 'Ucrania', flag: 'ua' }
    ]
}

const GetCountries = (Continent) => {
    try {
        return Collection[Continent]        
    } catch (err) {
        console.error(err)
    }
}

module.exports = { GetCountries }
