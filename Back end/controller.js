const studentmodal = require('./modal') 
const studentmodalfirst = require('./modalfirst') 
const studentmodalsecond = require('./modalsecond') 
const studentmodalthird = require('./modalthird') 
const studentmodalfourth = require('./modalfourth')


const adduser = async(req,res) =>{
    const { NAME,ROLL,FDS,CG,DELD,OOP,DM,percent} = req.body;
    
    try{
        const userdata = new studentmodal({
           NAME,ROLL,FDS,CG,DELD,OOP,DM,percent
        })

        const data = userdata.save()
        res.status(200).send({data})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}
const getdata = async(req,res) => {
    try{
        const userdata = await studentmodal.find()
        res.status(200).send({userdata})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}









const adduser1 = async(req,res) =>{
    const { ROLL,NAME,DSA,SE,PPL,MP,MII,percent} = req.body;
    
    try{
        const userdata1 = new studentmodalfirst({
            ROLL,NAME,DSA,SE,PPL,MP,MII,percent
        })

        const data = userdata1.save()
        res.status(200).send({data})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}
const getdata1 = async(req,res) => {
    try{
        const userdata1 = await studentmodalfirst.find()
        res.status(200).send({userdata1})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}







const adduser2 = async(req,res) =>{
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
const getdata2 = async(req,res) => {
    try{
        const userdata2 = await studentmodalsecond.find()
        res.status(200).send({userdata2})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}










const adduser3 = async(req,res) =>{
    const { ROLL,NAME,DS,WT,AI,CC,INTERN,percent} = req.body;
    
    try{
        const userdata3 = new studentmodalthird({
            ROLL,NAME,DS,WT,AI,CC,INTERN,percent
        })

        const data = userdata3.save()
        res.status(200).send({data})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}
const getdata3 = async(req,res) => {
    try{
        const userdata3 = await studentmodalthird.find()
        res.status(200).send({userdata3})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}







// const addus = async(req,res) =>{
//     const {email,password} = req.body;
    
//     try{
//         const userda = new studentmodal({
//             email,password
//         })

//         const data = userda.save()
//         res.status(200).send({data})
//     }
//     catch(err){
//         console.log(err)
//         res.status(400).send({err})
//     }
// }
// const getda = async(req,res) => {
//     try{
//         const userda = await studentmodal.find()
//         res.status(200).send({userda})
//     }
//     catch(err){
//         console.log(err)
//         res.status(400).send({err})
//     }
// }




//    user functions : ->>>>>>>>>>>

const adduser4 = async(req,res) =>{
    const {fname,lname,email,password} = req.body;
    
    try{
        const userdata = new studentmodalfourth({
            fname,lname,email,password
        })

        const data = userdata.save()
        res.status(200).send({data})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}

const getdata4 = async(req,res) => {
    try{
        const userdata = await studentmodalfourth.find()
        res.status(200).send({userdata})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}



const updateuser = async(req,res) => {
    try{
        const {ROLL}= req.params
        const{NAME,FDS,CG,DELD,OOP,DM,percent}=req.body

        const data =await studentmodal.updateOne(
            {ROLL},{$set:{NAME,FDS,CG,DELD,OOP,DM,percent}}
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
        
        const data = await studentmodal.deleteOne(
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
        const {NAME} = req.body

        const data = await studentmodal.findOne({ROLL})

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



const updateuser2 = async(req,res) => {
    try{
        const {email} = req.params 
        const {fname,lname,password} = req.body

        const data = await studentmodal.updateOne(
            {email},
            {
                $set : {fname,lname,password}
            }
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

const deleteuser2 = async(req,res) => {

    try{
        const {email} = req.params
        
        const data = await studentmodal.deleteOne(
            {email}
        )

        res.status(200).send({msg : "User deleted successfully"})
    }
    catch(err){
        console.log(err)
        res.status(400).send({msg : "User not deleted successfully"})
    }
}

const finduser2 = async(req,res) => {
    try{
        const {email} = req.params

        const data = await studentmodal.findOne({email})

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


module.exports = {adduser,getdata,adduser1,getdata1,adduser2,getdata2,adduser3,getdata3,adduser4,getdata4,updateuser,deleteuser,finduser,updateuser2,deleteuser2,finduser2}