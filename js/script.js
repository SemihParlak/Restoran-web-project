/*
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Olayın diğer elementlere yayılmasını engellemek için
  searchForm.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!e.composedPath().includes(searchBtn)) {
    searchForm.classList.remove("active");
  }
}); 
*/





/*
const searchForm = document.querySelector(".search-form");

//! buttons


 const searchBtn = document.querySelector("#search-btn"); 

 searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(){
        if(
            !e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)
        ) {
            searchForm.classList.remove("active");
        }
    })
 })
*/

const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");



// buttons
const searchBtn = document.querySelector("#search-btn");
const carthBtn = document.querySelector("#cart-btn");

const btnMinus = document.querySelector(".button-minus");
const adetSayi = document.querySelector(".adet-sayi");
let count = 0;







carthBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    searchForm.classList.toggle("active");

    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)
        ) {
            searchForm.classList.remove("active");
        }
    });
});

// ! Shopping cart Sayı gösterilmesini sağlamak

function cartCount() {
    // Sepet listesinden tüm list-item sınıfına sahip öğeleri seçelim
    const cartList = document.getElementById("cart-list");
    const cartListItem = cartList.getElementsByClassName("list-item");
    
    // Öğe sayacını gösteren HTML elementini seçelim
    const itemCount = document.getElementById("item-count");
    
    // Öğe sayısını alıp HTML içeriğine yansıtalım
    itemCount.innerHTML = cartListItem.length;
  }
  




carthBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    cartItem.classList.toggle("active");

    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(carthBtn) &&
            !e.composedPath().includes(cartItem)
        ) {
            searchForm.classList.remove("active");
        }
    });
});

function goToValue() {
    var input = document.getElementById(".adet-sayi").value;

    if (isNaN(input)) {
        alert("Lütfen bir sayı giriniz.");
    } else {
        console.log("Girilen sayi:", parseInt(input));
    }
}


/*
var itemSalePricee = 10

document.addEventListener("DOMContentLoaded", function () {
    var buttonPlus = document.querySelector(".button-plus");
    var priceElement = document.querySelector(".price");

    buttonPlus.addEventListener("click", function () {
        var salePrice = parseFloat(priceElement.getAttribute("data-sale-price"));
        var mainPrice = parseFloat(priceElement.getAttribute("data-main-price"));
        var newSalePrice = mainPrice + salePrice;
        var newMainPrice = mainPrice * 2;
        priceElement.setAttribute("data-sale-price", newSalePrice);
        priceElement.setAttribute("data-main-price", newMainPrice);
        priceElement.innerHTML= "$" +newSalePrice+toFixed(2) + " <span>" + newMainPrice.toFixed(2) + "</span>";
    })
})
*/


// var urunler = [
//     {ad: "ürün1", fiyat: 104.99, artisMiktari: 104,99}
// ]

/*
var urunler = [
    { ad: "Ürün 1", fiyat: 104.99, artisMiktari: 104.99 },
    { ad: "Ürün 2", fiyat: 79.99, artisMiktari: 79.99 },
    { ad: "Ürün 3", fiyat: 89.99, artisMiktari: 89.99 },
    { ad: "Ürün 4", fiyat: 104.99, artisMiktari: 104.99 },
];

function btnPlus(element) {
    var fiyatElementi = element.querySelector(".price");
    var mevcutFiyat = parseFloat(fiyatElementi.getAttribute("data-sale-price"));
    var artisMiktari = parseFloat(fiyatElementi.querySelector("span").textContent);
    var yeniFiyat = mevcutFiyat + artisMiktari;
    fiyatElementi.setAttribute("data-sale-price", yeniFiyat);
    fiyatElementi.innerHTML = "$" + yeniFiyat.toFixed(2) + " <span>" + (artisMiktari * 2).toFixed(2) + "</span>";
}
*/

