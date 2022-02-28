




//event listener 
let listButton = document.getElementById("listHotelsButton");
listButton.addEventListener("click", function () {
  getApi();
  bannerstylies();
})


function bannerstylies() {
  document.querySelector("h2").style.display = "none";
  document.querySelectorAll("p")[2].style.display = "none";
  let smallimages = document.querySelectorAll("img");
  for (let i = 0; i < smallimages.length; i++) {
    smallimages[i].style.display = "none"
  }
  document.querySelector("h4").style.display = "none";
  document.getElementById("search-banner").setAttribute("style",
    "width: 100%; height: 100%; background-image: url('https://cdn.pixabay.com/photo/2019/08/09/06/10/marina-4394446_960_720.jpg') ; display: inline-block;     background-position: center;     background-size: cover;  ")

}



function getApi() {

  imgurl = "https://www.woxxtravel.com/images/hotel/large/";
  listarray = [];
  fetch("api.json")
    .then(response => response.json())
    .then(data => data.hotellist.forEach(element => {

      document.getElementById("horizontalotelcart").innerHTML
        +=
        `
      <div class="container">

      <div id="search-list">
  
        <div class="woxx-horizontal-hotel-card row">
          <div class="col-md-3">
  
          </div>
  
          <div class="col-md-9 m-0 p-0">
            <div class="card m-0 p-2">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://www.woxxtravel.com/images/hotel/large/${element.mainimage}" height="100%"
                    width="100%" class="card-images" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-7 p-0">
                        <div class="information-for-booking">
                          <span style="color:red; padding-right:1em ;" >
                                WOXX öneriyor
                          </span> 
                           <span style="color:#6dcc2e;">
                              Ücretsiz iptal seçeneği
                          </span>
                        </div>
                        <div>
                          <h5> ${element.hotelName}</h5> 
                        </div>
                      
                          <p style="font-size: x-small;">${element.hotelCountry}/${element.hotelCity}/${element.hotelTown} </p>
                        
                      </div>
                      <div class="col-5 rating-point-of-hotel ">
                        9.4 Mükemmel
                        <div class="comment">340 yorum</div>
                      </div>
                    </div>
  
                    <div class=" row">
                      <div class="col-7" style="margin-top: 11%; ">
                        <div class="row information-otel" >
                         <span id ="hotelfeatures">   </span>
                        </div>
                      </div>
                      <div class="col-5 mb-0 payment-advertbox-context">
                        <label class="world">WORLD</label> <span class="speacial-for-world">'e özel</span>
                        <div class="information-for-price">2 Gece Toplam Fiyat</div>
                        <div class="price">958 TL</div>
  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="row">
                <div class="col-8 row m-0 ">
                  <div class=" col-sm-6 col-md-3 ">Ekstra Rezervasyon</div>
                  <div class="col-sm-6 col-md-5"> %15 Erken Rezervasyon İndirimi</div>
                  <div class="col-sm-4 col-md-2"></div>
                </div>
                <div class="col-4 " style="padding-left: 49px; padding-right: 16px;">
                  <button class="searching-button-for-rooms">Odaları İncele</button>
                </div>
  
  
              </div>
            </div>
            <div class="col"></div>
          </div>
  
        </div>
      </div>
      `
    
    }
    )

    )
}


$(function () {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function (start, end, label) {
    console.log(start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});


/*
document.writeln()


function featurelistarray() {
  featureslist = [];
  fetch("api.json")
    .then((response) => response.json())
    .then((data) => {
      data.hotellist.forEach((features) => {
        featureslist.push(features);
        console.log(features);
      });
    })
  console.log(featureslist);
  return featureslist;

}
var featureslisting = featurelistarray();
(function () {
  //   for(let i = 0 ; i<featureslisting.length; i++) {
  // featureslisting[i].forEach(e => document.getElementById("hotelfeatures").innerHTML = e.featureName)
  // }
  // for(let i = 0 ; i<featureslisting.length; i++) {
  // featureslisting[i].forEach(e => console.log(e) )
  //}
}())
*/













