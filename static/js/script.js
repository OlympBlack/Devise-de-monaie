//recuperation de chaque champ
let fcfa = document.getElementById('fcfa');
let euro = document.getElementById('euro');
let usd = document.getElementById('usd');

//dictionnaire de convertion d'une monaie vers les autres
const dict = {
    fcfa :{
        euro: 0.0015,
        usd: 0.0016,
    },
    usd :{
        fcfa: 586.9400,
        euro: 0.9415,
    },
    euro :{
        fcfa: 655.9570,
        usd: 1.1193,
    }
}

//l'evenement qui ecoute le champ fcfa et convertir le value vers les autres monaie
fcfa.addEventListener('input', ()=>{
    let fcfaValue = fcfa.value;
    if(isNaN(fcfa)){
        euro.value = fcfaValue * dict.fcfa.euro.toFixed(4);
        usd.value = fcfaValue * dict.fcfa.usd.toFixed(4);
    }
})

//evenement pour le champ euro
euro.addEventListener('input', ()=>{
    let euroValue = euro.value;
    if(isNaN(euro)){
        fcfa.value = euroValue * dict.euro.fcfa.toFixed(4);
        usd.value = euroValue * dict.euro.usd.toFixed(4);
    }
})

//evenement pour le champ usd
usd.addEventListener('input', ()=>{
    let usdValue = usd.value;
    if(isNaN(usd)){
        fcfa.value = usdValue * dict.usd.fcfa.toFixed(4);
        euro.value = usdValue * dict.usd.euro.toFixed(4);
    }
})