import {
  TitleCard,
  NavCard,
  RecomendedMarker,
  RecomendedTitle,
  RecomendedInfo,
  ButtonItem,
  ButtonIcon,
  FoodName,
  FoodParams,
  NameParams,
  ParamsValue,
    FoodIcon,
  ProductWrapper
} from './Product.styled';

export default function Product({ product }) {
  const { foodName, calories, category, weight } = product;

  return (
    <>
      <ProductWrapper>
        <NavCard>
          <TitleCard>DIET</TitleCard>
          <RecomendedInfo>
            <RecomendedMarker />
            <RecomendedTitle> Recomended </RecomendedTitle>
            <ButtonItem>
              Add
              <ButtonIcon alt="" src="../../../public/arrow.svg" />
            </ButtonItem>
          </RecomendedInfo>
        </NavCard>
        <FoodName>
          <FoodIcon alt="" src="../../../public/product-icon.svg" /> {foodName}
        </FoodName>
        <FoodParams>
          <NameParams>
            Calories: <ParamsValue>{calories}</ParamsValue>
          </NameParams>
          <NameParams>
            Category: <ParamsValue>{category}</ParamsValue>
          </NameParams>
          <NameParams>
            Weight: <ParamsValue>{weight}</ParamsValue>{' '}
          </NameParams>
        </FoodParams>
      </ProductWrapper>
    </>
  );
}
