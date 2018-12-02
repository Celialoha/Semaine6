var app = require('express')();
var http = require('http').Server(app);
var fs = require('fs');


app.get('/', function(req, res){
    form = fs.readFileSync("Formulaire.json");
    listeClients = JSON.parse(form);

    i = listeClients.FormulaireClient.length;
    options = ""
    while (i>0){
        i--;
        formname = listeClients.FormulaireClient[i].Nom +" "+listeClients.FormulaireClient[i].Prenom;
        options += '<option class="client" value="'+formname+'">' + formname + '</option>';
        console.log(formname);
        }


    
    res.write('<h1>Formulaire</h1> <SELECT name="nom" size="1">');
    res.write(options);
    res.write('</SELECT>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
