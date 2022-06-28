"use strict";(self.webpackChunkcemu_cfw_guide=self.webpackChunkcemu_cfw_guide||[]).push([[13],{9923:(e,l,o)=>{o.r(l),o.d(l,{data:()=>i});const i={key:"v-2b37436f",path:"/ftp/dumping-games/physical.html",title:"Dumping Games (disc2app)",lang:"en-US",frontmatter:{title:"Dumping Games (disc2app)"},excerpt:"",headers:[{level:2,title:"Introduction",slug:"introduction",children:[]},{level:2,title:"Requirements",slug:"requirements",children:[]},{level:2,title:"Downloads",slug:"downloads",children:[]},{level:2,title:"Preparations",slug:"preparations",children:[]},{level:2,title:"Launching MochaCFW",slug:"launching-mochacfw",children:[]},{level:2,title:"Dumping",slug:"dumping",children:[]},{level:2,title:"Decrypting",slug:"decrypting",children:[]}],filePathRelative:"ftp/dumping-games/physical.md",git:{updatedTime:1635094397e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},2632:(e,l,o)=>{o.r(l),o.d(l,{default:()=>A});var i=o(6252);const r=(0,i.uE)('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>For this method, we will be dumping a physical disc game to an SD card or USB storage device. This can take some time.</p><p>After dumping, we copy the game over to the PC. Unfortunately, all Wii U disc images are encrypted, which means we need to decrypt them on our PC.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><ul><li>An SD card for homebrew and dumping</li><li>(Optional) A USB storage device to dump the game to <ul><li>Only required if the game is too big for the SD card</li><li>Wii U games can vary in size up to 17GB, but having 12GB of storage should be okay for most games</li></ul></li></ul><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2>',6),t=(0,i.Uk)("The latest release of "),a={href:"https://www.wiiubru.com/appstore/zips/mocha.zip",target:"_blank",rel:"noopener noreferrer"},n=(0,i.Uk)("MochaCFW"),d=(0,i._)("ul",null,[(0,i._)("li",null,"This will also work with (Coldboot) Haxchi")],-1),u=(0,i._)("li",null,[(0,i.Uk)("The Mocha "),(0,i._)("a",{href:"/assets/files/config.ini"},"config")],-1),c=(0,i.Uk)("The latest release of "),s={href:"https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest",target:"_blank",rel:"noopener noreferrer"},h=(0,i.Uk)("Homebrew Launcher Installer"),p=(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Uk)("You will need to download the "),(0,i._)("code",null,"payload.zip"),(0,i.Uk)(" file")])],-1),m=(0,i.Uk)("The v1.4 release of "),f={href:"https://github.com/dimok789/homebrew_launcher/releases/tag/1.4",target:"_blank",rel:"noopener noreferrer"},g=(0,i.Uk)("The Homebrew Launcher"),y=(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Uk)("You will need to download the v1.4 "),(0,i._)("code",null,"homebrew_launcher.v1.4.zip"),(0,i.Uk)(" release of The Homebrew Launcher")])],-1),_=(0,i.Uk)("The latest release of "),w={href:"https://github.com/koolkdev/disc2app/releases/latest",target:"_blank",rel:"noopener noreferrer"},b=(0,i.Uk)("disc2app"),k=(0,i._)("li",null,[(0,i._)("a",{href:"/assets/files/Cdecrypt_v2.0b.zip"},"Cdecrypt v2.0b")],-1),U=(0,i.uE)('<h2 id="preparations" tabindex="-1"><a class="header-anchor" href="#preparations" aria-hidden="true">#</a> Preparations</h2><ol><li>Extract the <code>mocha.zip</code> file to the root of your SD card <ul><li>If prompted to, replace any pre-existing files</li></ul></li><li>Extract the <code>homebrew_launcher.v.1.4.zip</code> file to the root of your SD card</li><li>Copy the <code>config.ini</code> file to the <code>/wiiu/apps/mocha</code> folder on your SD card</li><li>Copy the <code>payload.elf</code> file from the <code>payload.zip</code> file to the <code>/wiiu</code> folder on your SD card</li><li>Extract the disc2app <code>.zip</code> file to the root of your Wii U&#39;s SD card</li><li>Double check that you have enough storage space for your game <ul><li>The maximum game size is around 17GB although few games are actually that large</li></ul></li><li>Eject your SD card from Windows and put it into your Wii U console</li><li>Insert your USB storage if you are using one to dump to</li></ol><h2 id="launching-mochacfw" tabindex="-1"><a class="header-anchor" href="#launching-mochacfw" aria-hidden="true">#</a> Launching MochaCFW</h2>',3),v=(0,i._)("li",null,"Turn on your Wii U console",-1),D=(0,i._)("li",null,[(0,i.Uk)("Launch the internet browser and open "),(0,i._)("code",null,"wiiuexploit.xyz")],-1),T=(0,i.Uk)("Tap "),S=(0,i._)("code",null,"Run Homebrew Launcher!",-1),x=(0,i._)("li",null,"If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot",-1),W=(0,i.Uk)("Once rebooted, "),C={href:"https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history",target:"_blank",rel:"noopener noreferrer"},z=(0,i.Uk)("reset the browser's save data"),B=(0,i.Uk)(" and try again"),I=(0,i._)("li",null,[(0,i.Uk)("Once in the Homebrew Launcher, launch MochaCFW "),(0,i._)("ul",null,[(0,i._)("li",null,"This should return you back to the Homebrew Launcher")])],-1),E=(0,i._)("h2",{id:"dumping",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#dumping","aria-hidden":"true"},"#"),(0,i.Uk)(" Dumping")],-1),L=(0,i.uE)("<li>Power on your Wii U console</li><li>Ensure your target game disc is <strong>not</strong> inserted in your Wii U</li><li>Open the Homebrew Channel</li><li>Run <code>disc2app</code></li><li>Press <strong>(A)</strong> to dump to the SD card, or <strong>(B)</strong> to dump to your USB storage</li><li>Insert the game disc you&#39;d like to dump when prompted</li><li>The game will now be dumped to <code>\\install\\[TitleID]</code> on your SD/USB device <ul><li>This may take a long time, be patient</li><li>TitleID will be a 16-character string of numbers and letters</li></ul></li><li>Once finished, exit the application and turn off your console</li><li>Remove your SD or USB device from your Wii U and insert it to your computer</li>",9),H=(0,i.Uk)("Copy the "),O=(0,i._)("code",null,"\\install\\[TitleID]",-1),P=(0,i.Uk)(" folder from your SD or USB device to your Cemu games folder "),q=(0,i.Uk)("You can identify your TitleID with the "),R={href:"http://wiiubrew.org/wiki/Title_database#00050000:_eShop_and_disc_titles",target:"_blank",rel:"noopener noreferrer"},F=(0,i.Uk)("Title Database"),G=(0,i.uE)('<h2 id="decrypting" tabindex="-1"><a class="header-anchor" href="#decrypting" aria-hidden="true">#</a> Decrypting</h2><ol><li>Extract the Cdecrypt <code>.zip</code> file to your dumped game folder <ul><li>Not the Cemu games folder, but in the folder you just copied</li></ul></li><li>Double click the decrypt <code>.bat</code> file <ul><li>This may appear as just <code>decrypt</code> if you have file extensions disabled</li></ul></li><li>Once done, you can delete all files and folders in the directory except for the <code>code</code>, <code>content</code> and <code>meta</code> folders</li></ol>',2),M={},A=(0,o(3744).Z)(M,[["render",function(e,l){const o=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("ul",null,[(0,i._)("li",null,[t,(0,i._)("a",a,[n,(0,i.Wm)(o)]),d]),u,(0,i._)("li",null,[c,(0,i._)("a",s,[h,(0,i.Wm)(o)]),p]),(0,i._)("li",null,[m,(0,i._)("a",f,[g,(0,i.Wm)(o)]),y]),(0,i._)("li",null,[_,(0,i._)("a",w,[b,(0,i.Wm)(o)])]),k]),U,(0,i._)("ol",null,[v,D,(0,i._)("li",null,[T,S,(0,i._)("ul",null,[x,(0,i._)("li",null,[W,(0,i._)("a",C,[z,(0,i.Wm)(o)]),B])])]),I]),E,(0,i._)("ol",null,[L,(0,i._)("li",null,[H,O,P,(0,i._)("ul",null,[(0,i._)("li",null,[q,(0,i._)("a",R,[F,(0,i.Wm)(o)])])])])]),G],64)}]])},3744:(e,l)=>{l.Z=(e,l)=>{const o=e.__vccOpts||e;for(const[e,i]of l)o[e]=i;return o}}}]);