import React from 'react';

import classes from './index.module.css';

import BurgerIngredient from './BurgerIngredient';

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map(ingKey =>
    [...Array(ingredients[ingKey])].map((_, i) => (
      <BurgerIngredient key={ingKey + i} type={ingKey} />
    ))
  );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={'bread-top'} />
      {transformedIngredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  );
};

export default Burger;
