export default function Product(product) {
  const { foodName, calories, category, weight } = product;

  return (
    <>
      <h2>{foodName}</h2>
      <p>{calories}</p>
      <p>{category}</p>
      <p>{weight}</p>
    </>
  );
}
