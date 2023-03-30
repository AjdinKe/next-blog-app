import axios from "axios";
import Head from "next/head";

export const getStaticPaths = async () => {
  try {
    const { data } = await axios.get("https://retoolapi.dev/2b2Pf9/data");

    const paths = data.map((blogs) => {
      return {
        params: { id: blogs.id.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch {
    (error) => {
      console.log(error);
    };
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  try {
    const { data } = await axios.get("https://retoolapi.dev/2b2Pf9/data/" + id);

    return {
      props: { blogs: data },
    };
  } catch {
    (error) => {
      console.log(error);
    };
  }
};

const Blog = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Blog | {blogs.title}</title>
      </Head>
      <div className="p-24 px-48 h-full relative">
        <h1 className=" text-6xl pb-8 font-bold ">{blogs.title}</h1>
        <p className="pt-6 text-justify text-xl leading-8">{blogs.body}</p>
        <p className="py-16 text-2xl font-semibold">-{blogs.author}</p>
      </div>
    </>
  );
};

export default Blog;
