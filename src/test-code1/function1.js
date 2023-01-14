function printout(what){
    console.log(what);
}




export function calculator(x,y,operation){
    // const args = process.argv.slice(2);
    // var x = Number(args[0]);
    // var operation = args[1];
    // var y = Number(args[2]);

    if(operation == '+'){
        var z = x + y;
    }
    else if(operation == '-'){
        var z = x - y;
    }
    else if(operation == 'x'){
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

// module.exports = calculator;
// export default calculator;

//printout('Mohamed');
// const result = calculator(1,2,'+');
// console.log(result);
