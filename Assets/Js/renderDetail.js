// Biến để lưu API
var dataStore = 'http://localhost:3000/ip14detail';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ip14detail) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ip14detail.map(function (i14) {
            return `
            <div class = "begin">
            <h5>${i14.title1}</h5>
            <p>${i14.dayupdate}</p>
            <p>${i14.p}</p>
            <img src="${i14.img}" alt="">
            <h5>${i14.screen}</h5>
            <p>${i14.p0}</p>
            <img src="${i14.img1}" alt="">
            <p>${i14.p1}</p>
            <h5>${i14.comment}</h5>
            <p>${i14.p3}</p>
            <h5>${i14.Dynamic}</h5>
            <p>${i14.p4}</p>
            <img src="${i14.img2}" alt="">
            <p>${i14.p44}</p>
            <h5>${i14.always}</h5>
            <p>${i14.p5}</p>
            <img src="${i14.img3}" alt="">
            <h5>${i14.config}</h5>
            <p>${i14.p6}</p>
            <img src="${i14.img4}" alt="">
            <h5>${i14.ios}</h5>
            <p>${i14.p7}</p>
            <img src="${i14.img5}" alt=""> </span>

            </div>





            
            `
        })
        var html = htmls.join('');
        document.getElementById('omega').innerHTML = html
        console.log(html)
    })



    // Biến để lưu API
var dataStore = 'http://localhost:3000/configDetail14';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (configDetail14) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = configDetail14.map(function (configDetail) {
            return `
           <div class ="end">
           <h6>Thông số kỹ thuật</h6>
                <ul>
                    <li>
                        <div class ="ele-0 d-flex">
                        <span>Kích thước màn hình </span><p>${configDetail.Size}</p>
                        </div>
                    <li>
           
                    <li>
                        <div class ="ele-1 d-flex">
                        <span>Công nghệ màn hình</span><p>${configDetail.techScreen}</p>
                        </div>
                    <li>

                    <li>
                        <div class ="ele-0 d-flex">
                        <span class = "cam">Camera sau</span><p class = "main-cam">${configDetail.Camera1}</p>
                        </div>
                    <li>

                    <li>
                        <div class ="ele-1 d-flex">
                        <span>Camera trước</span><p class = "main-cam-1">${configDetail.CameraF}</p>
                        </div>
                    <li>

                    <li>
                        <div class ="ele-0 d-flex">
                        <span>Chipset</span><p>${configDetail.Chipset}</p>
                        </div>
                    <li>

                    <li>
                        <div class ="ele-1 d-flex">
                        <span>Dung lượng RAM</span><p>${configDetail.RAM}</p>
                        </div>
                    <li>


                    <li>
                        <div class ="ele-0 d-flex">
                        <span>Bộ nhớ trong</span><p>${configDetail.storage}</p>
                        </div>
                    <li>

                    <li>
                        <div class ="ele-0 d-flex">
                        <span>Pin </span><p>${configDetail.Pin}</p>
                        </div>
                    <li>

                    <li>
                        <div class ="ele-0 d-flex">
                        <span>Thẻ SIM</span><p>${configDetail.SIM}</p>
                        </div>
                    <li>

                    <li>
                        <div class ="ele-0 d-flex">
                        <span>Hệ điều hành </span><p>${configDetail.system}</p>
                        </div>
                    <li>

                    <li>
                        <div class ="ele-1 d-flex">
                        <span>Tính năng màn hình</span><p>${configDetail.optionS}</p>
                        </div>
                    <li>
                </ul>
           </div>
            `
        })
        var html = htmls.join('');
        document.getElementById('alpha').innerHTML = html
        console.log(html)
    })




    // Biến để lưu API
var dataStore = 'http://localhost:3000/ip14nodetail';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ip14detail) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ip14detail.map(function (i14) {
            return `
            <div class = "begin">
            <h5>${i14.title1}</h5>
            <p>${i14.dayupdate}</p>
            <p>${i14.p}</p>
            <img src="${i14.img}" alt="">
            <h5>${i14.screen}</h5>
            <p>${i14.p0}</p>
            <img src="${i14.img1}" alt="">
            <p>${i14.p1}</p>
            <h5>${i14.comment}</h5>
            <p>${i14.p3}</p>
            <h5>${i14.Dynamic}</h5>
            <p>${i14.p4}</p>
            <img src="${i14.img2}" alt="">
            <p>${i14.p44}</p>
            <h5>${i14.always}</h5>
            <p>${i14.p5}</p>
            <img src="${i14.img3}" alt="">
            <h5>${i14.config}</h5>
            <p>${i14.p6}</p>
            <img src="${i14.img4}" alt="">
            <h5>${i14.ios}</h5>
            <p>${i14.p7}</p>
            <img src="${i14.img5}" alt=""> </span>

            </div>
            
            `
        })
        var html = htmls.join('');
        document.getElementById('omega1').innerHTML = html
        console.log(html)
    })





    
    // Biến để lưu API
var dataStore = 'http://localhost:3000/ip14pldetail';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ip14detail) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ip14detail.map(function (i14) {
            return `
            <div class = "begin">
            <h5>${i14.title1}</h5>
            <p>${i14.dayupdate}</p>
            <p>${i14.p}</p>
            <img src="${i14.img}" alt="">
            <h5>${i14.screen}</h5>
            <p>${i14.p0}</p>
            <img src="${i14.img1}" alt="">
            <p>${i14.p1}</p>
            <h5>${i14.comment}</h5>
            <p>${i14.p3}</p>
            <h5>${i14.Dynamic}</h5>
            <p>${i14.p4}</p>
            <img src="${i14.img2}" alt="">
            <p>${i14.p44}</p>
            <h5>${i14.always}</h5>
            <p>${i14.p5}</p>
            <img src="${i14.img3}" alt="">
            <h5>${i14.config}</h5>
            <p>${i14.p6}</p>
            <img src="${i14.img4}" alt="">
            <h5>${i14.ios}</h5>
            <p>${i14.p7}</p>
            <img src="${i14.img5}" alt=""> </span>

            </div>
            
            `
        })
        var html = htmls.join('');
        document.getElementById('omega2').innerHTML = html
        console.log(html)
    })





    
    
    // Biến để lưu API
var dataStore = 'http://localhost:3000/ip14thdetail';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ip14detail) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ip14detail.map(function (i14) {
            return `
            <div class = "begin">
            <h5>${i14.title1}</h5>
            <p>${i14.dayupdate}</p>
            <p>${i14.p}</p>
            <img src="${i14.img}" alt="">
            <h5>${i14.screen}</h5>
            <p>${i14.p0}</p>
            <img src="${i14.img1}" alt="">
            <p>${i14.p1}</p>
            <h5>${i14.comment}</h5>
            <p>${i14.p3}</p>
            <h5>${i14.Dynamic}</h5>
            <p>${i14.p4}</p>
            <img src="${i14.img2}" alt="">
            <p>${i14.p44}</p>
            <h5>${i14.always}</h5>
            <p>${i14.p5}</p>
            <img src="${i14.img3}" alt="">
            <h5>${i14.config}</h5>
            <p>${i14.p6}</p>
            <img src="${i14.img4}" alt="">
            <h5>${i14.ios}</h5>
            <p>${i14.p7}</p>
            <img src="${i14.img5}" alt=""> </span>

            </div>
            
            `
        })
        var html = htmls.join('');
        document.getElementById('omega3').innerHTML = html
        console.log(html)
    })


