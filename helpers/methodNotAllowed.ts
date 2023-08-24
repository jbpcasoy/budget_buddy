import { NextApiRequest, NextApiResponse } from "next";

export default async function methodNotAllowed(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(405).json({ error: `(${req.method}) Method not allowed` });
}
