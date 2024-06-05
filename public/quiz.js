var characterMapping = {
    "leal_ambicioso": { name: "Tyrion Lannister", imageUrl: "https://thronesapi.com/assets/images/tyrion-lannister.jpg" },
    "leal_agressivo": { name: "Jon Snow", imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg" },
    "leal_desconfiado": { name: "Brienne of Tarth", imageUrl: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/31/1501702956-got8.jpg?crop=0.608xw:0.923xh;0.392xw,0&resize=2048:*" },
    "leal_ganancioso": { name: "Davos Seaworth", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZD6b6P5UVpBybj5kRlVj1-2lJon4cK6GIWbvpg8IjGw&s" },
    "leal_frio": { name: "Daenerys Targaryen", imageUrl: "https://www.hollywoodreporter.com/wp-content/uploads/2017/11/got-110-h_2017.jpg?w=1296" },
    "corajoso_ambicioso": { name: "Daenerys Targaryen", imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0d/Daenerys_Targaryen_with_Dragon-Emilia_Clarke.jpg" },
    "corajoso_agressivo": { name: "Arya Stark", imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg" },
    "corajoso_desconfiado": { name: "Sansa Stark", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sOgUfsQHhT-t_bPTxDPp2e9k50WpP_oUnef4g1P_XSoPW2noeQ-sbrfTpUiUbeag5L4&usqp=CAU" },
    "corajoso_ganancioso": { name: "Jaime Lannister", imageUrl: "https://thronesapi.com/assets/images/jaime-lannister.jpg" },
    "corajoso_frio": { name: "Sandor Clegane", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvEwKHcv8J4Qn4spoL9_6zVxUNS87vyH6uyuazCmJlTxZDQyd6gG8ygTey6-9FZFKCss&usqp=CAU" },
    "inteligente_ambicioso": { name: "Tyrion Lannister", imageUrl: "https://thronesapi.com/assets/images/tyrion-lannister.jpg" },
    "inteligente_agressivo": { name: "Rei da Noite", imageUrl: "https://i.pinimg.com/564x/8a/45/97/8a45976b2b8259dc21d79ffafff81397.jpg" },
    "inteligente_desconfiado": { name: "Varys", imageUrl: "https://thronesapi.com/assets/images/varys.jpg" },
    "inteligente_ganancioso": { name: "Cersei Lannister", imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/Game-of-Thrones-Cersei-Lannister-feature.jpg" },
    "inteligente_frio": { name: "Rei da Noite", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMy2ekIJzgpBsz8E9fsOOXz4olmdVOqQfeatmPnqjWew&s" },
    "calculista_ambicioso": { name: "Tywin Lannister", imageUrl: "https://thronesapi.com/assets/images/tywin-lannister.jpg" },
    "calculista_agressivo": { name: "Viserion", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYezl9mtAiLFaL2OxbRHwxcY4vL6lZn4MaEjX1_4byqskFUWlwLlvUEapeBQJ_M_FQLp4&usqp=CAU" },
    "calculista_desconfiado": { name: "Melisandre", imageUrl: "https://thronesapi.com/assets/images/melisandre.jpg" },
    "calculista_ganancioso": { name: "joffrey baratheon", imageUrl: "https://static.wikia.nocookie.net/gameofthrones/images/4/47/Joffrey-baratheon-jack-gleeson.jpg/revision/latest?cb=20170901221558" },
    "calculista_frio": { name: "Littlefinger", imageUrl: "https://thronesapi.com/assets/images/littlefinger.jpg" },
    "carismatico_ambicioso": { name: "Margaery Tyrell", imageUrl: "https://thronesapi.com/assets/images/margaery-tyrell.jpg" },
    "carismatico_agressivo": { name: "theon greyjoy", imageUrl: "https://upload.wikimedia.org/wikipedia/pt/4/40/Theon-greyjoy-1024.jpg" },
    "carismatico_desconfiado": { name: "Olenna Tyrell", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzuhBq1pAvPLlNYcVJRPJyE_80ntLvp6rURxtoMMdBq7pfF65UdtqFr-A5TRS-oWJYhQ&usqp=CAU" },
    "carismatico_ganancioso": { name: "Euron Greyjoy", imageUrl: "https://thronesapi.com/assets/images/euron-greyjoy.jpg" },
    "carismatico_frio": { name: "Jaime Lannister", imageUrl: "https://thronesapi.com/assets/images/jaime-lannister.jpg" },
    "leal_ambicioso_extra": { name: "Daenerys Targaryen", imageUrl: "https://thronesapi.com/assets/images/daenerys-targaryen.jpg" },
    "corajoso_ambicioso_extra": { name: "Jon Snow", imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg" },
    "inteligente_ambicioso_extra": { name: "Tyrion Lannister", imageUrl: "https://thronesapi.com/assets/images/tyrion-lannister.jpg" },
    "calculista_ambicioso_extra": { name: "Tywin Lannister", imageUrl: "https://thronesapi.com/assets/images/tywin-lannister.jpg" },
    "carismatico_ambicioso_extra": { name: "Rhaegal", imageUrl: "https://static.wikia.nocookie.net/game_of_thrones_-_the_storm_kings_fanon/images/b/bd/Rhaegal.png/revision/latest?cb=20210701203755" }
};

function showCharacter() {
    var selectedQuality = document.querySelector(".qualities .quiz-button.selected");
    var selectedDefect = document.querySelector(".defects .quiz-button.selected");

    if (selectedQuality && selectedDefect) {
        var key = selectedQuality.dataset.quality + "_" + selectedDefect.dataset.defect;
        var character = characterMapping[key];

        if (character) {
            var characterImage = document.getElementById("characterImage");
            var characterName = document.getElementById("characterName");

            characterImage.src = character.imageUrl;
            characterImage.alt = character.name;
            characterName.textContent = character.name;

            var characterResult = document.getElementById("characterResult");
            characterResult.style.display = "block";
        } else {
            console.error("Combinação não encontrada no mapeamento.");
        }
    } else {
        console.error("Selecione uma opção de qualidade e uma opção de defeito.");
    }
}

function reloadPage() {
    location.reload();
}

var qualities = document.querySelectorAll(".qualities .quiz-button");
var defects = document.querySelectorAll(".defects .quiz-button");

qualities.forEach(function(button) {
    button.addEventListener("click", function() {
        qualities.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        this.classList.add("selected");
    });
});

defects.forEach(function(button) {
    button.addEventListener("click", function() {
        defects.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        this.classList.add("selected");
    });
});

document.getElementById("verifyButton").addEventListener("click", showCharacter);
document.getElementById("reloadButton").addEventListener("click", reloadPage);