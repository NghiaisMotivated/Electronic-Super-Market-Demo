// Biến để lưu API
var dataStore = 'http://localhost:3000/ip14';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ip14) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ip14.map(function (i14) {
            return `
            <div class="new product-box">
                <a href ="${i14.link}">
                    <img src="${i14.img}" alt="" class="product-img">
                    <h2 class="product-title">${i14.name}</h2>
                    <span class="product-price">${i14.price}₫</span> <br>
                    </p>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-0').innerHTML = html
        console.log(html)
    })


// Biến để lưu API
var dataStore = 'http://localhost:3000/ip14plus';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ip14plus) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ip14plus.map(function (ip14pl) {
            return `
            <div class="new product-box">
                <a href ="${ip14pl.link}">
                    <img src="${ip14pl.img}" alt="" class="product-img">
                    <h2 class="product-title">${ip14pl.name}</h2>
                    <span class="product-price">${ip14pl.price}₫</span> <br>
                    </p>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-1').innerHTML = html
        console.log(html)
    })

// Biến để lưu API
var dataStore = 'http://localhost:3000/ip14pro';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ip14pro) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ip14pro.map(function (ip14pr) {
            return `
            <div class="new product-box">
                <a href = "${ip14pr.link}">
                    <img src="${ip14pr.img}" alt="" class="product-img">
                    <h2 class="product-title">${ip14pr.name}</h2>
                    <span class="product-price">${ip14pr.price}₫</span> <br>
                    </p>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-2').innerHTML = html
        console.log(html)
    })


// Biến để lưu API
var dataStore = 'http://localhost:3000/ip14propmax';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ip14propmax) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ip14propmax.map(function (ip14propm) {
            return `
            <div class="new product-box">
                <a href = "${ip14propm.link}">
                    <img src="${ip14propm.img}" alt="" class="product-img">
                    <h2 class="product-title">${ip14propm.name}</h2>
                    <span class="product-price">${ip14propm.price}₫</span> <br>
                    </p>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-3').innerHTML = html
        console.log(html)
    })

// Biến để lưu API
var dataStore = 'http://localhost:3000/ip14propmax';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ip14propmax) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ip14propmax.map(function (ip14propm) {
            return `
            <div class="new product-box">
                <a href = "${ip14propm.link}">
                    <img src="${ip14propm.img}" alt="" class="product-img">
                    <h2 class="product-title">${ip14propm.name}</h2>
                    <span class="product-price">${ip14propm.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-4').innerHTML = html
        console.log(html)
    })













// Biến để lưu API
var dataStore = 'http://localhost:3000/ssSmart';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ssSmart) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ssSmart.map(function (sSmart) {
            return `
            <div class="new product-box s-${sSmart.id}">
                <a href ="">
                    <img src="${sSmart.img}" alt="" class="product-img">
                    <h2 class="product-title">${sSmart.name}</h2>
                    <span class="product-price">${sSmart.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-00').innerHTML = html
        console.log(html)
    })


// Biến để lưu API
var dataStore = 'http://localhost:3000/smartTVLG';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (smartTVLG) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = smartTVLG.map(function (smartTV) {
            return `
            <div class="new product-box s-${smartTV.id}">
                <a href ="">
                    <img src="${smartTV.img}" alt="" class="product-img">
                    <h2 class="product-title">${smartTV.name}</h2>
                    <span class="product-price">${smartTV.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-01').innerHTML = html
        console.log(html)
    })

// Biến để lưu API
var dataStore = 'http://localhost:3000/smartTVSS4k';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (smartTVSS4k) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = smartTVSS4k.map(function (smartTVSS4) {
            return `
            <div class="new product-box s-${smartTVSS4.id}"">
                <a href ="">
                    <img src="${smartTVSS4.img}" alt="" class="product-img">
                    <h2 class="product-title">${smartTVSS4.name}</h2>
                    <span class="product-price">${smartTVSS4.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-02').innerHTML = html
        console.log(html)
    })

// Biến để lưu API
var dataStore = 'http://localhost:3000/LGInverter649';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (LGInverter649) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = LGInverter649.map(function (Inverter649) {
            return `
            <div class="new product-box">
                <a href ="">
                    <img src="${Inverter649.img}" alt="" class="product-img">
                    <h2 class="product-title">${Inverter649.name}</h2>
                    <span class="product-price">${Inverter649.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-03').innerHTML = html
        console.log(html)
    })

// Biến để lưu API
var dataStore = 'http://localhost:3000/SamsungInverter488';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (SamsungInverter488) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = SamsungInverter488.map(function (SamsungInverter) {
            return `
            <div class="new product-box">
                <a href ="">
                    <img src="${SamsungInverter.img}" alt="" class="product-img">
                    <h2 class="product-title">${SamsungInverter.name}</h2>
                    <span class="product-price">${SamsungInverter.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-04').innerHTML = html
        console.log(html)
    })

//         // Biến để lưu API
var dataStore = 'http://localhost:3000/ToshibaInverter180';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ToshibaInverter180) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ToshibaInverter180.map(function (ToshibaInverter) {
            return `
            <div class="new product-box">
                <a href ="">
                    <img src="${ToshibaInverter.img}" alt="" class="product-img">
                    <h2 class="product-title">${ToshibaInverter.name}</h2>
                    <span class="product-price">${ToshibaInverter.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-05').innerHTML = html
        console.log(html)
    })







//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Midea';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Midea) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Midea.map(function (Mide) {
            return `
                <div class="new product-box">
                    <a href ="">
                        <img src="${Mide.img}" alt="" class="product-img">
                        <h2 class="product-title">${Mide.name}</h2>
                        <span class="product-price">${Mide.price}₫</span> <br>
                    </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-m').innerHTML = html
        console.log(html)
    })




//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Nagakawa';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Nagakawa) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Nagakawa.map(function (Nagakaw) {
            return `
            <div class="new product-box">
                <a href ="">
                    <img src="${Nagakaw.img}" alt="" class="product-img">
                    <h2 class="product-title">${Nagakaw.name}</h2>
                    <span class="product-price">${Nagakaw.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-n').innerHTML = html
        console.log(html)
    })






//         // Biến để lưu API
var dataStore = 'http://localhost:3000/LGInverter10';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (LGInverter10) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = LGInverter10.map(function (LGInverter) {
            return `
                <div class="new product-box">
                    <a href ="">
                        <img src="${LGInverter.img}" alt="" class="product-img">
                        <h2 class="product-title">${LGInverter.name}</h2>
                        <span class="product-price">${LGInverter.price}₫</span> <br>
                    </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-a').innerHTML = html
        console.log(html)
    })




