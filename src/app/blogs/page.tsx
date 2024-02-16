import { quickSand } from "~/lib/font";
import { Footer } from "../(landing)/footer";

const blogs = [
  {
    name: "How to use the useReducer hook in React",
    description:
      "The useReducer hook is a powerful tool for managing state in React. It is a more advanced alternative to the useState hook. It is especially useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. In this article, I will show you how to use the useReducer hook in React.",
    page: "/",
    link: "https://medium.com/@dillionmegida/how-to-use-the-usereducer-hook-in-react-7e3e5b3aaea1",

  },
  {
    name: "How to use the useReducer hook in React",
    description:
      "The useReducer hook is a powerful tool for managing state in React. It is a more advanced alternative to the useState hook. It is especially useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. In this article, I will show you how to use the useReducer hook in React.",
    page: "/",
    link: "https://medium.com/@dillionmegida/how-to-use-the-usereducer-hook-in-react-7e3e5b3aaea1",


  }, {
    name: "How to use the useReducer hook in React",
    description:
      "The useReducer hook is a powerful tool for managing state in React. It is a more advanced alternative to the useState hook. It is especially useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. In this article, I will show you how to use the useReducer hook in React.",
    page: "/",
    link: "https://medium.com/@dillionmegida/how-to-use-the-usereducer-hook-in-react-7e3e5b3aaea1",


  },
  {
    name: "How to use the useReducer hook in React",
    description:
      "The useReducer hook is a powerful tool for managing state in React. It is a more advanced alternative to the useState hook. It is especially useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. In this article, I will show you how to use the useReducer hook in React.",
    page: "/",
    link: "https://medium.com/@dillionmegida/how-to-use-the-usereducer-hook-in-react-7e3e5b3aaea1",


  }, {
    name: "How to use the useReducer hook in React",
    description:
      "The useReducer hook is a powerful tool for managing state in React. It is a more advanced alternative to the useState hook. It is especially useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. In this article, I will show you how to use the useReducer hook in React.",
    page: "/",
    link: "https://medium.com/@dillionmegida/how-to-use-the-usereducer-hook-in-react-7e3e5b3aaea1",


  }
]

export default function BlogsPage() {
  return (
    <section >
      <div className="mx-[170px] my-10 flex flex-col">
        <h1
          className={`light:text-[#0C1927] w-[1000px] text-[40px] dark:text-white  ${quickSand.className}`}
        >
          Sometimes writing code without sharing some gems is like cooking a
          delicious meal and not sharing it with anyone.
        </h1>
        <p className="light:text-[#0C1927] my-5 w-[700px] text-[20px] dark:text-[#827c7c]">
          I have been writing code for a while now and I have learned a lot of
          things that I think are worth sharing. I have written a few articles
          on medium and hashnode. I will be sharing some of them here. I hope you
          find them helpful. I will also be sharing some of my thoughts on
          programming and software development in general.
        </p>
        <div className="h-4"></div>
        <h1
          className={`light:text-[#0C1927] text-[40px] dark:text-white  ${quickSand.className}`}>
          My Articles
        </h1>
        {/* <div className="h-4"></div> */}
        {/* <div id="search">
          <input
            type="text"
            placeholder="Search for articles"
            className="light:text-[#0C1927] bg-transparent dark:text-[#827c7c] w-[300px] h-[50px] border-[0.1px] border-[#e5e5e5] rounded-[10px] p-5"

          />
        </div> */}
        <div className="grid grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col my-10  dark:bg-transparent bg-white p-5 rounded-[20px] border-[0.1px] border-[#e5e5e5] "
            >
              <h1
                className={`light:text-[#0C1927] text-[30px] dark:text-white ${quickSand.className}`}
              >
                {blog.name}
              </h1>
              <p className="mx-auto light:text-[#0C1927] my-5 dark:text-[#827c7c]">
                {blog.description}
              </p>
              <a
                href={blog.link}
                target="_blank"
                className="light:text-[#0C1927] dark:text-[#827c7c] text-[20px] hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
        <div className="h-24"></div>

        <Footer />
      </div>
    </section >
  );
}
