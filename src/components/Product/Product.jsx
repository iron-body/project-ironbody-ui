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

export default function Product({ product, openModal }) {
  const { foodName, calories, category, weight } = product;

    const handleButtonClick = () => {
    openModal();
  };

  return (
    <>
      <ProductWrapper>
        <NavCard>
          <TitleCard>DIET</TitleCard>
          <RecomendedInfo>
            <RecomendedMarker />
            <RecomendedTitle> Recomended </RecomendedTitle>
            <ButtonItem onClick={handleButtonClick}>
              Add
              <ButtonIcon alt="" src="/project-ironbody-ui/arrow.svg" />
            </ButtonItem>
          </RecomendedInfo>
        </NavCard>
        <FoodName>
          <FoodIcon alt="" src="/project-ironbody-ui/product-icon.svg" /> {foodName}
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
