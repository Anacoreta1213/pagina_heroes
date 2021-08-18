require('dotenv').config();
const app = require("./app");
const connectionDB = require("./db");

const {appConf,dbConf} = require("../config");

const appInit = async (appConf,dbConf)=>{
    try {
        
        app.listen(appConf.port,()=>{
            console.log(`Los mejores amigos ${appConf.port}`);
        });
        await connectionDB(dbConf); 
    } catch (error) {
        console.log("Everything went to shit")
    }
}

appInit(appConf,dbConf);

