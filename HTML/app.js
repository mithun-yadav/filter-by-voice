const btn=document.querySelectorAll('.btn');
const displayName=document.querySelector('.displayName');
let output = "Listening...";
let displayText = "";



let inputName = "Enter The Name";

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
        name : "deepak",
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

    

/*========================voice to text convert code================================== */    
    // Check if browser supports SpeechRecognition
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();


        // Set some properties for recognition
        recognition.interimResults = true; // Show interim results
        recognition.lang = 'en-US'; // Set language

        // When speech recognition returns a result
        recognition.onresult = function(event) {
            const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');
            output = transcript.toLowerCase();
            displayName.innerText = output;

            let found = false;
        for(let i=0 ; i < allName.length ; i++){
            if(allName[i].name == output ){
               
                displayName.innerHTML = `
                    <div>
                        <p><span class="title">Name: </span> ${allName[i].name}</p>
                        <p><span class="title">Last Purchased: </span> ${allName[i].last_purchased}</p>
                        <p><span class="title">Payment Received: </span> ${allName[i].payment_received}</p>
                    </div>
                `


                found = true ;
                break;
            }

        }  

        if(! found){
            //    inputName = prompt("The user does not exists!. Enter the valid input ");
                    inputName = "The user does not exists!. Enter the valid input";
            }

        };

        // When speech recognition encounters an error
        recognition.onerror = function(event) {
            output = 'Error occurred in recognition: ' + event.error;
        };

        for(let i=0;i<btn.length;i++){
            btn[i].addEventListener('click',function(e){
                btn[i].classList.toggle('button-clicked');
                btn[i].firstElementChild.classList.toggle('icon-clicked');
                recognition.start();
                    output = 'Listening...';
            })
        }

    } else {
        // Browser doesn't support SpeechRecognition
        output = 'Speech recognition not supported in this browser.';
        displayName.innerText = output;
    }