var index
, total = 0;

for(index = 2; index < process.argv.length; index++) {

  total = total + Number(process.argv[index]);
}

console.log(total);
