function Person(id,name,age){
    this.id = id;
    this.name = name;
    this.age = age;

    this.changeName = changeName;
    function changeName(name){
        this.name = name;
    }
}

person = new Person(1,"omer",30);
document.write(person.name + "<br>");

person.changeName("eltayeb")

document.write(person.name + "<br>");

