let arr = process.argv.slice(2);
if (arr.length !== 0){
  for (let j = 0; j < arr.length; j++){
    if (arr[j] > 0 && arr[j] !== NaN){
      setTimeout(() => {process.stdout.write('*** \n')}, arr[j] * 1000 );
    }
  }
};