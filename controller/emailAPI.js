var nodemailer = require('nodemailer');

var transporte = nodemailer.createTransport({
  service: 'Gmail', // Como mencionei, vamos usar o Gmail
  auth: {
    user: 'rita.cassia.s09@gmail.com', // Basta dizer qual o nosso usuário
    pass: 'ritasalao'             // e a senha da nossa conta
  }
});

// listar todos os investidores
exports.sendToEmail = function (req, res) {
    var dadosEmail = req.body;

    var email = {
      from: dadosEmail.email, // Quem enviou este e-mail
      to: 'rita.cassia.s09@gmail.com', // Quem receberá
      subject: 'Pergunta para o site Mão de Ouro',  // Um assunto bacana :-)
      html: "Nome: "+dadosEmail.primeiro_nome+" "+dadosEmail.ultimo_nome+" | "+
      "E-mail: "+ dadosEmail.email + " | "+ "Telefone: "+dadosEmail.telefone+"\n"+
      "Assunto: "+dadosEmail.assunto // O conteúdo do e-mail
    };

    transporte.sendMail(email, function(err, result){
        if(err){
          return res.sendStatus(503);
        }

        res.sendStatus(200);
    });
};

//
// if (err) {
//   return res.sendStatus(503);
// }
// console.log('foi salvo')
// res.sendStatus(200);
// });
