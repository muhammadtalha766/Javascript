class ToyotaCar {
    start (){
        console.log("start car");
    }

    // there is no need to seperate function with comma 
    stop (){
        console.log("stop car");
    }

    setBrand(brand){ 
        // this.brandName = brand;  // **this means object jis k liya function call kiya ja rha ha
        this.brand = brand;  // genarlly dono k same dety hn uper waly b theek ha but (read this comment again)
        // this k sath wala brand object ki property h or next brand function ma argument jo pass kiya ha 
    }
}
// object create
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
console.log(fortuner);


// *** constructor: initial level py jo kaam krwana ha us k lia banaty hn
// ye bydefault js khud hi bana dyta ha.


// inheritance: passing down properties and method from parent class to child class.
/* class parent {}
 class Child extends parent{}  */

class Parent {
    hello() {
        console.log("hello universe");
    }
}
class Child extends Parent{

}

let obj = new Child();
 
