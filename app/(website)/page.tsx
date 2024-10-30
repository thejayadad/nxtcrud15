import { Calendar } from "./_components/calendar/calendar";
import { getNotes } from "@/lib/get-notes";
import { TitleHeader } from "./_components/header/title-header";
import { EventTitle } from "./_components/header/event-title";
import { NotesTable } from "./_components/note/note-table";

export default async function Home() {
  const notes = await getNotes(); // Ensure this is awaited in a server or appropriate context

  return (
    <main className="w-full  h-[100vh]">
      <section className="mx-auto max-w-screen-lg p-4">
        <TitleHeader />
      <Calendar notes={notes} />
      <EventTitle />
      <NotesTable notes={notes} /> {/* Integrated NotesTable */}
      </section>
    </main>
  );
}
