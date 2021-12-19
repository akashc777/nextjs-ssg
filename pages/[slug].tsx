import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
    slug: string;
}

const Post: NextPage<IParams> = ({ contents }) => {
    const router: NextRouter = useRouter();
    console.log("router: ", router);

    return (
        <div>
            <div>contents below</div>
            <pre>{contents}</pre>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const postsDirectory = path.join(process.cwd(), "posts");
    const files = fs.readdirSync(postsDirectory);
    console.log("files:", files);
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));
    console.log("paths: ", paths);

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<IParams> = async (context) => {
    const { slug } = context.params as IParams;

    // posts/faq.md
    const contents = fs
        .readFileSync(path.join(process.cwd(), "posts", slug + ".md"))
        .toString();

    return {
        props: {
            contents,
        },
    };
};

export default Post;