//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Electrolux';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Electrolux) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Electrolux.map(function (Electro) {
            return `
            <div class="new product-box">
                <a href ="">
                    <img src="${Electro.img}" alt="" class="product-img">
                    <h2 class="product-title">${Electro.name}</h2>
                    <span class="product-price">${Electro.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-b').innerHTML = html
        console.log(html)
    })









//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Delites';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Delites) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Delites.map(function (Delite) {
            return `
                <div class="new product-box">
                    <a href ="">
                        <img src="${Delite.img}" alt="" class="product-img">
                        <h2 class="product-title">${Delite.name}</h2>
                        <span class="product-price">${Delite.price}₫</span> <br>
                    </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-c').innerHTML = html
        console.log(html)
    })




//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Crystal';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Crystal) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Crystal.map(function (Crysta) {
            return `
            <div class="new product-box">
                <a href ="">
                    <img src="${Crysta.img}" alt="" class="product-img">
                    <h2 class="product-title">${Crysta.name}</h2>
                    <span class="product-price">${Crysta.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-d').innerHTML = html
        console.log(html)
    })




//         // Biến để lưu API
var dataStore = 'http://localhost:3000/SonyHTS40R';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (SonyHTS40R) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = SonyHTS40R.map(function (HTS40R) {
            return `
                <div class="new product-box">
                    <a href ="">
                        <img src="${HTS40R.img}" alt="" class="product-img">
                        <h2 class="product-title">${HTS40R.name}</h2>
                        <span class="product-price">${HTS40R.price}₫</span> <br>
                    </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-e').innerHTML = html
        console.log(html)
    })




//         // Biến để lưu API
var dataStore = 'http://localhost:3000/SonyHTS20R';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (SonyHTS20R) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = SonyHTS20R.map(function (HTS20R) {
            return `
            <div class="new product-box">
                <a href ="">
                    <img src="${HTS20R.img}" alt="" class="product-img">
                    <h2 class="product-title">${HTS20R.name}</h2>
                    <span class="product-price">${HTS20R.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-f').innerHTML = html
        console.log(html)
    })








//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Sanaky260';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (SonyHTS40R) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = SonyHTS40R.map(function (HTS40R) {
            return `
                <div class="new product-box">
                    <a href ="">
                        <img src="${HTS40R.img}" alt="" class="product-img">
                        <h2 class="product-title">${HTS40R.name}</h2>
                        <span class="product-price">${HTS40R.price}₫</span> <br>
                    </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-g').innerHTML = html
        console.log(html)
    })

//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Sanaky305';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (SonyHTS20R) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = SonyHTS20R.map(function (HTS20R) {
            return `
            <div class="new product-box">
                <a href ="">
                    <img src="${HTS20R.img}" alt="" class="product-img">
                    <h2 class="product-title">${HTS20R.name}</h2>
                    <span class="product-price">${HTS20R.price}₫</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-h').innerHTML = html
        console.log(html)
    })







//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Kangaroo';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Kangaroo) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Kangaroo.map(function (Kangaro) {
            return `
                 <div class="new product-box">
                     <a href ="">
                         <img src="${Kangaro.img}" alt="" class="product-img">
                         <h2 class="product-title">${Kangaro.name}</h2>
                         <span class="product-price">${Kangaro.price}₫</span> <br>
                     </a>
                 </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-i').innerHTML = html
        console.log(html)
    })

