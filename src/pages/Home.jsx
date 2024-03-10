import CategoryBar from "../components/CategoryBar/CategoryBar";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <CategoryBar />
      <section>
        <div>RecommendedProducts</div>
      </section>
      <section>
        <div>FeaturedProducts</div>
      </section>
    </div>
  );
};

export default Home;
