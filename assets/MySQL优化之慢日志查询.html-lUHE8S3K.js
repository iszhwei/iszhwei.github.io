import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as t,c as p,d as a,e as s,f as n,w as l,a as o}from"./app-9OmaxHRC.js";const c="/assets/image-20240419100727177-6OUJ5BCo.png",d="/assets/image-20240419101229787-EcZkxijb.png",g="/assets/image-20240419103118164-MK7997c5.png",u="/assets/image-20240419104108994-8GTorsb6.png",_="/assets/image-20240419104522772-EKYTtHNt.png",y="/assets/image-20240419104654722-xRSCvI_n.png",h="/assets/image-20240419105046960-apgxVGeQ.png",B="/assets/image-20240419105426754-zyizqU2U.png",m="/assets/image-20240419111704907-h-XYaIfW.png",f="/assets/image-20240419112014070-BEJ3p_-z.png",b={},v=a("h1",{id:"mysql优化之慢日志查询",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mysql优化之慢日志查询","aria-hidden":"true"},"#"),s(" MySQL优化之慢日志查询")],-1),x=a("u",null,"对于SQL和索引的优化问题，我们会使用explain去分析SQL语句",-1),q=a("p",null,[s("我们可以打开"),a("strong",null,"慢查询日志")],-1),D=a("h2",{id:"慢查询使用方法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#慢查询使用方法","aria-hidden":"true"},"#"),s(" 慢查询使用方法")],-1),k=a("strong",null,"具体的业务",-1),A=a("strong",null,"并发量",-1),F=a("strong",null,"开启业务",-1),C=o("<p>步骤如下：</p><ol><li><mark>打开慢查询日志开关<code>slow_query_log</code></mark></li><li><mark>设置合理的、业务可以接受的慢查询时间上限</mark></li><li><mark>压测执行各种业务</mark></li><li><mark>查看慢查询日志，找出所有执行耗时的SQL语句</mark></li><li><mark>用explain分析这些耗时的SQL语句，从而针对性优化</mark></li></ol>",2),w=o(`<h2 id="慢查询日志相关的参数" tabindex="-1"><a class="header-anchor" href="#慢查询日志相关的参数" aria-hidden="true">#</a> 慢查询日志相关的参数</h2><p>（MySQL定义的很多的全局的开关，都是在全局变量中存储，可以用<code>show/set variables</code><strong>查看或者设置全局变量的值</strong>）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">show variables </span><span style="color:#C678DD;">like</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;%slow_query%&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>慢查询日志开关默认是<strong>关闭的</strong></li><li><strong>慢查询日志的路径</strong>：默认在<code>/var/lib/mysql/</code>下</li></ul><p>慢查询日志记录了包含所有执行时间超过参数 long_query_time（<strong>单位：秒</strong>）所设置值的 SQL语句的日志，在MySQL上用命令可以查看，如下：</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="慢查询日志实践" tabindex="-1"><a class="header-anchor" href="#慢查询日志实践" aria-hidden="true">#</a> 慢查询日志实践</h2><h3 id="_1-打开慢查询日志开关slow-query-log" tabindex="-1"><a class="header-anchor" href="#_1-打开慢查询日志开关slow-query-log" aria-hidden="true">#</a> 1. 打开慢查询日志开关slow_query_log</h3><h4 id="_1-打开慢查询日志开关slow-query-log-1" tabindex="-1"><a class="header-anchor" href="#_1-打开慢查询日志开关slow-query-log-1" aria-hidden="true">#</a> 1. 打开慢查询日志开关slow_query_log</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">show variables </span><span style="color:#C678DD;">like</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;slow_query%&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">global</span><span style="color:#ABB2BF;"> slow_query_log</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">on</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>在打开慢查询日志开关的时候，报错表示slow_query_log是一个global的变量（也有只影响当前session的变量，如：<code>long_query_time 、profiling</code>），修改后会影响所有的session，即影响所有正在访问当前MySQL server的客户端。</li></ul><h4 id="_2-设置合理的、业务可以接受的慢查询时间上限long-query-time" tabindex="-1"><a class="header-anchor" href="#_2-设置合理的、业务可以接受的慢查询时间上限long-query-time" aria-hidden="true">#</a> 2. 设置合理的、业务可以接受的慢查询时间上限long_query_time</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">show variables </span><span style="color:#C678DD;">like</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;long_query%&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">set</span><span style="color:#ABB2BF;"> long_query_time</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>查看另一个session，发现还是默认的10s，故long_query_time只影响当前session</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_3-压测执行各种业务" tabindex="-1"><a class="header-anchor" href="#_3-压测执行各种业务" aria-hidden="true">#</a> 3. 压测执行各种业务</h4><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>已经超过我们设置的<code>long_query_time=0.1s</code></p><h4 id="_4-查看慢查询日志" tabindex="-1"><a class="header-anchor" href="#_4-查看慢查询日志" aria-hidden="true">#</a> 4. 查看慢查询日志</h4><p>路径：<code>/var/lib/mysql/</code></p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需要sudo 权限才能查看</li></ul><h4 id="_5-用explain分析这些耗时的sql语句-从而针对性优化" tabindex="-1"><a class="header-anchor" href="#_5-用explain分析这些耗时的sql语句-从而针对性优化" aria-hidden="true">#</a> 5. 用explain分析这些耗时的SQL语句，从而针对性优化</h4><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>做了整表扫描，把有序链表整个扫了一遍。</p><p><u>我们应该给</u></p>',29),S=a("li",null,[a("p",null,[a("u",null,"password添加索引，")])],-1),Q=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">index</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">passwordidx</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">on</span><span style="color:#ABB2BF;"> t_user(</span><span style="color:#C678DD;">password</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> * </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> t_user </span><span style="color:#C678DD;">where</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">password</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;1500000&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),L=o('<h3 id="show-profiles查看sql具体的运行时间-更详细的时间" tabindex="-1"><a class="header-anchor" href="#show-profiles查看sql具体的运行时间-更详细的时间" aria-hidden="true">#</a> show profiles查看sql具体的运行时间/更详细的时间</h3><p>MySQL一般只显示小数点后两位的时间</p><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开profiling开关，显示更详细的时间</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">set</span><span style="color:#ABB2BF;"> profiling </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">ON</span><span style="color:#ABB2BF;">; #profiling变量只影响当前session</span></span>
<span class="line"><span style="color:#ABB2BF;">show profiles; #展示SQL语句精细的耗时时间</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6);function z(M,N){const e=r("font");return t(),p("div",null,[v,a("p",null,[x,s("。但是真正的企业级项目有"),n(e,{color:"red"},{default:l(()=>[s("成千上万条SQL")]),_:1}),s("，我们不可能从头开始一条一条explain去分析。我们从什么地方可以获取那些运行时间长，耗性能的SQL？？")]),q,D,a("p",null,[a("u",null,[s("根据"),k,s("和"),A,s("来"),n(e,{color:"green"},{default:l(()=>[s("预估一个时间上限（20ms、100ms）")]),_:1}),s("，设置好后"),F,s("，压测后打开慢查询日志，就会看到超过执行时间的SQL，然后使用explain分析这些耗时的SQL语句")])]),C,a("p",null,[s("MySQL可以设置慢查询日志，当SQL执行的时间超过我们设定的时间，那么这些SQL就会被记录在慢查询日志当中，然后我们通过查看日志，用explain分析这些SQL的执行计划，来判定为什么效率低下，是"),n(e,{color:"red"},{default:l(()=>[s("没有使用到索引")]),_:1}),s("<？还是"),n(e,{color:"red"},{default:l(()=>[s("索引本身创建的有问题")]),_:1}),s("？或者是索引使用到了，但是由于"),n(e,{color:"red"},{default:l(()=>[s("表的数据量太大")]),_:1}),s("，花费的时间就是很长，那么此时我们可以把表分成多个小表等。")]),w,a("ol",null,[S,a("li",null,[a("p",null,[a("u",null,[s("password是"),n(e,{color:"red"},{default:l(()=>[s("字符串格式，因为如果涉及类型转换是用不了索引的")]),_:1})])])])]),Q,a("p",null,[s("其他比如涉及"),n(e,{color:"green"},{default:l(()=>[s("外部排序的能否创建联合索引解决")]),_:1}),s("、")]),L])}const T=i(b,[["render",z],["__file","MySQL优化之慢日志查询.html.vue"]]);export{T as default};
