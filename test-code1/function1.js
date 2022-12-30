function printout(what){
    console.log(what);
}

function calculateor(x,y,operation){
    if(operation == '+'){
        var z = x + y;
    }
    else if(operation == '-'){
        var z = x - y;
    }
    else if(operation == '*'){
        var z = x * y;
    }
    else if(operation == '/'){
        var z = x / y;
    }
    else if(operation == 'sqrt'){
        var z = Math.pow(x,1/y);
    }
    return z;
    
}

//printout('Mohamed');
console.log(calculateor(16,4,'sqrt'));
