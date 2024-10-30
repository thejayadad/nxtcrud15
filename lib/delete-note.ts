'use server'
import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";


export const deleteNote = async (id: string) => {
    try {
      await prisma.note.delete({
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to delete contact" };
    }
  
    revalidatePath("/contacts");
  };