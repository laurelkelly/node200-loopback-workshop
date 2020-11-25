require('dotenv').config();

module.exports = {
    "db": {
        "name": "db",
        "connector": "memory"
    },
    // "MongoDB": {
    //     "host": "",
    //     "port": 0,
    //     "url": "mongodb://localhost:27017",
    //     "database": "",
    //     "password": "",
    //     "name": "MongoDB",
    //     "user": "",
    //     "useNewUrlParser": true,
    //     "connector": "mongodb"
    // }
    "MongoDB": {
        "name": "MongoDB",
        "connector": "mongodb",
        "url": process.env.MONGODB_URL
    }
}