import { model, Schema } from "mongoose";
interface ITodo {
  title: string;
}

const todoSchema = new Schema<ITodo>({
  title: {
    type: String,
    require: true,
  },
});

export default model("todo251", todoSchema);
