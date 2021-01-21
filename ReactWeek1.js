class Student {
  constructor(name, email, community){
      this.name = name
      this.email = email
      this.community = community
  }
}
const stud1 = new Student("Jay", "Jay@gmail", "Sactown")
const stud1 = new Student("Mikey", "hotmom@gmail.com", "Seattle")

class Bootcamp {
  constructor(name, level, students = []){
      this.name = name
      this.level = level
      this.students = students
  }

registerStudent(newStudent){

   const dup = this.students.find(student => student.email === newStudent.email )
   if(dup){ 
       console.log("Not today junior!")
   }else
   this.students.push(newStudent)
}
   
}

const bootcamp =  new Bootcamp("React", 5)