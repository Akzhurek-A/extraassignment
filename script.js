
 var randomPhrasesAndPictures = [
    [
        "You are a wizard, Harry (c) Hagrid",

    ],

    [
        "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore"
    ],

    [
        "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey"
    ]
];


document.getElementById("next-quote").addEventListener("click", function() {
    var quote = randomPhrasesAndPictures[ Math.floor( Math.random() * randomPhrasesAndPictures.length ) ];

    var phrase = document.querySelector("#phrase");
   
    phrase.innerHTML = quote[0];
});

