import { model, Schema } from "mongoose";

const carroSchema = new Schema(
    {
        modelo: {
          type: String,
          required: [true, "Campo obrigatório!"],
        },
        placa: {
          type: String,
          required: [true, "Campo obrigatório!"],
        },
        ano: {
          type: Number,
          required: [true, "Campo obrigatório!"],
        },
      },
      {
        timestamps: true,
      },
    );

export default model("carro",carroSchema);
