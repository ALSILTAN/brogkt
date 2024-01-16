 const express = require('express');
const app = express();
const chalk = require("chalk");
app.get('/', (req, res) => {
  res.send('Hello Express app!')
})
app.use('/ping', (req, res) => {
  res.send(new Date());
});
app.listen(3000, () => {
  console.log(chalk.red.bold('The Bot Is Ready.'))
});

const Discord = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');


const { Client, Intents, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment, TextInputComponent, Modal, Interaction } = require('discord.js')



const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  ws: {
    properties: { $browser: "Discord iOS" }
  },
});


const db = require("quick.db");
const ms = require("ms");

const prefix = "!";

client.on('ready', () => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot User name : ${client.user.username}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
    .reduce((a, b) => a + b.memberCount, 0)
    .toLocaleString()}`)
  console.log(``)
  console.log(`================`)
});

client.on('ready', () => {
  console.log(``)
  setInterval(() => {
    const Activities = [`/help`]
    const Random_A =
      Activities[Math.floor(Math.random() * Activities.length)];

    client.user.setActivity(`${Random_A}`, { type: `Watching` })
  }, 1000 * 5)
})

// ======================= Const ========================== \\

const FeedbackChannel = "1158829262766362727"
const SuggestionChannel = "1158829150040227971"
const AutoTaxChannel = "1161976795663441930"
const WelcomeChannel = "1158828978459639868"
const WelcomeSellerChannel = "1158829321843134555"
const UpgradeSellerChannel = "1158829309998415884"
const AxloNews = "1158828990837047418"
const support = "1158829075251597352"
const TeamOfferChannel = ""
const OffersChannel = "'1158829234530295939','1158829027444932730','1158829221888675930','1158829251169091694'"
const TeamSugChannel = ""
const AzkarChannel = "1164896965662883941"
const UpgradeChannel = "1158829309998415884"
const JoinTeamChannel = "1158829321843134555"
const TeamRules_Channel = "1164864249911320606"
const TeamTarget_Channel = "1158829309998415884"
const TransferChannel = "1164879162050367519"
const InviteChannel = "1158829333822046248"
const Tashfir_Channel = ""
const ThxChannel = ""

const OrderCategory = "1158828918871179374"
const ApplyCategory = "1158828836553760878"

const Owners = ["820375260590899251","776860475102330940",""]
const SellerRole = ["1179487929777786951"]
const OffersRole = ""


const LineLink = "https://cdn.discordapp.com/attachments/1113076982775824454/1166517838740201612/97b009b38870d48b.png?ex=654ac765&is=65385265&hm=e11d9c0daf43a5da3dc51bc8&"
const Logo_Png = "https://cdn.discordapp.com/attachments/1001930659415208076/1155604143889711266/a_cf2c42ebcf2f9ccdb4a78d31e11a83d6.gif"
const ServerLink = "https://discord.gg/bsAgB6K367"
const ServerTag = "𝐀𝐗𝐋𝐎 𝐒𝐓𝐎𝐑𝐄"




const Emojis = {
  SugEmoji_1: "<:emoji_6:1154043034703507456>",
  SugEmoji_2: "",
  Red_Heart: "<:emoji_27:1154043095936159835>",
  Red_Crown: "<:emoji_6:1154043034703507456>",
  Red_Crown2: "<:emoji_4:1154043030240776243> ",
  Red_Diamond: "<:emoji_3:1154043027279589416>  ",
  Red_Lam3a: "<:emoji_4:1154043030240776243> ",
  Green_Circle: "<a:Green_Circle:1136087287512432641>",
  Red_Circle: "<a:Red_Circle:1142773538386890752>",
  Warn: "<:emoji_27:1154043095936159835> ",
  Midnight: "<:emoji_24:1154043087715323984> ",
  ProBot: "<:emoji_1:1154043022422593597> ",
  News: "<:News:1142775858684239954>",
  Member: "<:emoji_4:1154043030240776243> ",
  Accept: "<:emoji_6:1154043034703507456> "
}


  // ======================= Auto =========================== \\
 // ======================== Auto ============================ \\
// ========================= Auto ============================= \\


// ====================== Suggestion ======================= \\

client.on("messageCreate", message => {
if (message.channel.type === "dm" ||
  message.author.bot) return
if (SuggestionChannel.includes(message.channel.id)) {
  message.delete()

 let args = message.content.split(',')
 let embed = new MessageEmbed()
   
.setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
.setDescription(`**
   > __New Sugesstion :__
   
   > ${args}**`)

.setColor("fc0101")
.setImage(`${LineLink}`)
.setTimestamp()

message.channel.send({ embeds: [embed] }).then(msg => {
msg.react(`${Emojis.SugEmoji_1}`).then(() => {
msg.react(`${Emojis.SugEmoji_2}`)
      })
    })
  }
});

// ======================= Feedback ======================== \\

client.on('messageCreate', async message => {
  if (FeedbackChannel.includes(message.channel.id)) {

    if (message.author.bot) return;
    const att2 = new Discord.MessageEmbed()
      .setDescription(`
        > Thanks For FeedBack ${Emojis.Red_Lam3a}
        
        > We Hope You Visit Us Again ${Emojis.Red_Heart}`)
      .setImage(`${LineLink}`)
      .setThumbnail(message.author.avatarURL({ dynamic: true }))

      .setAuthor(message.author.username, message.author.avatarURL({ dynaimc: true }))
      .setTimestamp()
      .setColor("fc0101")
    message.channel.send({ embeds: [att2] })
    return;
  }
})

// ======================= Auto Tax ======================== \\

client.on('messageCreate', async message => {
  if (AutoTaxChannel.includes(message.channel.id)) {

    if (message.author.bot) return;
  let args = message.content.split(" ").slice(0).join(" "); 
    if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 ⚠⚠ **`);
        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji(`<:emoji_5:1154043032048517120> `)
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
			.addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji(`${Emojis.ProBot}`)
        .setStyle('DANGER')
);
  let m = await message.reply({ content: `
**__${tax}__**` , components: [row]});
  let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
    collector.on('collect', async i => {
if (i.customId === 'first_embed') {
    m.edit({ content: `
**__${tax4}__**`, components: [row2]})
    row
    i.deferUpdate()
          }
if (i.customId === '2_embed') {
    m.edit({ content: `**__${tax}__**`, components: [row] })
    i.deferUpdate()
} else {
  return;
}
});
  }
}) 

// ======================= Auto Line ======================== \\

client.on('message', message => {
  if (message.content.includes('has transferred')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(`${LineLink}`)
      .setColor("fc0101")
    message.channel.send({ embeds: [TransformEmbed] })
  }
})

client.on('message', message => {
  if (message.content.includes('𝐎𝐟𝐟𝐞𝐫 𝐌𝐞𝐧𝐭𝐢𝐨𝐧')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(`${LineLink}`)
      .setColor("#fc0101")
    message.channel.send({ embeds: [TransformEmbed] })
  }
})

client.on('message', message => {
  if (message.content.includes('قام بتحويل')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(`${LineLink}`)
      .setColor("#fc0101")
    message.channel.send({ embeds: [TransformEmbed] })
  }
})

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (OffersChannel.includes(message.channel.id)) {
const AuEmbed = new MessageEmbed()
.setImage(`${LineLink}`)
.setColor("#fc0101")
      message.channel.send({ embeds: [AuEmbed] })
  }
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (ThxChannel.includes(message.channel.id)) {
const AuEmbed = new MessageEmbed()
.setImage(`${LineLink}`)
.setColor("#fc0101")
      message.channel.send({ embeds: [AuEmbed] })
  }
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (ThxChannel.includes(message.channel.id)) {
message.react("")
message.react("")
message.react("")
message.react("")
message.react("")}
  });

// ======================= Auto Azkar ======================== \\

const azkar = require("azkar");
client.on('ready', async () => {
setInterval(() => {
let az = azkar.get()

 let azkr = new MessageEmbed()

.setThumbnail(client.user.displayAvatarURL({dynamic : true}))
.setTitle(`**${az.category}**`)
.setColor("#fc0101")
.setImage (LineLink)
.setTimestamp()
.setDescription(`\n **${az.zekr}**`)
.setAuthor("𝐀𝐗𝐋𝐎 𝐒𝐓𝐎𝐑𝐄", client.user.displayAvatarURL({dynamic : true}))

client.channels.cache.get(`${AzkarChannel}`).send({embeds: [azkr]})
  }, 14400000)
})
//14400000
// ======================= Welcome ======================== \\

var { inviteTracker } = require("discord-inviter"),
  tracker = new inviteTracker(client);

tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  let channel = member.guild.channels.cache.get(`${WelcomeChannel}`);

  let embed = new MessageEmbed()

.setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true }))
.setThumbnail(member.user.avatarURL({ dynamic: true }))
.setDescription(`** 
   > Welcome To ${member.guild.name} <:emoji_24:1154043087715323984>
   
   > Hey \`${member.user.username}\` <:Members:1154260474104402002> 
           
   > Invited By <@${inviter.id}> <:emoji_14:1154043055742144524> 
   
   > Member Id \`${member.id}\` <:emoji_29:1154043100394700820> 
   
   > Axlo News <#${AxloNews}> 
   
   > ・𝐒𝐮𝐩𝐩𝐨𝐫𝐭・الـدعم・الـفني <#${support}> **`)

.setColor("#fc0101")
.setTimestamp()
.setImage(`${LineLink}`)
  channel.send({ content: `> **Welcome ${member.user} To __𝐀𝐗𝐋𝐎 𝐒𝐓𝐎𝐑𝐄__**`, embeds: [embed] }).catch((err) => {
    console.log(err.message)
  });
});


var { inviteTracker } = require("discord-inviter"),
  tracker = new inviteTracker(client);

tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
 
member.send(`
> **Welcome To 𝐀𝐗𝐋𝐎 𝐇𝐎𝐒𝐓 <:emoji_24:1154043087715323984> **

>  **مرحبا بك ، نورت اكبر و اضمن استور فالشرق العربي اكسلو هوست <:emoji_6:1154043034703507456> **

> **تعريف بسيط : اكسلو هوست ، هو سيرفر عربي يوفر جميع الخدمات  ، حيث يتكون من طاقم عمل ممتاز ، ويعمل علي تطوير خدماته دائما بشكل يليق بكم ، ويتوفر ايضا وساطه بدون مقابل ومضمون 100% ، ويوفر منتجات مثل : توكنات - حسابات - بوتات خاصه - رفع بوت 24 - تصاميم... ،   بشكل منظم ويليق بكم <:emoji_5:1154043032048517120>** 

> https://discord.gg/nBFd26QFnX

>  **لطلب اوردر بما تحتاجه من مبيعات :** <#1158829087238914110>
> **للتقديم علي فريق العمل :** <#1158829075251597352>`).catch((err) => {
    console.log(err.message)
  });
});


