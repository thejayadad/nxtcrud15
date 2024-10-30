'use server'
import { prisma } from "./prisma";


export const getNotes = async ()=> {
    try {
        const notes = await prisma.note.findMany({})
        return notes
    } catch (error) {
        console.log("Error " + error)
        throw new Error("Failed to fetch contact data");

    }
}