/*function Loadjson(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange = function() {
   if(xhr.readyState === 4 && xhr.status == "200"){
     callback(xhr.responseText);
   }
 };
xhr.send(null);
}

Loadjson("data.json", function(text)
{
 var data = JSON.parse(text);
 console.log(data);
 basics(data.Details);
careerinfo(data.career);
education(data.education);
skills(data.skills);
achievements(data.achievements);

})*/

function Loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}
var newfile = Loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.Details);
 careerinfo(data.career);
 education(data.education);
 skills(data.skills);
 achievements(data.achievements);
})

var child1 = document.querySelector(".childone");
function basics(det) {
var image = document.createElement("img");
image.src = det.image;
child1.appendChild(image);

var name = document.createElement("h2");
name.textContent = det.name;
child1.appendChild(name);

var PhoneNo = document.createElement("h3");
PhoneNo.textContent = det.PhoneNo;
child1.appendChild(PhoneNo);

var email = document.createElement("a");
email.href ="mailto:yuvasrilakshmimaddineni@gmail.com";
email.textContent = det.email;
child1.appendChild(email);

var Address = document.createElement("h2")
Address.textContent = "Address";
child1.appendChild(Address);

var hr = document.createElement("hr");
child1.appendChild(hr);

var p = document.createElement("p");
p.textContent = det.Address;
child1.appendChild(p);
}
var child2 = document.querySelector(".childtwo");
function careerinfo(info) {
var c = document.createElement("h2");
c.textContent ="Career Objective:"
child2.appendChild(c);

var hr = document.createElement("hr");
child2.appendChild(hr);

var c1 = document.createElement("p");
c1.textContent = info.info;
child2.appendChild(c1);
}
function education(edu) {
  var hd = document.createElement("h2");
  hd.textContent = "Educational Qualification";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border ="1";
  child2.appendChild(table1);

  tabledata="";
  for (var i = 0; i<edu.length; i++) {
    tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
  }
  table1.innerHTML=tabledata;
}

function skills(skillsinfo) {
  var hd = document.createElement("h2");
  hd.textContent="Technical Skills";
  child2.appendChild(hd)

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<skillsinfo.length;i++){
    var title = document.createElement("h4");
    title.textContent=skillsinfo[i].title;
    child2.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=skillsinfo[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}

function achievements(act) {
  var hd = document.createElement("h2");
  hd.textContent="Acheivements";
  child2.appendChild(hd)

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<act.length;i++){
    var title = document.createElement("h4");
    title.textContent=act[i].title;
    child2.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=act[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}

function openpage(){
  window.open("resume.html","_self",true);
}
