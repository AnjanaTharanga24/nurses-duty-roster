const Nurse = require('../models/nurseModel')

const createNurse = async (req,res) =>{
  try {
    const nurse = await Nurse.create(req.body);
    res.status(200).json(nurse);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

const getNurseById = async (req,res) => {
   try {
    const {id} = req.params;
    const nurse = await Nurse.findById(id);
    if(!nurse){
         res.status(404).send(`nurse not found with id ${id}`)
    }
    res.status(200).json(nurse)
   } catch (error) {
    res.status(500).json({msg:error.message})
   }
}

const getAllNurses = async (req,res) => {
  try {
    const nurse = await Nurse.find()
    res.status(200).json(nurse)
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
}
module.exports ={createNurse,getNurseById,getAllNurses}