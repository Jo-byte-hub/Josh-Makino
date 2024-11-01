const fs = require("fs");
const chalk = require("chalk");
//const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


//
/*global.Owner = process.env.OWNER || "2347045174399";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "2347045174399" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "2347045174399";// Also owner number
global.sessID = process.env.sessID || ""; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";// Owner Name
global.BotName = "🐦Makino-md-v2";//Do not change 🥵
global.packname = process.env.PACKNAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = ["Joshua"];
global.OwnerNumber = ["2348104400066"];
global.ownertag = [""]; 
global.OwnerName =  "Joshua™";
global.BotName = "Josh BOT";
global.packname = "Josh stickers";                             //Do not change.
global.author = "Joshua";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = " "; 
global.sessID = process.env.sessID || {"noiseKey":{"private":{"type":"Buffer","data":"yD+SROaCxFq6XW1UcKafOHvZaf8s94DaYO5WP9vXiXA="},"public":{"type":"Buffer","data":"sJ1vpxSpQxrvtNl1qXnD11KqNnd/R27sTN2dRBgGiU4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"AORZ7FU96hn1w9fUzEfb0bulf52p48VJ0spRbaDLl1w="},"public":{"type":"Buffer","data":"Dm3xf5+2xgoDQ5J8c/BE19SgDFqPl4HQ19n79RRrJUc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"+I6k+RDyzoXJBgXdAOf4syr20RFLBEJornnNKQv/eGI="},"public":{"type":"Buffer","data":"K86m5tjw0rznJf+pF5mBQgkygoZEyJyg01ici3gKIG0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"EOwj9C223dAGOj1SQCDlhg6stMfnpUnDLMX9PkqX73U="},"public":{"type":"Buffer","data":"+urIlr0RUlk++AyzSbYDq/GsOoyoE0RSZKU0BS3a9wY="}},"signature":{"type":"Buffer","data":"iqSBMXpapUetzJRaKUs/SzL6PB+k6j92qa+bXdViraQj74Afkuqpq7namX3tZkZ0IrnNHmQJ7PMhfpS3DlNogQ=="},"keyId":1},"registrationId":89,"advSecretKey":"2qZEE6TvFkbrefhPaLhfkFtkqKWrxr5Eq6GRDEQIs88=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"LR86jwuzQe2jBgSh6CDD8Q","phoneId":"90b0deb9-0185-48ce-9137-5f9af5d936c6","identityId":{"type":"Buffer","data":"i1gvL/mEfnoUbG07E1WQV92cBBQ="},"registered":true,"backupToken":{"type":"Buffer","data":"oLOXDB/w7+NEhK+yzb9C8P1EiYc="},"registration":{},"pairingCode":"AAEFPDAK","me":{"id":"2348104400066:67@s.whatsapp.net"},"account":{"details":"CN+t8oYBEMD2lLkGGAYgACgA","accountSignatureKey":"aF/SYdozPoFI29K9aqhKGh4EVTTgung6oKi8yOlQoFc=","accountSignature":"7qW6l9FdHqb4tgJhD9Werc1TDlcQvcAjXBR96a4F/OnsYrQShzbmsOyehdkBZt3z3kz2633cVPEcrii839n2DA==","deviceSignature":"VJV6OSSBN914BRFZx4dKPDTPWBtMxBlCOM9gQ2FOeB6zB0rmYLGcee032cWk+Bpf+wVoqORHSHOD/DcNq4Afhw=="},"signalIdentities":[{"identifier":{"name":"2348104400066:67@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWhf0mHaMz6BSNvSvWqoShoeBFU04Lp4OqCovMjpUKBX"}}],"platform":"android","lastAccountSyncTimestamp":1730493261,"myAppStateKeyId":"AAAAAEyE"}`
global.SupportGroupLink = ""; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2348104400066"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["/"];
//process.env.PREFIX || "/";// Prefix                                 //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "🐦";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/anonphoenix007";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync(".");
global.Thumb = fs.readFileSync(".");
global.Thumb1 = fs.readFileSync(".");
global.ErrorPic = fs.readFileSync(".");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, intruder!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