/*
var urunler = [
    { ad: "Ürün 1", fiyat: 104.99, artisMiktari: 104.99 },
    { ad: "Ürün 2", fiyat: 79.99, artisMiktari: 79.99 },
    { ad: "Ürün 3", fiyat: 89.99, artisMiktari: 89.99 },
    { ad: "Ürün 4", fiyat: 104.99, artisMiktari: 104.99 },
];

function btnPlus(element) {
    var fiyatElementi = document.querySelectorAll(".price")[urunlerIndex];
    var mevcutFiyat = parseFloat(fiyatElementi.getAttribute("data-sale-price"));
    // var artisMiktari = urunler[urunlerIndex].artisMiktari;
    var artisMiktari = parseFloat(fiyatElementi.querySelector("span").textContent);
    var yeniFiyat = mevcutFiyat + mevcutFiyat;
    fiyatElementi.setAttribute("data-sale-price", yeniFiyat);
    fiyatElementi.innerHTML = yeniFiyat + "$";
}
*/


//! bu satırda kaldı fiyatı "-" ile azaltmaya çalışıyorsun

/*
function btnMinuss(button, id) {
    var satis = button.parentNode.querySelector("#f");
    var mainFiyat = button.parentNode.querySelector(".cizgi");
  
    var item = document.getElementById(id).parentNode.querySelector("f");
    var itemMainPricee = item.getAttribute("data-main-price");
    var satisFiyatt = item.getAttribute("data-sale-price");
  
    var input = button.nextElementSibling;
    let count2 = parseInt(input.value);
    count2 -= 1;
  
    if (count2 < 1) {
      count2 = 1; // Sayı sıfırdan küçük olmamalı
    }
  
    var satisFiyatNum2 = Number(satisFiyatt) * count2;
  
    mainFiyat.innerHTML = "$" + (Number(itemMainPricee) * count2).toFixed(2);
    satis.innerHTML = "$" + satisFiyatNum2.toFixed(2);
  
    input.value = count2.toString();
  }

*/







function btnMinuss(button, id) {
    console.log("logged here")
    var satis = button.parentNode.querySelector("#f");
    var mainFiyat = button.parentNode.querySelector(".cizgi");
    console.log(id)
    var item = document.getElementById(id).parentNode.querySelector("a");
    var itemMainPrice = item.getAttribute("data-main-price");
    var satisFiyat = item.getAttribute("data-sale-price");

    console.log(itemMainPrice);

    console.log({ button })

    var input = button.nextElementSibling.nextElementSibling;
    let count = parseInt(input.value);
    console.log({ count })
    if (count > 0) {
        count -= 1;

        var satisFiyatNum = Number(satisFiyat) * count;
        mainFiyat.innerText = "$" + (Number(itemMainPrice) * count).toFixed(2);
        satis.innerText = "$" + satisFiyatNum.toFixed(2);
        input.value = count.toString();
    }
}




//! - fonksiyonu deneme
/*
function btnMinuss(button, id) {
    var satis = button.parentNode.querySelector("#f");
    var mainFiyat = button.parentNode.querySelector(".yazi");

    var item = document.getElementById(id).parentNode.querySelector("a");
    var itemMainPrice = item.getAttribute("data-main-price");
    var satisFiyat = item.getAttribute("data-sale-price");

    console.log(itemMainPrice);

    var input = button.nextElementSibling;
    let count2 = parseInt(input.value);
    count2 -= 1; 
    var satisFiyatNum = Number(satisFiyat) * count2;
    mainFiyat.innerHTML = "$" + (Number(itemMainPrice) * count2).toFixed(2);
    satis.innerHTML = "$" + satisFiyatNum.toFixed(2);
    input.value = count2.toString(); 
}
*/

/*
function btnMinuss(button, id) {
    var satis2 =  button.parentNode.querySelector("#f");
    var mainFiyat2 = button.parentNode.querySelector(".cizgi");


    var item2 = document.getElementById(id).parentNode.querySelector("f");
    var itemMainPrice2 = item2.getAttribute("data-main-price");
    var satisFiyat2 = item2.getAttribute("data-sale-price");

    console.log(itemMainPrice2);


    var input = button.nextElementSibling;
    let count2 = parseInt(input.value);
    count2 += 1;
    var satisFiyatNum2 = Number(satisFiyat2) * count2;
    mainFiyat2.innerHTML = "$" + (Number(itemMainPrice2 * count).toFixed(2));
    satis2.innerHTML = "$"+satisFiyatNum2.toFixed(2);
    input.value = count.toString();
}
*/

