module.exports ={
    //"url": 'mongodb://localhost/filetracker'
    "url": process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME
}