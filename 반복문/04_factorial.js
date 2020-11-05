// actorial
// 문제
// 수를 입력받아 n-factorial(n!) 값을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 1 * 2 * ... * num
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// factorial(0)은 1로 정의됩니다.
// 음수 입력은 들어오지 않습니다.

// factorial(n)은 자연수 1부터 n까지의 곱을 계산하는 함수입니다.
// factorial(1) = 1
// factorial(2) = 1 * 2 = 2
// factorial(3) = 1 * 2 * 3 = 6
// factorial(4) = 1 * 2 * 3 * 4 = 24

function factorial(num) {
    // TODO: 여기에 코드를 작성합니다.
    let i;
    let fact = 1;
    if(num ===0){
      num = 1;
    }
    for (i = 2; i <= num; i++){
      fact *= i;
  
    }
    return fact;
  }
  