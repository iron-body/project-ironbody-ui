import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { format } from 'date-fns';

import {
  FoodName,
  CalcContainer,
  CaloriesValue,
  CalcCalories,
  CalcVelueCalories,
  BtnFormContainer,
  AddProductBtn,
  ExitBtn,
  IconExitBtn,
  CancelBtn,
  Unit,
} from './AddProductForm.styled';
import AddProductSuccess from '../AddProductSuccess/AddProductSuccess';
import { getProducts } from '../../redux/products/selectors';
import { useSelector } from 'react-redux';

import { addProductThunk } from '../../redux/products/productsOperations';

export default function AddProductForm({ productCalc, onClose }) {
  const { title, calories, category, recommended, _id } = productCalc;
  const [gramsInpValue, setGramsInpValue] = useState(100);
  const [modalStatus, setIsModalOpenSuccess] = useState(true);
  const { error } = useSelector(getProducts);

  const date = new Date(2023, 8, 29);
  const formattedDate = format(date, 'dd-MM-yyyy');

  const dispatch = useDispatch();

  const objSubmitProduct = {
    amount: gramsInpValue,
    productid: _id,
    calories: calories,
    category: category,
    title: title,
    recommended: recommended,

    date: formattedDate,
  };

  const calcCalories = () => {
    let result = (calories * gramsInpValue) / 100;

    return result;
  };

  const handleClose = () => {
    onClose();
  };

  const handleSubmitProduct = async () => {
    try {
      await dispatch(addProductThunk(objSubmitProduct));
      dispatch(setIsModalOpenSuccess(false));
    } catch (error) {
      console.log(error.massage);
    }
  };

  return (
    <>
      <ExitBtn onClick={handleClose}>
        <IconExitBtn
          alt=""
          src="/project-ironbody-ui/ExitIcon.svg"
        ></IconExitBtn>
      </ExitBtn>
      {modalStatus ? (
        <Formik initialValues={objSubmitProduct} onSubmit={handleSubmitProduct}>
          <Form autoComplete="off">
            <CalcContainer>
              <FoodName>
                {' '}
                {title.length > 20 ? ` ${title.slice(0, 20)}... ` : title}
              </FoodName>

              <CaloriesValue
                value={gramsInpValue}
                onChange={e => {
                  const inputValue = e.target.value;
                  if (/^\d*$/.test(inputValue)) {
                    setGramsInpValue(inputValue);
                  }
                }}
                onKeyPress={e => {
                  if (isNaN(Number(e.key))) {
                    e.preventDefault();
                  }
                }}
              />
              <Unit>grams</Unit>
            </CalcContainer>
            <CalcCalories>
              Calories: <CalcVelueCalories>{calcCalories()}</CalcVelueCalories>{' '}
            </CalcCalories>

            <BtnFormContainer>
              <AddProductBtn
                onSubmit={handleSubmitProduct}
                calories={calcCalories()}
              >
                Add to diary
              </AddProductBtn>
              <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
            </BtnFormContainer>
          </Form>
        </Formik>
      ) : (
        <AddProductSuccess onClose={onClose} />
      )}
    </>
  );
}
