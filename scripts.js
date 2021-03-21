let beolvasas = 0;

$('#noveles').click(function () {
    let beolvasas = beolvasas + 1;
    beolvasas.toString(); 
    $('#szamlalo').html(beolvasas);
    
});