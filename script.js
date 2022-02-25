
 /*

function getApi () {
     listhotelname = [];
     var listcanceled = [];
     var listfeatures = [];   

    fetch("api.json")
    .then (response => response.json() )
    .then (data =>  data.hotellist.forEach( elements => 
        document.getElementById("table").innerHTML 
        += 
        `  <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${elements.hotelName} </td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table> `
        
        )
   
    

      )

      
}

getApi()




*/


