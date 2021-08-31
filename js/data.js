 const data =[{
    id:1,
    empid: 'SM1',
    empname: 'Navdeep',
    age:23,
    gender: 'Male',
    Email:'navdeedahiya753@gmail.com',
    position: 'Front End Developer'
},
{
    id:2,
    empid: 'SM2',
    empname: 'Pawan',
    age:30,
    gender: 'Male',
    Email:'pawangupta@gmail.com',
    position: 'Ui Developer'   
},
{
    id:3,
    empid: 'SM3',
    empname: 'Himanshu',
    age:25,
    gender: 'Male',
    Email:'hy4309@gmail.com',
    position: 'Ui Developer'   
},
{
    id:4,
    empid: 'SM4',
    empname: 'Sandeep',
    age:26,
    gender: 'Male',
    Email:'abc@gmail.com',
    position: 'Ui Developer'   
},
{
    id:5,
    empid: 'SM2',
    empname: 'Mandeep',
    age:30,
    gender: 'Male',
    Email:'pawangupta@gmail.com',
    position: 'Ui Developer'   
},
{
    id:6,
    empid: 'SM6',
    empname: 'Hardeep',
    age:30,
    gender: 'Male',
    Email:'pawangupta@gmail.com',
    position: 'Ui Developer'   
},
{
    id:7,
    empid: 'SM7',
    empname: 'Jagat',
    age:30,
    gender: 'Male',
    Email:'pawangupta@gmail.com',
    position: 'Ui Developer'   
},
 ];
 var tbody= document.querySelector('#data')
 data.forEach(i=>{
     tbody.innerHTML+=`
    <tr>
    <td>${i.id}</td>
    <td>${i.empid}</td>
    <td>${i.empname}</td>
    <td>${i.age}</td>
    <td>${i.gender}</td>
    <td>${i.Email}</td>
    <td>${i.position}</td>
    
    </tr>
     `
 })