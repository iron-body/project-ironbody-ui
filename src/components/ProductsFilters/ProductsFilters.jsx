// import React from 'react';
import {
  FilterContainer,
  categoriesStyles,
  recomendedStyles,
  SearchField,
  FormGroup,
  FormTitle,
} from './ProductsFilters.styled';

import { Formik, Form, Field } from 'formik';
import Select from 'react-select';

// const initialValues = {
//   searchInput: '',
//   dropdown1: null,
//   dropdown2: null,
// };

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
  const initialValues = {
    searchInput: '',
    categories: null,
    recomended: null, 
  };

  const handleSubmit = values => {
    console.log('Form submitted with values:', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <FormTitle>Filter</FormTitle>
        <FilterContainer>
          <FormGroup>
            <SearchField
              type="text"
              id="searchInput"
              name="searchInput"
              className="form-control"
              placeholder="Search"
            />
          </FormGroup>
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
        </FilterContainer>
      </Form>
    </Formik>
  );
}
