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
  ProductWrapper,
} from './Product.styled';
import { useSelector } from 'react-redux';

import { selectParamsValues } from '../../redux/params/paramsSlice';

export default function Product({ product, openModal }) {
  const { title, calories, category, weight, groupBloodNotAllowed } = product;
  const clientParams = useSelector(selectParamsValues);

  const searchRecommendedProduct = () => {
    for (const key in groupBloodNotAllowed) {
      const value = groupBloodNotAllowed[key];

      if (key === clientParams.blood && value === false) {
        return value;
      } else {
        return value;
      }
    }
  };

  const recommendedParams = searchRecommendedProduct();

  const handleButtonClick = () => {
    openModal();
    console.log(groupBloodNotAllowed);
  };

  return (
    <>
      <ProductWrapper>
        <NavCard>
          <TitleCard>DIET</TitleCard>
          <RecomendedInfo>
            <RecomendedMarker
              style={
                !recommendedParams
                  ? { background: 'green' }
                  : { background: 'red' }
              }
            />
            <RecomendedTitle>
              {' '}
              {!recommendedParams ? 'Recomended' : 'No recommended'}{' '}
            </RecomendedTitle>
            <ButtonItem onClick={handleButtonClick}>
              Add
              <ButtonIcon alt="" src="/project-ironbody-ui/arrow.svg" />
            </ButtonItem>
          </RecomendedInfo>
        </NavCard>
        <FoodName>
          <FoodIcon alt="" src="/project-ironbody-ui/product-icon.svg" />
          {title.length > 20 ? ` ${title.slice(0, 20)}... ` : title}
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
