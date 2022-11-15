import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'farhanmansuri@gmail.com',
      name: 'Farhan'

    }

  })
console.log(user)
}

main()
