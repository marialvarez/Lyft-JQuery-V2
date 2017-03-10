var cars =[{"nombre":"Line","image":"image/line.png","description":"Shared, 2 riders max","time":"3"},
{"nombre":"Lyft","image":"image/lyft.png","description":"4 seats","time":"3"},
{"nombre":"Plus","image":"image/plus.png","description":"6 seats","time":"3"},    {"nombre":"Premier","image":"image/premier.png","description":"High end, 4 seats","time":"3"}]; 

function init(){
   
    createList();
    
    var li = $("li"); 
    li.each(function(){
       $(this).click(onTypeClick); 
    });
    
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(centrarMapa);
    }
    
    solicitarLugar();
}

function createList() {
    
    var listCars = $("#list-cars");
    
    for(var i in cars){
        var carsHtml = '<li id="'+i+'"><div class="row"><div class="col-xs-3"><img class="img-responsive car" src="'+cars[i].image+'" alt=""></div><div class="col-xs-7"><h4>'+cars[i].nombre+'</h4><small>'+cars[i].description+'</small></div><div class="col-xs-2"><h4>'+cars[i].time+'</h4><small>min</small></div></div></li>';
        
        listCars.append(carsHtml);
    }
}

function onTypeClick(evt) {
    
    console.log(evt.currentTarget);
    localStorage.setItem("car_select",evt.currentTarget.id);
}


var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -16.457368, lng: -71.531508},
        zoom: 16,
        disableDefaultUI: true
    });
  
    var latLongPazPeru = {lat:-16.457336,lng: -71.530440};
    var latDos = {lat:-16.437368,lng: -71.551208};
    var latTres = {lat:-16.457368,lng: -71.521508};
    var latCuatro = {lat:-16.497368,lng: -71.511908};

    var pazPeru = new google.maps.Marker({
        map: map,
        position: latLongPazPeru,
        title: 'Hello World!',
        //label:'X',
        icon: 'image/carriño.png'
    });
    
    new google.maps.Marker({position:latDos, map:map, icon:'image/carriño.png'});
    new google.maps.Marker({position:latTres, map:map, icon:'image/carriño.png'});
    new google.maps.Marker({position:latCuatro, map:map, icon:'ige/carriño.png'});
    
    var infowindow = new google.maps.InfoWindow({
        content:contentString
    });
    
    pazPeru.addEventListener('click', function(){
        infowindow.open(map,pazPeru)
    })
}
function centrarMapa(position){
    map.setZoom(18);
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: map,
        title: "Mi posicion actual"
    });
}

function solicitarLugar(){
    $.ajax({
        url:"http://clientes.geekadvice.pe/api/estimado",
        data:{"tipo":1}
    }).success(function(_data){
        //console.log(_data.estimado); 
        update1(_data);
    });
    
}
function update1(_info){
    $("#currentPos").text(_info.origen);
}

       



