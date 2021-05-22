export default function Ssr({ slug, updatedAt }) {
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

export async function getServerSideProps(context) {
  const { slug } = context.query;

  return { props: { slug: slug, updatedAt: Date.now() } };
}
