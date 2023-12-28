let toggle=document.querySelector(".toggle")

let menu=document.querySelector(".menu")

toggle.onclick=function()
{
    menu.classList.toggle("active")
}
let div1=document.createElement("div")
div1.classList.add("parent")

let heading=document.createElement("h1")
heading.innerHTML='zomato';
heading.classList.add("zomatologo")
div1.append(heading)
let heading1=document.createElement("h2")
heading1.innerHTML='Eat healthy food stay healthy';
heading1.classList.add("zomatologo1")
div1.append(heading1)

let divimg1=document.createElement("div")
divimg1.classList.add("divimage")

console.log(divimg1)

const getdata=()=>{
    fetch('food1.json').then((responsive)=>{
        responsive.json().then((data)=>{
            divimage1(data)
        })
    })
}
getdata()
let divimage1=(data1)=>{
    console.log(data1)
    data1.forEach((data)=> {
        // console.log(data)
        let head1=data.head;
        // console.log(head1)
        let name1=data.name;
        // console.log(name1)
        let img1=data.image;
        // console.log(img1)

        divimg1.innerHTML+=`
        <div class='div-img'>
          <img src='${img1}' class='img1'>
          <h1 class='h1'>${head1}</h1>
          <span class='s1'>${name1}</span>
        </div>
        `
    });
}



let divimg2=document.createElement("div")
divimg2.classList.add("divimage1")

let secheading1=document.createElement("h1")
secheading1.innerHTML=`Collections`
secheading1.classList.add('secheading1')
let secheading2=document.createElement("h2")
secheading2.innerHTML=`Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends`
secheading2.classList.add('secheading2')
divimg2.append(secheading1,secheading2)
divimg2.classList.add("secheading")


// second section images
let divimg3=document.createElement("div")
divimg3.classList.add("divimage2")

const getdata1=()=>{
    fetch('food2.json').then((responsive)=>{
        responsive.json().then((data)=>{
            divimage2(data)
        })
    })
}
getdata1()
let divimage2=(data2)=>{
     data2.forEach((data)=> {
        // console.log(data)
        let head1=data.head;
        // console.log(head1)
        let img1=data.image;
        // console.log(img1)

        divimg3.innerHTML+=`
        <div class='div-img1'>
          <img src='${img1}' class='img2'>
          <h1 class='head1'>${head1}</h1>
        </div>
        `
    });
}

let d=document.createElement("div")
d.classList.add("footer")
let z1=document.createElement("div")
let footehead=document.createElement("h1")
z1.append(footehead)
footehead.innerHTML='Zomato'
footehead.classList.add("footehead")
let f1=document.createElement("div")
f1.classList.add("f1")
let f2=document.createElement("div")
f2.classList.add("f1")
let f3=document.createElement("div")
f3.classList.add("f1")
let f4=document.createElement("div")
f4.classList.add("f1")
d.append(f1,f2,f3,f4)
// d.append(f2)

let getfooterdata=fetch("footer.json").then((responsive)=>{
    return responsive.json()
}).then((data)=>{
    console.log(data)
    let a=data[0]
    console.log(a)
    for (const k in a) {
        // console.log(k)
        f1.innerHTML+=`
          <ul>
           <li class='subf1'>${a[k]}</li>
          </ul>
        `
    }
    let b=data[1]
    for (const k in b) {
        // console.log(k)
        f2.innerHTML+=`
          <ul>
           <li class='subf1'>${b[k]}</li>
          </ul>
        `
    }
    let c=data[2]
    for (const k in c) {
        // console.log(k)
        f3.innerHTML+=`
          <ul>
           <li class='subf1'>${c[k]}</li>
          </ul>
        `
    }
    let d=data[3]
    for (const k in d) {
        // console.log(k)
        f4.innerHTML+=`
          <ul>
           <li class='subf1'>${d[k]}</li>
          </ul>
        `
    }
})

let b=document.body
b.append(div1)
b.append(divimg1)
b.append(divimg2)
b.append(divimg3)
b.append(z1)
b.append(d)


