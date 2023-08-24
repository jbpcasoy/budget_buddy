import APIProfileService from "@/api_services/APIProfileService";
import APISessionService from "@/api_services/APISessionService";
import methodNotAllowed from "@/helpers/methodNotAllowed";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      return post(req, res);
    case "GET":
      return get(req, res);
    case "PUT":
      return put(req, res);
    default:
      return methodNotAllowed(req, res);
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

  return res.status(200).json({ data: profile, error: null });
}

async function get(req: NextApiRequest, res: NextApiResponse) {
  const session = await APISessionService.getSession(req, res);

  if (!session.user?.id) {
    return res.status(400).json({
      data: null,
      error: "Authentication required",
    });
  }

  try {
    const profile = await APIProfileService.getProfile(session.user?.id);
    return res.status(200).json({
      data: profile,
      error: null,
    });
  } catch (error: any) {
    return res.status(400).json({
      data: null,
      error: error.message,
    });
  }
}

async function put(req: NextApiRequest, res: NextApiResponse) {
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

  if (!session.user?.id) {
    return res.status(400).json({
      data: null,
      error: "Authentication required",
    });
  }

  try {
    const profile = await APIProfileService.updateProfile(session.user?.id, {
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
    return res.status(200).json({
      data: profile,
      error: null,
    });
  } catch (error: any) {
    return res.status(400).json({
      data: null,
      error: error.message,
    });
  }
}
