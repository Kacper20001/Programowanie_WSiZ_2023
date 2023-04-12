
for (i = 10; i >=0; i--) {
    if (i===0) {
    console.log("Happy New Year");
    } else {
        console.log(i);
    }
}
let j = 10;
while (j >= 0) {
    if (j===0) {
        console.log("Happy New Year");
    } else {
        console.log(j);
    }
    j--;
}

function nwd() {
    var a1 = parseInt(document.getElementById("nwd_a1").value);
    var a2 = parseInt(document.getElementById("nwd_a2").value);

    while (a1 != 0) {
        let pom = a1;
        a1 = a2 % a1;
        a2 = pom ;
    }
    var result = a2;

    document.getElementById("result").innerHTML = result;
}


function clock() {
  var n = new Date();

  var h = n.getHours();
  var m = n.getMinutes();
  var s = n.getSeconds();

  if (h < 10) {
    h = "0" + h;
  } else {
    h = h.toString();
  }

  if (m < 10) {
    m = "0" + m;
  } else {
    m = m.toString();
  }
  if (s < 10) {
    s = "0" + s;
  } else {
    s = s.toString();
  }

  var timeString = h + ":" + m + ":" + s;

  document.getElementById("zegar").innerHTML = timeString;
}

setInterval(clock, 1000);