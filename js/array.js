function grade(grade){

    if (grade <50){
        return 'F'
    }else if(grade<60){
        return 'D'
    }else if (grade <70){
        return 'C'
    }else if (grade <80){
        return 'B'
    }else if (grade <90){
        return 'A'
    }else if (grade < 100){
        return 'A+'
    }else{
        return 'no_grage'
    }
}

let re_grade =grade(89)
console.log(re_grade)

// array function

let score =[10,20,30]

for(let i =0;i<score.length;i++){
     console.log(score[i])
}
score.forEach((s)=>{
    console.log(' for eech array :  ',s)

})

scr =score.map((s)=>{
    return s *9
})

console.log(' for map array :  ',scr)

//fillter

let filler_arr = score.filter((s)=>{
    if(s >20){
      return s
    }
 })
console.log(' fillter  array :  ',filler_arr)

 
// Object 
let nameobj = [
    {fname : 'AA',
     age : '50',
     hobby : 'football'   
    },
    {fname : 'BB',
        age : '47',
        hobby : 'Movie'   
    },
    {fname : 'JJ',
        age : '7',
        hobby : 'Car drive'   
    }

]

 // find Object
 let fobj = nameobj.find((s)=>{
    if(s.age == '7'){
        return true
    }
 })
console.log(' find Object ' , fobj)


// map object
let newarr = []
let doubage = nameobj.map((s)=>{
    s.age  = s.age*2 
     newarr.push(s)
    return s

})
 console.log(' map Object ' , newarr)

//fillter
let fillterObj = nameobj.filter((s) =>{
    if(s.age >50){
      return true      
    }

})
console.log(' fillter Object ' , fillterObj)