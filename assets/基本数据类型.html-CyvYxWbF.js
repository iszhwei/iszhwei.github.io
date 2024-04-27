import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as p,d as s,e as a,f as l,w as e,a as o}from"./app-9OmaxHRC.js";const i="/assets/image-20240406204529908-PeoQ4W0j.png",d="/assets/image-20240406204601492-OiSnU7Kc.png",B="/assets/image-20240406204703570-wa_un3vW.png",h={},u=o('<h1 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h1><h2 id="数值类型" tabindex="-1"><a class="header-anchor" href="#数值类型" aria-hidden="true">#</a> 数值类型</h2><figure><img src="'+i+'" alt="image-20240406204529908" tabindex="0" loading="lazy"><figcaption>image-20240406204529908</figcaption></figure><h3 id="选取适当的数据类型" tabindex="-1"><a class="header-anchor" href="#选取适当的数据类型" aria-hidden="true">#</a> 选取适当的数据类型</h3><ul><li>比如age TINYINT; 不要写成age int</li></ul><h3 id="选数据类型两个原则" tabindex="-1"><a class="header-anchor" href="#选数据类型两个原则" aria-hidden="true">#</a> 选数据类型两个原则</h3><ul><li>是否越界 （text类型评论发送不了全文）</li><li>精度是否足够（float 7; double 15）</li></ul><h3 id="int-7-什么意思" tabindex="-1"><a class="header-anchor" href="#int-7-什么意思" aria-hidden="true">#</a> INT(7) 什么意思</h3><p>int底层内存存储的数据大小固定不变（INT 类型总是占用 4 个字节的存储空间，无论括号中的数字是多少），<strong>括号内数字是一个显示时显示的宽度</strong>；即，与显示和格式化有关，与数据的实际存储或值域无关</p><h2 id="字符串类型" tabindex="-1"><a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a> 字符串类型</h2><figure><img src="'+d+'" alt="image-20240406204601492" tabindex="0" loading="lazy"><figcaption>image-20240406204601492</figcaption></figure><ul><li><p>字符串使用<strong>单引号</strong><code>&#39;name&#39;</code></p></li><li><p>varchar使用的时候要指定大小，如varchar(50)</p></li></ul><h3 id="varchar与char的区别" tabindex="-1"><a class="header-anchor" href="#varchar与char的区别" aria-hidden="true">#</a> varchar与char的区别：</h3>',13),y=s("li",null,[s("p",null,[a("首先明确的是，char的长度是不可变的，而varchar的"),s("strong",null,"长度是可变的"),a("。")])],-1),m=s("strong",null,"后面跟六个空格",-1),_=s("strong",null,"varchar就立马把长度变为4",-1),v=s("strong",null,"取数据的时候，char类型的要用trim()去掉多余的空格，而varchar是不需要的",-1),g=s("strong",null,"char的存取数度",-1),A=s("strong",null,"快",-1),F=s("u",null,[a("因为其长度固定，方便程序的存储与查找；但是char也为此付出的是空间的代价，因为其长度固定，所以难免会有多余的空格占位符占据空间，可谓是以空间换取"),s("strong",null,"时间效率"),a("，而varchar是以"),s("strong",null,"空间效率"),a("为首位的")],-1),b=s("strong",null,"对英文字符（ASCII）占用1个字节，对一个汉字占用两个字节",-1),f=s("strong",null,"对每个英文字符占用2个字节，汉字也占用2个字节",-1),D=s("h2",{id:"日期和时间类型",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#日期和时间类型","aria-hidden":"true"},"#"),a(" 日期和时间类型")],-1),C=s("figure",null,[s("img",{src:B,alt:"image-20240406204703570",tabindex:"0",loading:"lazy"}),s("figcaption",null,"image-20240406204703570")],-1),x=s("p",null,[s("code",null,"select unix_timestamp(now());"),a("距离1970-1-1的秒数")],-1),k=o(`<h2 id="enum和set" tabindex="-1"><a class="header-anchor" href="#enum和set" aria-hidden="true">#</a> enum和set</h2><p>enum枚举只能取其中一个数据类型</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">table</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">students</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">	id </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">auto</span><span style="color:#ABB2BF;"> increment </span><span style="color:#C678DD;">primary key</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">varchar</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">	gender enum(</span><span style="color:#98C379;">&#39;male&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;female&#39;</span><span style="color:#ABB2BF;">)	#字符串用单引号</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> students(</span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">, gender) </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;zhangsan&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;male&#39;</span><span style="color:#ABB2BF;">),(</span><span style="color:#98C379;">&#39;lisi&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;female&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">creata </span><span style="color:#C678DD;">table</span><span style="color:#ABB2BF;"> orders(</span></span>
<span class="line"><span style="color:#ABB2BF;">	id </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> auto_increment </span><span style="color:#C678DD;">primary</span><span style="color:#ABB2BF;"> ket,</span></span>
<span class="line"><span style="color:#ABB2BF;">	product_name </span><span style="color:#C678DD;">varchar</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">	payment_methods </span><span style="color:#C678DD;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;cash&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;credit card&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;debit card&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">insert into</span><span style="color:#ABB2BF;"> orders(product_name, payment_methods) </span><span style="color:#C678DD;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;book&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;credit card, cash&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function N(I,T){const n=t("font");return c(),p("div",null,[u,s("ol",null,[y,s("li",null,[s("p",null,[a("定义一个char[10]和varchar[10],如果存进去的是‘abcd’,那么char所占的长度依然为10，除了字符‘abcd’外，"),m,a("，而"),_,a("了；"),l(n,{color:"red"},{default:e(()=>[v]),_:1}),a("。")])]),s("li",null,[s("p",null,[g,a("还是要比varchar要"),l(n,{color:"red"},{default:e(()=>[A]),_:1}),a("得多，"),F,a("。")])]),s("li",null,[s("p",null,[a("char的存储方式是，"),b,a("；而varchar的存储方式是，"),f,a("，"),s("strong",null,[l(n,{color:"red"},{default:e(()=>[a("两者的存储数据都非unicode的字符数据")]),_:1})]),a("。")])])]),D,C,x,s("p",null,[s("mark",null,[l(n,{color:"red"},{default:e(()=>[a("现在后端瓶颈在于磁盘IO,所以一般操作都是在server层完成，mysql尽量制作CRUD")]),_:1})])]),k])}const V=r(h,[["render",N],["__file","基本数据类型.html.vue"]]);export{V as default};
