var root=document.getElementById('main');

var div1=document.createElement('div');
div1.classList.add("card");
root.appendChild(div1);

var image=document.createElement('img');
image.src="images/profile.png";
image.alt="Profile Picture";
image.classList.add('img');
div1.appendChild(image);

var heading=document.createElement('h2');
heading.textContent="MOHAMMAD SOFIA";
div1.appendChild(heading);

var para=document.createElement('p');
para.textContent="Student";
div1.appendChild(para);

var para1=document.createElement('p');
para1.textContent="sofiamohammad2012@gmail.com";
div1.appendChild(para1);


var link=document.createElement('a');
link.textContent="View Profile";
link.href="profile mobile view.html";
div1.appendChild(link);
