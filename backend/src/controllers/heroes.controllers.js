const Heroes = require("../model/Heroes.model");

const addHeroes = async (req,res)=>{

    try {
        const { nombre, bio, casa } = req.body;
        
        const newHeroe = new Heroes({
            nombre,
            bio,
            casa,
        });
        
        if(req.file){
            const { filename } = req.file;

            newHeroe.setImgUrl(filename);

        }
        
        res.json({"Menssage":"Esta mierda fue guardada"});
        await newHeroe.save();
        
    } catch (error) {
        console.log(error)
    }
};

const oneHeroe = async (req,res)=>{

    try {

        const { id } = req.params;
        const oneHeroe = await Heroes.findById(id);       
        res.json(oneHeroe);
               
    } catch (error) {
        console.log(error)
    }
};


const allHeroes = async (req,res)=>{

    try {
        
        const allHeroes = await Heroes.find();       
        res.json(allHeroes);
               
    } catch (error) {
        console.log(error)
    }
};

const updateHeroes = async (req,res)=>{

    try {
        const { id } = req.params;
        const { nombre, bio, casa } = req.body;

       const up = await Heroes.findByIdAndUpdate(id,{
            nombre,
            bio,
            casa,
        })       
        
        res.json({"Message":"Mierda actualizada"});

        res.json(up);
               
    } catch (error) {
        console.log(error)
    }
};

const deleteHeroes = async (req,res)=>{

    try {
        const { id } = req.params;


        await Heroes.findByIdAndDelete(id)       
        
        res.json({"Message":"Esta mierda fue eliminada"});

               
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    addHeroes,
    allHeroes,
    oneHeroe,
    updateHeroes,
    deleteHeroes
};