//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Sunhouse';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Sunhouse) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Sunhouse.map(function (Sunhous) {
            return `
             <div class="new product-box">
                 <a href ="">
                     <img src="${Sunhous.img}" alt="" class="product-img">
                     <h2 class="product-title">${Sunhous.name}</h2>
                     <span class="product-price">${Sunhous.price}₫</span> <br>
                 </a>
             </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-j').innerHTML = html
        console.log(html)
    })





//         // Biến để lưu API
var dataStore = 'http://localhost:3000/SamsungRobot';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (SamsungRobot) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = SamsungRobot.map(function (SamsungRobo) {
            return `
                 <div class="new product-box">
                     <a href ="">
                         <img src="${SamsungRobo.img}" alt="" class="product-img">
                         <h2 class="product-title">${SamsungRobo.name}</h2>
                         <span class="product-price">${SamsungRobo.price}₫</span> <br>
                     </a>
                 </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-k').innerHTML = html
        console.log(html)
    })

//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Ecovacs';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Ecovacs) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Ecovacs.map(function (Ecovac) {
            return `
             <div class="new product-box">
                 <a href ="">
                     <img src="${Ecovac.img}" alt="" class="product-img">
                     <h2 class="product-title">${Ecovac.name}</h2>
                     <span class="product-price">${Ecovac.price}₫</span> <br>
                 </a>
             </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-l').innerHTML = html
        console.log(html)
    })







//         // Biến để lưu API
var dataStore = 'http://localhost:3000/SamsungRobot';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (SamsungRobot) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = SamsungRobot.map(function (SamsungRobo) {
            return `
                 <div class="new product-box">
                     <a href ="">
                         <img src="${SamsungRobo.img}" alt="" class="product-img">
                         <h2 class="product-title">${SamsungRobo.name}</h2>
                         <span class="product-price">${SamsungRobo.price}₫</span> <br>
                     </a>
                 </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-k').innerHTML = html
        console.log(html)
    })

//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Ecovacs';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Ecovacs) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Ecovacs.map(function (Ecovac) {
            return `
             <div class="new product-box">
                 <a href ="">
                     <img src="${Ecovac.img}" alt="" class="product-img">
                     <h2 class="product-title">${Ecovac.name}</h2>
                     <span class="product-price">${Ecovac.price}₫</span> <br>
                 </a>
             </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-l').innerHTML = html
        console.log(html)
    })






//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Daikiosan';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Daikiosan) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Daikiosan.map(function (Daikiosa) {
            return `
                 <div class="new product-box">
                     <a href ="">
                         <img src="${Daikiosa.img}" alt="" class="product-img">
                         <h2 class="product-title">${Daikiosa.name}</h2>
                         <span class="product-price">${Daikiosa.price}₫</span> <br>
                     </a>
                 </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-x').innerHTML = html
        console.log(html)
    })

//         // Biến để lưu API
var dataStore = 'http://localhost:3000/Mutosi';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (Mutosi) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = Mutosi.map(function (Mutos) {
            return `
             <div class="new product-box">
                 <a href ="">
                     <img src="${Mutos.img}" alt="" class="product-img">
                     <h2 class="product-title">${Mutos.name}</h2>
                     <span class="product-price">${Mutos.price}₫</span> <br>
                 </a>
             </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-y').innerHTML = html
        console.log(html)
    })





//         // Biến để lưu API
var dataStore = 'http://localhost:3000/macbook';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (macbook) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = macbook.map(function (mac) {
            return `
                 <div class="new product-box">
                     <a href ="">
                         <img src="${mac.img}" alt="" class="product-img">
                         <h2 class="product-title">${mac.name}</h2>
                         <span class="product-price">${mac.price}₫</span> <br>
                     </a>
                 </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-mb').innerHTML = html
        console.log(html)
    })

//         // Biến để lưu API
var dataStore = 'http://localhost:3000/ASUSs';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ASUSs) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ASUSs.map(function (ASUS) {
            return `
             <div class="new product-box">
                 <a href ="">
                     <img src="${ASUS.img}" alt="" class="product-img">
                     <h2 class="product-title">${ASUS.name}</h2>
                     <span class="product-price">${ASUS.price}₫</span> <br>
                 </a>
             </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-as').innerHTML = html
        console.log(html)
    })





var dataStore = 'http://localhost:3000/new1';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (new1) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = new1.map(function (newss) {
            return `
             <div class="card mb-3" style="max-width: 650px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img style = "margin-top: 50px" src="${newss.img}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <a href ="" style = "text-decoration: none">

                            <h5 style = "color: black" class="card-title">${newss.name}</h5>
                            <p style = "color: black; font-size: 13px;" class="card-text-1">${newss.title}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                            </a>

                        </div>
                        </div>
                    </div>
                    </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-new').innerHTML = html
        console.log(html)
    })