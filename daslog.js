function eyes() {
  var a = document.getElementById("pwd");

  if (a.type == "password") {
    a.type = "text";
    document.getElementById("eye").innerHTML =
      "<i class='fa fa-eye-slash'></i>";
  } else {
    a.type = "password";
    document.getElementById("eye").innerHTML = "<i class='fa fa-eye'></i>";
  }
}

var r = 1;

function captchaaa() {
  document.getElementById("captchaa").innerHTML = "";
  var charsArray = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    var index = Math.floor(Math.random() * charsArray.length + 1);
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }

  var canv = document.createElement("canvas");
  canv.id = "captchaa";
  canv.width = 120;
  canv.height = 20;

  var ctx = canv.getContext("2d");
  ctx.beginPath();

  ctx.moveTo(0, 0);
  ctx.lineTo(600, 130);

  ctx.filter = "blur(1px)";

  ctx.stroke();
  ctx.font = "16px Apple Chancery, cursive";

  ctx.strokeText(captcha.join(""), 15, 15);

  r = captcha.join("");

  document.getElementById("captchaa").appendChild(canv);
}

function verify() {
  pws = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  var Vm = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var capth = document.forms["logfrm"]["captch"].value;
  var tid = document.getElementById("text");
  var pwdd = document.getElementById("pwd");

  if (tid.value == "") {
    alert("enter the user id");
    document.getElementById("text").focus();
    return false;
  } else {
    if (!Vm.test(tid.value)) {
      alert("wrong employee id");
      return false;
    } else {
      if (pwdd.value == "") {
        alert("enter the password");
        document.getElementById("pwd").focus();
        return false;
      } else {
        if (capth == "") {
          alert("enter captcha shown below");
          document.getElementById("captch").focus();
          return false;
        } else {
          if (capth != r) {
            alert("wrong captcha entered");
            var cpt = document.getElementById("captch");
            document.getElementById("captch").focus();
            cpt.value = "";
            captchaaa();
            return false;
          } else {
            if (capth == r) {
              if (pws.test(pwdd.value)) {
                return true;
              } else {
                pwdd.value = "";
                alert("not a valid password kindly recheck");
                document.getElementById("pwd").focus();
                return false;
              }
            } else {
              return false;
            }
          }
        }
      }
    }
  }
}
