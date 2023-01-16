const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://Saikrishna:Saikrishna123@cluster0.7y8fwdm.mongodb.net/?retryWrites=true&w=majority",
            {
                useFindAndModify: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true,
            },
            () => {
                console.log('DB connected');
            }
        );
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect;