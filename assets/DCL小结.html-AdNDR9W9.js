import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,a as l}from"./app-9OmaxHRC.js";const e={},p=l(`<h1 id="dcl语句小结" tabindex="-1"><a class="header-anchor" href="#dcl语句小结" aria-hidden="true">#</a> DCL语句小结</h1><h2 id="_1-授予权限grant" tabindex="-1"><a class="header-anchor" href="#_1-授予权限grant" aria-hidden="true">#</a> (1)授予权限grant</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">grant</span><span style="color:#ABB2BF;"> 权限 </span><span style="color:#C678DD;">on</span><span style="color:#ABB2BF;"> 库名.* </span><span style="color:#C678DD;">to</span><span style="color:#ABB2BF;"> “用户名”；</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;">//查询权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">update</span><span style="color:#ABB2BF;">//修改权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">insert</span><span style="color:#ABB2BF;">//插入权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;">//删除权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;">//创建数据库、表的权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">drop</span><span style="color:#ABB2BF;">//删除数据库、表的权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     all//所有权限</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-回收权限revoke" tabindex="-1"><a class="header-anchor" href="#_2-回收权限revoke" aria-hidden="true">#</a> (2)回收权限revoke：</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">revoke</span><span style="color:#ABB2BF;"> 权限 </span><span style="color:#C678DD;">on</span><span style="color:#ABB2BF;"> 库名.* </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> “用户名”；//权限回收不能越级，也不能反祖。</span></span>
<span class="line"><span style="color:#ABB2BF;">     							//也可以授予多个权限只回收部分权限。</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;">//查询权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">update</span><span style="color:#ABB2BF;">//修改权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">insert</span><span style="color:#ABB2BF;">//插入权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;">//删除权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;">//创建数据库、表的权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">drop</span><span style="color:#ABB2BF;">//删除数据库、表的权限</span></span>
<span class="line"><span style="color:#ABB2BF;">     all//所有权限</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(r,i){return n(),a("div",null,o)}const d=s(e,[["render",c],["__file","DCL小结.html.vue"]]);export{d as default};
