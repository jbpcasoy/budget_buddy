import APIProfileService from "@/api_services/APIProfileService";
import APISessionService from "@/api_services/APISessionService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      return post(req, res);
  }
}

async function post(req: NextApiRequest, res: NextApiResponse) {
  const session = await APISessionService.getSession(req, res);
  const {
    city,
    country,
    currency,
    email,
    firstName,
    lastName,
    postalCode,
    province,
    street,
    id,
    middleName,
  } = req.body;

  const profile = await APIProfileService.postProfile({
    User: {
      connect: {
        id: session.user?.id,
      },
    },
    city,
    country,
    currency,
    email,
    firstName,
    lastName,
    postalCode,
    province,
    street,
    id,
    middleName,
  });

  return res.status(200).json(profile);
}
