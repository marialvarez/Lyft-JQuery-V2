function init(){
    solicitarEstimado();
}
function solicitarEstimado(){
    $.ajax({
        url:"http://clientes.geekadvice.pe/api/estimado",
        data:{"tipo":1}
    }).success(function(_data){
        console.log(_data.estimado); 
        update(_data);
    });
}
function update(_info){
    $("#price").text(_info.estimado.min);
    $("#destiny").text(_info.destino);
    //alert(_info.destino);
    //alert(_info.estimado.min);
}