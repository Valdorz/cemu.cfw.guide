"use strict";(self.webpackChunkcemu_cfw_guide=self.webpackChunkcemu_cfw_guide||[]).push([[991],{2820:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-68621c62",path:"/using-async-(old).html",title:"Using Async",lang:"en-US",frontmatter:{title:"Using Async",description:"Enabling asynchronous shader compilation for a smoother gameplay experience."},excerpt:"",headers:[{level:2,title:"Downloads",slug:"downloads",children:[]},{level:2,title:"Instructions",slug:"instructions",children:[]}],filePathRelative:"using-async-(old).md",git:{updatedTime:1635094397e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},2297:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var i=a(6252);const n=(0,i.uE)('<p>Asynchronous shader compilation is a feature that, with the Vulkan rendering API, will enable Cemu to compile shaders and pipelines in the background.</p><p>This means that, rather than halting the game to wait for the shader or pipeline to compile, the shader or pipeline is skipped while Cemu waits for it to compile.</p><p>It&#39;s a popular feature, as it reduces stuttering on first playthrough. However, as they&#39;re compiled in the background, they won&#39;t appear until they&#39;re called again, causing temporary graphical issues.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This feature is still experimental and may cause other graphical issues and instabilities.</p></div><p><img src="/assets/images/async.gif" alt=""></p><p><em>Asynchronous shader compilation in Cemu as of 1.19.2b</em></p><p>To continue, we need to know what GPU your system is using. If you don&#39;t know what type of graphics processor you have, open the Settings app on Windows 10. Then navigate to <code>System</code> -&gt; <code>Display</code> -&gt; <code>Advanced display settings</code>.</p><p>Under your display name, it should say <code>Display #: Connected to [GPU]</code>. This should start with Intel, AMD or NVIDIA. That will tell you what brand of GPU you have.</p><p><img src="{/assets/images/get_gpu.png" alt=""></p><p>Before enabling async, we need to first download new drivers that support Vulkan 1.2 features. This is already included with the latest AMD and NVIDIA GPU drivers.</p><p>For Intel iGPUs, a beta driver may be required to be installed. You must have a 6th gen iGPU or later to use Async.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Be aware that beta drivers can cause issues. If you are experiencing issues on a beta driver, please revert to the latest stable driver.</p></div><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2>',13),o=(0,i.Uk)("The latest available Vulkan 1.2-supported Driver "),s={href:"https://www.nvidia.com/Download/index.aspx",target:"_blank",rel:"noopener noreferrer"},r=(0,i.Uk)("Latest Nvidia Drivers"),l={href:"https://www.amd.com/en/support",target:"_blank",rel:"noopener noreferrer"},d=(0,i.Uk)("Latest AMD Drivers"),c={href:"https://downloadcenter.intel.com/product/80939/Graphics",target:"_blank",rel:"noopener noreferrer"},p=(0,i.Uk)("Intel iGPU Drivers - 6th Gen or Newer"),u=(0,i.uE)('<p>Async on Intel may or may not be fully supported by the driver and may result in more problems on Cemu than not using Async. Please make sure you install a proper driver for your Intel GPU as supported by your GPU and by your OS, especially if you&#39;re using a Laptop with a Dual Graphics design.</p><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2><ol><li>Download and install the relevant driver</li><li>Restart your PC</li><li>Open the Cemu emulator</li><li>On the top bar, click <code>Options</code> -&gt; <code>General Settings</code></li><li>Navigate to the <code>Graphics</code> tab</li><li>Change <code>Graphics API</code> to <code>Vulkan</code></li><li>Change <code>Graphics Device</code> to your primary GPU</li><li>Exit the settings and return to the Cemu games list</li><li>On the top bar, click <code>Debug</code> -&gt; <code>Experimental</code></li><li>Enable <code>Async compile (Vulkan)</code></li></ol><p>Cemu should now start compiling shaders and pipelines asynchronously. If you have downloaded new drivers or update Cemu, you will have to recompile all pipelines while playing again.</p>',4),h={},m=(0,a(3744).Z)(h,[["render",function(e,t){const a=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("ul",null,[(0,i._)("li",null,[o,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",s,[r,(0,i.Wm)(a)])]),(0,i._)("li",null,[(0,i._)("a",l,[d,(0,i.Wm)(a)])]),(0,i._)("li",null,[(0,i._)("a",c,[p,(0,i.Wm)(a)])])])])]),u],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,i]of t)a[e]=i;return a}}}]);