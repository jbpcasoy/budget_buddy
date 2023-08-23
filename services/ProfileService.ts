import { Currency } from "@prisma/client";
import axios from "axios";

export interface CreateProfileParams {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  country: string;
  province: string;
  postalCode: string;
  city: string;
  street: string;
  currency: Currency;
}

async function createProfile(values: CreateProfileParams) {
  const profile = await axios.post("/api/profile", values);
  console.log({ profile });
}

const ProfileService = {
  createProfile,
};

export default ProfileService;
