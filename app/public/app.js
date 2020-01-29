
var items = [

]

var champions = [
    {
        image: 'https://www.breakflip.com/uploads/LoL/Sting/Guides%20TFT/Set%202%20champions/TFT-veigar2.jpg',
        name: 'Veigar 小蓝人',
        synergy1: 'Shadow',
        synergy2: 'Mage',
        cost: 3,
        items: 'Seraph(tear + tear) x2, Hat(stick + stick) 只要加法伤其实都可 (以棒子跟眼泪物品为重'
    },

    {
        image: 'https://www.breakflip.com/uploads/LoL/Sting/Guides%20TFT/Set%202%20champions/TFT-Taliyah.png',
        name: 'Taliyah 石头女',
        synergy1: 'Mountain',
        synergy2: 'Mage',
        cost: 3,
        items: '随便普普角色 用来冲六法师的'
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
function postChampion(champions){
    $.post("/api/champions", champions).then(function(data){
        console.log("Loading champions into database");
    
    }); 
}

function getChampion(name){
    $.get("/api/champions/"+name)
    .then(function(response){
        console.log(response);

        $("#name").text(response.name)
                  .append("<img src = '"+response.image+"' alt = img>");
        $("#cost").text(response.cost);
        $("#syn1").text(response.synergy1);
        $("#syn2").text(response.synergy2);
        $("#syn3").text(response.synergy3);

        
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