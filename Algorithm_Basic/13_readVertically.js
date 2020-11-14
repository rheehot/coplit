// readVertically
// 문제
// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.
//
//     입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// 출력
// string 타입을 리턴해야 합니다.
//     주의 사항
// 각 문자열의 길이는 다양합니다.
//     각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.
//     입출력 예시
// let input = [
//     //
//     'hello',
//     'wolrd',
// ];
// let output = readVertically(input);
// console.log(output); // --> 'hweolllrod'
//
// input = [
//     //
//     'hi',
//     'wolrd',
// ];
// output = readVertically(input);
// console.log(output); // --> 'hwiolrd'

function readVertically(arr) {
    // code goes here
    let longestLength = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (longestLength < arr[i].length) {
            longestLength = arr[i].length;
        }
    }

    let str = ""
    for (let i = 0; i < longestLength; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[j][i] !== undefined){
                str += arr[j][i]
            }
        }
    }

    return str;

}
