/*
function goldenMiddle(a, b) {
    console.log([a[1],b[1]]);
   }
   goldenMiddle([1,6,8], [4,6,2]); // output [6,6]
*/


/*
var polidrom = "I LOVE YOU";
var lowerlove = polidrom.toLowerCase();
var reverse = "";

for(var change = lowerlove.length - 1; change>=0; change--){
    reverse += lowerlove.charAt(change);
    console.log(reverse);
}
*/

// password checker
/*
let mustpassword = 20;
function checkPassword(password, password_repeat) {
  if(password == password_repeat){
    if(password.length >= 20){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}
*/

//Check if the password is secure:
/*
function checkPassword(password, password_repeat) {
  const eightchar = new RegExp('(?=^.{8,}$)');
	const lowercase = new RegExp('(?=.*[a-z])');
  const uppercase = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const specialchar = new RegExp('(?=.*[^A-Za-z0-9])');
  
  if(password == password_repeat){
    if(eightchar.test(password)){
      if(lowercase.test(password)){
        if(uppercase.test(password)){
          if(number.test(password)){
            if(specialchar.test(password)){
              console.log("log-in");
            }
            return false;
          }
          return false;
        }
        return false;
      }
      return false;
    }
    return false;
  }
  return false;
}

checkPassword('YY&glk4Hfi_ffS', 'YY&glk4Hfi_ffS');
*/