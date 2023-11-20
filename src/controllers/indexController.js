
const getStatus = (req,res) => {
    res.status(200).json({status: 200, message: "API is working"})  
}

module.exports = { getStatus }