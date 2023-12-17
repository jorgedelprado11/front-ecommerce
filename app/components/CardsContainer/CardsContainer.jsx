import Card from "../Card/Card";

const CardsContainer = ({ products }) => {
  return (
    <div className="grid xl:grid-cols-4 w-fit lg:grid-cols-3 grid-cols-1">
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
export default CardsContainer;
