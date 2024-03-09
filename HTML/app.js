const btn=document.querySelectorAll('.btn');

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(e){
        btn[i].classList.toggle('button-clicked');
        btn[i].firstElementChild.classList.toggle('icon-clicked');
    })
}

const inputName = prompt("Enter the name");

const allName = [
    {
        name : "abhijeet",
        last_purchased : "01 january 2020",
        payment_received : "15 january 2020",
    },

    {
        name : "mohit",
        last_purchased : "01 february 2020",
        payment_received : "15 february 2020",
    },

    {
        name : "dipak",
        last_purchased : "20 january 2020",
        payment_received : "25 january 2020",
    },

    {
        name : "shivam",
        last_purchased : "01 march 2020",
        payment_received : "15 march 2020",
    },

    {
        name : "tushal",
        last_purchased : "20 march 2020",
        payment_received : "25 march 2020",
    },

    {
        name : "ranveer",
        last_purchased : "01 april 2020",
        payment_received : "15 april 2020",
    },

    {
        name : "ankur",
        last_purchased : "20 april 2020",
        payment_received : "25 april 2020",
    },

    {
        name : "harsh",
        last_purchased : "01 may 2020",
        payment_received : "15 may 2020",
    },

    {
        name : "rohit",
        last_purchased : "01 june 2020",
        payment_received : "15 june 2020",
    },

    {
        name : "rishav",
        last_purchased : "01 july 2020",
        payment_received : "15 july 2020",
    },

    {
        name : "bittu",
        last_purchased : "20 july 2020",
        payment_received : "25 july 2020",
    },

    {
        name : "sandip",
        last_purchased : "01 august 2020",
        payment_received : "15 august 2020",
    },

    {
        name : "roshan",
        last_purchased : "01 september 2020",
        payment_received : "15 september 2020",
    },

    {
        name : "alia",
        last_purchased : "01 october 2020",
        payment_received : "15 october 2020",
    },

    {
        name : "shivani",
        last_purchased : "01 november 2020",
        payment_received : "15 november 2020",
    },
    
];

let found = false;
for(let i=0 ; i < allName.length ; i++){
    if(allName[i].name === inputName ){
        console.log(allName[i]);
        found = true ;
        break;
    }
}  

if(! found){
       inputName = prompt("The user does not exists!. Enter the valid input ");
    }