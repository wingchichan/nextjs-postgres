import pg from "pg";

export default async function PostsPage() {
  const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
  });

  const posts = await db.query(`SELECT * FROM posts`);
  const data = posts.rows;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
