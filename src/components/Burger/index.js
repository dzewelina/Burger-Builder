import React from 'react';

import classes from './index.module.css';

import BurgerIngredient from './BurgerIngredient';

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(ingKey =>
      [...Array(ingredients[ingKey])].map((_, i) => (
        <BurgerIngredient key={ingKey + i} type={ingKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={'bread-top'} />
      {transformedIngredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  );
};

export default Burger;
