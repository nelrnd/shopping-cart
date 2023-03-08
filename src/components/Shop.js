import ProductCard from './ProductCard';

const Shop = () => {
  return (
    <div>
      <h1>Shop page</h1>

      <div className="grid">
        <ProductCard
          title="ARC'TERYX DELTA HALF ZIP HOODY"
          imageUrl="https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/1/6/16-12-2022_JB_X000005160-018561_2_1.jpg"
          price="180"
        />
        <ProductCard
          title="ARC'TERYX DELTA HALF ZIP HOODY"
          imageUrl="https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/1/6/16-12-2022_JB_X000005160-018561_2_1.jpg"
          price="180"
        />
        <ProductCard
          title="ARC'TERYX DELTA HALF ZIP HOODY"
          imageUrl="https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/1/6/16-12-2022_JB_X000005160-018561_2_1.jpg"
          price="180"
        />
      </div>
    </div>
  );
};

export default Shop;
