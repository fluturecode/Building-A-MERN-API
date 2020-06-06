const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const htmlEmail =
    `<div><h1>Welcome to Your Task Manager</h1></div>` +
    `<div>Hi ${name}! Welcome to your task manager api.</div>` +
    `<div>Sincerely, </div>` +
    `<div>Some One</div>`;

  try {
    sgMail.send({
      to: email,
      from: 'leo@wyncode.co',
      subject: 'Thanks for signing up!',
      // text: `Hi ${name}! Welcome to your task manager api.`,
      html: htmlEmail
    });
  } catch (e) {
    console.log(e);
  }
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'leo@wyncode.co',
    subject: 'Sorry to see you go.',
    text: `Bye ${name}. If you change your mind let us know.`
  });
};

module.exports = { sendWelcomeEmail, sendCancellationEmail };
