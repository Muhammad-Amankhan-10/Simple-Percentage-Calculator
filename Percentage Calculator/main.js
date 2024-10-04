   
   let username = prompt ("Please Enter your Student Name");

   if (!username) {
      alert("Error: Name is required..! , Otherwise your Result will Generate without Name..!");
   }

   let totalmarks = prompt ("Enter your Total marks");
   let obtainedmarks = prompt ("Enter your Obtained marks");

   let percentage = (obtainedmarks / totalmarks) * 100 ;
   
   let grade;

   if (percentage >=85 && percentage < 100){
     grade = "A+1";
   } 
   else if (percentage >=70 && percentage < 85){
     grade = "A";
   }
   else if (percentage >=60 && percentage < 70){
     grade = "B";
   }
   else if (percentage >=50 && percentage < 60){
    grade = "C";
   }
   else if (percentage >=40 && percentage < 50){
    grade = "D";
   }
   else if (percentage >=40 && percentage < 0){
    grade = "FAIL";
   }

   alert(`Result for : ${username} :  \nPercentage : ${percentage.toFixed(2)} : \nGrade : ${grade} : `)





   