let a = "kosin"
console.log('a')
let b= [25,52,62,98]

for (let i=0;i<b.length;i++){
  console.log(b[i])
}

let obj ={
     namef : 'kosin',
     lastname : 'bualunag',
     age : 51,   
     adrr : 'srisomrong sukothai'
    }

    console.log('array 1 object :  ',obj.adrr)  

//array 2 Object
let obj2 = [{
    namef : 'kosin',
    lastname : 'bualunag',
    age : 51,   
    adrr : 'srisomrong sukothai'
    },
    {
    namef : 'nattha',
    lastname : 'deejung',
    age : 49,   
    adrr : 'chaimai hangdong'
    }
]

for(let l =0;l<obj2.length;l++){
    console.log('array 2 object :  ',obj2[l])  
  }

 obj2.push({
     namef:'vvv',
    lastname:'vccc',
    age:'84',
    adrr:'testt'
})

console.log(' array length arter push : ',obj2.length)
for(let i =0 ; i<obj2.length;i++){
    console.log('',obj2[i])

}
// array pop 

//pop เอา object ตัวสุดท้ายออก
obj2.pop()
console.log(' array pop  : ',obj2.length)
for(let i =0 ; i<obj2.length;i++){
    console.log('',obj2[i])
}



   