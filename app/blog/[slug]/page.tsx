import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  //pour générer automatiquement tous les posts
  const myPosts = await prisma.post.findMany({
    where: {
      published: true,
    },
  });

  return myPosts.map((post) => ({
    slug: post.slug,
  }));
};

type Props = {
  params: {
    slug: string;
  };
};

const Article = async ({ params: { slug } }: Props) => {
  const post = await prisma.post.findUnique({
    where: {
      slug,
      published: true,
    },
  });

  if (!post) return notFound();

  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <p>{post.content}</p>
    </>
  );
};
export default Article;
