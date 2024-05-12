import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { PostHeader } from "./components/PostHeader";

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
    <div>
      <article>
        <PostHeader post={post} />
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
};
export default Article;
