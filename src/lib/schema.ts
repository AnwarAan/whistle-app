import { zodObject, zodType } from "./utils";

const registerSchema = zodObject({
  username: zodType("string"),
  email: zodType("email"),
  password: zodType("password"),
});

const loginSchema = zodObject({
  email: zodType("email"),
  password: zodType("password"),
});

export { registerSchema, loginSchema };
