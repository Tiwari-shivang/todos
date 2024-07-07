const mongoose = require('mongoose');

const dbConnect = async (app) => {
    try{
        await mongoose.connect(`mongodb+srv://shivangtiwari:yi9Xd0f0AOCdUjPQ@todos.omcqzek.mongodb.net/?retryWrites=true&w=majority&appName=TODOs`).then(() => {
            app.listen(2000, () => {
                console.log('Server running on Port: 2000');
            })
        }).catch((e) => console.log(e));
    }catch(e){
        console.log(e);
    }
}
module.exports = {dbConnect};