function btnPlus(button, id) {
    console.log("loggedbtnPlus here")
    var satis = button.parentNode.querySelector("#f");
    var mainFiyat = button.parentNode.querySelector(".cizgi");


    var item = document.getElementById(id).parentNode.querySelector("a");
    var itemMainPrice = item.getAttribute("data-main-price");
    var satisFiyat = item.getAttribute("data-sale-price")

    console.log(itemMainPrice);



    var input = button.nextElementSibling;
    let count = parseInt(input.value);
    count += 1
    var satisFiyatNum = Number(satisFiyat) * count;
    //mainFiyat.innerHTML = (Number(itemMainPrice) * count);
    mainFiyat.innerHTML = "$" + (Number(itemMainPrice) * count).toFixed(2);
    //satis.innerHTML = (Number(satisFiyat) * count); // SENİN KOD 
    satis.innerHTML = "$" + satisFiyatNum.toFixed(2); // BENİM KOD 
    input.value = count.toString();
}
/*
function btnMinussCount(button, id) {
    var inputElement = button.nextElementSibling.nextElementSibling;
    var value = parseInt(inputElement.value);


    if (value > 0) {
        value--;
        inputElement.value = value;
    }
}
*/
function btnAzalis(obj) {
    var input = obj.parentElement.querySelector("input");
    var azalisValue = parseInt(input.value);

    if (azalisValue > 0) {
        input.value = azalisValue - 1;
    }
}
function btnArtis(obje) {
    var input = obje.parentElement.querySelector("input");
    var artisValue = parseInt(input.value);

    if (artisValue > 0) {
        input.value = artisValue + 1;
    }
}



//! aynı ürünün 2 defa sepete eklenmesini engelleme 
//! aynı ürünü 2 defa sepete tek tek id ile eklenmesini engelleme








/*
let cartStop = [];

function addToCart(box) {
    if (cartStop.includes(box)) {
        console.log("Bu ürün zaten sepete eklenmiş.");
    } else {
        cartStop.push(box);
        console.log("Ürün sepete başarıyla eklendi.");
        updateCart();
    }
}

function updateCart() {
    let cartStopped = document.getElementById("contents");
    cartStopped.innerHTML = "";
    for (let i = 0; i < cartStop.length; i++) {
        let listItemm = document.createElement("li");
        listItem.textContent = cartStop[i];
        cartStopped.appendChild(listItemm)
    }
}

let addToCartButtons = document.getElementsByClassName("add-chart");
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
        let productName = this.parentNode.querySelector("h3").textContent;
        addToCart(productName); 
    });
}
*/




/*
var sepetTekrar = [];

function goToChart() {
    var urunTekrar = sepetTekrar.find(function (item) {
        return item.id === urunId;
        
    });

    if (urunTekrar) {
        urunTekrar.miktar++;
    } else {
        sepet.push({ id: urunId, miktar: 1 });
    }
}

function sepetiGonder() {
    console.log(sepetTekrar);
}
*/


//! "X"  SİLME BUTONU

// var silmeIşlemi = document.getElementsByClassName("fa-x");
// for (var i = 0; i < silmeIşlemi.length; i++) {
//     silmeIşlemi[i].addEventListener("click", urunuSil);
// }

// function urunuSil() {
//     var urunuSilButonu = this.parentElement;
//     var silmeButonu = urunuSilButonu.parentElement;
//     silmeButonu.removeChild(urunuSilButonu);
// }

var miniInput = document.getElementById('mini-pizzas');
miniInput.addEventListener('input', function () {
    var deger = miniInput.value;
    if (!(/^\d*$/.test(deger))) {
        miniInput.value = deger.replace(/[^\d]/g, '');
    }
});



