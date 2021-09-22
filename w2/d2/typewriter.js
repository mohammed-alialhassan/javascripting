const sentence = "hello there from lighthouse labs";
let time = 0;

for (const char of sentence) {
  process.stdout.write(char);
  setTimeout(() => {console.log(char)}, time += 50)
};


