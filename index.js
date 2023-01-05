import { franc, francAll } from 'franc'
import langs from 'langs'
import colors from 'colors'

const input = process.argv[2];

try {
   const langCode = franc(input);

   const language = langs.where("3", langCode);

   // console.log(langCode);
   console.log(`The given text is in ${language.name} language`.green);

} catch (e) {
   console.log("Oops...something went wrong!".red);
   console.log(e);
}




// commands
// node index.js "Alle menslike wesens word vry"
// node index.js "এটি একটি ভাষা একক IBM স্ক্রিপ্ট"
// node index.js "Alle menneske er fødde til fridom"