var miniBurgerInput = document.getElementById('mini-burgers');
miniBurgerInput.addEventListener('input', function () {
    var deger = miniBurgerInput.value;
    if (!(/^\d*$/.test(deger))) {
        miniBurgerInput.value = deger.replace(/[^\d]/g, '');
    }
});



var mixedInput = document.getElementById('mixed-pizzas');
mixedInput.addEventListener('input', function () {
    var deger = mixedInput.value;
    if (!(/^\d*$/.test(deger))) {
        mixedInput.value = deger.replace(/[^\d]/g, '');
    }
})

var meatballInput = document.getElementById('meatball-burgers');
meatballInput.addEventListener('input', function () {
    var deger = meatballInput.value;
    if (!(/^\d*$/.test(deger))) {
        meatballInput.value = deger.replace(/[^\d]/g, '');
    }
})

/*
var inputs = document.getElementsByClassName('adet-sayi');
inputs.addEventListener('input', function(){
    var deger = inputs.value;
    if (!(/^\d*$/.test(deger))) {
        meatballInput.value = deger.replace(/[^\d]/g, '');
    }
})
*/
function validateNumber(event) {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue);

    if (isNaN(numericValue)) {
        event.target.value = "";
    } else {
        event.target.value = numericValue;
    }
}

//! enter tuşu ile fiyatı guncelleme

/*
function guncelleFiyat(event) {
    if (event.key == 'Enter' || typeof event.key === 'number' ) {
        var sayiGuncelle = document.getElementById("enter").value;
        var fiyatEnter = parseFloat(sayiGuncelle);
        document.getElementById("enterFiyat").innerHTML = '+enter-fiyat'; 
        document.getElementById("f").innerHTML = "+fiyat"
    }
  }
*/
function guncelleFiyat(event, id) {
    if (event.key == 'Enter' || typeof event.key === 'number') {
        var sayiGuncelle = document.getElementById("enter").value;
        var fiyatEnter = parseFloat(sayiGuncelle);
        var item = document.getElementById(id).parentNode.querySelector("a");
        var itemMainPrice = item.getAttribute("data-main-price");
        var satisFiyat = item.getAttribute("data-sale-price")
        var satisFiyatNum = Number(satisFiyat) * fiyatEnter
        document.getElementById("enterFiyat").innerHTML = "$" + (Number(itemMainPrice) * fiyatEnter).toFixed(2);
        document.getElementById("f").innerHTML = "$" + satisFiyatNum.toFixed(2);
    }
}


//! sepete 2 defa ürün gitmesini engelliyor
/*
var sepet = [];

function addToCart(urun) {
    var index = sepet.findIndex(function(item) {
        return item.id === urun.id;
    });

    if (index === -1) {
        sepet.push(urun);
        console.log(urun.name + " sepete eklendi. ");
    } else {
        console.log(urun.name + "zaten sepetinizde bulunuyor.");
    }
}
var miniPizzas = {id: mini-pizzas};
var miniBurgers = {id: mini-burgers};
var mixedPizzas = {id: mixed-pizzas};
var meatballBurgers = {id: meatball-burgers};


addToCart(miniPizzas);
addToCart(miniBurgers);
addToCart(mixedPizzas);
addToCart(meatballBurgers);

console.log("Sepet içeriği:", sepet);
*/

/*
var inputs = document.getElementsByClassName('adet-sayi');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        var value=this.value;
        if (!(/^\d*$/.test(value))) {
            this.value = value.replace(/[^\d]/g, '');
          }
    })
}
*/





// function btnPlus() {
//     let count = parseInt(adetSayi.value);
//     count += 1;
//     adetSayi.value = count.toString();
// }




// btnMinus.addEventListener("click", function () {
//     let count = parseInt(adetSayi.value);
//     if (count > 0) {
//         count -= 1;
//         adetSayi.value = count.toString();
//     }
// })



/*
 searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(e.composedPath().includes(searchBtn)){
            searchForm.classList.remove("active");
        }
 
    })
 });
*/



