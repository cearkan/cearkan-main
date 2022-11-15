//HTML içerisindeki selectorler ile tüm itemler birer değişkene atandı
let ball = document.querySelector("#ball");
let mode = document.querySelector(".mode");
let body = document.querySelector("body");

//Ball değişkenine atanan elementin "click" eventine changeTheme fonksiyonu bağlandı
ball.addEventListener("click", changeTheme);

//isLight değişkeni localStorage içinde "isLight" keyine sahip kaydı arar, bulamazsa değeri true olur
let isLight = localStorage.getItem("isLight") || true;

//HTML içerisindeki selectorlerle toplanıp değişkene atanan elementler bir array'de toplanır
let elements = [ball, mode, body];

//başlangıç fonksiyonu, sayfa başlangıcında çalışır
function init() {
  //eğer isLight değişkeninin veri tipi "string" ise bu veri tipini "boolean"a çevirir
  if (typeof isLight == "string") {
    isLight = JSON.parse(isLight);
    console.log(typeof isLight);
  }

  //Tüm elementleri döngüye sokar
  elements.forEach((element) => {
    //eğer isLight == false ise, döngüdeki elemente dark classını ekler
    if (!isLight) {
      element.classList.add("dark");
    }
  });
}

//HTML üzerinden tıklandığında temayı değiştiren fonksiyon
function changeTheme() {
  //Tüm elementleri döngüye sokar
  elements.forEach((element) => {
    //döngüdeki elemente "dark" class'ını toggle'lar. Bu class varsa siler, yoksa ekler
    element.classList.toggle("dark");
  });
  //isLight değişkenini toggle'lar, eğer true ise false, false ise true olur,
  //bu yüzden 22. satırdaki işlemi yaptık çünkü bu toggle, boolean veritipi ile yapılır
  isLight = !isLight;
  //bu durumu kaydedecek fonksiyonu çağırır
  setCookie();
}

//Durumu localStorage'a kaydeden fonksiyon
function setCookie() {
  //localStorage içerisinde "isLight" keyi ile isLight değişkeninin değerini kaydeder
  localStorage.setItem("isLight", isLight);
}

//başlangıç fonksiyonunu çağıran satır.
init();
