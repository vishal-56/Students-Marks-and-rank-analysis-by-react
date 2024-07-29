const studentmodalsecond = require('./modalsecond') 




const adduser = async(req,res) =>{
    const { ROLL,NAME,DBMS,SPOS,CNS,TOC,SPM,percent} = req.body;
    
    try{
        const userdata2 = new studentmodalsecond({
            ROLL,NAME,DBMS,SPOS,CNS,TOC,SPM,percent
        })

        const data = userdata2.save()
        res.status(200).send({data})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}
const getdata = async(req,res) => {
    try{
        const userdata2 = await studentmodalsecond.find()
        res.status(200).send({userdata2})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}




const updateuser = async(req,res) => {
    try{
        const {ROLL}= req.params
        const{NAME,DBMS,SPOS,CNS,TOC,SPM,percent}=req.body

        const data =await studentmodalsecond.updateOne(
            {ROLL},{$set:{NAME,DBMS,SPOS,CNS,TOC,SPM,percent}}
        )

        if(data.modifiedCount > 0){
            res.status(200).send({msg : "Data updated successfully"})
        }
        else{
            res.status(400).send({msg : "Data not updated successfully"})
        }
    }
    catch(err){
        console.log(err)
        res.status(400).send({msg : "User not found"})
    }
}

const deleteuser = async(req,res) => {

    try{
        const {ROLL} = req.params
        
        const data = await studentmodalsecond.deleteOne(
            {ROLL}
        )

        res.status(200).send({msg : "User deleted successfully"})
    }
    catch(err){
        console.log(err)
        res.status(400).send({msg : "User not deleted successfully"})
    }
}
const finduser = async(req,res) => {
    try{
        const {ROLL} = req.params

        const data = await studentmodalsecond.findOne({ROLL})

        if (data) {
            res.status(200).send({ data, msg: "User found" });
        } else {
            res.status(404).send({ msg: "User not found" }); // Adjust status code to 404 when user is not found
        }
    }
    catch(err){
        console.log(err)
        res.status(400).send({err,msg:"User not found"})
    }
}

module.exports = {adduser,getdata,updateuser,deleteuser,finduser}