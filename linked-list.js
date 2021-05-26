const prompt = require('prompt-sync')({sigint: true});
class Node{
    constructor(year , highlight, nextNode=null ){
        this.year=year
        this.highlight= highlight
        this.nextNode=nextNode
    }
}
class LinkedList{
    constructor(year, highlight, nextNode){
        this.headNoed= new Node(year, highlight, nextNode)
    }

addNode=(year,highlight)=>{
    const newNode= new Node(year,highlight);
     newNode.nextNode = this.headNoed
     this.headNoed=newNode
};
addingAfter = (year,highlight,afterYear)=>{
    let currentNode= this.headNoed
    let nwNode= new Node(year, highlight)
    if(currentNode.year ===afterYear){
        nwNode.nextNode=currentNode.nextNode
        currentNode.nextNode=nwNode
    }
    else{
        while(currentNode){
            if(currentNode.year===afterYear){
                nwNode.nextNode=currentNode.nextNode
                currentNode.nextNode=nwNode
            }
            currentNode=currentNode.nextNode
        }
    }
}
outOFyear=(year)=>{
    let currentNode= this.headNoed
    let nw= currentNode.year
    if(nw===year){
        return true
    }
    else {
        while(currentNode){
            if(nw === year){
                return true
            }
            currentNode=currentNode.nextNode
        }
         
    }
    return false
} 
    
get dataAsString() {
    let dataString = "";
    let currentNode = this.headNode;
    while (currentNode && currentNode.year < year) {
      dataString = dataString + `year: ${currentNode.year},highlight:${currentNode.highlight}  \n`;
      currentNode = currentNode.nextNode;
    }
    return dataString;
  }
}
const myList = new LinkedList(1, "I was born");
myList.addingAfter(3,"I started walking",1)
myList.addingAfter(7,"I turned seven",3)
console.log(myList.addNode)
const ageIs=prompt("What is your age?")
for(let x =1; x<ageIs;x++){
    if(!myList.outOFyear(x)){
        let highlight = prompt("enter the highlight"+x+": ")
        myList.addingAfter(x , highlight,x+1)
    }
}
console.log(myList.dataAsString(ageIs))
