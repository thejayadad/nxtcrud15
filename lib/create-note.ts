'use server';
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";

// Define the schema reflecting the Note model
const NoteSchema = z.object({
    title: z.string().min(2, { message: 'Title must be at least 2 characters long' }),
    color: z.string(), // Optionally, you can add more validations
    details: z.string(), // Use for date as a string if needed
    minutes: z.string()
});

export const saveNote = async (prevState: any, formData: FormData) => {
    const validatedFields = NoteSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.note.create({
            data: {
                title: validatedFields.data.title,
                color: validatedFields.data.color,
                details: validatedFields.data.details, // Use validated data
                minutes: validatedFields.data.minutes, // Use validated data
            }
        });
    } catch (error) {
        console.log("Error: " + error);
        return { message: "Failed to create note." };
    }

    revalidatePath("/");
    redirect("/");
};
