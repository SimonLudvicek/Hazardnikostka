var hody = [];

document.getElementById('game').addEventListener('click',
    function(){
        hod();
        console.log(hody);
    }
);

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod() {
    var h = Math.ceil(Math.random() * 6);
    hody.push(h);
    document.getElementById('cube').src='img/kostka' + h + '.png';
    document.getElementById('result').innerHTML = '<p><strong>Hod:</strong> ' + h + '</p>';
    document.getElementById('result').innerHTML += 
        '<p><strong>Počet hodů:</strong> ' + hody.length + '</p>';
    document.getElementById('result').innerHTML += 
        '<p><strong>Součet hodů:</strong> ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p><strong>Průměr hodů:</strong> ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p><strong>Nejvyšší hod:</strong> ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p><strong>Nejvyšší hod:</strong> ' + minimum(hody) + '</p>';
    return h;
}