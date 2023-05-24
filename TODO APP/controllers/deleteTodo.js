//import the model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async(req, res) => {
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Todo Deleted",
        })
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}

exports.deleteAllTodo = async(req, res) => {
    try{
        const Todo = req.body;

        await Todo.deleteMany({ date:{"$lt":new Date(2023,4, 29)} });

        res.json({
            success:true,
            message:"Todo Deleted",
        })
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}