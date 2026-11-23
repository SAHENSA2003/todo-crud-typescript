import { model, Schema } from "mongoose";
const todoSchema = new Schema({
    title: {
        type: String,
        require: true
    }
});
export default model("todo251", todoSchema);
//# sourceMappingURL=todoSchema.js.map