import bcrypt from "bcrypt";

export const comparePassword = async (
  password: string,
  userPassword: string
) => {
  return await bcrypt.compare(password, userPassword);
};
