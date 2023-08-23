import { Prisma, PrismaClient } from "@prisma/client";

async function postProfile(values: Prisma.ProfileCreateInput) {
  const prisma = new PrismaClient();
  const profile = await prisma.profile.create({
    data: values,
  });
  await prisma.$disconnect();
  return profile;
}

const APIProfileService = {
  postProfile,
};

export default APIProfileService;
