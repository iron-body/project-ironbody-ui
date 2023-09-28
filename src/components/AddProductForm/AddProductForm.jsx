import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

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

import { addProductThunk } from '../../redux/products/productsOperations';

export default function AddProductForm({ productCalc, onClose }) {
  const { title, calories, category, recommended, _id } = productCalc;
  const [gramsInpValue, setGramsInpValue] = useState(100);
  const [modalStatus, setIsModalOpenSuccess] = useState(true);

  const formattedDate = new Date().toISOString();

  const dispatch = useDispatch();

  const objSubmitProduct = {
    title: title,
    category: category,
    calories: calories,
    amount: gramsInpValue,
    date: formattedDate,
    recommended: recommended,
    productid: _id,
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
      setIsModalOpenSuccess(false);
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
                onChange={e => setGramsInpValue(e.target.value)}
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
