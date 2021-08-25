// function alertTerminal(){
//   console.log("\007");
// }

const input = process.argv.slice(2);
input.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
});