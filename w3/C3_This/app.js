// Your Javascript Code Goes Here
'use strict'

var person = {
    firstname: 'Yi-Xuan',
    lastname: 'Lin',
    greet0: function(){
        console.log('obj-method-this=');
        console.log(this);
    },
    greet1: ()=>{
        console.log('obj-Arrow-this = ');
        console.log(this);
    },
    greet2: function(){
        (() =>{
            console.log('obj-method-Arrow-this');
            console.log(this);
        })();
    },
    greet3: function(){
        (function(){
            console.log('obj-method-fn-this = ');
            console.log(this);
        })();
    },
    greet4: function() {
        (function(){
            (() =>{
                console.log('obj-method-fn-Arrow-this = ');
                console.log(this);
            })();
        })();
    }
}

person.greet0();
person.greet1();
person.greet2();
person.greet3();
person.greet4();

console.log(this);

//fn-this
(function(){
    console.log('fn-this = ');
    console.log(this);
})();

//arrow-this
(() =>{
    console.log('arrow-this');
    console.log(this);
})();

//fn-fn-this
(function(){
    (function(){
        console.log('fn-fn-this = ');
        console.log(this);
    })();
})();

//fn-arrow-this
(function(){
    (() =>{
        console.log('fn-arrow-this = ');
        console.log(this);
    })();
})();