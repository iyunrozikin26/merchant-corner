module.exports = (err, req, res, next) => {
    let errorStatus = err.status || 500;
    let errorMessage = err.message;

    if (err.name === "SequelizeUniqueConstraintError") {
        errorStatus = 400;
        errorMessage = err.errors[0].message;
    }
    if (err.name === "SequelizeValidationError") {
        errorStatus = 400;
        errorMessage = { errorType: err.errors[0].message, message: err.errors[0].validatorArgs[0].message };
    }

    if (err.name === "InvalidLogin") {
        errorStatus = 401;
    }

    res.status(errorStatus).json({ message: errorMessage });
};
