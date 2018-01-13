/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var bHoho = function (moduleSysMngr) {
    this.moduleSysMngr = moduleSysMngr;
    console.log("init module bHoho");
    var date = new Date();
    var iCurrentMonth = date.getMonth();
    if (iCurrentMonth !== 11)
        return;
    this.iCurrentDay = date.getDate();
    this.links = [
        "https://www.youtube.com/watch?v=phGnFF0KyhQ",
        "https://youtu.be/phGnFF0KyhQ?t=1m14s",
        "https://youtu.be/phGnFF0KyhQ?t=2m34s",
        "https://youtu.be/phGnFF0KyhQ?t=4m09s",
        "https://youtu.be/phGnFF0KyhQ?t=5m52s",
        "https://youtu.be/phGnFF0KyhQ?t=8m39s",
        "https://youtu.be/phGnFF0KyhQ?t=11m30s",
        "https://youtu.be/phGnFF0KyhQ?t=14m37s",
        "https://youtu.be/phGnFF0KyhQ?t=17m09s",
        "https://youtu.be/phGnFF0KyhQ?t=18m17s",
        "https://youtu.be/phGnFF0KyhQ?t=21m03s",
        "https://youtu.be/phGnFF0KyhQ?t=25m31s",
        "https://youtu.be/phGnFF0KyhQ?t=27m16s",
        "https://youtu.be/phGnFF0KyhQ?t=28m08s",
        "https://youtu.be/phGnFF0KyhQ?t=29m30s",
        "https://youtu.be/phGnFF0KyhQ?t=30m51s",
        "https://youtu.be/phGnFF0KyhQ?t=33m36s",
        "https://youtu.be/phGnFF0KyhQ?t=36m22s",
        "https://youtu.be/phGnFF0KyhQ?t=39m11s",
        "https://youtu.be/phGnFF0KyhQ?t=43m36s",
        "https://youtu.be/phGnFF0KyhQ?t=46m59s",
        "https://youtu.be/phGnFF0KyhQ?t=47m59s",
        "https://youtu.be/phGnFF0KyhQ?t=50m42s",
        "https://youtu.be/phGnFF0KyhQ?t=54m35s",
    ];

    this.moduleSysMngr.frontMngr.callFrontSysModule("tchat", "postMessage", "New daily christmas carol availble ! Just ask !");
}

bHoho.prototype.intro = function (paramFromTree, userText)
{
    this.moduleSysMngr.frontMngr.callFrontSysModule("tchat", "postMessage", "hohoho je suis le père Noel !");
    this.moduleSysMngr.frontMngr.frontInstance.main.caoutchouc.moveCursor("mainCursor", "question_show_video_ppn");
};

bHoho.prototype.getLinkOfDay = function ()
{
    if (typeof(this.links) === "undefined")
        return null;
    return this.links[this.iCurrentDay];
};

module.exports = bHoho;