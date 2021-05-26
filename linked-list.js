const prompt = require('prompt-sync')({sigint: true});
class Node{
    constructor(year , highlight, nextNode=null ){
        this.year=year
        this.highlight= highlight
        this.nextNode=nextNode
    }
}

class LinkedList{
    constructor(year, highlight){
        this.headNoed= new Node(year, highlight)
    }

insertBegening=(year,highlight)=>{
    const newNode= new Node(year,highlight,this.headNoed);
     this.headNoed= newNode
};
getLinkList=()=>{
    let currnt = this.headNoed
    while(currnt){
        console.log(`year: ${currnt.year}, hightlight:${currnt.highlight}`)
          currnt= currnt.nextNode
    }
}
insetHightlight= (year)=>{
    let currnt = this.headNoed
    while(currnt.year <year){
        let currentAge = currnt.year+1
        if(currnt.nextNode && currnt.nextNode.year === currentAge){
            currnt= currnt.nextNode
        }
        else{
            let highlight = prompt(`Enter hightlight for year :${currentAge} `)
            let newNode= new Node(currentAge,highlight,currnt.nextNode)
            currnt.nextNode= newNode
            currnt=newNode
        }
    }
}

}
const ageList = new LinkedList(7 , "I turned seven")
ageList.insertBegening(3,"i starting walking")
ageList.insertBegening(1,"i was born")
let age = prompt("age: ")
ageList.insetHightlight(age)
ageList.getLinkList()
 
