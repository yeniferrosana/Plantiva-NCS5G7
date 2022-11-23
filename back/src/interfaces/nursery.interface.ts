import { IRolesDocument } from "../database/models/roles.model";

export interface INursery {
  username: string;
  birthdate: Date;
  img: string;
  social: string;
  email: string;
  password: string;
  telephone: number;
  province: string;
  city: string;
  adress: string;
  role: IRolesDocument["_id"];
}
