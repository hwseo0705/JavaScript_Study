var greeting;
greeting = 'Hello';
greeting = "Hola";
greeting = `Bonjour`;

// these are all string type
console.log(typeof greeting);

// they have many ways to show string, in case you want to do the following
// where you add quotation marks in your string
var str1 = "He said his name was 'Jack' and ran away";
console.log(str1);

var str2 = `Let's Go!`;
console.log(str2);

var str3 = 'Let\'s Go!!!!!!!';
console.log(str3);

// path for linux is '/', path for windows is '\'
var str4 = 'E:\\temp\\new.png';
console.log(str4);

var str5 = 'doggo\n\n\n\nmeow';
console.log(str5);

var str6 = 'doggo\t\t\tmeow';
console.log(str6);

var ex1 = '100';

// tamplet literal
var tag = '<ul>\n\t<li>\n\t\t<a href="#">\n\t\t\t목록1\n\t\t</a>\n\t</li>\n</ul>';
console.log(tag);

// thing above is so complicated, so u can use ` to show as a template;
var template = `
<ul>
    <li>
        <a href="#">목록1</a>
    </li>
</ul>`;
console.log(template);

//when I want to print student name but there are many
var studentName = 'Haewon Seo';
var engScore = 99;
console.log(studentName + `'s english score is ` + engScore + '/100.');
// the above can also be written as following
console.log(`${studentName}'s english score is ${engScore}/100.`);