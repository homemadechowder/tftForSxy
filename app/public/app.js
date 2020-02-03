
var items = [

]

var champions = [
    {
        image: 'https://www.breakflip.com/uploads/LoL/Sting/Guides%20TFT/Set%202%20champions/TFT-veigar2.jpg',
        name: 'Veigar',
        synergy1: 'Shadow',
        synergy2: 'Mage',
        cost: 3,
        items: 'Seraph(tear + tear) x2, Hat(stick + stick) 加法伤的都好'
    },

    {
        image: 'https://www.breakflip.com/uploads/LoL/Sting/Guides%20TFT/Set%202%20champions/TFT-Taliyah.png',
        name: 'Taliyah',
        synergy1: 'Mountain',
        synergy2: 'Mage',
        cost: 3,
        items: "挺烂的角色 用来冲6 mages"
    },
    {
        image: 'https://mobalytics.gg/wp-content/uploads/2019/12/TFT-Lucian-in-game.jpg',
        name: 'Lucian',
        synergy1: 'Light',
        synergy2: '搜綁得',
        cost: 4,
        items: "BFsword + bow x 3 , Or anything that gives him attack damage or attack speed, Infinity edge(sword + glove) can be good"
    },

    {
        image: 'https://mobalytics.gg/wp-content/uploads/2019/12/TFT-Senna-in-game.jpg',
        name: 'Senna',
        synergy1: 'Shadow',
        synergy2: '搜綁得',
        cost: 2,
        items: "Guardian Angel(Vest + BFsword), Morello(Stick + Belt)"
    },

    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbRi20S0TRDZ2LkkaSzLazcV1cf7CWzMytOXXMMeHM2E9zU96lA&s',
        name: 'Annie',
        synergy1: 'Inferno',
        synergy2: 'Summoner',
        cost: 4,
        items: "Morello(Stick + Belt) and anything tanky You can go mage item if you want so she summons 2 bears"
    },
    {
        image: 'https://www.breakflip.com/uploads/Drui/2019/Aout/NouveauDossier/TFT/yorick-nouveau-champion-tft-infos-set-2.jpg',
        name: 'Yorick',
        synergy1: 'Light',
        synergy2: 'Summoner',
        cost: 4,
        items: "Zeke's (Sword + Belt), Redemption(Tear + belt), anything tanky like vest+vest cloak+cloak, keep him alive long so he casts alot of times"
    },
    {
        image: 'https://www.breakflip.com/uploads/Drui/2019/Aout/NouveauDossier/TFT/yorick-nouveau-champion-tft-infos-set-2.jpg',
        name: 'Yorick',
        synergy1: 'Light',
        synergy2: 'Summoner',
        cost: 4,
        items: "Zeke's (Sword + Belt), Redemption(Tear + belt), anything tanky like vest+vest cloak+cloak, keep him alive long so he casts alot of times"
    },

    {
        image: 'https://1lal3e4eckus2d9p8g17wl8c-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/Zed_1-960x567.jpg',
        name: 'Zed',
        synergy1: 'Light',
        synergy2: 'Summoner',
        cost: 5,
        items: "If going light: Guardian Angel(Sword + Vest), Redemption(Tear + belt), Light Item(金鏟+cloak) These are ideal. Just put items that are useful for everyone because he doubles. If going assassin, just go attack adam stuff + Guardian Angel."
    },


];

var additional = [];


for (i = 0; i < champions.length; i++)
{
    postChampion(champions[i]);
}

$("#search-btn").on("click", function(){
    var input = $("#character-search").val().trim();
    
    getChampion(input);
});

$("#add-btn").on("click", function(){
    var newChamp = {
        image: $("#image").val().trim(),
        name: $("#name").val().trim(),
        synergy1: $("#syn1").val().trim(),
        synergy2: $("#syn2").val().trim(),
        synergy3: $("#syn3").val().trim(),
        cost: $("#cost").val().trim(),
        items: $("#items").val()
    }
    
    postChampion(newChamp);
});


function postChampion(champions){
    $.post("/api/champions", champions).then(function(data){
        console.log("Loading " + data.name + " into database");
        
    }); 
}

function getChampion(name){
    $.get("/api/champions/"+name)
    .then(function(response){
        console.log(response);

        $("#name").text(response.name)
                  .append("<div><img style = 'height: 200px' src = '"+response.image+"' alt = img>");
        $("#cost").text("Cost: " + response.cost + "金");
        $("#syn1").text(response.synergy1);
        $("#syn2").text(response.synergy2);
        $("#syn3").text(response.synergy3);
        $("#items").text(response.items);

        
    });
}

function getSynergy(synergy){
    $.get("/api/champions/"+synergy)
    .then(function(response){
        console.log(response);
    });
}

/* <div class="card"　>
              <div class="card-header">
                <h3><strong>角色</strong></h3>
              </div>
              <div class="card-body">
                <h2 id="name">名字</h2>
                <div id="stats">
                  <h3><strong></strong> <span id="cost"></span></h3>
                  <h3><strong>属性1</strong> <span id="syn1"></span></h3>
                  <h3><strong>属性2</strong> <span id="syn2"></span></h3>
                  <h3><strong>职业</strong> <span id="syn3"></span></h3>
                  <h3><strong>推荐物品/笔记</strong> <span id="items"></span></h3>
                </div>
              </div>
            </div> */