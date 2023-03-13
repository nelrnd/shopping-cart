import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <section className="centered">
        <h2>The best of clothing</h2>
        <p>
          Discover our catalog of carefully selected menswear clothing from top
          brands like Stussy and The North Face.
        </p>
        <Link to="/shop" className="button main" style={{ width: 120 }}>
          Shop
        </Link>
      </section>
    </div>
  );
};

export default Home;
