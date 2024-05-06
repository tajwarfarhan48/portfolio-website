require( 'express-async-errors' )
require( 'dotenv' ).config()

const express = require( 'express' )
const cors = require( 'cors' )
const nodemailer = require( 'nodemailer' )

const middleware = require( './utils/middleware' )

const app = express()

app.use( cors() )
app.use( express.static( 'build' ) )
app.use( express.json() )
app.use( middleware.requestLogger )

app.post( '/', async ( req, res, next ) => { 
    const { theNameText, theEmailText, theMessageText } = req.body

    if ( theNameText === '' || theEmailText === '' || theMessageText === '' ) {
        return res.status( 400 ).json( { message: 'Please fill in the name, email and password' } )
    }

    const infoEmailHTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" >
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <meta name="x-apple-disable-message-reformatting">
            <title>Thank You for Contacting</title>
            <!--[if mso]
                <noscript>
                    <xml>
                        <o:OfficeDocumentSettings>
                            <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                </noscript>
            <![endif]-->
            <style>
                body { 
                    Margin: 0; 
                    padding: 0;
                    background-color: #dddddd;
                }
                table, td, div, h1, p { font-family: sans-serif; }
            </style>
        </head>
        <body style="Margin: 0; padding: 0; background-color: #dddddd; padding-bottom: 60px;">
            <center style="width:100%; table-layout:fixed; background-color: #dddddd;">
                <table role="presentation" style="width:100%; border-collapse:collapse; border:0; border-spacing:0; background:#dddddd; Margin: 0 auto;">
                    <tr>
                        <td align="center" style="padding: 0;">
                            <table role="presentation" style="Margin: 0 auto; width: 100%; max-width: 600px; border-collapse: collapse; border-spacing: 0; text-align: center;">
                                <tr>
                                    <td height="6" align="center" style="padding: 0; background-color: #ffd166;"></td>
                                </tr>
                                <tr>
                                    <td style="padding: 0; background: #252525; padding: 40px 0 40px 0">
                                        <span style="text-align: center; color: #ffd166; padding: 40px 0 40px 0; font-size: 30px; font-weight: 900; letter-spacing: -0.6px;">Farhan Tajwar Romit</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 42px 50px 42px 50px; background: #ffd166;">
                                        <table role="presentation" style="width:100%; border-collapse:collapse; border:0; border-spacing:0;">
                                            <tr>
                                                <td style="padding:0">
                                                    <p style="Margin:0; font-size: 32px; font-weight: 500; text-align:left;">New Message:</p>
                                                    <p style="font-size:22px; font-weight:400; text-align:left;"><strong>Name: </strong>${theNameText}</p>
                                                    <p style="font-size:22px; font-weight:400; text-align:left;"><strong>Email: </strong>${theEmailText}</p>
                                                    <p style="font-size:22px; font-weight:400; text-align:left;"><strong>Message: </strong>${theMessageText}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 0; background: #252525; color: #888888;">
                                        <p>Farhan Tajwar Romit, ${new Date().getFullYear()}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </center>
        </body>
    </html>`

    const thankYouEmailHTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" >
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <meta name="x-apple-disable-message-reformatting">
            <title>Thank You for Contacting</title>
            <!--[if mso]
                <noscript>
                    <xml>
                        <o:OfficeDocumentSettings>
                            <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                </noscript>
            <![endif]-->
            <style>
                body { 
                    Margin: 0; 
                    padding: 0;
                    background-color: #dddddd;
                }
                table, td, div, h1, p { font-family: sans-serif; }
            </style>
        </head>
        <body style="Margin: 0; padding: 0; background-color: #dddddd; padding-bottom: 60px;">
            <center style="width:100%; table-layout:fixed; background-color: #dddddd;">
                <table role="presentation" style="width:100%; border-collapse:collapse; border:0; border-spacing:0; background:#dddddd; Margin: 0 auto;">
                    <tr>
                        <td align="center" style="padding: 0;">
                            <table role="presentation" style="Margin: 0 auto; width: 100%; max-width: 600px; border-collapse: collapse; border-spacing: 0; text-align: center;">
                                <tr>
                                    <td height="6" align="center" style="padding: 0; background-color: #ffd166;"></td>
                                </tr>
                                <tr>
                                    <td style="padding: 0; background: #252525; padding: 40px 0 40px 0">
                                        <span style="text-align: center; color: #ffd166; padding: 40px 0 40px 0; font-size: 30px; font-weight: 900; letter-spacing: -0.6px;">Farhan Tajwar Romit</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 42px 50px 42px 50px; background: #ffd166;">
                                        <table role="presentation" style="width:100%; border-collapse:collapse; border:0; border-spacing:0;">
                                            <tr>
                                                <td style="padding:0">
                                                    <p style="Margin:0; font-size: 32px; font-weight: 500; text-align:left;">Hello ${theNameText},</p>
                                                    <p style="font-size:22px; font-weight:400; text-align:left;">I really appreciate you contacting me. I will get back to you within the next 48 hours. In the meantime, if you want to stay in touch or just chat, I am also available on <a href="https://www.linkedin.com/in/ftr01/" style="text-decoration: underline; color: #000000;  font-weight: 600;">LinkedIn</a>.</p>
                                                    <p style="font-size: 22px; font-weight: 400; text-align: left;">I apologise if the email looks a bit wonky, especially on mobile clients. I'm working to get that fixed!</p>
                                                    <p style="font-size: 22px; font-weight: 400; text-align: left;">Have a great day,</p>
                                                    <p style="font-size: 22px; font-weight: 600; text-align: left;">Farhan</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 0; background: #252525; color: #888888;">
                                        <p>Farhan Tajwar Romit, ${new Date().getFullYear()}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 0 0 10px 0; background: #252525; color: #888888;">
                                        <a href="https://github.com/tajwarfarhan48"><img style="margin-left: 10px" src="https://myamazingportfoliowebsitebucket.s3.amazonaws.com/Email-Github-Logo.png" alt="GitHub"></a>
                                        <a href="https://www.linkedin.com/in/ftr01/"><img style="margin-left: 10px" src="https://myamazingportfoliowebsitebucket.s3.amazonaws.com/Email-LinkedIn-Logo.png" alt="LinkedIn"></a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </center>
        </body>
    </html>`

    const transporter = nodemailer.createTransport( {
        host: 'send.smtp.mailtrap.io',
        port: 587,
        auth: {
            user: process.env.SMTPUser,
            pass: process.env.SMTPPass
        }
    } )

    await transporter.sendMail( { 
        from: 'Farhan Tajwar Romit <contact@farhantajwar.com>',
        to: theEmailText,
        subject: 'Thank You for Contacting Me',
        text: `Hello ${theNameText}`,
        html: thankYouEmailHTML
    } )

    await transporter.sendMail( {
        from: 'Farhan Tajwar Romit <contact@farhantajwar.com>',
        to: 'tajwarfarhan48@gmail.com',
        subject: 'Portfolio: New Contact Form Submission',
        text: '',
        html: infoEmailHTML 
    } )

    res.status( 201 ).send()
} )

app.use( middleware.unknownEndpoint )
app.use( middleware.errorHandler )

const PORT = process.env.PORT || 8080

app.listen( PORT, () => { 
    console.log( `App listening on port ${PORT}` )
} )
