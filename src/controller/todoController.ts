import type { Request, Response } from "express";
import todoSchema from "../model/todoSchema.ts";

export const createTodo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const title: string = req.body.title?.trim();
        if (typeof title !== "string" || !title.trim()) {
            return res.status(401).json({
                success: false,
                message: "title is required"
            })
        };
        console.log(title);
        const exist = await todoSchema.findOne({ title: title });
        console.log(exist)
        if (exist) {
            return res.status(400).json({
                success: false,
                message: "todo already eixst!!"
            })
        };
        const todo = await todoSchema.create({ title: title.trim() });
        return res.status(200).json({
            success: true,
            message: "todo created successfully",
            data: todo
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error!!"
        })
    }
};


export const getAllTodo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const allTodos = await todoSchema.find({});
        return res.status(200).json({
            success: true,
            message: allTodos.length === 0 ? "No todo found" : "todo fetched successfully",
            data: allTodos
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error!!!"
        })
    }
};

export const updateTodo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "id is required to update "
            })
        }
        if (!title || typeof title !== "string" || !title.trim()) {
            return res.status(400).json({
                success: false,
                message: " title is required "
            })
        };

        const updateTodo = await todoSchema.findByIdAndUpdate(id, { title: title.trim() }, { new: true });
        if (!updateTodo) {
            return res.status(400).json({
                success: false,
                message: "unable to update todo !!!"
            })
        };

        return res.status(201).json({
            success: true,
            message: "todo updated successfully",
            data: updateTodo
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "internal server error!"
        })
    }
};

export const deleteTodo = async (req: Request, res:Response): Promise<Response> =>{
    try {
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                success:false,
                message:"id is required to delete"
            })
        };
        const deleteTodo = await todoSchema.findByIdAndDelete({_id:id});
        if(!deleteTodo){
            return res.status(400).json({
                success:false,
                message:"no todo found to delete"
            })
        };

        return res.status(200).json({
            success:true,
            message:"todo deleted successfully!!",
            data:deleteTodo
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error!!"
        })
    }
};

export const deleteAllTodo = async (req:Request, res:Response): Promise<Response> =>{
    try {
        const deleteAll = await todoSchema.deleteMany({});
        return res.status(200).json({
            success:true,
            message:deleteAll.deletedCount ===0?"No todo found to delete":"todo deleted successfully!!",
            deleteData:deleteAll.deletedCount
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error!!!"
        })
    }
}

