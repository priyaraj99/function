function labelcreate(tagname, attrname,attrvalue,content)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;

}
function linebreaker(tagname)
{
    var ele=document.createElement(tagname);
    return ele;
}
function inputcreate(tagname, attrname,attrvalue,attrname1,attrvalue1)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
    
}
var firstname=labelcreate("label", "for", "first name","First Name");
var br1=linebreaker("br");
var inputfirstname=inputcreate("input","type","firstname","id","firstname");
var br2=linebreaker("br");

document.body.append(firstname,br1,inputfirstname,br2);


var mname=labelcreate("label", "for", "middle name","middle Name");
var br1=linebreaker("br");
var inputmname=inputcreate("input","type","middle name","id","middle name");
var br2=linebreaker("br");
document.body.append(mname,br1,inputmname,br2);

var lname=labelcreate("label", "for", "last name","last Name");
var br1=linebreaker("br");
var inputlname=inputcreate("input","type","last name","id","last name");
var br2=linebreaker("br");
document.body.append(lname,br1,inputlname,br2);

var email=labelcreate("label", "for", "email","Email");
var br1=linebreaker("br");
var inputemail=inputcreate("input","type","email","id","email");
var br2=linebreaker("br");
document.body.append(email,br1,inputemail,br2);

var password=labelcreate("label", "for", "password","Password");
var br1=linebreaker("br");
var inputpassword=inputcreate("input","type","password","id","password");
var br2=linebreaker("br");
document.body.append(password,br1,inputpassword,br2);
