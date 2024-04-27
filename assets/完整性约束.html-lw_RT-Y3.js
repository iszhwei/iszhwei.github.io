import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o,c as r,d as s,e as a,f as c,w as t,a as p}from"./app-9OmaxHRC.js";const i="/assets/image-20240417153139412-_K5zbEPn.png",d="/assets/image-20240406214640176-S0I0l9HT.png",B={},y=p('<h1 id="mysql完整性约束" tabindex="-1"><a class="header-anchor" href="#mysql完整性约束" aria-hidden="true">#</a> MySQL完整性约束</h1><h2 id="主键约束" tabindex="-1"><a class="header-anchor" href="#主键约束" aria-hidden="true">#</a> 主键约束</h2><p><code>primary key</code>不能重复；不能为空；能唯一标识一条记录</p><h2 id="自增键约束" tabindex="-1"><a class="header-anchor" href="#自增键约束" aria-hidden="true">#</a> 自增键约束</h2><p><code>auto_increment</code>，不能用于字符串</p><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="唯一键约束" tabindex="-1"><a class="header-anchor" href="#唯一键约束" aria-hidden="true">#</a> 唯一键约束</h2><p><code>unique</code>保证索引不重复-唯一索引；可以为空；可以用<code>not null</code>约束；<code>default</code> 设置默认值</p><h2 id="非空约束" tabindex="-1"><a class="header-anchor" href="#非空约束" aria-hidden="true">#</a> 非空约束</h2><p><code>not null</code></p><h2 id="默认值约束" tabindex="-1"><a class="header-anchor" href="#默认值约束" aria-hidden="true">#</a> 默认值约束</h2><p><code>default</code></p><h2 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束" aria-hidden="true">#</a> 外键约束</h2><p><code>foreign key</code>另一个表的主键；可以重复；可以为空</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">table</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">user</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">	id </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">primary key</span><span style="color:#ABB2BF;"> auto_increment comment </span><span style="color:#98C379;">&#39;主键索引&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	nickname </span><span style="color:#C678DD;">varchar</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">50</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">unique</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">not null</span><span style="color:#ABB2BF;"> comment </span><span style="color:#98C379;">&#39;昵称&#39;</span><span style="color:#ABB2BF;">，</span></span>
<span class="line"><span style="color:#ABB2BF;">	age </span><span style="color:#C678DD;">tinyint</span><span style="color:#ABB2BF;"> unsigned </span><span style="color:#C678DD;">not null</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">18</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">	sex enum(</span><span style="color:#98C379;">&#39;male&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;female&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="image-20240406214640176" tabindex="0" loading="lazy"><figcaption>image-20240406214640176</figcaption></figure>',16),h=s("strong",null,"外键、存储函数、存储过程、触发器...",-1);function u(m,f){const e=l("font");return o(),r("div",null,[y,s("p",null,[a("现代的后端开发中 "),h,a(),s("u",null,[a("这些限制逻辑或者代码逻辑是由MySQL本身控制的，现在性能瓶颈在于存储层逻辑，所以主要核心CRUD由MySQL做，其他的"),c(e,{color:"red"},{default:t(()=>[a("各个表之间的关联关系以及一些相关性的操作都放到服务层的业务代码上")]),_:1}),a("，减少MySQL的压力")])])])}const A=n(B,[["render",u],["__file","完整性约束.html.vue"]]);export{A as default};
