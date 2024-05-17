import "../styles/Note.css";

export interface NoteType {
  id: string;
  title: string;
  content: string;
  created_at: any;
}

function Note({
  note,
  onDelete,
}: {
  note: NoteType;
  onDelete: (id: string) => void;
}) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
