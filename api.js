
var thenumbers        = '058e';
var mason             = 'f9d762dfa';
var whatdotheymean    = '7901e568'; 
var whatarethenumbers = 'e78a71'; 
var andwhatdotheymean = '89d47';
 

var apiKey = mason + andwhatdotheymean + thenumbers + whatarethenumbers  + whatdotheymean;

function online() {
    document.getElementById("id1").innerHTML = 'DESTINY2 IS ONLINE'
    document.getElementById("id1").classList.add('w3-green')
}

function offline() {
    document.getElementById("id1").innerHTML = 'DESTINY2 IS OFFLINE'
    document.getElementById("id1").classList.add('w3-red')
    document.getElementById("idB").classList.add('bgimg-2')
}

SEASON_HASH = '1';

function getSeasonName() {
    $.ajax({
        url: "https://www.bungie.net/Platform/Settings/",
        cache: true,
        headers: { "X-API-Key": apiKey}
    }).done(function (json) {
        sHash = json.Response.destiny2CoreSettings.currentSeasonHash;
        hashUrl = sHash.toString();
        SEASON_HASH = hashUrl;

        $.ajax({
        url: "https://www.bungie.net/Platform/Destiny2/Manifest/DestinySeasonDefinition/"+ SEASON_HASH + '/' ,
        cache: true,
        headers: { "X-API-Key": apiKey }
    }).done(function (json) {
        sName = json.Response.displayProperties.name;
        document.getElementById("ids").innerHTML = 'Current season is: '+sName;

    });

    });
}

function GET() {
    $.ajax({
        url: "https://www.bungie.net/Platform/GlobalAlerts/",
        cache: true,
        headers: { "X-API-Key": apiKey }

    }).done(function (json) {
        if (json.Message == 'Ok') {
            online();
        }
        else { offline() };
    });

}
GET();getSeasonName();
setTimeout(GET, 60 * 1000);
setInterval(GET, 60 * 1001);