var { inviteTracker } = require("discord-inviter"),
  tracker = new inviteTracker(client);

tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  let chanel = member.guild.channels.cache.get(`${InviteChannel}`);

  let embed = new MessageEmbed()
.setImage(`${LineLink}`)
.setColor("#fc0101")

  chanel.send({ content: `> ${Emojis.Red_Crown} **Welcome ${member.user} To 𝐀𝐗𝐋𝐎 𝐒𝐓𝐎𝐑𝐄** ${Emojis.Midnight}
> ${Emojis.Member} **Invited By __<@${inviter.id}>__** ${Emojis.Red_Lam3a}`})
    chanel.send({embeds: [embed]}).catch((err) => {
    console.log(err.message)
  });
});

// ======================= Team Encryption ======================== \\

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id == `${Tashfir_Channel}`){

    let args = message.content.split(' ').slice(0).join(' ')

    let test = args.replaceAll("نيترو","نيت رو").replaceAll("فيزا","فيـ ـزا").replaceAll("كريدت","كريـ ـدت").replaceAll("كرديت","كريـ ـدت").replaceAll("كاش","كـ ـاش").replaceAll("ستيم","ستـ ـيم").replaceAll("سيرفر","سيرفـ ـر").replaceAll("ديسكورد","ديسـ ـكورد").replaceAll("حسابات","7سابــات").replaceAll("اكونتات","اكـ ـونتات").replaceAll("بوستات","بوستـ ـات").replaceAll("تفعيل","تفـ ـعيل").replaceAll("نيتفليكس","نيتفلـ ـيكس").replaceAll("سبوتيفاي","سبوتـ ـيفاي").replaceAll("تيكتوك","تيكـ ـتوك").replaceAll("فيسبوك","فيسـ ـبوك").replaceAll("انستا","انسـ ـتا").replaceAll("توكنات","توكـ ـنات").replaceAll("فوتات","فوتـ ـات").replaceAll("بوتات","بوتـ ـات").replaceAll("كريبتو","كريبتـ ـو").replaceAll("عملات","عمـ ـلات").replaceAll("كود","كـ ـود").replaceAll("بوت","بـ9ت").replaceAll("اكس بوكس","اكسـ ـبوكس").replaceAll("فيز","فيـ ـز").replaceAll("موجود","موجـ ـود").replaceAll("اكونت","اكـ ونـ ت").replaceAll("متوفر","مـت9فر").replaceAll("سعر","سـ3ر").replaceAll("تيكت","تيـ ـكت").replaceAll("تكت","تـ كـ ـت").replaceAll("متابع","مـ ـتـابـع").replaceAll("حساب","7سـاب").replaceAll("بيع","بـ ـيع").replaceAll("اعضاء","اعـ ـضاء").replaceAll("اوتو","اوتـ ـو").replaceAll("اوفلاين","اوفـ ـلاين").replaceAll("اونلاين","اونـ ـلاين").replaceAll("تيك توك","تـ ـيك تـ ـوك") .replaceAll("وهمي","وهـ ـمي").replaceAll("استور","اسـت9ر").replaceAll("شاهد","شـ ـاهـ ـد").replaceAll("نوع","نـ ـوع").replaceAll("شوب","شـب").replaceAll("تفاعل","تفـ ـاعـ ـل").replaceAll("لفل","لـ ـفـ ـل").replaceAll("ضمان","ضـ ـمان").replaceAll("محدوده","محـ ـدوده").replaceAll("فتره","فـ ـتره").replaceAll("ابدي","ابـ ـدي").replaceAll("سنه","سـ ـنه").replaceAll("شهر","شـ ـهر").replaceAll("شهور","شـ ـهور").replaceAll("اسبوع","اسـ ـبوع").replaceAll("انواع","انـ ـواع").replaceAll("انواع","انـ ـواع").replaceAll("جميع","جمـ ـيع").replaceAll("ديس","دي$$ـس").replaceAll("كوين","كويـ ـن").replaceAll("والت","والـ ـت") .replaceAll("سويت","سـ ـويـ ـت").replaceAll("اسعار","اس3ـار").replaceAll("ميمبر","ميـ ـمبر").replaceAll("سوشيال","شوشـ ـيال").replaceAll("خدمات","خدمـ ـات").replaceAll("ميديا","ميديـ ـا").replaceAll("توكن","تـ 9كن") 

let embed = new MessageEmbed()
.setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setColor("#fc0101")
.setTimestamp()
.setImage(LineLink)
.setDescription(`
> ${Emojis.Midnight} **Your Encryption : **

> **__${test}__**`)
    
  message.reply({embeds: [embed]})
    
 }
});

// ======================= Order Ticket ======================== \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === `${OrderCategory}`) {

    await new Promise(r => setTimeout(r, 2000))

const MessageOrder = [`
**السلام عليكم ورحمه الله وبركاته .
معك طاقم اكسلو هوست في تذكره  كيفه يمكننا مساعدتك .!  ${Emojis.Midnight}
 <@&1158828598279540886>
 **
`]
  
channel.send(`${MessageOrder}`)
//setInterval(() => {
//channel.send("test")
//  }, 5000)
  }
});

// ====================== Apply Ticket ======================= \\

client.on("channelCreate", async channel => {
  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === `${ApplyCategory}`) {

    await new Promise(r => setTimeout(r, 2000))

    const embed = new Discord.MessageEmbed()
      .setImage(`${LineLink}`)
      .setDescription(`\`#\` ${Emojis.Red_Heart} Hello User Pls Fill In The Following

\`#\`  ${Emojis.Red_Heart} مرحبا.. رجاءا املأ الاستمارة الآتية

=========================

>  \`-\` ${Emojis.Midnight} اسمك :


>  \`-\` ${Emojis.Midnight} سنك :


>  \`-\` ${Emojis.Midnight} السيرفرات اللي شغال فيها :


>  \`-\` ${Emojis.Midnight} ماهي رولاتك :


>  \`-\` ${Emojis.Midnight} عدد الفيدباكاتك اللي معك :

===========================

\`#\` ${Emojis.Red_Crown} Pls Send All Your FeedBack Here

\`#\` ${Emojis.Red_Crown} رجاءا ارسل كل فيدباكاتك هنا
`)
.setThumbnail(channel.guild.iconURL())
.setColor("#fc0101")

    channel.send({ embeds: [embed] })

  }
});

// ===================== Team Offer ===================== \\



// ===================== Team Suggestion ===================== \\

client.on("messageCreate", message => {
if (message.channel.type === "dm" ||
  message.author.bot) return
if (TeamSugChannel.includes(message.channel.id)) {
  message.delete()

 let args = message.content.split(',')
 let embed = new MessageEmbed()
   
.setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
.setDescription(`**
   > __New Sugesstion :__
   
   > ${args}**`)

.setColor("#fc0101")
.setImage(`${LineLink}`)
.setTimestamp()

message.channel.send({ embeds: [embed] }).then(msg => {
msg.react(`${Emojis.SugEmoji_1}`).then(() => {
msg.react(`${Emojis.SugEmoji_2}`)
      })
    })
  }
});

  // ======================= General =========================== \\
 // ======================== General ============================ \\
// ========================= General ============================= \\


// ===================== Help ===================== \\

