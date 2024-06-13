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

const postingSchema = zodObject({
  post: zodType("string"),
});

export { registerSchema, loginSchema, postingSchema };
