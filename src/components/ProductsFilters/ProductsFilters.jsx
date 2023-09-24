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
} from './ProductsFilters.styled';

import { Formik, Form, Field } from 'formik';
import Select from 'react-select';
// import {initialValue} from '../../redux/filterSlice'
import { getCategoriesProducts } from '../../redux/products/selectors';
import { useEffect } from 'react';
import {
  getCategoriesProductsThunk,
  getCategoryProductsThunk,
  getAllFillterProductsThunk,
} from '../../redux/products/productsOperations';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilterValue, getCategoryValue } from '../../redux/selectors';

import { updateFilter } from '../../redux/filterSlice';

const optionsRecomended = [
  { value: 'All', label: 'All' },
  { value: 'Recommended', label: 'Recommended' },
  { value: 'No recommended', label: 'No recommended' },
];

export default function ProductsFilters() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const categoryValue = useSelector(getCategoryValue);

  const [localSearchInput, setLocalSearchInput] = useState(filterValue);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getAllFillterProductsThunk({
        categoryQuery: categoryValue,
        serchParams: filterValue,
      }),
    );
  }, [categoryValue, filterValue, dispatch]);

  const onSearchValue = () => {
    dispatch(updateFilter({ value: localSearchInput, selectedCategory }));
    console.log(localSearchInput);
    console.log(selectedCategory);
  };

  const eraseInputValue = () => {
    dispatch(updateFilter({ value: '', selectedCategory: '' }));
    setLocalSearchInput('');
    setSelectedCategory('');
  };

  const updateCategoryValue = value => {
    setSelectedCategory(value);
    dispatch(getCategoryProductsThunk(value));
  };

  return (
    <Formik
      initialValues={{ SerchInputValue: filterValue }}
      onSubmit={onSearchValue}
    >
      <Form>
        <FormTitle>Filter</FormTitle>
        <FilterContainer>
          <FormGroup>
            <SearchFieldContainer>
              <SearchField
                type="text"
                name="searchInputProduct"
                placeholder="Search"
                value={localSearchInput}
                onChange={e => setLocalSearchInput(e.target.value)}
              />

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
                      updateCategoryValue(selectedOption.value);
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
