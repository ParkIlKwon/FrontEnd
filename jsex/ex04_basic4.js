     // 내가 만든 정렬 
    // 거꾸로 저장 

    let numArr = [1001,3423,23,32123,123];
    
    
    function mySort(arr){
       
        for (let index = 0; index < arr.length; index++) {
            let min = arr[index];
            for (let kind = 0; kind < index; kind++) {
                if (arr[kind] > min) {
                    let temp = arr[index] ;
                    arr[index] = arr[kind]
                    min = arr[kind];
                    arr[kind] = temp
                }
            }
        }
    }

    function myReverse(arr){
        let idx = arr.length-1;
        for (let index = 0; index < 2; index++) {
            let temp = arr[idx- index];
            arr[index] = arr[idx-index];
            arr[idx-index] = temp; 
        }
    }

    mySort(numArr); 
    console.log(numArr); // [23,123,1001,3423,32123]

    myReverse(numArr);
    console.log(numArr); 

