var phone  = {
    company: `samsung`,
    color: `pearl white`,
    model: `galaxy s21`,
    price: 1200000
};

// for-of is for arrays, for-in is for properties
for (var prop in phone) {
    // this prints the keys
    //console.log(prop);
    
    // this will print undefined cuz prop is string
    // you cannot do phone.'string' lolololol
    //console.log(phone.prop);
    
    // so instead, you should do the following
    console.log(phone[prop]);
}

console.log(`------------------------------------------`);

// check if the key exists
var hasKey = 'color' in phone;
console.log(`has key? ${hasKey}`);