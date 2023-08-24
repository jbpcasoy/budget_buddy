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
  return profile;
}

async function readProfile(id: string) {
  const profile = await axios.get("/api/profile", {
    params: {
      id,
    },
  });
  return profile;
}

export interface UpdateProfileParams {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  country?: string;
  province?: string;
  postalCode?: string;
  city?: string;
  street?: string;
  currency?: Currency;
}

async function updateProfile(id: string, values: UpdateProfileParams) {
  const profile = await axios.put("/api/profile", values, {
    params: { id },
  });
  return profile;
}

const ProfileService = {
  createProfile,
  readProfile,
  updateProfile,
};

export default ProfileService;
