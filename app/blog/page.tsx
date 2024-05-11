import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

const Blog = async () => {
  const allPost = await prisma.post.findMany({
    where: {
      published: true,
    },
  });
  return (
    <>
      {allPost.map((post) => {
        return (
          <Link key={post.id} href={`/blog/${post.slug}`} title={post.title}>
            {post.title}
            <Image
              alt={post.title}
              src={post.urlImage}
              height={200}
              width={200}
              unoptimized //Pour utiliser une image dont on ne possède pas l'url
            />
          </Link>
        );
      })}
    </>
  );
};
export default Blog;
