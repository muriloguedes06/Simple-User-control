import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";

export const edit = async ({ email, user, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    return prisma.user.update({
        where: {
            email: email
        },
        data: {
            name: user,
            email: email,
            password: hashedPassword
        }
    });
};

export const deleter = async ({ user, email, password }) => {
    return prisma.user.delete({
        where: {
            email: email
        }
    });
};

export const find = async ({email}) => {
    return prisma.user.findFirst({
        where: {
            email: email
        },
        select: {
            id: true,
            email: true,
            name: true
        }
    })
}