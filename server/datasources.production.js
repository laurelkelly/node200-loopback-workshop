require('dotenv').config();

module.exports = {
    "MongoDB": {
        "name": "MongoDB",
        "connector": "mongodb",
        "url": process.env.MONGODB_URL
    }
}

// 'use strict';
// const envs = require('./env.js');

// module.exports = {
//     mongoatlas: {
//         url: envs.url,
//         port: 27017,
//         database: "db",
//         name: "mongoatlas",
//         connector: "mongodb",
//         user: envs.user,
//         password: envs.password
//     }
// }
