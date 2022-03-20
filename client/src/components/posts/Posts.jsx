import Post from "../post/Post";


export default function Posts({ posts }) {
  return (

    <div class="album col-lg-8 col-md-8 col-sm-12 py-5 bg-light">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {posts.map((p) => (
            <Post post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
