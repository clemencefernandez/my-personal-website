import prisma from "@/lib/prisma";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

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

  if (!post) return <></>; // à changer

  return (
    <div>
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Clémence Fernandez - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {post.title}
        </span>
      </h1>

      <Image
        src={post.urlImage}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};
export default Article;
