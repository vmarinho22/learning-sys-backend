import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const sector = await prisma.sector.create({
      data: {
        name: 'Sector System Admin',
        description: 'Sector System Admin'
      }
    });

    console.log(sector);

    const user = await prisma.user.create({
      data: {
        name: 'system',
        mail: 'system',
        password:
          '$2a$10$1LJecV8LJGLdK/kMJUiLge7dnrA4YheTQO2TVFzsBWCf1v21yKvr.',
        permission: 0,
        sectorId: sector.id
      }
    });

    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
