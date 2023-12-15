import Card from "../Card/Card";

const CardsContainer = ({ products }) => {
  return (
    <div className="grid grid-cols-4 w-fit">
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
export default CardsContainer;
