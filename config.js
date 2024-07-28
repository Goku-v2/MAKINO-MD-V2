const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["anos voidigoad"];
global.OwnerNumber = ["2348117424831"];
global.ownertag = [""]; 
global.OwnerName =  "anos voldigoad";
global.BotName = "anos voidigoad";
global.packname = "★";                             //Do not change.
global.author = "anos voidigoad ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5 "; 
global.SupportGroupLink = "https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5"; //Do not change!
//global.dbase = process.env.DBASE || "mongodb+srv://Tboytm:vdUQpHCI0zvK8FW7@cluster0.6aa7wqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || ``
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


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
    useradmin: 'Only the demon king can use the command 💀 ',
    botadmin: 'Make the demon king Admin first 💀.',
    botowner: 'Only my *demon king* can use this command,Dont trespass, 💀',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat by the demon king*, 💀',
    botonly: 'Only the *demon king himself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned* by the demon king💀',
    bangc: 'This Group is *Banned* from using the demon king Commands!💀',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
