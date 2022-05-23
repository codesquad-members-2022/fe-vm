/* eslint-disable react/prop-types */
import React from 'react';

const addCommasToNumber = number => number.toLocaleString('en');

const compose = providers =>
  providers.reduce(
    (Prev, Curr) =>
      function ({ children }) {
        return (
          <Prev>
            <Curr>{children}</Curr>
          </Prev>
        );
      }
  );

export { addCommasToNumber, compose };
