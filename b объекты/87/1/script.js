const obj = {
    z: 3,
    x: 1,
    y: 2
}
  for (let key in obj) {
    console.log(key + ': ' + obj[key]);
  }
  const keys = Object.keys(obj);
  console.log(keys); 