client.on("messageCreate", message => {
  if(message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  if(args[0] === prefix+"axhelp") {
    let menu = new MessageSelectMenu()
      .setCustomId(`help_${message.author.id}`)
      .setPlaceholder("Choose a category")
      .addOptions([{
                            label: 'information',
                            description: 'To view the information ',
                            value: '1',
              emoji: `${Emojis.Midnight}`,
                        },
          {
                            label: 'General',
                            description: 'To display general commands ',
                            value: '2',
              emoji: `${Emojis.Midnight}`,
                        },
                        {
                            label: 'Admin',
                            description: 'To display admin commands ',
                            value: '3',
              emoji: `${Emojis.Midnight}`,
                        },
                            
                        {
                            label: 'Store',
                            description: 'To display store commands ',
                            value: '4',
              emoji: `${Emojis.Midnight}`,
                        }])
    
    let row = new MessageActionRow()
      .addComponents([menu])
 
 
    let embed = new MessageEmbed()
.setTitle("**Help Menu**")
.setThumbnail(message.guild.iconURL())
.setAuthor("𝐀𝐗𝐋𝐎", client.user.displayAvatarURL({dynamic : true})) 
.setDescription(`
\`\`\`diff
- const Server = 𝐀𝐗𝐋𝐎 𝐒𝐓𝐎𝐑𝐄
- const Bot Name : 𝐀𝐗𝐋𝐎 𝐒𝐲𝐬𝐭𝐞𝐦
- const Developers = 𝐀𝐋𝐒𝐔𝐋𝐓𝐀𝐍
- const Prefix = +
- const Ping = ${client.ws.ping}ms\`\`\``)
.setImage(`${LineLink}`)
       .setColor("#fc0101")
      .setTimestamp()
    message.reply({ embeds:[embed], components:[row] }).then( msg => {
      let filter = b => b.user.id === message.author.id && b.customId === `help_${message.author.id}`;
      let collector = msg.createMessageComponentCollector({ filter:filter, componentType: 'SELECT_MENU', time:120000 });
      collector.on("collect", (b) => {
        if(b.values[0] === "1") {
              
      const { version: djsversion } = require("discord.js");
    const { version } = require("./package.json");
            let days = Math.floor(client.uptime / 86400000);
          let hours = Math.floor(client.uptime / 3600000) % 24;
          let minutes = Math.floor(client.uptime / 60000) % 60;
          let seconds = Math.floor(client.uptime / 1000) % 60;    
    let embed_1 = new MessageEmbed()
 
  .setAuthor(`Information Bot:`, client.user.displayAvatarURL({dynamic : true})) 
.setColor("#fc0101") 
.setTimestamp()
.setThumbnail(message.guild.iconURL())
.setAuthor("𝐀𝐗𝐋𝐎", client.user.displayAvatarURL({dynamic : true})) 
        .addFields([
    {
    name: `Bot:`,
    value: `\`\`\`Version: v${version}
Name: ${client.user.tag}
Id: ${client.user.id}
Users: ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}
Guilds Count: ${client.guilds.cache.size.toLocaleString()}
Node.js version: ${process.version}
discord js version: v${djsversion}
Platform: ${process.platform}\`\`\``
},
    {
    name: `Server:`,
    value: `\`\`\`Bot Prefix: ${prefix}
Bot Language: English\`\`\``  
 
}, 
      {
      name: `System:`, 
      value: `\`\`\`Ping: ${client.ws.ping}ms
Uptime: ${seconds}s ${minutes}m ${hours}h ${days}d\`\`\``
}
]) 
          b.update({ embeds:[embed_1], components:[row] }).catch(err => {});
        } else if(b.values[0] === "2") {
      let embed_1 = new MessageEmbed()
        
  .setAuthor(`General Commands:`, client.user.displayAvatarURL({dynamic : true}))
.setColor("#fc0101") 
.setTimestamp()
.setThumbnail(message.guild.iconURL())
.setAuthor("𝐀𝐗𝐋𝐎", client.user.displayAvatarURL({dynamic : true})) 
        .addFields([
      {
      name: `> ${prefix}avatar`, 
      value: `\`To Get Your Avatar\``
},
      {
      name: `> ${prefix}link`, 
      value: `\`To Ger Server Link\``
}
])
          b.update({ embeds:[embed_1], components:[row] }).catch(err => {});
  } else if(b.values[0] === "3") {
let embed_1 = new MessageEmbed()
            
   .setAuthor(`Admin Commands:`, client.user.displayAvatarURL({dynamic : true}))
.setColor("#fc0101") 
.setTimestamp()
.setThumbnail(message.guild.iconURL())
.setAuthor("𝐀𝐗𝐋𝐎", client.user.displayAvatarURL({dynamic : true})) 
        .addFields([
    {
      name: `> ${prefix}lock`, 
      value: `\`To Lock Channel\``
},
    {
      name: `> ${prefix}unlock`, 
      value: `\`To UnLock Channel\``  
}, 
      {
      name: `> ${prefix}tag`, 
      value: `\`To Hide Channel\``
},
      {
      name: `> ${prefix}hide`, 
      value: `\`To Hide Channel\``
},
       {
      name: `> ${prefix}show`, 
      value: `\`To Show Channel\``
},
       {
      name: `> ${prefix}ban`, 
      value: `\`To Ban User\``
},
      
      {
      name: `> ${prefix}clear`, 
      value: `\`To clear message\``
},    
      
      {
      name: `> ${prefix}unban-all`, 
      value: `\`To UnBan User\``
},
      {
      name: `> ${prefix}say`, 
      value: `\`To UnBan All Users\``
},
      {
      name: `> ${prefix}send`, 
      value: `\`To Say a Message\``
},
      {
      name: `> ${prefix}embed`, 
      value: `\`To Say a Embed Message\``
}, 
      {
      name: `> ${prefix}hide-all`, 
      value: `\`To hide all channels\``
},
      {
      name: `> ${prefix}show-all`, 
      value: `\`To show all channels\``
},
      {
      name: `> ${prefix}clear`, 
      value: `\`To clear message\``
}     
])
  b.update({ embeds:[embed_1], components:[row] }).catch(err => {});
        } else if(b.values[0] === "4") {
let embed_1 = new MessageEmbed()
      
  .setAuthor(`Store Commands:`, client.user.displayAvatarURL({dynamic : true}))
.setColor("#fc0101") 
.setTimestamp()
.setThumbnail(message.guild.iconURL())
.setAuthor("𝐀𝐗𝐋𝐎", client.user.displayAvatarURL({dynamic : true})) 
        .addFields([
    {
      name: `> ${prefix}come`, 
      value: `\`To Send Message in DM\``
},
      {
      name: `> ${prefix}inrole`, 
      value: `\`To Upgrade a Team\``
},
          
      {
      name: `> ${prefix}upgrade`, 
      value: `\`To Upgrade a Team\``
},
      {
      name: `> ${prefix}welcome-seller`, 
      value: `\`To Send Welcome Team Message\``
},
      {
      name: `> ${prefix}tax`, 
      value: `\`To Get Tax a Number\``
}
])
b.update({ embeds:[embed_1], components:[row] }).catch(err => {});
 }
      });
        });
  }
});

// ===================== Command Tax ===================== \\

client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();
if(command === "tax") {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" "); 
    if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 ⚠⚠ **`);
        let row = new MessageActionRow()
            .addComponents(
                        new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji(`${Emojis.Midnight}`)
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
            .addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji(`${Emojis.ProBot}`)
        .setStyle('DANGER')
);
  let m = await message.reply({ content: `
**__${tax}__**` , components: [row]});
  let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
    collector.on('collect', async i => {
if (i.customId === 'first_embed') {
    m.edit({ content: `
**__${tax4}__**`, components: [row2]})
    row
    i.deferUpdate()
          }
if (i.customId === '2_embed') {
    m.edit({ content: `**__${tax}__**`, components: [row] })
    i.deferUpdate()
} else {
  return;
}
});
  }
}) 

// ===================== Command Come ===================== \\

client.on("messageCreate", async message => {
  if (message.author.bot || !message.channel.guild) return;
  if (message.content.startsWith(prefix + "come")) {

    let seller = message.member.guild.roles.cache.find(i => i.id === `${SellerRole}`)

    if (message.member.roles.highest.position < seller.position) return message.reply("**You Don't Have Permissions**");

    let args = message.content.split(' ')

    const user = message.mentions.members.first() || client.users.cache.get(args[1]);

    if (!user) return message.reply(`:rolling_eyes: **Please Mention User**`);

    const Comsg = [`
**Some One Need You __<@${user.id}>__** ${Emojis.Red_Lam3a}

**Channel Here : ${message.channel}** 

**Server Link : ${ServerLink} ** ${Emojis.Midnight}

**I Hope You  Enter To See What He Want ${Emojis.Red_Heart}**`]
    
  let embed_2 = new MessageEmbed()
.setTitle(`> **__Done__ ${Emojis.Red_Diamond}**`)
.setDescription(`**> Message Sent ${Emojis.Red_Lam3a}
 **> Pls Don't Spam And Wait Them ${Emojis.Red_Heart}**`)
.setThumbnail(message.author.displayAvatarURL())
.setAuthor("𝐀𝐗𝐋𝐎 𝐇𝐎𝐒𝐓", client.user.displayAvatarURL({dynamic : true})) 
.setColor(message.guild.me.displayColor)
 user.send(`${Comsg}`).then(() => {
  message.reply({ embeds: [embed_2] })
    }).catch(() => {
      message.reply(`:rolling_eyes: ** I Couldn't Send The Message**`)
    })
  }
})

// ===================== Command Tag ===================== \\

client.on('messageCreate', async message => { 
if (message.content.startsWith(prefix + 'tag')) {
if (!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply(`** 😕 You don't have permissions **`);
  
    let args = message.content.split(" ");
    let user = message.mentions.members.first() || client.users.cache.get(args[1]);
    user.setNickname(`${ServerTag}${user.user.username}`)
    message.reply(`**> Done Change Tag ${user} To ${user.user.username}**`)
}
          })

// ===================== Command Upgrade ===================== \\

client.on("messageCreate", message => { 
  
  if (message.content.startsWith(prefix + "upgrade")) {
    
  if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
  let user = message.mentions.members.first()
  let args = message.mentions.roles.first()
  if (!user) return message.reply("> Pls mention team")
  if (!args) return message.reply("> Pls mention role ")
user.roles.add(args)
client.channels.cache.get("1158829309998415884").send(`> **<:Members:1154260474104402002> Name : ${user} **


>  ** <:emoji_6:1154043034703507456>  Upgrade To : ${args} **


> ** <:emoji_19:1154043069998579914>  Keep and thx activing ${message.guild.name} **


> ** <:123:1163175657015087134>  Keep going**
`)
   client.channels.cache.get("1158829309998415884").send({
      embeds: [
        new MessageEmbed()
          .setImage(LineLink)
          .setColor("#fc0101")
      ]
    })

    message.reply( `> 𝖣𝗈𝗇𝖾`)

const role = message.guild.roles.cache.get(args.id);
    const upgradedmembed = new MessageEmbed()
.setColor("#fc0101") 
.setTimestamp()
.setThumbnail(user.displayAvatarURL({dynamic : true}))
.setAuthor("𝐀𝐗𝐋𝐎", client.user.displayAvatarURL({dynamic : true}))
.setDescription(`** 
> \`#-\` Hello ${user} , you have been promoted ${Emojis.Red_Lam3a}

> \`?-\` ${Emojis.Member} User : ${user}

> \`%-\` Thx for your active ${message.guild.name} 

> Continue ${Emojis.Red_Crown2}
**`)
      .setFooter(`Upgrade For ${message.author.tag}`);
    user.send({ embeds: [upgradedmembed] });
  }
})

// ================= Command Welcome Seller ================= \\

client.on('messageCreate', message => {
if(message.content.startsWith(prefix + "wlteam")) {
if (!message.member.permissions.has('ADMINSTRATOR')) return message.reply(`** 😕 You don't have permissions **`);
  
const ChannelWel = client.channels.cache.get(`${JoinTeamChannel}`);
const args = message.content.split(' ').slice(2).join(' ')
const user = message.mentions.users.first() || message.guild.members.cache.get(args[0])?.user;
const EE = new MessageEmbed()
.setImage(LineLink)
.setColor("#fc0101")
  
const Message = [`
> **Welcome ${user} To Our Team**

> **Team Role : ${args}**

> **Pls Check <#${TeamRules_Channel}> and <#${TeamTarget_Channel}>**

> **Enjoy With 𝐀𝐗𝐋𝐎 𝐒𝐓𝐎𝐑𝐄**

> **Mention <@&${SellerRole}>**`]
ChannelWel.send(`${Message}`)
ChannelWel.send({embeds :[EE]})
message.reply(`Done Send Welcome <#${JoinTeamChannel}>`)
}
})
      
// ===================== Command Line ===================== \\

client.on("messageCreate", message => {
  var cmd = message.content.split(' ')[0]
  
  if(cmd == prefix + "line" || cmd ==  prefix + "خط" || cmd == "line" || cmd == "خط") {
    
let seller = message.member.guild.roles.cache.find(i => i.id === `${SellerRole}`)
    
if (message.member.roles.highest.position < seller.position) return message.reply("**You Don't Have Permissions**");

message.delete();

let CmdEmbed = new MessageEmbed()
.setColor("#fc0101")     
.setImage(`${LineLink}`)
    
message.channel.send({embeds: [CmdEmbed]});
  }
});

// ===================== Command Link ===================== \\

client.on("message", message => {
  if (message.content == ("لينك") || message.content === "link") {

    message.reply(`
> \`-\` **${Emojis.Midnight} Server Invite Link : ${Emojis.Midnight}**
> \`-\` **[ ${ServerLink} ]**
> \`-\` **Enjoy ${Emojis.Red_Heart}**
`)

  }
})



client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.content === "fb" || message.content === "Fb") {

let seller = message.member.guild.roles.cache.find(i => i.id === `${SellerRole}`)

  if (message.member.roles.highest.position < seller.position) return message.reply("**You Don't Have Permissions**");
    
message.reply(`**> شكرا لاختيارك ${message.guild.name} ${Emojis.Red_Heart}
    > Thx For Use ${message.guild.name} ${Emojis.Red_Heart}
    
> متنساش تخلي فيدباك للسيرفر + تعامل السيلر ${message.author} ${Emojis.Red_Crown2}
> Do not forget to leave feedback to the server + the seller's dealings with you ${message.author} ${Emojis.Red_Crown2}

> -------------------------------------------------------
> Here : <#${FeedbackChannel}> ${Emojis.Red_Crown}
> Enjoy With AXLO STORE ${Emojis.Red_Lam3a}**`)
  }
});


