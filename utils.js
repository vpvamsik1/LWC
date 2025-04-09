// normal export
 const PI_DATA = 3.14;

 function add(a, b) {
    // console.log(a + b);
    return a + b;
}
// // export together
// export {PI, add}

// export with alias
export {PI_DATA as PI, add};

// export with default 

export function minus(a, b) {
    return a - b;
}

