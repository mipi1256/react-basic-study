import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({ items }) => {
  // 선택된 연도 상태값 관리
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString(),
  );

  // 자식 컴포넌트 ExpenseFilter에 잇는 선택 연도를 끌어올리는 함수.
  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses: ', selectedYear);
    setFilteredYear(selectedYear);
  };

  //ExpenseItem을 동적으로 렌더링하기.
  /*
  const iterateExpenseItem = () => {
    // 콜백 함수의 매개값으로 배열의 요소가 하나씩 전달됨.
    // 콜백 함수는 배열 요소만큰 반복됨
    // map의 리턴값: 함수가 적용된 각 요소가 담긴 새로운 배열이 리턴됨.
    return items.map((items) => {
      return (
        <ExpenseItem
          title={items.title}
          price={items.price}
          date={items.date}
        />
      );
    });
  };
  */

  return (
    <Card className='expenses'>
      <ExpenseFilter onChangeFilter={filterChangeHandler} />
      {items
        .filter((item) => item.date.getFullYear().toString() === filteredYear)
        .map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            price={item.price}
            date={item.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
