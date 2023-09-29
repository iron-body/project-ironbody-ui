import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  StyledLink,
  Ul,
  Container,
  StyledReactPaginate,
} from './ExercisesSubcategoriesList.styled';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const ExercisesSubcategoriesList = ({
  onSelectSubcategory,
  nameExercise,
  subCategories,
}) => {
  const location = useLocation();

  const exerciseFiltered = useSelector(state => state.exercises.filtered);
  const categorie = exerciseFiltered.filter(
    categorie => categorie.filter === subCategories,
  );

  const [currentItems, setCurrentItems] = useState([]);

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(categorie.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(categorie.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % categorie.length;
    setItemOffset(newOffset);
  };

  //?

  const selectSubcategory = name => {
    onSelectSubcategory(subCategories);
    nameExercise(name);
  };

  return (
    <>
      <Container>
        <Ul>
          {currentItems.map(item => (
            <StyledLink
              onClick={() => selectSubcategory(item.name)}
              key={item.name}
              to={`${subCategories}/${item.name}`}
              state={{ from: location }}
            >
              <ExercisesSubcategoriesItem
                name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                nameCategorie={subCategories}
                img={item.imgURL}
              />
            </StyledLink>
          ))}
        </Ul>
      </Container>
      {/* <StyledReactPaginate> */}
      <StyledReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
      {/* </StyledReactPaginate> */}
    </>
  );
};
