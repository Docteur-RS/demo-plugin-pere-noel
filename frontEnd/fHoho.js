/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

main.fHoho = Backbone.View.extend({
    initialize: function () {

    },

    showVideo: function ()
    {
        var link = main.modules.hoho.backEnd.bHoho.getLinkOfDay();
        console.log("link = ", link);
        
        // When i'll have the time to use the yt embed API
        
//        var firstCard = main.cardMngr.addNewCard(true);
//        var templateContainer = (main.cardMngr.getTemplate("hoho", "yt"))({url: link});
//        firstCard.append(templateContainer);
        var opn = require("opn");
        opn(link);
    }
}
);
