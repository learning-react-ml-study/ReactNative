class Marsupial {
    
    constructor(name, nocturnal) {
        if(!(this instanceof Marsupial)) {
            throw new Error('이 객체는 New를 사용하여야 생성가능')
        };
        this.name = name;
        this.Isnocturnal = nocturnal;
    }
};


let slider = new Marsupial('dldldl', true);
console.log(slider)

let sl2 = new Marsupial('df', false)


class Kangaroo extends Marsupial {
    constructor(name) {
        super();
        if(!(this instanceof Kangaroo)) {
            throw new Error('이 객체는 new를 사용하여야 생성가능')
        }
        this.name = name;
        this.Isnocturnal = false;
    }
};

let a = new Kangaroo('dff', true);
console.log(a);

var AnimalKingdom = AnimalKingdom || {};
AnimalKingdom.marsupial = function(name, nocturnal) {
    var instanceName = name;
    var instanceIsNocturnal = nocturnal;

    return {
        getName: function() {
            return instanceName;
        },
        getIsNocturnal: function() {
            return instanceIsNocturnal;
        }
    }
};

AnimalKingdom.kangaroo = function(name) {
    var baseMarsupial = AnimalKingdom.marsupial(name, false);

    baseMarsupial.hop = function() {
        return baseMarsupial.getName() + '가 점핑 점핑 합니다';
    };

    return baseMarsupial;
}

var jester = AnimalKingdom.kangaroo('캥거루');

console.log(jester);

console.log(jester.getName())
console.log(jester.getIsNocturnal());


var human ={
    useSignLanguage
};

