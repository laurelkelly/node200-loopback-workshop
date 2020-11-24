require('dotenv').config();

module.exports = {
    "MongoDB": {
        "name": "MongoDB",
        "connector": "mongodb",
        "url": process.env.MONGODB_URL
    }
}