// ===================== Rename Ticket ===================== \\

client.on('messageCreate', async (message) => {
  if (message.content === "re") {
    if (!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`**By-${message.author.username}**`)
    setTimeout(() => {
      message.delete();
    }, 5000)
  }
})


client.on('messageCreate', async (message) => {
  if (message.content === "re") {
    if (!message.channel.name.startsWith("need")) return;
    message.channel.setName(`**By-${message.author.username}**`)
    setTimeout(() => {
      message.delete();
    }, 5000)
  }
})


client.on('messageCreate', async (message) => {
  if (message.content === "re") {
    if (!message.channel.name.startsWith("sell")) return;
    message.channel.setName(`**By-${message.author.username}**`)
    setTimeout(() => {
      message.delete();
    }, 5000)
  }
})


client.on('messageCreate', async (message) => {
  if (message.content === "re") {
    if (!message.channel.name.startsWith("by")) return;
    message.channel.setName(`**By-${message.author.username}**`)
    setTimeout(() => {
      message.delete();
    }, 5000)
  }
})

// ===================== Reply ===================== \\

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.content === "+" || message.content === "حول") {

let seller = message.member.guild.roles.cache.find(i => i.id === `${SellerRole}`)

  if (message.member.roles.highest.position < seller.position) return message.reply("**You Don't Have Permissions**");
    
message.reply(`**> ${Emojis.Midnight} Please Transfer Here : <#${TransferChannel}>**`)
  }
});


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.content === "بنك" || message.content === "bank") {
    
message.reply(`**> ${Emojis.Midnight} Please Transfer To :<@988862907779539027>**`)
  }
});


  // ===================== Our Commands ===================== \\
 // ====================== Our Commands ====================== \\
// ======================= Our Commands ======================= \\


  // ===================== Admin Commands ===================== \\
 // ====================== Admin Commands ====================== \\

// =========================== Lock ============================ \\

client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'lock')) {
           
const permission = message.member.permissions.has("MANAGE_CHANNELS");
const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

if (!permission)
return message.reply(
 { content: `** ${Emojis.False} You don't have permission to use this command**`, ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        SEND_MESSAGES: false,
                        SEND_MESSAGES_IN_THREADS : false,
                        CREATE_PRIVATE_THREADS : false,
                        CREATE_PUBLIC_THREADS : false
                }).then(() => {
                        message.reply({ content:
`> **Done Lock The Channel ${Emojis.Accept}**
 > **Channel : <#${message.channel.id}>**` , ephemeral: true }).then(() => { message.react(`${Emojis.Accept}`).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                                                                          })
                })
        }
});

// ========================= UnLock ========================== \\

client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'unlock')) {
           
const permission = message.member.permissions.has("MANAGE_CHANNELS");
const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

if (!permission)
return message.reply(
 { content: `** ${Emojis.False} You don't have permission to use this command**`, ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        SEND_MESSAGES: true,
                        SEND_MESSAGES_IN_THREADS : true,
                        CREATE_PRIVATE_THREADS : true,
                        CREATE_PUBLIC_THREADS : true
                }).then(() => {
                        message.reply({ content:
`> **Done UnLock The Channel ${Emojis.Accept}**
 > **Channel : <#${message.channel.id}>**` , ephemeral: true }).then(() => { message.react(`${Emojis.Accept}`).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                                                                          })
                })
        }
});

// ========================= Show ========================== \\

client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content === prefix + 'show') {
      
                const permission = message.member.permissions.has("MANAGE_CHANNELS");
                const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                if (!permission)
                        return message.reply(
                                { content: `**${Emojis.False} You don't have permission to use this command**`, ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        VIEW_CHANNEL: true
                }).then(() => {
                        message.reply({ content:
`> **Done Show The Channel ${Emojis.Accept}**
 > **Channel : <#${message.channel.id}>**`, ephemeral: true }).then(() => { message.react(`${Emojis.Accept}`).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                })
        })
    }
});

// ========================= Show All ========================== \\

client.on('messageCreate', message =>{
    if(message.content === prefix + "show-all"){
    if(message.author.bot || !message.guild) return;
    if(!message.member.permissions.has('ADMINISTRATOR')) 
    return message.reply(`**${Emojis.False} You don't have permission to use this command**`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.permissionOverwrites.create(everyone, {VIEW_CHANNEL: true}).then(() => {
      });
    })
    message.reply({ content:
`> **Done Show All The Channels ${Emojis.Accept}**`, ephemeral: true }).then(() => { message.react(`${Emojis.Accept}`)
        })
    }
});

// ========================= Hide ========================== \\
      
client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content === prefix + 'hide') {
      
                const permission = message.member.permissions.has("MANAGE_CHANNELS");
                const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                if (!permission)
                        return message.reply(
                                { content: `**${Emojis.False} You don't have permission to use this command**`, ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        VIEW_CHANNEL: false
                }).then(() => {
                        message.reply({ content:
`> **Done Hide The Channel ${Emojis.Accept}**
 > **Channel : <#${message.channel.id}>**`, ephemeral: true }).then(() => { message.react(`${Emojis.Accept}`).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                })
        })
    }
});

// ========================= Hide All ========================== \\

client.on('messageCreate', message =>{
    if(message.content === prefix + "hide-all"){
    if(message.author.bot || !message.guild) return;
    if(!message.member.permissions.has('ADMINISTRATOR')) 
    return message.reply(`**${Emojis.False} You don't have permission to use this command**`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.permissionOverwrites.create(everyone, {VIEW_CHANNEL: false}).then(() => {
      });
    })
    message.reply({ content:
`> **Done Hide All The Channels ${Emojis.Accept}**`, ephemeral: true }).then(() => { message.react(`${Emojis.Accept}`)                                           })
    }
});

// ========================= Ban ========================== \\

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    let c = message.content.split(' ')
    if (c[0] == prefix + 'ban') {
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;
      
    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if(!user) return message.reply(`** 😕 Please mention member or id **`);
 if(user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);
      
    if(!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => {console.log(err)});
     await message.reply(`
> **Done Ban The User ${Emojis.Accept}**
> **User : \`${user.user.tag}\`**`).then(() => { message.react(`${Emojis.Accept}`);
     })
    }
}) 

// ========================= UnBan ========================== \\

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.content === prefix + 'unban') {
if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;
    let args = message.content.split(' ')
    let id = args[1];
    if(!id)  return message.reply(`** 😕 Please mention member or id **`);
    if(isNaN(id)) {
       return message.reply(`** 😕 Please put the member id **`);
    } else {
message.guild.members.unban(id).then(msg => {
        message.reply(`
> **Done UnBan The User ${Emojis.Accept}**
> **User : \`${msg.tag}\`**`)
      }).then(() => { message.react(`${Emojis.Accept}`).catch(err => message.reply(`**I can't find this member in bans list**`));
      })
    }
    }
}) 

// ========================= UnBan All ========================== \\

client.on("messageCreate", async message =>{
    if(message.content.startsWith(prefix + "unban-all")){
        if(!message.member.permissions.has("BAN_MEMBERS"))return;
        if(!message.guild.me.permissions.has("BAN_MEMBERS"))return;
        let bans = await message.guild.bans.fetch()
        if(!bans.size)return message.channel.send({content: `This server has no bans`})
        bans.forEach(ban => message.guild.members.unban(ban.user))
            m.reply({content: `> **Done unban from \`${bans.size}\` members! ${Emojis.Accept}**`})
    }
        });

// ========================= Say ========================== \\

client.on('messageCreate', bader => {
  if(bader.content.startsWith(prefix + "s")){
  let args = bader.content.split(' ').slice('1').join(" ") 
  bader.delete()
    bader.channel.send(`${args}`)
  }
})

// ========================= Embed ========================== \\

client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'embed')) {
      
if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`)

      
let args = message.content.split(' ').slice(1).join(' ')
  
  if (!args) return message.reply('** :x: Please select a message **')
      
    message.delete();
      
    let embed = new MessageEmbed()
      
    .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))


    .setDescription(`${args}`) 
    .setThumbnail(message.guild.iconURL({ dynamic: true }))


.setColor('fc0101')


   .setTimestamp()

let attach = message.attachments.first();

if (attach) {
   embed.setImage(attach.proxyURL)     
       }
   message.channel.send({embeds: [embed]});
    }
})






client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    const args = message.content.split(' ');
    const command = args[0];
    
    if (command === prefix + 'edit-embed') {
        if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`);
        
        // Check if the command is correctly formatted
        if (args.length < 4) {
            return message.reply('** :x: Please provide the correct format: `' + prefix + 'edit-embed <messageID> <newImageURL> <newContent>` **');
        }
        
        const messageID = args[1];
        const newImageURL = args[2];
        const newContent = args.slice(3).join(' ');

        try {
            const embedMessage = await message.channel.messages.fetch(messageID);
            if (!embedMessage) {
                return message.reply('** :x: Embed message not found **');
            }
            
            const embeds = embedMessage.embeds;
            if (embeds.length === 0) {
                return message.reply('** :x: The provided message does not contain an embed **');
            }
            
            const existingEmbed = embeds[0];
            
            const newEmbed = new MessageEmbed(existingEmbed)
                .setImage(newImageURL)
                .setDescription(newContent);
            
            await embedMessage.edit({ embeds: [newEmbed] });
            
            message.channel.send('Embed has been updated.');
        } catch (error) {
            console.error('Error updating embed:', error);
            message.channel.send('An error occurred while updating the embed.');
        }
    }
});



