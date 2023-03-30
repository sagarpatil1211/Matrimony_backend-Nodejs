var nodemailer = require('nodemailer');
class Mail {
    async sendmail(name,email,password){
       let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'patilsagar7979@gmail.com',
                pass: 'jyanajrewuxitoja'
            }
        });
    
        let mailOptions = {
            from: 'patilsagar7979@gmail.com',
            to: email,
            subject: 'Welcome to Our Matrimony Site',
            html: `<h1>Welcome</h1><p>${name}</p>
                    <p>Your Email is ${email}</p>
                    <p>Your Password is ${password}</p>`
          };

         await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
             return false
            } else {
                return true;
            }
          });
    }

}

module.exports = Mail;