import pg from "pg";

// export default async function SinglePostPage({ params }) {
//   const slug = await params;
//   const db = new pg.Pool({ connectionString: process.env.DB_CONN });
//   const post = await db.query(`SELECT * FROM posts WHERE id = ${slug.id}`);

//   return (
//     <div>
//       {post.map((post) => (
//         <div key={post.id}>
//           <h2 key={post.id}>{post.title}</h2>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

export default async function Post({ params }) {
  const slug = await params;
  const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
  });

  const post = (await db.query(`SELECT * FROM posts WHERE id = ${slug.id};`))
    .rows;

  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>
          <h2 key={post.id}>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
