const moment = require('moment');

const logger = (req, res, next) => {
    console.log('request done ');
    console.log(
        `${req.protocol}:// ${req.get('host')} ${
            req.originalUrl
        } ${moment().format()} }\n`,
    );
    next();
};

module.exports = logger;
