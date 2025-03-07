"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
//Arquivo para manejar as váriaveis de ambiente do projeto
const envSchema = zod_1.z.object({
    MONGO_KEY: zod_1.z.string(),
    PORT: zod_1.z.coerce.number().default(3000)
});
exports.env = envSchema.parse(process.env);
