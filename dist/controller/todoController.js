import todoSchema from "../model/todoSchema.js";
export const createTodo = async (req, res) => {
    try {
        const title = req.body.title;
        if (typeof title !== "string" || !title.trim()) {
            return res.status(401).json({
                success: false,
                message: "title is required"
            });
        }
        ;
        const todo = await todoSchema.create({ title: title });
        return res.status(200).json({
            success: true,
            message: "todo created successfully"
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error!!"
        });
    }
};
//# sourceMappingURL=todoController.js.map