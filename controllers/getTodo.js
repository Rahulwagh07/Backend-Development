//import the model
const Todo = require("../models/Todo");

//define Route handeler

exports.getTodo = async(req, res) => {
    try{
        //Fetch all Todo items froms Database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is Fetched",
        })
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error",
        });
    }
}

exports.getTodoById = async(req, res) => {
    try{
        //Extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        //Data for given ID not found
        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"No data found woth given ID",
            })
        }

        //Data for given ID found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
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