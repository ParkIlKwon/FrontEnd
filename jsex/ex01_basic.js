console.log("test");
    let a = 4;
    console.log(typeof a);
    a="test";
    console.log(typeof a);
    a=true;
    console.log(typeof a);

    console.log( 10 + 3 + a);
    console.log( 10 + 3);
    console.log( 10 - 3);
    console.log( 10 * 3);
    console.log( 10 / 3);
    console.log( 10 ** 3);

    console.log(2 - "test");
    console.log(10/0);
    console.log(0/10);
    
    //?��바스?��립트?�� "" '' ?��?��
    let myName = "�????";
    // ``:기울?���???? ?��?��?��?�� : 1! ?��?��?��?��.
    let callName = `?��?��름�?? ${myName} ?��?�� `;
    console.log(callName);
    console.log("3" + (10+7));

    console.log("==========================");
    let animal; //�?????���???? ?��?���???? ?���???? 비어?��?�� ?��?��. �???? ?��?��?��?��
    console.log(animal);
    animal = null;
    console.log(animal);

    console.log(typeof myName);
    console.log(typeof null);
    console.log(typeof undefined);
    console.log(10 == '10');
    console.log(true === 'true');

    let arr = [1,2,3,4,5]
    let arr2 = new Array(3);
    arr2[0] = 1;
    arr2[1] = 2;
    arr2[2] = 3; 
    arr2[3] = 4;
    console.log(arr2);

    console.log(arr);
    console.log(arr2);
    console.log(arr2[3]);
    console.log(arr2.length);
    delete arr2[1];
    console.log(arr2);

    let daju ={
        
        kind : 'cat',
        name : "daju",
        age : 9,
        isPet : true,
        ownerName : "park",
        likes: ['���ڱ�','���ĸԱ�','���']
    }

    console.log(daju.kind);
    console.log(daju.name);
    console.log(daju.isPet);

    console.log("======================");
    arr2[4] = 10;
    console.log(arr2);
    
    let Name = "박";
    let youName = Name;
    youName = "아이유";
    console.log(youName);

    let dog={
        name : '다동이'
    }

    let otherdog = dog ;
    otherdog.name="못난이";
    console.log(dog);

    