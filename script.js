if (localStorage.firsttimeplay == "") {
  alert('In diesem Spiel ist es 2100. iKacka ist wertvoller als Gold.\nKlicke auf den iKackhaufen um iKACKA zu kriegen. iKACKA wird alle 10 Sekunden automatisch verkauft.\nWerde der reichste Mensch der welt und mache einen iMilliarden-iUmsatz mit iKACKA!\n\nBenutze den iCode "pear" für mehr Optionen.')
  localStorage.firsttimeplay = false;
};
if (localStorage.firsttimeplay == 'true') {
  alert('In diesem Spiel ist es 2100. iKacka ist wertvoller als Gold.\nKlicke auf den iKackhaufen um iKACKA zu kriegen. iKACKA wird alle 10 Sekunden automatisch verkauft.\nWerde der reichste Mensch der welt und mache einen iMilliarden-iUmsatz mit iKACKA!\n\nBenutze den iCode "pear" für mehr Optionen.')
  localStorage.firsttimeplay = false;
};

if (localStorage.money == undefined) {
  localStorage.money = 0;
}

if (localStorage.kacka == undefined) {
  localStorage.kacka = 0;
}

if (localStorage.pc == undefined) {
  localStorage.pc = 1;
}

if (localStorage.ps == undefined) {
  localStorage.ps = 0;
}

if (localStorage.rebirthPrice == undefined) {
  localStorage.rebirthPrice = 10000000;
}

if (localStorage.rebirths == undefined) {
  localStorage.rebirths = 0;
}

document.getElementById('money').innerHTML = localStorage.money;
document.getElementById('kacka').innerHTML = localStorage.kacka;
document.getElementById('pc').innerHTML = localStorage.pc;
document.getElementById('ps').innerHTML = localStorage.ps;
document.getElementById('rebirthPrice').innerHTML = localStorage.rebirthPrice;
document.getElementById('rebirths').innerHTML = localStorage.rebirths;

function clc() {
  localStorage.kacka = Number(localStorage.kacka) + Number(localStorage.pc);
  document.getElementById('kacka').innerHTML = localStorage.kacka;
};

function Sleep(milliseconds) {
 return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function makeMoney() {
  await Sleep(10000);
  localStorage.money = Number(localStorage.money) + Number(localStorage.kacka);
  localStorage.kacka = 0;
  document.getElementById('money').innerHTML = localStorage.money;
  document.getElementById('kacka').innerHTML = localStorage.kacka;
  mmr();
};
makeMoney();
function mmr() {
  makeMoney();
};

async function perSecond() {
  await Sleep(1000);
  localStorage.money = Number(localStorage.money) + Number(localStorage.ps);;
  document.getElementById('money').innerHTML = localStorage.money;
  psr();
};
perSecond();
function psr() {
  perSecond();
};

function reset() {
  localStorage.firsttimeplay = true;
  localStorage.money = 0;
  localStorage.kacka = 0;
  localStorage.pc = 1;
  localStorage.ps = 0;
  localStorage.rebirthPrice = 10000000;
  localStorage.rebirths = 0;
  location.reload();
};

function buyPc(price, item) {
  if (Number(localStorage.money) >= price) {
    localStorage.money = Number(localStorage.money) - price;
    localStorage.pc = Number(localStorage.pc) + item;
    document.getElementById('pc').innerHTML = localStorage.pc;
    document.getElementById('money').innerHTML = localStorage.money;
  };
};

function buyPs(price, item) {
  if (Number(localStorage.money) >= price) {
    localStorage.money = Number(localStorage.money) - price;
    localStorage.ps = Number(localStorage.ps) + item;
    document.getElementById('ps').innerHTML = localStorage.ps;
    document.getElementById('money').innerHTML = localStorage.money;
  };
};

function rebirth() {
  if (Number(localStorage.money) >= Number(localStorage.rebirthPrice)) {
    localStorage.money = Number(localStorage.money) - Number(localStorage.rebirthPrice);
    localStorage.rebirthPrice = Number(localStorage.rebirthPrice) + 5000000;
    localStorage.rebirths = Number(localStorage.rebirths) + 1;
    document.getElementById('rebirthPrice').innerHTML = localStorage.rebirthPrice;
    document.getElementById('rebirths').innerHTML = localStorage.rebirths;
    localStorage.money = 0;
    localStorage.kacka = 0;
    localStorage.pc = 1;
    localStorage.ps = 0;
    document.getElementById('money').innerHTML = localStorage.money;
    document.getElementById('kacka').innerHTML = localStorage.kacka;
    document.getElementById('pc').innerHTML = localStorage.pc;
    document.getElementById('ps').innerHTML = localStorage.ps;
  }
};

function enterCode() {
  if (document.getElementById('codeInput').value == 'pear') {
    alert('This is iKackaKlicker.')
    window.location = '/pages/pear/';
    document.getElementById('codeInput').value = '';
  }
};

function openResetMenue() {
  document.getElementById('popup').innerHTML = 
  '<div class="overlay">\n' +
  '  <div class="popupp">\n' +
  '    <div class="heading">iReset</div>\n' +
  '    <div class="x" onclick="closePopup()">iClose</div>\n' +
  '    <button class="btn" onclick="reset()">\n' +
  '      Hier klicken, um das iGame zurückzusetzen.\n' +
  '    </button>\n' +
  '  </div>\n' +
  '</div>'
};

function closePopup() {
  document.getElementById('popup').innerHTML = '';
};
