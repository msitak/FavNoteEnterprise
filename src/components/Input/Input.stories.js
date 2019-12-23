import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

export const Regular = () => <Input placeholder="login" />;

export const SearchBar = () => <Input placeholder="search" search />;
