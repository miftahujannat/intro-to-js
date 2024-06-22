// let salari =[30000,20000,50000,70000,50000];
// let bonous =[];
// for(i=0; i<salari.length; i++){
//     let bonouses = salari[i] * 0.7 + 2000;
//     bonous.push(bonouses);
// }
// console.log(bonous)

let salari = [30000,20000,50000,70000,50000];
let bonous =[];
for(i=0; i<=salari.length; i++){
    let bonouses; 
    if(salari[i] > 50000){
        bonouses = salari[i] * 0.7 + 10000;
    }
    else{
        bonouses = salari[i] * 0.7 + 2000;
    }
    bonous.push(bonouses);
}
console.log(bonous);