client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    const args = message.content.split(' ');
    const command = args[0];
    
    if (command === prefix + 'edit-embed-img') {
        if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`);
        
        // Check if the command is correctly formatted
        if (args.length !== 3) {
            return message.reply('** :x: Please provide the correct format: `' + prefix + 'edit-embed-img <messageID> <newImageURL>` **');
        }
        
        const messageID = args[1];
        const newImageURL = args[2];

        try {
            const embedMessage = await message.channel.messages.fetch(messageID);
            if (!embedMessage) {
                return message.reply('** :x: Embed message not found **');
            }
            
            const embeds = embedMessage.embeds;
            if (embeds.length === 0) {
                return message.reply('** :x: The provided message does not contain an embed **');
            }
            
            const existingEmbed = embeds[0];
            
            const newEmbed = new MessageEmbed(existingEmbed)
                .setImage(newImageURL);
            
            await embedMessage.edit({ embeds: [newEmbed] });
            
            message.channel.send('Embed image has been updated.');
        } catch (error) {
            console.error('Error updating embed image:', error);
            message.channel.send('An error occurred while updating the embed image.');
        }
    }
});









client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    const args = message.content.split(' ');
    const command = args[0];
    
    if (command === prefix + 'update-embed-server') {
        if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`);
        
        // Check if the command is correctly formatted
        if (args.length < 4) {
            return message.reply('** :x: Please provide the correct format: `' + prefix + 'update-embed-server <messageID> <newServerName> <newServerIconURL>` **');
        }
        
        const messageID = args[1];
        const newServerName = args[2];
        const newServerIconURL = args[3];

        try {
            const embedMessage = await message.channel.messages.fetch(messageID);
            if (!embedMessage) {
                return message.reply('** :x: Embed message not found **');
            }
            
            const embeds = embedMessage.embeds;
            if (embeds.length === 0) {
                return message.reply('** :x: The provided message does not contain an embed **');
            }
            
            const existingEmbed = embeds[0];
            
            const newEmbed = new MessageEmbed(existingEmbed)
                .setAuthor(newServerName, newServerIconURL)
                .setThumbnail(newServerIconURL);
            
            await embedMessage.edit({ embeds: [newEmbed] });
            
            message.channel.send('Embed server information has been updated.');
        } catch (error) {
            console.error('Error updating embed server information:', error);
            message.channel.send('An error occurred while updating the embed server information.');
        }
    }
});




// ========================= Clear ========================== \\

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + 'مسح') ) {
    const args = message.content.split(' ')
    let amount = Number(args[1]) || 100

    const permission = message.member.permissions.has("MANAGE_MESSAGES");
    const me = message.guild.me.permissions.has("MANAGE_MESSAGES");
    if(!permission) return message.reply(":x: **You don't have permission to use this command**")
    if(!me) return message.reply("**:rolling_eyes: - I couldn't clear this channel. Please check my permissions.**")
    
    args[1] = args[1] ? parseInt(args[1]) : 100;        
    if(isNaN(args[1])) return message.reply({ content: `🙄 **Please provide valid number**` }).catch((err) => {
      console.log(err.message)
    });

    if (amount > 100) return message.reply(":rolling_eyes: **You can't delete more than __100__ messages**`").cache((err) => {
      console.log(err.message)
    });
    
    if (amount < 1) return message.reply(':rolling_eyes: **You need to delete at least __1__ messages**').catch((err) => {
      console.log(err.message)
    });

    message.delete().catch((err) => {
      console.log(err.message)
    });

    let messages = await message.channel.messages.fetch({ limit: amount  });
    messages = messages.filter(m => Date.now() - (new Date(m.createdTimestamp)).getTime() <= (14 * 24 * 60 * 60000));

    message.channel.bulkDelete(messages).then(() => {
      message.channel.send({content :`\`\`\`js
${messages.size} messages have been deleted.\`\`\``}).then((msg) => {
        setTimeout(() => {
          msg.delete().catch((err) => {
            console.log(err.message)
          })
        }, 5000);
      }).catch((err) => {
        console.log(err.message)
      })
    }).catch(err => console.log(err.message));
  } 
});

// ========================= Font ========================== \\

client.on("message", message => {
  if (message.content.startsWith(prefix + 'f')) {
    let font2 = message.content.split(" ").slice(1).join(" ");
    let font2_2 = font2.replace("a", "𝖺").replace("A", "𝖠").replace("b", "𝖻").replace("B", "𝖡").replace('c', "𝖼").replace("C", "𝖢").replace("d", "𝖽").replace("D", "𝖣").replace("e", "𝖾").replace("E", "𝖤").replace("f", "𝖿").replace("F", "𝖥").replace("g", "𝗀").replace("G", "𝖦").replace("h", "𝗁").replace("H", "𝖧").replace("i", "𝗂").replace("I", "𝖨").replace("j", "𝗃").replace("J", "𝖩").replace("k", "𝗄").replace("K", "𝖪").replace("l", "𝗅").replace("L", "𝖫").replace("m", "𝗆").replace("M", "𝖬").replace("n", "𝗇").replace("N", "𝖭").replace("o", "𝗈").replace("O", "𝖮").replace("p", "𝗉").replace("P", "𝖯").replace("q", "𝗊").replace("Q", "𝖰").replace("r", "𝗋").replace("R", "𝖱").replace("s", "𝗌").replace("S", "𝖲").replace("t", "𝗍").replace("T", "𝖳").replace("u", "𝗎").replace("U", "𝖴").replace("v", "𝗏").replace("V", "𝖵").replace("w", "𝗐").replace("W", "𝖶").replace("x", "𝗑").replace("X", "𝖷").replace("y", "𝗒").replace("Y", "𝖸").replace("z", "𝗓").replace("Z", "𝖹")
    if (!font2) return message.channel.send('Please Write a Word')
    message.channel.send(`${font2_2}`)
  }
});

// ========================= Auto Role ========================== \\

var { inviteTracker } = require("discord-inviter"),
tracker = new inviteTracker(client);
tracker.on('guildMemberAdd' , async(member, inviter, invite, error) => {
let AutoRole = "1158828661621928078"
  member.roles.add(AutoRole)
});




//const sourceChannelId = '1143207491501563954';
//const destinationChannelId = '1142639664491143269';
//${LineLink}

const sourceChannelId = '';
const destinationChannelId = '';


client.on('message', async (message) => {

  if (message.channel.id === sourceChannelId && !message.author.bot) {

    const content = `__**${message.content}**__\n\n**- <:1127202834669129778:1143892538994983027>𝐎𝐟𝐟𝐞𝐫 𝐒𝐞𝐧𝐝𝐞𝐫 : ${message.author}**\n**- <:1127202834669129778:1143892538994983027>𝐎𝐫𝐝𝐞𝐫 𝐓𝐢𝐜𝐤𝐞𝐭 : <#1142639626473967657>**\n**- <:1127202834669129778:1143892538994983027>𝐎𝐟𝐟𝐞𝐫 𝐌𝐞𝐧𝐭𝐢𝐨𝐧 : <@&1142638682784944198>**\n`;


  client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (AutoTaxChannel.includes(message.channel.id)) {
const AuEmbed = new MessageEmbed()
.setImage(`${LineLink}`)
.setColor("#fc0101")
      message.channel.send({ embeds: [AuEmbed] })
  }
});

    

    try {
      await message.delete();
    } catch (error) {
      console.error('Error deleting message:', error);
    }

    const destinationChannel = client.channels.cache.get(destinationChannelId);

    if (destinationChannel) {
      try {
        await destinationChannel.send(content);
      } catch (error) {
        console.error('Error sending message to destination channel:', error);
      }
    } else {
      console.error('Destination channel not found.');
    }
  }
});




const { AutoKill } = require('autokill')
AutoKill({Client: client, Time: 5000})


process.on("uncaughtException" , err => {
 console.log(err)
});

process.on("unhandledRejection" , err => {
 console.log(err)
});

process.on("rejectionHandled", err => {
 console.log(err)
});

client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'send')) {
      
 if(!message.member.permissions.has('MANAGE_MASSEGE')) return message.reply(`** 😕 You don't have permissions (MANAGE_MESSAGES) **`); 
      
let id = message.content.split(' ')[1]
      
let user = message.mentions.members.first() || message.guild.members.cache.get(id)
      
let argss = message.content.split(' ').slice(2).join(' ')
if (!user) return message.channel.send(`**👀 Please mention member or id **`)


if (!argss) return message.channel.send(`**❌ Please send something **`)

let attach = message.attachments.first()
if (attach) {


    user.send({content: argss, files: [attach]}).then(m => {
        message.channel.send(`**✅ Done message sent **`)
    }).catch(err => {
        return message.channel.send(`**❌ Can't send message to this user**`)
    })
} else {
    user.send(argss).then(m => {
        message.channel.send(`**✅ Done message sent **`)
    }).catch(err => {
        return message.channel.send(`**:❌ Can't send message to this user**`)
    })
      }
    }
})


client.on("messageCreate", async (message) =>{
  if(message.content === ".") {
    message.reply("<:kr8Gentlemen:1154260800333152306>")}
})
//client.on("messageCreate", async (message) =>{
 // if(message.content === "السلام عليكم") {
  //  message.reply("**وعليكم السلام ورحمة الله وبركاته منور 🤗**")}
//})
client.on('messageCreate', message => {
  if (message.content.startsWith('السلام عليكم')) {
    return message.reply(`\`-\`  عليكم السلام يابرو                 
\`-\` Welcome to : ${message.guild.name}`)
  }
});
client.on("messageCreate", async (message) =>{
  if(message.content === "هلا") {
    message.reply("**يا هلا وغلى**")}
})
client.on("messageCreate", async (message) =>{
  if(message.content === "باك") {
    message.reply("**ولكم باك 😎**")}
})
client.on("messageCreate", async (message) =>{
  if(message.content === "برب") {
    message.reply("**تيت لا تطول 😉**")}
})
client.on("messageCreate", async (message) =>{
  if(message.content === "وينكم") {
    message.reply("**يمكن مشغولين استنى شوي 😅**")}
})
client.on("messageCreate", async (message) =>{
  if(message.content === "البوت") {
    message.reply("**ماله البوت؟ 🙄**")}
})

client.on("messageCreate", message  =>  {
  var cmd = message .content.split(' ')[0]
  if(cmd == prefix + "avatar" || cmd == "A" || cmd == "a") {
    let user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]) || message.member;
    
      var embed = new MessageEmbed()
   .setTitle('Download avatar')
   .setURL(user.user.avatarURL({dynamic : true, size : 512 })) 
    .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        
.setImage((user.user.avatarURL({dynamic : true, size : 512 })))
        
.setColor(message.guild.me.displayHexColor)
       .setTimestamp()
.setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true}));
   message.reply({embeds: [embed]});
    }
}); 

const targetChannelId = '';



client.once('ready', () => {
  const targetChannel = client.channels.cache.get(targetChannelId);
  if (targetChannel && targetChannel.isVoice()) {
    const connection = joinVoiceChannel({
      channelId: targetChannel.id,
      guildId: targetChannel.guild.id,
      adapterCreator: targetChannel.guild.voiceAdapterCreator,
    });
  }
});

