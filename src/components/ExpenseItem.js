import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

const ExpenseItem = ({title, price, date}) => {

  // 한자리 수를 두자리로 변환해주는 함수
  // To make the month and day to have a zero infront of it when the number is less than 2 digits.
  // Also, you need to receive the data into the function as a parameter.
  /*
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  }
  */

  // 날짜 포맷팅 변환 함수 정의 -> ExpenseDate.js
  /*const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  }
  */

  // 숫자를 화폐 표기법으로 바꾸기
  // 숫자 콤마 찍기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);
  console.log(formattedPrice);

  return (
    <Card className='circle'>
      <div className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{formattedPrice} 원</div>
        </div>
      </div>
    </Card>
  )
}

export default ExpenseItem;