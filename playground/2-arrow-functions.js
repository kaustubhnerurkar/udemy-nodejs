// const square=(x)=>{
//     return x*x
// }

// const square=(x)=>x*x
// console.log(square(2))

const event = {
    name: 'Birthday Party',
    guestList:['Kaustubh','Jane','Mike'],
    printGuestList () {
        console.log("Guestlist for : " + this.name)
        this.guestList.forEach((guest) =>{
            console.log(guest+' is attending '+this.name)
        });
    }
}

event.printGuestList()