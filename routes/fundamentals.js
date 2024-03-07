const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'fundamentals'

router.get('/', function(req, res, next) {
  res.send({
    name: 'fundamentals',
    server: 'express',
    variableData: variableData
  });
});
//1sumtonumber
function sumtonumbers(a,b){
    return a+b;
}
router.get('/sumtonumbers', function(req, res, next) {
    res.send({
        name:'sumtonumbers',
        sum :sumtonumbers(1,2),
    });}
  );
//2Comparison operators
  function Comparisonoperators(a,b){
    return a===b;
}
router.get('/Comparisonoperators', function(req, res, next) {
    res.send({
        name:'Comparisonoperators',
        Comparisonoperators :Comparisonoperators(2,3),
    });}
  );
//3Get type of value
  function Gettypeofvalue(a){
    return typeof a;;
}
router.get('/Gettypeofvalue', function(req, res, next) {
    res.send({
        name:'Gettypeofvalue',
        sum :Gettypeofvalue(1),
    });}
  );
//4Get nth character of string
  function Getnthcharacterofstring(a,b){
    return a+b;
}
router.get('/Getnthcharacterofstring', function(req, res, next) {
    res.send({
        name:'Getnthcharacterofstring',
        sum :Getnthcharacterofstring('ledinhanh',2),
    });}
  );
//5Remove first n characters of string
  function Removefirstncharactersofstring(a,n){
    return a[n-1];
}
router.get('/Removefirstncharactersofstring', function(req, res, next) {
    res.send({
        name:'Removefirstncharactersofstring',
        sum :Removefirstncharactersofstring('abcdefg'),
    });}
  );
//6Get last n characters of string
  function Getlastncharactersofstring(a){
    return a.slice(3);
}
router.get('/Getlastncharactersofstring', function(req, res, next) {
    res.send({
        name:'Getlastncharactersofstring',
        sum :Getlastncharactersofstring(ABCDEF),
    });}
  );
//7Get first n characters of string
  function Getfirstncharactersofstring(){
    return	str.slice(-3);
}
router.get('/Getfirstncharactersofstring', function(req, res, next) {
    res.send({
        name:'Getfirstncharactersofstring',
        sum :Getfirstncharactersofstring('abcdefg'),
    });}
  );
//8Find the position of one string in another
  function Findthepositionofonestringinanother(a){
    return 	a.slice(0,3);
}
router.get('/Findthepositionofonestringinanother', function(req, res, next) {
    res.send({
        name:'Findthepositionofonestringinanother',
        sum :Findthepositionofonestringinanother("praise"),
    });}
  );
//9Extract first half of string
  function Extractfirsthalfofstring(a){
    return 	a.indexOf('is');
}
router.get('/Extractfirsthalfofstring', function(req, res, next) {
    res.send({
        name:'Extractfirsthalfofstring',
        sum :Extractfirsthalfofstring('abcdefgh'),
    });}
  );
//10Remove last n characters of string
  function Removelastncharactersofstring(a){
    return  a.slice(0,a.lenght/2);
}
router.get('/Removelastncharactersofstring', function(req, res, next) {
    res.send({
        name:'Removelastncharactersofstring',
        sum :Removelastncharactersofstring('abcdefgh'),
    });}
  );
//11Return the percentage of a number
  function Returnthepercentageofanumber(a){
    return 	a.slice(0,-3);
}
router.get('/Returnthepercentageofanumber', function(req, res, next) {
    res.send({
        name:'Returnthepercentageofanumber',
        sum :Returnthepercentageofanumber(100,50),
    });}
  );
//12Basic JavaScript math operators
  function BasicJavaScriptmathoperators(a,b,c,d,e,f){
    return 	(((a+b-c)*d/e)**f);
}
router.get('/sumtonumbers', function(req, res, next) {
    res.send({
        name:'sumtonumbers',
        sum :sumtonumbers(6,5,4,3,2,1),
    });}
  );
//13Check whether a string contains another string and concatenate
  function Checkwhetherastringcontainsanotherstringandconcatenate(a,b){
    return 	a.indexOf(b)===-1?a+b:b+a;
}
router.get('/Checkwhetherastringcontainsanotherstringandconcatenate', function(req, res, next) {
    res.send({
        name:'Checkwhetherastringcontainsanotherstringandconcatenate',
        sum :Checkwhetherastringcontainsanotherstringandconcatenate('cheese', 'cake'),
    });}
  );
//14Check if a number is even
  function Checkifanumberiseven(a){
    return a%2===0;
}
router.get('/Checkifanumberiseven', function(req, res, next) {
    res.send({
        name:'Checkifanumberiseven',
        sum :Checkifanumberiseven(10),
    });}
  );
//15How many times does a character occur?
  function Howmanytimesdoesacharacteroccur(a,b){
    return b.split(a).length - 1;
}
router.get('/Howmanytimesdoesacharacteroccur', function(req, res, next) {
    res.send({
        name:'Howmanytimesdoesacharacteroccur',
        sum :Howmanytimesdoesacharacteroccur('m', 'how many times does the character occur in this sentence?'),
    });}
  );
//16Check if a number is a whole number
  function Checkifanumberisawholenumber(a){
    return	a - Math.floor(a) ===0;
}
router.get('/Checkifanumberisawholenumber', function(req, res, next) {
    res.send({
        name:'Checkifanumberisawholenumber',
        sum :Checkifanumberisawholenumber(4),
    });}
  );
//17Multiplication, division, and comparison operators
  function Multiplicationdivisionandcomparisonoperators(a,b){
    return	a < b ? a / b : a * b;
}
router.get('/Multiplicationdivisionandcomparisonoperators', function(req, res, next) {
    res.send({
        name:'Multiplicationdivisionandcomparisonoperators',
        sum :Multiplicationdivisionandcomparisonoperators(10, 100),
    });}
  );
//18Round a number to 2 decimal places
  function Roundanumberto2decimalplaces(a){
  	return Number(a.toFixed(2));
}
router.get('/Roundanumberto2decimalplaces', function(req, res, next) {
    res.send({
        name:'Roundanumberto2decimalplaces',
        sum :Roundanumberto2decimalplaces(2.12397),
    });}
  );
//19Split a number into its digits
  function Splitanumberintoitsdigits(a){
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))

}
router.get('/Splitanumberintoitsdigits', function(req, res, next) {
    res.send({
        name:'Splitanumberintoitsdigits',
        sum :Splitanumberintoitsdigits(10),
    });}
  );

module.exports = router;