client.on('messageCreate', async(message) => {
  if(message.author.bot) return;
  if(message.content === "بلاغ") {
    message.delete()
    message.channel.send(`**\`-\` للتبليغ علي اداري  قم باملاء الاستماره حتي نستطيع تعويضك

صاحب البلاغ :
اسم السيلر فالديسكورد :
ايدي السيلر فالديسكورد :
القصه :
قم بارسال الدلائل مع دليل التحويل :
**`)
  }
  if(message.content === "مقبول") {
 message.delete()
message.channel.send(`**
>  مقبول 

>  شوف التحديث  <#${TeamTarget_Channel}> 

>  و القونين لعدم التصفيه و الرونات <#${TeamTarget_Channel}>  
>  نورتنا يا معلم

___________________________________________

>  Accepted 


>  Read The News<#${TeamTarget_Channel}> 

>  and Rules To avoid Warns Or kick from Team <#${TeamTarget_Channel}> 

>  You enlightened us, Sir
**`)
}
if(message.content === "ws"  ) {
    message.delete()
    message.channel.send(`
**انتظر اداري يا غالي ولو محدش رد عليك ف للاسف الطلب مش موجود حاليا وهنحاول نوفره ف اقرب وقت **
`)
}

  if(message.content === "مرفوض") {
 message.delete()
message.channel.send(`**
  مرفوض 
مرفوض طور من شغلك و قدم تاني
_______________________
Rejected

Rejected ; work and apply again
**`)
}
});
  

//let test = args.replaceAll("نيترو","نيتـ رو").replaceAll("فيزا","فيـ ـزا").replaceAll("كريدت","كريـ ـدت").replaceAll("كرديت","كريـ ـدت").replaceAll("كاش","كـ ـاش").replaceAll("ستيم","ستـ ـيم").replaceAll("سيرفر","سيرفـ ـر").replaceAll("ديسكورد","ديسـ ـكورد").replaceAll("حسابات","حسابـ ـات").replaceAll("اكونتات","اكـ ـونتات").replaceAll("بوستات","بوستـ ـات").replaceAll("تفعيل","تفـ ـعيل").replaceAll("نيتفليكس","نيتفلـ ـيكس").replaceAll("سبوتيفاي","سبوتـ ـيفاي").replaceAll("تيكتوك","تيكـ ـتوك").replaceAll("فيسبوك","فيسـ ـبوك").replaceAll("انستا","انسـ ـتا").replaceAll("توكنات","توكـ ـنات").replaceAll("فوتات","فوتـ ـات").replaceAll("بوتات","بوتـ ـات").replaceAll("كريبتو","كريبتـ ـو").replaceAll("عملات","عمـ ـلات").replaceAll("كود","كـ ـود").replaceAll("بوت","بـ وت").replaceAll("اكس بوكس","اكسـ ـبوكس").replaceAll("فيز","فيـ ـز").replaceAll("موجود","موجـ ـود").replaceAll("اكونت","اكـ ونـ ت").replaceAll("متوفر","مـتـ وفر").replaceAll("سعر","سـ ـعر").replaceAll("تيكت","تيـ ـكت").replaceAll("تكت","تـ كـ ـت").replaceAll("متابع","مـ ـتـابـع").replaceAll("حساب","حـ ـسـاب").replaceAll("بيع","بـ ـيع").replaceAll("اعضاء","اعـ ـضاء").replaceAll("اوتو","اوتـ ـو").replaceAll("اوفلاين","اوفـ ـلاين").replaceAll("اونلاين","اونـ ـلاين").replaceAll("تيك توك","تـ ـيك تـ ـوك") .replaceAll("وهمي","وهـ ـمي").replaceAll("استور","اسـ ـتور").replaceAll("شاهد","شـ ـاهـ ـد").replaceAll("نوع","نـ ـوع").replaceAll("شوب","شـ ـوب").replaceAll("تفاعل","تفـ ـاعـ ـل").replaceAll("لفل","لـ ـفـ ـل").replaceAll("ضمان","ضـ ـمان").replaceAll("محدوده","محـ ـدوده").replaceAll("فتره","فـ ـتره").replaceAll("ابدي","ابـ ـدي").replaceAll("سنه","سـ ـنه").replaceAll("شهر","شـ ـهر").replaceAll("شهور","شـ ـهور").replaceAll("اسبوع","اسـ ـبوع").replaceAll("انواع","انـ ـواع").replaceAll("انواع","انـ ـواع").replaceAll("جميع","جمـ ـيع").replaceAll("ديس","ديـ ـس").replaceAll("كوين","كويـ ـن").replaceAll("والت","والـ ـت") .replaceAll("سويت","سـ ـويـ ـت").replaceAll("اسعار","اسعـ ـار").replaceAll("ميمبر","ميـ ـمبر").replaceAll("ميوزك","ميـ ـوزك").replaceAll("برودكاست","برودكـ ـاسـ ـت").replaceAll("سيستم","سيـ ـستم").replaceAll("ميديا","ميديـ ـا") .replaceAll("خدمات","خدمـ ـات") .replaceAll("سوشيال","شوشـ ـيال").replaceAll("توكن","تـ ـوكن")

client.on("messageCreate", message => {

if(message.content === `سلطان`){
      message.reply(`**<@820375260590899251> <:123:1163175657015087134>

${message.author} 

      ســهــل تــتــعــلــم صــعــب تـبـقـا زي ســلــطـان**
      ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|||
       https://imgur.com/ODNPOx7`)

}
})

client.on("messageCreate", message => {

if(message.content === `يزن`){
      message.reply(`**<@798533323945148446> <:123:1163175657015087134>

${message.author} 

قُلتٓ ليِ انكَ تعشٰق النُجُوم لٓكننٰيِِ اتيت لكٓ بالكُون

      ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|||
      https://imgur.com/J4ws73K **`)
}
})

client.on("messageCreate", message => {

if(message.content === `سعداوي`){
      message.reply(`**<@776860475102330940> <:123:1163175657015087134>

${message.author} 

~~الوحده هيا شريك حياتك ويجب العيش  معه و علي اي وضع ولا تحزن من الاخرين لعدم ازعاج احزانك~~

      ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|||
      https://imgur.com/HyEI2Wp **`)
}
})


client.on("messageCreate", message => {

if(message.content === `عمر`){
      message.reply(`**<@605659678340284417> <:123:1163175657015087134>

${message.author} 
      
      سهل تبقا حراق صعب تبقا المشطشط**
||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|||
https://cdn.discordapp.com/attachments/1141894419679809606/1166514913569677362/AX_OMAR.gif?ex=654ac4ac&is=65384fac&hm=5449819ab039430f745facce6bccc6932ddd215671f56a708e62a4cde4ee9cb7&
`)
}
})

client.on('channelCreate' , async(message) => {
  if(message.parentId != ApplyCategory) return;
  setTimeout(() => {    
  message.send({ content: `> ** Click On The Button To Start Team Apply Submition ** 

  
> **برجاء الضغط علي البتن لبدئ التقديم الي طاقم العمل** 

 ملحوظه : لو مضغطتش علي البتن و كملت مع البوت محدش هيرد عليك
` , components: [
    new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setLabel("ابدا التقديم / Start Apply")
      .setStyle("DANGER")
      .setCustomId("hh")
    )
  ]})
     }, 2000);  
  client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "hh") {
      		const modal = new Modal()
			.setCustomId('myModal')
			.setTitle('Apply Team Submit');
		const rname = new TextInputComponent()
			.setCustomId('rname')
			.setLabel("اسمك الحقيقي ثلاثي")
			.setStyle('SHORT');

      		const age = new TextInputComponent()
			.setCustomId('age')
			.setLabel("عندك كام سنه")
			.setStyle('SHORT');

      		const svcount = new TextInputComponent()
			.setCustomId('svcount')
			.setLabel("شغال في كام سيرفر (اذكرهم) ")
			.setStyle('SHORT');

      		const fbcount = new TextInputComponent()
			.setCustomId('fb')
			.setLabel("معاك 20 فيدباك ")
			.setStyle('SHORT');

      		const roles = new TextInputComponent()
			.setCustomId('roles')
			.setLabel("الرولات الي بتقدم عليها")
			.setStyle('SHORT');
      
		const name = new MessageActionRow().addComponents(rname);
		const agge = new MessageActionRow().addComponents(age);
      const svvcount = new MessageActionRow().addComponents(svcount);
      const fbvcount = new MessageActionRow().addComponents(fbcount);
      const rovles = new MessageActionRow().addComponents(roles);
		// Add inputs to the modal
		modal.addComponents(name , agge,svvcount,fbvcount,rovles);
		// Show the modal to the user
		await interaction.showModal(modal);

        client.on('interactionCreate', async(interaction) => {
	if (!interaction.isModalSubmit()) return;

	if (interaction.customId === 'myModal') {
    
    const name = interaction.fields.getTextInputValue('rname');
    const rname = interaction.fields.getTextInputValue('age');
    const rrname = interaction.fields.getTextInputValue('svcount');
    const rrrname = interaction.fields.getTextInputValue('fb');
    const rrrrname = interaction.fields.getTextInputValue('roles');
await interaction.reply({ content: `معلومات عن الشخص المقدم علي الفريق اهي
____________________________________________________________________________
Information about the person submitted to the team`,embeds: [
      new MessageEmbed()
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setAuthor({ name: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true}) })
        .setFooter({ text: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true}) })
        .setTimestamp()
      .setDescription(`
\`\`\` New Apply Team Submition \`\`\`

> Team
Name : ${name} 

> Team Age: ${rname} 

> Team Servers Count He Work In : ${rrname} 

> Does He Have Feedback : ${rrrname} 

> Sell Roles : ${rrrrname} 
`)
  .setImage("https://media.discordapp.net/attachments/1113033971614363690/1113630933300555846/1685580541456.png?width=785&height=441")
  .setColor("#fc0101")
    ] });
    interaction.channel.send("> **Pls Wait Tester** \<@everyone>")
    
	}
});
    }
  })
})

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "inrole")) {
      let args = message.content.split(" ").slice(1).join(" ");
      if(message.author.bot) return;
      let trole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args)
       if (!trole) {
           return message.reply(`**:rolling_eyes: Please mention role id**`)
       } else {
           const roleMember = trole.members.map((user) => `<@${user.id}>`).join('\n')
    message.reply({embeds: [
     new MessageEmbed() 
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
      
.setThumbnail(message.author.avatarURL({dynamic:true}))
      .addFields([
    {
    name: `List of users in ${trole.name} role : (${trole.members.size})`,
    value: `**${roleMember}**`
},
])  
.setColor(message.guild.me.displayHexColor)
.setFooter(`Members in this role ${trole.members.size}`)]})
  }
  }
 }) 

//add-emoji

