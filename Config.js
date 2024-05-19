if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ajibadeabdulmuiz88@gmail.com"
global.location="Ojo, Lagos."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Abdulmuiz01:<password>@abdulmuiz.uymhzib.mongodb.net/?retryWrites=true&w=majority&appName=Abdulmuiz"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 


global.devs = "2347066659189" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= "Moonlight" ; process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347066659189";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "truee";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 88
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2347066659189,2348082693054";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2347066659189,2348082693054";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347066659189,2348082693054";
global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_59_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTM4LFxuICAgICAgICA5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTExLFxuICAgICAgICA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUyLFxuICAgICAgICA0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NixcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5YandnaUg4aE5LQW54TmdjNGR5d0FVcExvR3FnSjN3OHJpK0sxWHl0aWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJOR2lLLVo3Uy1xV0txZVJzSUFoV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmIyNGE1MmYtODI4ZS00MWNiLWI3MWEtYjFlMzViMmEwMzE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDI1MCxcbiAgICAgIDgxLFxuICAgICAgODUsXG4gICAgICAxNDUsXG4gICAgICAxNSxcbiAgICAgIDEwMSxcbiAgICAgIDI1NCxcbiAgICAgIDI0OCxcbiAgICAgIDcxLFxuICAgICAgMTM1LFxuICAgICAgMTEsXG4gICAgICAxOTcsXG4gICAgICAxNzcsXG4gICAgICAxNjEsXG4gICAgICAxOTMsXG4gICAgICAyMDIsXG4gICAgICA3NyxcbiAgICAgIDIwNSxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgMTYsXG4gICAgICAxMDgsXG4gICAgICAxMTgsXG4gICAgICAxODEsXG4gICAgICAxMDIsXG4gICAgICA3OSxcbiAgICAgIDE2OCxcbiAgICAgIDI1MSxcbiAgICAgIDg1LFxuICAgICAgMjM4LFxuICAgICAgNjgsXG4gICAgICAxNDUsXG4gICAgICAyMDksXG4gICAgICAxMzgsXG4gICAgICAyMTQsXG4gICAgICAxNDksXG4gICAgICAxMDcsXG4gICAgICAxMCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhQRlMySFdQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY2NjU5MTg5OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDY5NTIzOTg3Mzc2MjU6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+MmSBNb29ubGlnaHQg8J+MmVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kzbHNRNFExc0tmc2dZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNVFlRmtTT0IybUtORjhWMm1OR0IyWUJBUXZySHZnYWdiU1YzdUVLTk4wbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaOEh5N3JYdW82QkZNRGFZaXFYMWFuYlFNcmVRR0VBcDAxN3ZQcXNtQjZ0V04wOWdBd0hRRVFqdHJyeDVyTmNLcncxaU10SmN6Ujd6eXZrSW5KNlFCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJORldJcEZYKzJwbWRTM2VjUmZLcEdwditiNGRyeTVCd1NuQTBJWnE2ZVNyNHl1SFVwYlIxRWV2NUVXMUZGcWxYWkw0Q2NxVmxFS2o2U3hkYkFQOFlDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY2NjU5MTg5OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU5ODY3NzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKZ05cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpnTi5qc29uIjogIntcImtleURhdGFcIjpcIkI0bDZtTGlrb1Jpd08vNXN4TGQ0QlRhWDBJbzBFMXk2VW5Ybnp0UWdpaU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzAxNzU4ODUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTk2NTE1NDkyMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🌙 Moonlight 🌙",
  ownername:process.env.OWNER_NAME|| "🌙 Moonlight 🌙",

  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-a522f5df-0713-4daa-8971-ed8fe0be855b",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "Abdulmuiz01",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "MOONLIGHT"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";


























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];        require(file); })


// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 88,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "online", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
