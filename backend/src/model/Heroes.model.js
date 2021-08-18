const {Schema, model}=require("mongoose");
const {appConf} = require("../../config");
const HeroeSchema = new Schema({
    nombre:String,
    imgUrl:String,
    bio:String,
    casa:String,
    date:{type: Date, default: Date.now}
},{timestamps:true});


HeroeSchema.methods.setImgUrl = function setImgUrl(filename){
    const {host,port} = appConf;
    this.imgUrl = `${host}:${port}/public/${filename}`;
}

module.exports = model("Heroes",HeroeSchema);

