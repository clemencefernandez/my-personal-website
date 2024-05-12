import { Post } from "@prisma/client";
import DateFormatter from "./DateFormatter";
import { PostTitle } from "./PostTitle";
import Image from "next/image";

type Props = {
  post: Pick<Post, "title" | "createdAt" | "urlImage">;
};

export function PostHeader({ post: { title, urlImage, createdAt } }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <Image src={urlImage} width={800} height={800} alt={""} priority />

      <div className="max-w-2xl mx-auto mb-6 text-lg">
        <DateFormatter date={createdAt} />
      </div>
    </>
  );
}