client.on('message', black =>{
  if (black.content.startsWith(prefix + 'ea')) {
     const args = black.content.split(' ').slice(1)
    if (!black.member.hasPermission('MANAGE_EMOJIS')) {
    return  black.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
        
        .setColor(color)
        
        .setTitle(`
> **You Dont Have a Permissions __Here__ \`MANAGE_EMOJIS\`**        
      `)
        .setFooter(black.author.tag, black.author.avatarURL({ dynamic: true }))
  .setTimestamp()

      )
    }

    if (!black.guild.me.hasPermission('MANAGE_EMOJIS')) {
        return black.lineReplyNoMention(`
        > **I Dont Have a Permissions \`MANAGE_EMOJIS\`**
        `);
    }

    const emoji = args.join("");
    if (!emoji) return black.lineReply(
      new Discord.MessageEmbed()

      .setColor(color)
      .setDescription(`
      > **Please Write a Emoji add to __Server__**
      `)
               .setThumbnail(black.guild.iconURL())
       .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
      .setTimestamp()
    )

    let the_typed_emoji = Discord.Util.parseEmoji(emoji);

    if (the_typed_emoji.id) {
        const link = `https://cdn.discordapp.com/emojis/${the_typed_emoji.id}.${
            the_typed_emoji.animated ? 'gif' : 'png'
        }`;
        const name = args.slice(1).join(' ');

        black.guild.emojis.create(`${link}`, `${name || `${the_typed_emoji.name}`}`);
        const done = new Discord.MessageEmbed()
        .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
            .setTitle(`
            > **Done addd a __Emoji__**
            `)
         
        
            .setColor(color)
            .setTimestamp()

                black.react(صح)
            
        return black.lineReplyNoMention(done);
    } else {
        let CheckEmoji = parse(emoji, { assetType: 'png' });
        if (!CheckEmoji[0])
            return black.lineReply('invalied emojiev');
        black.lineReply(`
        > **Please add Emoji Auhtor**

        > **من فضلكك قم باضافة ايموجي اخر**
        `);
}
}
})


client.on('guildMemberAdd', async member => {
  // Replace 'CHANNEL_ID_1', 'CHANNEL_ID_2', and 'CHANNEL_ID_3' with the actual channel IDs where you want to send the welcome messages
  const channel1 = member.guild.channels.cache.get('1155591153429778673');
  const channel2 = member.guild.channels.cache.get('');
  const channel3 = member.guild.channels.cache.get('');

  if (!channel1 || !channel2 || !channel3) return;

  try {
    // Send welcome messages with user mention
    const welcomeMessage1 = await channel1.send(`حط ريكاشن هنا يا معلم, ${member.user}!`);
    const welcomeMessage2 = await channel2.send(`خد رولاتك يا نجم  في روم, ${member.user}!`);
    const welcomeMessage3 = await channel3.send(`جيب واستلم فوري
, ${member.user}!`);
    
    // Delete welcome messages after 2 seconds
    setTimeout(() => {
      welcomeMessage1.delete();
      welcomeMessage2.delete();
      welcomeMessage3.delete();
    }, 3000);
  } catch (error) {
    console.error('Error sending welcome message:', error);
  }
});


const replace = [
  {
    word: "بيع",
    replace: "بي3"
  },
   {
    word: "بائع",
    replace: "بائ3"
  },
     {
    word: "سعر",
    replace: "س3ر"
  },
     {
    word: "شراء",
    replace: "شر!ء"
  },
     {
    word: "حساب",
    replace: "حـ$اب"
  },
     {
    word: "متوفر",
    replace: "مت9فر"
  },
     {
    word: "متجر",
    replace: "متـ$جر"
  },
     {
    word: "شوب",
    replace: "ش9ب"
  },
       {
    word: "ديسكورد",
    replace: "ديـ$كورد"
  },
       {
    word: "بوست",
    replace: "بـ9ست"
  },
       {
    word: "بوستات",
    replace: "بـ9ستات"
  },
     {
    word: "نيترو",
    replace: "نيتر9"
  },
       {
    word: "نيتروهات",
    replace: "نيتر9هات"
  },
       {
    word: "سيرفر",
    replace: "$يرفر"
  },
       {
    word: "سيرفرات",
    replace: "$يرفرات"
  },
     {
    word: "متوفر",
    replace: "متـ9فر"
  },
       {
    word: "توكن",
    replace: "تـ9كن"
  },
       {
    word: "توكنات",
    replace: "تـ9كنات"
  },
       {
    word: "عرض",
    replace: "3رض"
  },
       {
    word: "عروض",
    replace: "عر9ض"
  },
       {
    word: "السعر",
    replace: "الس3ر"
  },
       {
    word: "اونلاين",
    replace: "ا9نلاين"
  },
       {
    word: "اوفلاين",
    replace: "ا9فلاين"
  },
       {
    word: "اوتو",
    replace: "ا9تو"
  },
       {
    word: "فيزا",
    replace: "فيzا"
  },
       {
    word: "مطلوب",
    replace: "مطلـ9ب"
  },
         {
    word: "ضريبة",
    replace: "ضrيبة"
  },
         {
    word: "مدفوع",
    replace: "مدفو3"
  },
         {
    word: "دفع",
    replace: "دفـ3"
  },
         {
    word: "الضرائب",
    replace: "الضrائب"
  },
]


client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "تشفير")) {
  if(!message.member.permissions.has("ADMINISTRATOR")) return;
    const embed = new MessageEmbed()
    .setTitle("تشفير")
    .setDescription("**لتشفير منشورك قم بالضغط على الزر و ضع منشورك.**")
    .setThumbnail(message.guild.iconURL())
    
      const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("تشفير")
            .setCustomId('replace')
        )
    message.channel.send({embeds: [embed], components: [row]})
  }
})


client.on("interactionCreate", async i => {
  if (!i.isButton()) return;
  if (i.customId == "replace") {
            const modal = new Modal()
            .setTitle('تشفير')
            .setCustomId('rep')

   const replacer = new TextInputComponent()
            .setCustomId('replacetext')
            .setLabel(`قم بـ وضع منشورك هنا لتشفيره`)
            .setMaxLength(2000)
            .setRequired(true)
            .setStyle("PARAGRAPH")
    
       const rows = [replacer].map(
                (component) => new MessageActionRow().addComponents(component)
            )
            modal.addComponents(...rows);
            i.showModal(modal);
        
  }
  
})

client.on("interactionCreate", async i => {
  if (!i.isModalSubmit()) return;
  if (i.customId == "rep") {
let text = i.fields.getTextInputValue('replacetext');
    let replaced = false;

    replace.forEach(t => {
      const regex = new RegExp(t.word, 'g');
      if (regex.test(text)) {
        text = text.replace(regex, t.replace);
        replaced = true;
      }
    });


    if (replaced) {
i.reply({content: `\`المنشور بعد التشفير :\`\n\n ${text}`, ephemeral: true})
    } else {
      i.reply({content: "**منشورك لا يحتاج للتشفير**", ephemeral: true})
    }
  }
  
})
process.on("unhandledRejection", e => {
  console.log(e)
})



client.login(process.env.token);
/////
client.on('messageCreate', async message => {
 if(message.content === "!support") {
   if(!message.member.permissions.has('MANAGE_GUILD')) return;
   const Embed = new MessageEmbed()
     
 
   .setTitle('Ticket Support')
   .setDescription(`**R1 : Do not disturb with the mention
R2 : You are only allowed to mention once the vendor you need
R3 : Do not open a ticket for no reason, as this exposes you to 24-hour death

يمكنك فتح تذكرة طلب بائع من خلال الضغط علي الزر  

R1 : ممنوع الازعاج بالمنشن
R2 : يسمح لك فقط بمنشن مرة واحدة لـ البائع التي تحتاجة 
R3 : لاتقم بفتح تذكره بدون سبب فذلك يعرضك لـ ميوت 24ساعه **`)
                           .setImage(`https://cdn.discordapp.com/attachments/1001930659415208076/1171589528486678608/image.png?ex=655d3ac6&is=654ac5c6&hm=3c622daaccd1479c4ce6326c&`)
   .setFooter({text : message.guild.name, iconURL: message.guild.iconURL()})
   .setTimestamp()

   .setColor("#fc0101")
   const Row = new MessageActionRow()
   .addComponents(
      new MessageButton().setCustomId('CreateTicket').setLabel('Create Ticket').setEmoji(`<:emoji_8:1154043039401119774> `).setStyle('SECONDARY')
     )

   message.channel.send({ embeds: [Embed], components: [Row]})  
 }
})
const ProDatabase = require('pro.db')
client.on('interactionCreate', async Interaction => {
    if (Interaction.isButton()) {
        if(Interaction.customId === 'CreateTicket') {
          ProDatabase.add(`TicketCount_${Interaction.guild.id}`, 1)
            const TicketID = ProDatabase.get(`TicketCount_${Interaction.guild.id}`)
            const Id = TicketID.toString().padStart(4, 0);  
            Interaction.guild.channels.create(`ticket-${Id}`, {
                type: 'GUILD_TEXT',
                permissionOverwrites: [
                    {
                        id: Interaction.guild.roles.everyone.id,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: Interaction.user.id,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                    },
                    {
                        id: '1158828598279540886',
                        allow: ['SEND_MESSAGES','VIEW_CHANNEL']
                    }
                ],
                parent: '1158828918871179374'
              
            }).then((Channel) => {
                 Interaction.reply({ content: `Ticket Created ${Channel}`, ephemeral: true})
                 ProDatabase.set(`TICKETS_${Channel.id}`, {
                     CreatedBy: Interaction.user.id,
                     Count: Id
                 })
        const Embed = new MessageEmbed()
                    .setAuthor({ name: Interaction.user.tag, iconURL: Interaction.user.displayAvatarURL()})
                    .setDescription(`** R1: Do not disturb with the mention
R2:You are only allowed to mention once the vendor you need
R3: Do not open a ticket for no reason, as this exposes you to 24-hour death



R1 : ممنوع الازعاج بالمنشن
R2 : يسمح لك فقط بمنشن مرة واحدة لـ البائع التي تحتاجة 
R3 : لاتقم بفتح تذكره بدون سبب فذلك يعرضك لـ ميوت 24ساعه **`)
                    .setFooter({ text: Interaction.user.tag, iconURL: Interaction.user.displayAvatarURL()})
                    .setTimestamp()
                    .setColor("#fc0101")
          /*    const BTN_1 = new MessageButton() .setStyle(4) .setLabel('Yes') .setCustomId('YesClose')
            const BTN_2 = new MessageButton() .setStyle(2) .setLabel('No') .setCustomId('CancelClose')*/
                 .setImage(``)
           const BTN_3 = new MessageButton().setCustomId('CLOSE_TICKET').setLabel(`Close`).setEmoji('🔒').setStyle('SECONDARY')
            const Row = new MessageActionRow() .addComponents([ BTN_3])
              
       //         const Row = new MessageActionRow()
          //         .addComponents()
                Channel.send({ embeds: [Embed], components: [Row], content: `${Interaction.user} Welcome` })
            })
        }
    }
})


