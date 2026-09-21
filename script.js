const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(menu){menu.addEventListener('click',()=>links.classList.toggle('open'));}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links&&links.classList.remove('open')));
const year=document.querySelectorAll('[data-year]'); year.forEach(x=>x.textContent=new Date().getFullYear());
const form=document.querySelector('#enquiryForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Royal Green Sun Enquiry — '+(d.get('type')||'General'));const body=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')||'Not provided'}\nEnquiry Type: ${d.get('type')}\n\nMessage:\n${d.get('message')}`);window.location.href=`mailto:royal.green.sun.renewable.energy@gmail.com?subject=${subject}&body=${body}`;});}
