import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pg from "pg";

export default function Form() {
  async function handleSavePost(formData) {
    "use server";
    const db = new pg.Pool({ connectionString: process.env.DB_CONN });
    const title = formData.get("title");
    const content = formData.get("content");
    await db.query(
      `INSERT INTO workshop_posts (title, content) VALUES ($1, $2)`,
      [title, content]
    );

    revalidatePath("/posts");
    redirect("/posts");
  }
  return (
    <form action={handleSavePost}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" placeholder="title" type="text"></input>
      <label htmlFor="content">Title</label>
      <textarea id="content" name="content" placeholder="content"></textarea>
      <button type="submit">Save</button>
    </form>
  );
}
