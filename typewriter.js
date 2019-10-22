const sentence = "hello there from lighthouse labs";

const timeOut = function(sentence) {
  let counter = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, counter);
    counter += 55;
  }
  setTimeout(() => {
    console.log();
  }, counter);
};


timeOut(sentence);