let registar = document.querySelector('#register');
registar.addEventListener('click', provera);

function provera(){
    let nizPodataka = [];
    
    //provera imena

    let ime = document.querySelector('#first-name');
    let imeGreska = document.querySelector('#first-name-error');
    let imeV = ime.value;
    let imeRegExp = new RegExp(/^[A-Z][a-z]{2,15}$/g);
    let proveraIme = imeRegExp.test(imeV);
    
    if(!proveraIme){
        imeGreska.innerText = `Pogresno uneto ime`;
    }else{
        imeGreska.innerText = ``;
        let vaseIme = `Ime: ${imeV}`
        nizPodataka.push(vaseIme);
    }

    //provera prezimena

    let prezime = document.querySelector('#last-name');
    let prezimeGreska = document.querySelector('#last-name-error');
    let prezimeV = prezime.value;
    let prezimeRegExp =new RegExp (/^([A-Z][a-z]{1,15})((\s)?[A-Z][a-z]{1,15}$)*/g);
    let proveraPrezime = prezimeRegExp.test(prezimeV);
    
    
    if(!proveraPrezime){
        prezimeGreska.innerText = `Pogresno uneto prezime`;
    }else{
        prezimeGreska.innerText = ``;
        let vasePrezime = `Prezime: ${prezimeV}`
        nizPodataka.push(vasePrezime);
    }
    
    //provera datuma rodjenja

    let datumRodjenja = document.querySelector('#birth-date');
    let datumGreska = document.querySelector('#birth-date-error');
    let datumRodjenjaV = datumRodjenja.value;
    let datumRegExp = /^[12][0-9]{3}-([0][1-9]|[1][012])-([0][1-9]|[1][0-9]|[2][0-9]|[3][01])/;
    let proveraDatum = datumRegExp.test(datumRodjenjaV);
    if(!proveraDatum){
        datumGreska.innerText = 'Pogresno ste uneli datum';
    }else{
        datumGreska.innerText = '';
        let vasDatumRodjenja = `Datum rodjenja: ${datumRodjenjaV}`;
        nizPodataka.push(vasDatumRodjenja);
    }

    // provera jmbg

    let jmbg = document.querySelector('#jmbg');
    let jmbgGreska = document.querySelector('#jmbg-error');
    let jmbgV = jmbg.value;
    let jmbgRegExp = new RegExp(/^[0-9]{13}$/);
    let proveraJMBG = jmbgRegExp.test(jmbgV)
    if(!proveraJMBG){
        jmbgGreska.innerText = `Pogresno ste uneli JMBG`;
    }else{
        jmbgGreska.innerText = ``;
        let vasJMBG = `JMBG: ${jmbgV}`;
        nizPodataka.push(vasJMBG);
    }

    // Provera pola
    let flag = false;
    let greskaPol = document.querySelector('#gender-error');
    let pol = document.querySelectorAll('input[name="gender"]');
    pol.forEach(elem =>{
        if(elem.checked){
            flag = true;
            let vasPol = `Pol:${elem.value}`
            nizPodataka.push(vasPol);
            greskaPol.innerText = ``;
        }
    })
    if(flag==false){
        greskaPol.innerText = `Niste odabrali pol`;
    }


    //provera broja racuna

    let brojRacuna = document.querySelector('#credit-card');
    let brojRacunaGreska = document.querySelector('#credit-card-error');
    let brojRacunaV = brojRacuna.value;
    let brojRacunaRegExp = new RegExp(/[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/);
    let proveraRacuna = brojRacunaRegExp.test(brojRacunaV);
    if(!proveraRacuna){
        brojRacunaGreska.innerText = `Pogresno ste uneli broj racuna`;
    }else{
        brojRacunaGreska.innerText = ``;
        let vasBrojRacuna = `Broj racuna: ${brojRacunaV}`;
        nizPodataka.push(vasBrojRacuna);
    }
    
    //provera broja telefona

    let brojTelefona = document.querySelector('#phone-number');
    let brojTelefonaV = brojTelefona.value;
    let brojTelefonaGreska = document.querySelector('#phone-number-error');
    let brojTelefonaRegExp = new RegExp(/^[0-9]{3}\/[0-9]{3}\-[0-9]{3,4}$/);
    let proveraBrojaTelefona = brojTelefonaRegExp.test(brojTelefonaV);
    
    if(!proveraBrojaTelefona){
        brojTelefonaGreska.innerText = `Pogresno ste uneli broj telefona`;
    }else{
        brojTelefonaGreska.innerText = ``;
        let vasTelefon = `Broj telefona: ${brojTelefonaV}`;
        nizPodataka.push(vasTelefon);
    }
    

    //provera tipa racuna

    let tipRacuna = document.querySelector('#account-type');
    let tipRacunaGreska = document.querySelector('#account-type-error');
    if(tipRacuna.value==0){
        tipRacunaGreska.innerText = `Niste odabrali tip racuna`;
    }else{
        tipRacunaGreska.innerText = ``;
        let vasTipRacuna=`Tip racuna: ${tipRacuna.options[tipRacuna.selectedIndex].text}`;
        
        nizPodataka.push(vasTipRacuna);
    }

    //provera prohvatanja uslova
    let prihvatanjeUslova = document.querySelector('#agreement');
    let prihvatanjeUslovaGreska = document.querySelector('#agreement-error');
    if(prihvatanjeUslova.checked==false){
        prihvatanjeUslovaGreska.innerText = `Niste prihvaliti uslove`;
    }else{
        prihvatanjeUslovaGreska.innerText = ``;
        nizPodataka.push(prihvatanjeUslova);
    }
    



    // konacan ispis podataka

    if(nizPodataka.length==9){
        let ispisInformacija = document.querySelector('#feedback');
        // ispisInformacija.innerText =''
        for(let i =0;i<nizPodataka.length-1;i++){
            let podatak = "<li>" + nizPodataka[i] + "</li>";
            ispisInformacija.innerHTML += podatak;
            
        }
    }
    


}





// automatski ispis datuma rodjenja u jmbg

let datumRodjenja = document.querySelector('#birth-date');
datumRodjenja.addEventListener('blur', ipisJMBG)
function ipisJMBG(){

    let datumGreska = document.querySelector('#birth-date-error');
    let datumRodjenjaV = datumRodjenja.value;
    let datumRegExp = /^[12][0-9]{3}-([0][1-9]|[1][012])-([0][1-9]|[1][0-9]|[2][0-9]|[3][01])/;
    let proveraDatum = datumRegExp.test(datumRodjenjaV);
    if(!proveraDatum){
        datumGreska.innerText = 'Pogresno ste uneli datum';
    }else{
        datumGreska.innerText = '';
        let vasDatumRodjenja = `Datum rodjenja: ${datumRodjenjaV}`;
        
        
        let jmbg = document.querySelector('#jmbg');
        
            datumRodjenjaV = datumRodjenjaV.split("");
            jmbg.value = `${datumRodjenjaV[8]}${datumRodjenjaV[9]}${datumRodjenjaV[5]}${datumRodjenjaV[6]}${datumRodjenjaV[1]}${datumRodjenjaV[2]}${datumRodjenjaV[3]}`;
        
    }





}


// ispis broja racuna

let brojRacuna = document.querySelector('#credit-card');
brojRacuna.addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^\d0-9]/g, '').replace(/(.{4})/g, '$1 ').trim();
});

