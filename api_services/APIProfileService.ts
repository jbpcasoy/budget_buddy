import { Prisma, PrismaClient } from "@prisma/client";

async function postProfile(values: Prisma.ProfileCreateInput) {
  const prisma = new PrismaClient();
  const profile = await prisma.profile.create({
    data: values,
  });
  await prisma.$disconnect();
  return profile;
}

async function getProfile(userId: string) {
  const prisma = new PrismaClient();
  const profile = await prisma.profile.findUnique({
    where: {
      userId,
    },
  });
  await prisma.$disconnect();
  return profile;
}

async function updateProfile(
  userId: string,
  values: Prisma.ProfileUpdateInput
) {
  const prisma = new PrismaClient();
  const profile = await prisma.profile.update({
    where: {
      userId,
    },
    data: values,
  });
  await prisma.$disconnect();
  return profile;
}

const APIProfileService = {
  postProfile,
  getProfile,
  updateProfile,
};

export default APIProfileService;
