import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as i,a as n}from"./app-9OmaxHRC.js";const e="/assets/image-20240417173028557-1QUkVoIx.png",o="/assets/image-20240417173233712-lzsb1-Pl.png",l="/assets/image-20240417190259152-3gC-nfKh.png",r="/assets/image-20240417192321611-en7xqo2H.png",t="/assets/image-20240417192342128-01EIMm5u.png",c="/assets/image-20240417192407145-IND5mQ6Z.png",d="/assets/image-20240417192441961-Y7F-4j9j.png",p={},m=n(`<h1 id="mysql存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql存储引擎" aria-hidden="true">#</a> MySQL存储引擎</h1><p>mysql的一大优点就是插件式存储引擎</p><p>不同存储引擎主要是影响表的结构、数据以及索引的存储方式</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">show engines; #查看支持的存储引擎</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>这些默认配置都在mysql的配置文件中可以修改 <code>sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf </code></li></ul><h2 id="查看mysql存储的文件" tabindex="-1"><a class="header-anchor" href="#查看mysql存储的文件" aria-hidden="true">#</a> 查看mysql存储的文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/var/lib</span></span>
<span class="line"><span style="color:#61AFEF;">su</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">root</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">mysql</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果切换root失败，可以先修改root密码 <code>sudo passwd root</code> 再继续切换</li></ul><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="q-不同存储引擎有什么区别" tabindex="-1"><a class="header-anchor" href="#q-不同存储引擎有什么区别" aria-hidden="true">#</a> Q:不同存储引擎有什么区别</h2><p>A:5.5版本前默认的存储引擎是myisam，5.5及只有的版本改为了innodb；不同存储引擎主要是存储方式不一样，一张表需要存储的有表结构、表数据和表索引，myisam的一张表分为了 <code>.frm .MYD .MYI</code>三个文件，数据和索引是单独存放的；那么对于innodb来说，除了单独存储索引外，它的索引和数据是一起存放的；myisam支持表级锁和全文索引、不支持事务，innodb支持行锁和表索、支持事务、支持外键一致性约束</p><h2 id="q-为什么innodb不加主键会自动生成一个主键-而myisam不会" tabindex="-1"><a class="header-anchor" href="#q-为什么innodb不加主键会自动生成一个主键-而myisam不会" aria-hidden="true">#</a> Q:为什么innodb不加主键会自动生成一个主键，而myisam不会</h2><p>因为myisam数据和索引是单独存放的，加了主键就存放再.myi文件中，没加就不用存</p><p>而innodb索引和数据是存放在一起的，并且数据存放在索引树上，没有索引没法存放数据</p><h2 id="了解" tabindex="-1"><a class="header-anchor" href="#了解" aria-hidden="true">#</a> 了解</h2><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="image-20240417192441961" tabindex="0" loading="lazy"><figcaption>image-20240417192441961</figcaption></figure>',21),g=[m];function u(f,h){return s(),i("div",null,g)}const _=a(p,[["render",u],["__file","MySQL存储引擎.html.vue"]]);export{_ as default};
