const repeatTimes = 5;
const text = "Hello world";

let answer = "";

for (let i = 0; i < repeatTimes; i++) {
  console.log(` ${text} is repeating at ${i}`);
  answer += text + " ";
}
console.log("Final answer:", answer.trim());
