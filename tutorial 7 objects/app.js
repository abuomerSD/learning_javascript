person = {
    firstName:"Eltayeb",
    lastName: "Ibrahim",
    age: 29
}

document.write(person.firstName + "<br>");

var cat = new Object();
cat.name = "cat";
cat.age = 2;
cat.color = "white";

document.write(cat.name +"<br>"+cat.color+"<br>");

function myEmployee(id,name,lname,salary)
{
    this.id = id;
    this.name = name;
    this.lname = lname;
    this.salary = salary;
}

var emp = new myEmployee(1,"eltayeb1","ibrahim",3000);

document.write(emp.name + "<br>");