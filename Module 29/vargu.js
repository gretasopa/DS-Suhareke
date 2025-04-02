var programmingLanguage=['PHP','JS','HTML'];

console.log(programmingLanguage);
console.log(programmingLanguage[0]);

programmingLanguage.push('HTML');
console.log(programmingLanguage);

programmingLanguage.pop('HTML');
console.log(programmingLanguage);

 programmingLanguage.shift();
 console.log(programmingLanguage);

 programmingLanguage.unshift("c++");
 console.log(programmingLanguage);

 programmingLanguage.splice(0,2,'HTML');
 console.log(programmingLanguage);

 console.log(Math.random()*5);
 console.log(Math.floor(Math.random()*5));

 var students=["john","doe"];
 var [s1,s2]=students;
 console.log(s1);
 console.log(s2);

 var places=["london","berlin","roma"];
 var [firstPlace, ,secondPlace]=places;
 console.log(secondPlace);

 var numbers=[1,2,3,4,5,6,7,8,9,10]
 var[first,second,third,...otherNumbers]=numbers;

 console.log(first);
 console.log(third);
 console.log(otherNumbers,toString());