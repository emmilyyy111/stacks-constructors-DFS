function familyMember(first, last) {
    this.firstName = first
    this.lastName = last
  }
  
  
  let olderBro = new familyMember("Jeremy", "Morgenbesser")
  console.log(olderBro)
  let littleBro = new familyMember("Max", "Morgenbesser")
  console.log(littleBro)