client.on('interactionCreate', async Interaction => {
  if (Interaction.isButton()) {
    if (Interaction.customId === 'CLOSE_TICKET') {
      const BTN_1 = new MessageButton().setStyle(4).setLabel('Close').setCustomId('YesClose')
      const BTN_2 = new MessageButton().setStyle(2).setLabel('Cancel').setCustomId('CancelClose')
      const Row = new MessageActionRow().addComponents([BTN_1, BTN_2])
      Interaction.reply({
        content: `**Are you sure you would like to close this ticket?
**`, components: [Row]
      })
    } else if (Interaction.customId === 'CancelClose') {
      await Interaction.deferUpdate().catch(() => { })
      Interaction.message.delete()
    } else if (Interaction.customId === 'YesClose') {
      await Interaction.deferUpdate().catch(() => { })
      const Embed = new MessageEmbed().setDescription(`\`Support team ticket controls\``)
      const Delete = new MessageButton().setStyle(2).setEmoji('⛔').setLabel('Delete').setCustomId('TICKET_DELETE')
      const Transcript = new MessageButton().setStyle(2).setEmoji('📑').setLabel('Transcript').setCustomId('TICKET_TRANSCRIPT')
      const Open = new MessageButton().setStyle(2).setEmoji('🔓').setLabel('Open').setCustomId('OPEN_TICKET_AGAIN')
      const Row = new MessageActionRow().addComponents([Delete, Transcript, Open])
      const Closed = new MessageEmbed().setColor('#fc0101').setDescription(`Ticket Closed by ${Interaction.user}`)
      const Closed2 = new MessageEmbed().setColor('#fc0101').setDescription(`\`\`\` Support team ticket controls\`\`\``)
      const BTN = new MessageButton().setCustomId('Delete').setLabel('Delete').setEmoji('⛔').setStyle('SECONDARY')
      const BTN2 = new MessageButton().setCustomId('Open').setLabel('Open').setEmoji('🔓').setStyle('SECONDARY')
      const Rowww = new MessageActionRow().addComponents([BTN, BTN2])

      Interaction.message.delete()
      Interaction.channel.send({ embeds: [Closed] })
      setTimeout(() => {
            Interaction.channel.send({ embeds: [Closed2], components: [Rowww] })
      }, 3000)
      console.log()
      Interaction.channel.setParent('1183439231209721906')
      const db = ProDatabase.get(`TICKETS_${Interaction.channel.id}`)
      Interaction.channel.setName(`closed-${db.Count}`)

  
    } else if (Interaction.customId === 'Delete') {
        await Interaction.deferUpdate().catch(() => {})
        const Delete = new MessageEmbed().setColor('#fc0101').setDescription(`Ticket Will Be Deleted In A Few Seconds`)
        Interaction.channel.send({ embeds: [Delete] })
        setTimeout(() => {
            Interaction.channel.delete()
        }, 4000)

      
    } else if (Interaction.customId === 'OPEN_TICKET_AGAIN') {
    const Open = new MessageEmbed().setColor('#fc0101').setDescription(`Ticket Opend by ${Interaction.user}`)
      Interaction.deferUpdate().catch(() => { })
      Interaction.message.delete()


      const db = ProDatabase.get(`TICKETS_${Interaction.channel.id}`)
      await Interaction.channel.permissionOverwrites.edit(db.CreatedBy, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      })
      Interaction.channel.setName(`ticket-${db.Count}`)
      Interaction.channel.send({ embeds: [Open] })
    }
  }
})

client.on('messageCreate', async Message => {
  if (!Message.content.startsWith('*')) return;
  const Cmd = Message.content.slice('*'.length).trim().split(/ +/g)
  const Command = Cmd.shift()
  const db = ProDatabase.get(`TICKETS_${Message.channel.id}`)
  switch (Command) {
    case 'delete': {
      if (!db) return Message.channel.send({ content: '🤔 - This isn\'t a ticket' })
      const Embed = new MessageEmbed()
        .setColor('RED')
        .setDescription('Ticket will be deleted in a few seconds')
      Message.channel.send({ embeds: [Embed] })
      ProDatabase.delete(`TICKETS_${Message.channel.id}`)
      setTimeout(() => {
        Message.channel.delete()
      })
    }
      break;
    case 'open': {
      const Open = new MessageEmbed().setColor('#fc0101').setDescription(`Ticket Opend by ${Message.author}`)
      const db = ProDatabase.get(`TICKETS_${Message.channel.id}`)
      if (!db) return Message.channel.send({ content: '🤔 - This isn\'t a ticket' })
      await Message.channel.permissionOverwrites.edit(db.CreatedBy, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      })
      Message.channel.setName(`ticket-${db.Count}`)
      Message.channel.send({ embeds: [Open] })
    }
      break;
    case 'close': {
      const db = ProDatabase.get(`TICKETS_${Message.channel.id}`)
      if (!db) return Message.channel.send({ content: '🤔 - This isn\'t a ticket' })
      const Embed = new MessageEmbed().setDescription(`\`Support team ticket controls\``)
      const Delete = new MessageButton().setStyle(2).setEmoji('⛔').setLabel('Delete').setCustomId('TICKET_DELETE')
      const Open = new MessageButton().setStyle(2).setEmoji('🔓').setLabel('Open').setCustomId('OPEN_TICKET_AGAIN')
      const Row = new MessageActionRow().addComponents([Delete, Open])
      const Closed = new MessageEmbed().setColor('#fc0101').setDescription(`Ticket Closed by ${Message.author}`)
      const Closed2 = new MessageEmbed().setColor('#fc0101').setDescription(`\`\`\` Support team ticket controls \`\`\`
`)
      const BTN = new MessageButton().setCustomId('Delete').setLabel('Delete').setEmoji('⛔').setStyle('SECONDARY')
      const BTN2 = new MessageButton().setCustomId('Open').setLabel('Open').setEmoji('🔓').setStyle('SECONDARY')
      const Rowww = new MessageActionRow().addComponents([BTN, BTN2])

      Message.channel.send({ embeds: [Closed] })
      setTimeout(() => {
            Message.channel.send({ embeds: [Closed2], components: [Rowww] })
      }, 3000)
      Message.channel.setParent('1183439231209721906')
      Message.channel.setName(`closed-${db.Count}`)
    }
  }
})
client.setMaxListeners(100000000000000)


///////////////////////
client.on('guildMemberAdd', member => {
    let guild = client.guilds.cache.get("989102566430375966");
    let asar1 = client.channels.cache.find(ch => ch.id === '1158839273588531240')
     let membercount = guild.members.cache.size;
     asar1.send(`** نورت يغالي ${member}**`).then(msg => msg.delete({timeout:5000}));
     
});

///////////////////////////////////////
client.on('messageCreate', async (message) => {
  if (message.content === '!sRR') {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('button1')
          .setLabel('𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝')
          .setStyle('PRIMARY')
      );

    const embed = new MessageEmbed()
    .setIamage(`https://cdn.discordapp.com/attachments/1159362498034667610/1163213623250923561/New_Project_61B8218.png?ex=653ec21b&is=652c4d1b&hm=66263fa3221bf76d965cd80a8b4c17d5c767e4354fa7e420ab7a954a2b5ebf6f&`);

    await message.channel.send({ embeds:[embed], components: [row] });
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  const { guild } = interaction;
  const member = guild.members.cache.get(interaction.user.id);
  const role = guild.roles.cache.find((role) => role.id === '1161751247695654922');

  if (interaction.customId === 'button1') {
    member.roles.add(role);
    await interaction.reply({ content: 'تم تفعيلك نورت يغالي', ephemeral: true });
      }
});

///////////////////////////
client.on('messageCreate', async message => {
  if (message.content.startsWith("!help")) {
    const embed = new MessageEmbed()
      .setColor('#6078e4')
      .setDescription(`> ・𝐍𝐀𝐌𝐄 : 𝐀𝐗𝐋𝐎 𝐇𝐎𝐒𝐓

> ・𝐇𝐞𝐥𝐥𝐨 : ${message.author} 

> ・𝐈'𝐦 𝐢𝐧 𝐚 𝐒𝐞𝐫𝐯𝐞𝐫 : ${client.guilds.cache.size}

> ・𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠 𝐨𝐮𝐫 𝐛𝐨𝐭

> ・𝐓𝐨 𝐬𝐡𝐨𝐰 𝐚𝐥𝐥 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬, 𝐩𝐫𝐞𝐬𝐬 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬`)
      .setTimestamp()
      .setImage(`https://cdn.discordapp.com/attachments/1113033971614363690/1161732565925888040/New_Project_61B8218.png?ex=65429943&is=65302443&hm=9e14f2ba63adf20076cc20b1&`)
      .setFooter(`By  : ${message.author.username}`, message.author.displayAvatarURL())


    const rowo = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Select Menu')
          .addOptions([
            {
              label: 'Music',
              description: 'Music Command',
              emoji: '',
              value: 'a',
            },
          ]),
      );


    message.channel.send({ embeds: [embed], components: [rowo] })
  }
})

client.on('interactionCreate', async Interaction => {
  if (Interaction.values == 'a') {
    const ad1 = new MessageEmbed()
      .setColor('#6078e4')
      .setDescription(`** > ・!247 ・!autoplay ・!join ・!jump ・!leave ・!repeat 

> ・!lyrics ・!nowplaying ・!pause ・!play ・!previous

>   ・!queue ・!resume ・!search ・!seek・!shuffle

> ・!skip   ・!stop   ・!volume **



 `)
      .setFooter(`By  : ${Interaction.user.username}`, Interaction.user.displayAvatarURL())
.setImage(`https://cdn.discordapp.com/attachments/1113033971614363690/1161732565925888040/New_Project_61B8218.png?ex=65429943&is=65302443&hm=9e14f2ba63adf20076cc20b1&`)
    Interaction.reply({ embeds: [ad1], ephemeral: true })
  }
})

//////////////////////
client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "wn")) {
        if (!message.member.permissions.has("MUTE_MEMBERS")) return message.channel.send("لا تمتلك الصلاحيات اللازمة لاستخدام هذا الأمر.");
        let args = message.content.split(" ").slice(1);

        var user = message.mentions.users.first();
        var reason = args.slice(1).join(' ');

        if (!user) {
            return message.channel.send("الرجاء منشن شخص لإعطائه تحذير.");
        }
        if (!reason) {
            return message.channel.send("الرجاء تحديد سبب لإعطاء التحذير.");
        }

        const embed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("تحذير")
            .setDescription(`تم إعطاء تحذير للعضو ${user.tag}`)
            .addField("السبب", reason)
            .setTimestamp();

        message.channel.send({ embeds: [embed] }).then(msg => {
            msg.delete({ timeout: 5000 });
        });

        const userEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("تم إعطائك تحذير")
            .setDescription(`تم إعطائك تحذير في السيرفر ${message.guild.name}`)
            .addField("السبب", reason)
            .setTimestamp();

        user.send({ embeds: [userEmbed] });
    }
});