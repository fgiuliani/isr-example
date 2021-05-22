export default function Isr({ slug, updatedAt }) {
  const timeString = new Date(updatedAt).toLocaleTimeString();

  return (
    <div className="container">
      <h1>Post: {slug}</h1>
      <div className="meta">
        Updated at <span className="time">{timeString}</span>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "post-1" } }, { params: { slug: "post-2" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
      updatedAt: Date.now(),
    },
    revalidate: 7,
  };
}
