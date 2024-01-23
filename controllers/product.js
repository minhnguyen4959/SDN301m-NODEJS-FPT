

const getAllProducts = async(req, res) => {
    try {
       res.send("test")
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}
const getProductByObjectId = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

 
export default {
    getAllProducts,
    getProductByObjectId
} ;
    