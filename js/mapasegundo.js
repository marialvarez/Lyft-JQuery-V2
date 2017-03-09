function init(){
    solicitarEstimado();
    solicitarConductor();
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
    new google.maps.Marker({position:latCuatro, map:map, icon:'image/carriño.png'});
    
    var infowindow = new google.maps.InfoWindow({
        content:contentString
    });
    
    pazPeru.addEventListener('click', function(){
        infowindow.open(map,pazPeru)
    })
}

function solicitarEstimado(){
    $.ajax({
        url:"http://clientes.geekadvice.pe/api/estimado",
        data:{"tipo":1}
    }).success(function(_data){
        //console.log(_data.estimado); 
        update1(_data);
    });
    
}
function solicitarConductor(){
    $.ajax({
        url:"http://clientes.geekadvice.pe/api/carrera",
        data:{"tipo":1}
    }).success(function(_data){
        //console.log(_data.estimado); 
        update2(_data);
    });
    
}
function update1(_info){
    $("#price").text(_info.estimado.min);
    $("#destiny").text(_info.destino);
    $("#from").text(_info.origen);
    //alert(_info.destino);
    //alert(_info.estimado.min);
}
function update2(_info){
    $("#conductor-img").attr({"src":_info.conductor.url});
    //alert(_info.destino);
    //alert(_info.estimado.min);
}


