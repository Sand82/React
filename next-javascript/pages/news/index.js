import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">NextJS is a grate Framework</Link>
        </li>
        <li>
          <Link href="/news/2">Somethink else</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
