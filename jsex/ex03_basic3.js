     /*  
        배열에 랜덤으로 1 또는 7을 7개 저장한다, 단 7은딱 3개만 저장한다.
        당첨인지 출력하시오.
        당첨은 7이 3개면 당첨이다.
    */

        function setLotto (arr){

        while(true){
            let cnt = 0;
            for (let index = 0; index < 7; index++) {
                let flag = parseInt(Math.random()*2)+1;
                arr[index] = flag == 1 ? 1 : 7 ;
                if(arr[index] == 7){cnt++};
                }
                if(cnt == 3){break};
            }
        }

        function checkLotto(arr){
            let cnt = 0;
            for (let index = 0; index < arr.length; index++) {
            if(arr[index] == 7){
                cnt ++;
                if(cnt == 3){
                    return "당첨";
                }
            }else{
                cnt = 0;
            }
        }
        return "실패" ; 
    }

        let arr=[];
        setLotto(arr);
        console.log(arr);
        console.log(checkLotto(arr));


