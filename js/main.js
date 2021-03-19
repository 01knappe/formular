$(function(){

    let ctverec = {
        strana: 10,
        type: 'obsah',
        stranaUnit: 1000,
        getObsah: function(){
            return Math.pow(this.strana,2);
        },
        getObvod: function(){
            return 4 * this.strana;
        },
        getUhlopricka: function(){
            return Math.sqrt(Math.pow(this.strana,2)+Math.pow(this.strana,2)).toFixed(2);
        },
        getObjem: function(){
            return Math.pow(this.strana,3);
        },
        getPovrch: function(){
            return 6 * Math.pow(this.strana,2);
        },
        getTelesUhlopricka: function(){
            return this.strana * Math.sqrt(3).toFixed(2);
        },
        setUnits: function(stranaUnit){
            const stranaUnits = ["mm","cm","dm","m"];
            this.stranaUnit = 10 ** stranaUnits.indexOf(stranaUnit);

        }
    }

    console.log(ctverec.getObsah());
    console.log(ctverec.getObvod());
    console.log(ctverec.getUhlopricka());
    console.log(ctverec.getObjem());
    console.log(ctverec.getPovrch());
    console.log(ctverec.getTelesUhlopricka());


    $("#vypocet").on("click", function(){
        ctverec.strana = $("#strana").val();
        ctverec.type = $('input[name=type]:checked').val();
        let vysledek;
        if(ctverec.type == 'obsah') vysledek = `Obsah čtverce je ${ctverec.getObsah()} ${$("#jednotka").val()}.²`;
        if(ctverec.type == 'obvod') vysledek = `Obvod čtverce je ${ctverec.getObvod()} ${$("#jednotka").val()}.`;
        if(ctverec.type == 'uhlopricka') vysledek = `Uhlopříčka čtverce je ${ctverec.getUhlopricka()} ${$("#jednotka").val()}.`;
        if(ctverec.type == 'objem') vysledek = `Objem krychle je ${ctverec.getObjem()} ${$("#jednotka").val()}³.`;
        if(ctverec.type == 'povrch') vysledek = `Povrch krychle je ${ctverec.getPovrch()} ${$("#jednotka").val()}².`;
        if(ctverec.type == 'tUhlopricka') vysledek = `Tělesová úhlopříčka krychle je ${ctverec.getTelesUhlopricka()} ${$("#jednotka").val()}.`;
        $("#vysledek").html(vysledek);

    })

})

