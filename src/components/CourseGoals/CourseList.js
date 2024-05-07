import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({ items, onDelete }) => {
  return (
    <CourseUl>
      {items.map((item) => {
        return <CourseItem key={item.id} item={item} onDelete={onDelete} />;
      })}
    </CourseUl>
  );
};

export default CourseList;
