import { zodObject, zodType } from "./utils";

const MAX_FILE_SIZE = 1000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

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
  content: zodType("string"),
});

const fetureSchema = zodObject({});

const uploadImageSchema = zodObject({
  file: zodType("any")
    .refine((files) => console.log("files", files))
    .refine((files) => files.size <= MAX_FILE_SIZE, "Max Size file is 1mb")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files.type), "Only Format .jpeg .jpg .png .gif"),
});

export { registerSchema, loginSchema, postingSchema, fetureSchema, uploadImageSchema };
