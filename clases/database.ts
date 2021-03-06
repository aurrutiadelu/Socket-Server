import mongoose from 'mongoose';
import {mongodb} from './databaseConfig';

mongoose.connect(mongodb.URI,{
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
