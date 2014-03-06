function ZipFixer(zip,country){

zip = zip.replace(/ /g, "");
var tmpZip = zip.replace(/[^0-9]/g,""); // Only grabbing the numbers //

if (tmpZip.length == 4 ){
tmpZip = "0" + tmpZip;
}

else if (tmpZip.length == 8 ){
tmpZip = "0" + tmpZip;
}

if (tmpZip.length == 9 ){
var a = tmpZip.slice(0,5);
var b = '-';
var c = tmpZip.slice(5);

tmpZip =  a.concat(b, c);
}

if(country == "Canada"){
tmpZip = zip;
}
return tmpZip;
}

