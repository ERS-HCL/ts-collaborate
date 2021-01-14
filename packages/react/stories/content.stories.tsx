import React from 'react';
import { Slug, Bold , Zop } from '../src';

export default { title: 'TS Collaborate/Components' };

export const SlugComponent = () => {
  return <Slug message="This is a Slug" />;
};

export const BoldComponent = () => {
  return <Bold message="This is a bold message" />;
};

export const ZopComponent = () => {
  return <Zop message="This is a zop message" />;
};