$(document).ready(function () {
    var id = 0;
    $("#adicionar").click(function () {
            var titulo = $("#titulo").val();
            var descricao = $("#descricao").val();
            var data = $("#date").val();
            var importancia = $("input[name='radios']:checked").val();
            if(titulo != "" && titulo != false && descricao != "" && descricao != false && data != "" && data != false && importancia != "" && importancia != false){
                $("#container_incp").prepend("<br/><div id='"+id+"' class='alert alert-primary alert-"+importancia+"' role='alert'>" + titulo +", que consiste em " + descricao + " na data de " + data + "<a href='#' onclick='excluir("+id+")' class='alert-link'><img class='imagens' src='icons8-waste-filled-50.png'></a></div>");
            id++;
                $('.container-fluid').css({display:"none"});
                $('#container_incp').css({display:'block'});
            }else{  
                alert("Preencha todos os campos");
            }}
    );
    $('#adicionarTarefa').click( function(){
        $('.container-fluid').css({display:"block"});
        $('#container_incp').css({display:'none'});
    });
});
function excluir(id){
    $("div").remove( "#"+id+"" );
}