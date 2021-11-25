let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234/
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the','gi') 생성자
// const regexp = /the/gi
// console.log(regexp.test(str)) 일치여부 true 반환
// str = str.replace(regexp,'AAA') replace 해서 재할당
// console.log(str.match(/the/gi)) 정규식 바로 사용해도 됌
// console.log(str.match(/\.$/gim)) 그냥 .는 하나의 패턴 명령으로 동작 일반적인 문자로 해석되게끔 \을 붙여준다 $는 $앞에있는 단어로 해당하는줄이 끝나는 부분을 일치시킴 m 라인일치 각각의 줄을 시작과 끝으로 보겠다
// console.log(str.match(/d$/gm))  d로 끝나는 것을 찾는것인데 줄끝을 줄바꿈한것으로 보지 않고 `기준으로 보기때문에 m(멀티 라인)을 추가 하면 줄 끝으로 인식
// console.log(str.match(/https?/g)) s가 있을수도 있고 없을수도 있다
// console.log(str.match(/\b\w{2,3}\b/g))  {2,3}두번이상 세번 이하 /\b{...}\b/ <= 영어와 숫자가 아닌 경계 (특수문자)
// console.log(str.match(/\bf\w{1,}\b/g))  f로 시작하는 단어찾기 문자에 일치하지 않는 경계 + f이후 문자가 1개이상 연속되는것  + 문자에 일치 하지 않는 경계 (\b 띄어쓰기 특수문자 등)
// console.log(str.match(/\d{1,}/g)) 숫자 찾기
// console.log(str.match(/\s/g)) 공백 찾기 줄바꿈도 포함
/* 공백 삭제
const h = `  the hello  world       !

`
console.log(h.replace(/\s/g,''))
*/
// console.log(str.match(/.{1,}(?=@)/g)) @앞쪽 찾기
// console.log(str.match(/(?<=@).{1,}/g)) @뒷쪽 일치