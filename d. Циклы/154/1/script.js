let arr = [1, 2, 3, 0, 5];

            for (let elem of arr) {
                if (elem == 0) {
                    console.log('ноль');
                    break;
                }
                else {
                    console.log(arr[elem])
                    elem += 1;
                }
            }