const mongoose=require('mongoose')
const TodoSchema=new mongoose.Schema({
    task:String,
    done:Boolean,
    done:{
        type:Boolean,
        default:false
    }
})
const TodoModel=mongoose.model("items",TodoSchema)
module.exports=TodoModel