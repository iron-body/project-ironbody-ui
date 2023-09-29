import { useState } from 'react';

import {
  FilterContainer,
  categoriesStyles,
  recomendedStyles,
  SearchField,
  FormGroup,
  FormTitle,
  SearchInputButton,
  SearchIconButton,
  SearchFieldContainer,
  EraseInputButton,
  MobInpCont,
  ErrMessage,
} from './ProductsFilters.styled';

import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Select from 'react-select';
import { getCategoriesProducts } from '../../redux/products/selectors';
import { useEffect } from 'react';
import {
  getProductsThunk,
  getCategoriesProductsThunk,
  getAllFillteredProductsThunk,
  getFillterRecommendedProductsThunk,
} from '../../redux/products/productsOperations';

import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from '../../redux/selectors';

import { updateFilter } from '../../redux/filterSlice';

const optionsRecomended = [
  { value: 'All', label: 'All' },
  { value: 'false', label: 'Recommended' },
  { value: 'true', label: 'No recommended' },
];

const schema = yup.object().shape({
  searchInput: yup.string().matches(/^[a-zA-Z\s'-]+$/, 'Not NAme'),
});

export default function ProductsFilters() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const [localSearchInput, setLocalSearchInput] = useState(filterValue);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [recommended, setRecommended] = useState('');

  const categories = useSelector(getCategoriesProducts);

  function convertCategoriesToOptions(categoriesData) {
    return categoriesData.map(category => ({
      value: category.title,
      label: category.title.charAt(0).toUpperCase() + category.title.slice(1),
    }));
  }

  const optionsCategories = convertCategoriesToOptions(categories);

  useEffect(() => {
    dispatch(getCategoriesProductsThunk());
    dispatch(getProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (recommended.value !== 'All' && recommended.value !== undefined) {
      dispatch(
        getFillterRecommendedProductsThunk({
          categoryQuery: selectedCategory.value,
          searchParams: filterValue,
          recommendedQuery: recommended.value,
        }),
      );
    } else if (recommended.value === 'All' || recommended.value === undefined) {
      dispatch(
        getAllFillteredProductsThunk({
          categoryQuery: selectedCategory.value,
          searchParams: filterValue,
        }),
      );
    }
  }, [selectedCategory.value, filterValue, recommended.value, dispatch]);

  const onSearchValue = () => {
    getAllFillteredProductsThunk({
      categoryQuery: selectedCategory.value,
      searchParams: filterValue,
    }),
      dispatch(
        updateFilter({
          value: localSearchInput,
        }),
      );
  };

  const eraseInputValue = () => {
    dispatch(
      getAllFillteredProductsThunk({
        categoryQuery: selectedCategory.value,
        searchParams: filterValue,
      }),
    ),
      dispatch(
        updateFilter({
          value: '',
        }),
      ),
      setLocalSearchInput('');
    setSelectedCategory('');
  };

  return (
    <Formik
      initialValues={{ SerchInputValue: localSearchInput }}
      onSubmit={onSearchValue}
      validationSchema={schema}
    >
      <Form>
        <FormTitle>Filter</FormTitle>
        <FilterContainer>
          <FormGroup>
            <SearchFieldContainer>
              <SearchField
                type="text"
                name="searchInput"
                placeholder="Search"
                value={localSearchInput}
                onChange={e => setLocalSearchInput(e.target.value)}
              />
              <ErrMessage name="searchInput" render={msg => <p>{msg}</p>} />

              {localSearchInput.length > 0 && (
                <EraseInputButton type="button" onClick={eraseInputValue}>
                  <SearchIconButton
                    alt=""
                    src="/project-ironbody-ui/Erase.svg"
                  ></SearchIconButton>
                </EraseInputButton>
              )}

              <SearchInputButton type="submit" onSubmit={onSearchValue}>
                <SearchIconButton
                  alt=""
                  src="/project-ironbody-ui/search.svg"
                ></SearchIconButton>
              </SearchInputButton>
            </SearchFieldContainer>
          </FormGroup>

          <MobInpCont>
            <FormGroup>
              <Field
                name="categories"
                render={({ field }) => (
                  <Select
                    {...field}
                    options={optionsCategories}
                    isSearchable={false}
                    styles={categoriesStyles}
                    placeholder="Categories"
                    value={selectedCategory}
                    onChange={selectedOption => {
                      setSelectedCategory(selectedOption);
                    }}
                  />
                )}
              />
            </FormGroup>

            <FormGroup>
              <Field
                name="recomended"
                render={({ field }) => (
                  <Select
                    {...field}
                    options={optionsRecomended}
                    isSearchable={false}
                    styles={recomendedStyles}
                    value={recommended}
                    onChange={recommendedValue => {
                      setRecommended(recommendedValue);
                    }}
                  />
                )}
              />
            </FormGroup>
          </MobInpCont>
        </FilterContainer>
      </Form>
    </Formik>
  );
}
