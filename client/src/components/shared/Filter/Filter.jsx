import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import sprite from 'assets/icons/sprite.svg';

import { FilterDiv, Button } from './Filter.styled';

const Filter = ({ selector, reducer }) => {
  const filterValue = useSelector(selector);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollOnActive = activeDomEl => {
      activeDomEl?.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    };
    if (pathname.includes('/cluster')) {
      const activeDomEl = document.getElementById('active-cluster');
      scrollOnActive(activeDomEl);
    }
    if (pathname.includes('/element')) {
      const activeDomEl = document.getElementById('active-element');
      scrollOnActive(activeDomEl);
    }
    if (pathname.includes('/gdrive')) {
      const activeDomEl = document.getElementById('active-file');
      scrollOnActive(activeDomEl);
    }
  }, [filterValue, pathname]);

  // Serch on icon click
  const handleClick = e => e.target.previousElementSibling.focus();
  // Serch on change
  const handleSearch = e => {
    const filterValue = e.target.value.toLowerCase();
    dispatch(reducer(filterValue));
  };
  const handleClean = e => {
    dispatch(reducer(''));
    e.currentTarget.parentElement.firstElementChild.focus();
  };

  return (
    <FilterDiv>
      <input
        type="text"
        name="filter"
        placeholder="Search..."
        autoComplete="off"
        value={filterValue}
        onChange={handleSearch}
      />

      <BsSearch size="16" onClick={handleClick} />

      {filterValue && (
        <Button onClick={handleClean}>
          <svg width="11" height="11">
            <use href={`${sprite}#x`}></use>
          </svg>
        </Button>
      )}
    </FilterDiv>
  );
};

export default Filter;

Filter.propTypes = {
  selector: PropTypes.func.isRequired,
  reducer: PropTypes.func.isRequired,
};
