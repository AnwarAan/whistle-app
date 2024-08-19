const structure = [
  { name: "name", title: "Name", type: "text" },
  { name: "nickname", title: "nickname", type: "text" },
  { name: "email", title: "Email", type: "text" },
  { name: "password", title: "Password", type: "text" },
];

const url = "/auth/register";
const model = { structure, url };
export default model;
