import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NewsLetters from "../components/NewsLetters/NewsLetters";

const layout = ({ allPostCard, posts }) => {
  return (
    <div>
      <Header />
      <section className="mb-10">{posts}</section>
      <hr/>
      <h1 className="text-center font-bold text-3xl">Other Blogs..</h1>
      <section>{allPostCard}</section>
      <NewsLetters />
      <Footer />
    </div>
  );
};

export default layout;
