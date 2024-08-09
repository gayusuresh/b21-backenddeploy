const mongoose= require('mongoose')

const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:"name is required",
        unique:true},

        email:{
            type:String,
            required:"email is required",
            unique:true
        },
        password:{
            type:String,
            required:"password is required",
            unique:true
        }
})
const EmployeeModel=mongoose.model("employees",EmployeeSchema)
module.exports=EmployeeModel