// import React from 'react';
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

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilterValue } from '../../redux/selectors';
import { updateFilter } from '../../redux/filterSlice';

const optionsCategories = [
  { value: 'Alcoholic drinks', label: 'Alcoholic drinks' },
  { value: 'Berries', label: 'Berries' },
  { value: 'Cereals', label: 'Cereals' },
  { value: 'Alcoholic drinks', label: 'Alcoholic drinks' },
  { value: 'Berries', label: 'Berries' },
  { value: 'Cereals', label: 'Cereals' },
  { value: 'Alcoholic drinks', label: 'Alcoholic drinks' },
  { value: 'Berries', label: 'Berries' },
  { value: 'Cereals', label: 'Cereals' },
  { value: 'Alcoholic drinks', label: 'Alcoholic drinks' },
  { value: 'Berries', label: 'Berries' },
  { value: 'Cereals', label: 'Cereals' },
  { value: 'Alcoholic drinks', label: 'Alcoholic drinks' },
  { value: 'Berries', label: 'Berries' },
  { value: 'Cereals', label: 'Cereals' },
  { value: 'Alcoholic drinks', label: 'Alcoholic drinks' },
  { value: 'Berries', label: 'Berries' },
  { value: 'Cereals', label: 'Cereals' },
];

const optionsRecomended = [
  { value: 'All', label: 'All' },
  { value: 'Recommended', label: 'Recommended' },
  { value: 'No recommended', label: 'No recommended' },
];

export default function ProductsFilters() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const onSearchValue = value => {
    dispatch(updateFilter(value));
    console.log(filterValue);
  };

  return (
    <Formik
      initialValues={{ searchInputProduct: filterValue }}
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
              />
              <EraseInputButton>
                <SearchIconButton
                  alt=""
                  src="/project-ironbody-ui/Erase.svg"
                ></SearchIconButton>
              </EraseInputButton>
              <SearchInputButton>
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