function DeleteOrder(obj) {
    obj.closest(".cart-item").remove();
}

function goToChart(cartHtml, id, value = 1) {
    var itemName = cartHtml.getAttribute("data-name");
    var itemSalePrice = cartHtml.getAttribute("data-sale-price");
    var itemImage = cartHtml.getAttribute("data-image");
    var itemMainPrice = cartHtml.getAttribute("data-main-price");
    var itemCat = cartHtml.getAttribute("data-category");


    //var quantity = document.getElementById(id);
    var quantityData = value;
    var totalPricewithKusurat = itemSalePrice * quantityData;
    totalPricewithKusurat = Math.floor(totalPricewithKusurat);
    var totalPrice = "$" + (itemSalePrice * quantityData).toFixed(2);
    var maxPrice = "$" + (itemMainPrice * quantityData).toFixed(2) + "$";



    console.log(quantityData);

    var cartHtml = "<div class='cart-item'><i class='fas fas-times'><img src='" + itemImage + "' alt='menu'><div class='content' id='contents'><h3>" + itemName + "</h3><button type='button' onclick='DeleteOrder(this)' class='deletetranspan'><i class='fa-solid fa-x'></i></button><small class='  small'>" + itemCat + "</small><div class='price'><div id='f'>" + totalPrice + "</div><p class='cizgi' id='enterFiyat'>" + maxPrice + "</p><button id='' onclick='btnMinuss(this,\"" + id + "\")' class='button-minus'>-</button><button id='' onclick='btnPlus(this, \"" + id + "\")' class='button-plus'>+</button><input oninput='validateNumber(event)' onkeydown='guncelleFiyat(event,\"" + id + "\")'id='enter' type='text' class='adet-sayi' value='" + quantityData + "'></div></div></div>";



    /*
    var cartHtml = [
        {
            name: "cart item 02",
            price: "$15.99",
            oldPrice: "27.99",
            imgSrc: "foto/menu-2.png"
        },
        {
            name: "cart item 02",
            price: "$9.99",
            oldPrice: "14.99",
            imgSrc: "foto/menu-3.png"
        },
        {
            name: "cart item 02",
            price: "$12.99",
            oldPrice: "18.99",
            imgSrc: "foto/menu-4.png"
        },
 
    ];
 
    var cartHtml="";
    for (var i = 0; i < cartItems.length; i++){
        var item = cartItems[i];
        cartHtml += "<div class='cart-item>";
        cartHtml += "<i class='fas fa-times'><img src='>"
    }
    */




    /*
        for(var i=0; i<cartItems.length; i++) {
            var item = cartItems[i];
            cartHtml += "<div class='cart-item>'";
            cartHtml += "<i class='fas fas-times'><img src='" + item.imageSrc + "' alt='menu'></i>";
            cartHtml += "<div class='content'>";
            cartHtml += "<h3>" + item.name + "</h3>";
            cartHtml += "<h3 class='yazi'>adet</h3>";
            cartHtml += "<div class='price'>" + item.price + "<p class='cizgi'>" + item.oldPrice + "</p>";
            cartHtml += "<button class='button-minus'>-</button>";
            cartHtml += "<button id='' onclick='btnPlus(this)' class='button-plus'>+</button>";
            cartHtml += "<input type='text' class='adet-sayi' value='0'></div></div></div>";
             }     
    */





    var divElement = document.createElement("div");
    divElement.innerHTML = cartHtml;

    var cartMenuElement = document.getElementById("cartMenu");
    cartMenuElement.prepend(divElement);

    // var productName = item.getAttribute("data-name");
    // var productCat = item.getAttribute("data-category");
    // var productMainPrice = item.getAttribute("data-main-price");
    // var productSalePrice = item.getAttribute("data-sale-price");

    // var chartName = document.getElementById("PrName");
    // chartName.innerText = productName;
    // chartName.setAttribute("data-get-price", productSalePrice);
}



    //! en son yarım kalan işin fiyatı azaltmaya butonunu yapmaya çalışıyorsun


