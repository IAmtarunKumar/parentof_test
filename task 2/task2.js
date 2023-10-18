let name = "vijay Kumar"

let nameArray = name.split(" ")

let ans = ""
let str = ""
let newArray = []
for(let i=nameArray.length-1; i>=0; i--){
    newArray.push(nameArray[i])
}

for(let i=0; i<newArray.length; i++){
   
    for(let j=newArray[i].length-1; j>=0; j--){
        str+=newArray[i][j]
    }
    str = str+" "
}

console.log(str)