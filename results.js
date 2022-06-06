

let name = prompt('Your Name');
let roll = prompt('your Roll');

let ban = parseFloat(prompt('Bangla'));
let math= parseFloat(prompt('Math'));
let eng= parseFloat(prompt('English'));
let sci = parseFloat(prompt('Science'));
let ssci = parseFloat(prompt('Social science'));
let rel= parseFloat(prompt('Religion'));


let total = ban + math + eng + sci + ssci + rel ;
let cgpa =( total / 6);

console.log(`

   Student Name :     ${name}
   Student Roll :     ${roll}

            Your Results & CGPA 

     Bangla            :  ${ban}
     Math              :  ${roll}
     English           :  ${eng}
     Science           :  ${sci}
     S Science         :  ${ssci}
     Religion          :  ${rel}
------------------------------------------
   Total mark          : ${total}

        CGPA           : ${cgpa.toFixed(2)}
  
`);
