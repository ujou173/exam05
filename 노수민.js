const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 }
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" }
};

function exampleOne(inputPrice, currency, basicData) {
  const priceValue = price(inputPrice, currency);
  const productValue = product(inputPrice, basicData);
  return `${priceValue}\n${productValue}`;
}

// inputPrice에 대한 console.log를 출력하는 함수
function price(inputPrice, object) {
  for (key in object) {
    if(inputPrice === object[key]["value"]) {
      return object[key]["name"] + "을 넣었습니다.";
    }
  }
}

// inputPrice 값으로 basicData에서 구매 가능한 제품 목록을 buyList 배열에 넣는 함수
function product(inputPrice, array) {
  let buyList = [];
  for(let i = 0; i < array.length; i++) {
    if(inputPrice > array[i].price) {
      buyList.push(array[i].name);
    }
  }
  // 구매 가능한 제품 목록 수에 따라 각기 다른 console.log를 출력하는 함수
  return comment(buyList, array);
}

// 구매 가능한 제품 목록 수에 따라 각기 다른 console.log를 출력하는 함수
function comment(arrayOne, arrayTwo) {
  if(arrayOne.length === 0) {
    return "잔액이 부족합니다.";
  } else if(arrayOne.length === arrayTwo.length) {
    return "당신은 부자입니다.";
  }
  else {
    return "구매 가능 목록 : " + arrayOne;
  }
}

// console.log(price(1000, currency));
// console.log(product(1000, basicData));
console.log(exampleOne(1000, currency, basicData));