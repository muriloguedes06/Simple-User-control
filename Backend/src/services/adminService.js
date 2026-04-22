import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";

export const find = async (userFromToken) => {
    const user = await prisma.user.findUnique({
        where: { id: userFromToken.id }
    });

    if (!user) {
        throw new Error("User not found");
    }

    if (user.role !== "Admin") {
        throw new Error("Unauthorized");
    }

    return prisma.user.findMany();
};

export const update = async (userFromToken, id, data) => {
    const user = await prisma.user.findUnique({
        where: { id: userFromToken.id }
    });

    if (user.role !== "Admin") {
        throw new Error("Unauthorized");
    }

    if (!id) {
        throw new Error("ID inválido");
    }

    return prisma.user.update({
        where: { id },
        data
    });
};

export const remove = async (userFromToken, id) => {
    const user = await prisma.user.findUnique({
        where: { id: userFromToken.id }
    });

    if (user.role !== "Admin") {
        throw new Error("Unauthorized");
    }

    if (!id) {
        throw new Error("ID inválido");
    }

    return prisma.user.delete({
        where: { id }
    });
};