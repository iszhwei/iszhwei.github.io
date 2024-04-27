import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as r,c,f as s,w as t,e as a,d as n,a as i}from"./app-9OmaxHRC.js";const d="/assets/image-20240419201144826-8Hq3TNPn.png",g="/assets/image-20240419201408301-uncp1OVM.png",_="/assets/image-20240419202208436-KwbSeuY2.png",p="/assets/image-20240419202348100-lmW9eUIY.png",u="/assets/image-20240419202607527-yFS1KWrz.png",f="/assets/image-20240419203213610-TspoqqxT.png",m="/assets/image-20240419203953696-r7RTTKBy.png",h="/assets/image-20240419205222166-A10V2LaM.png",b="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_20_color_FFFFFF_t_70_g_se_x_16-95S1QYS7.png",x="/assets/image-20240419210526164-i-Rh8URv.png",y="/assets/image-20240419210416011-3mfLrGiT.png",S="/assets/image-20240419211159983-T8_S0UmU.png",B="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_20_color_FFFFFF_t_70_g_se_x_16-17135324340163-fIRmnCYo.png",z="/assets/image-20240419211505117-hZry97V7.png",F="/assets/image-20240419211812044-6ScYAnzC.png",A={},X=n("h1",{id:"排它锁和共享锁",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#排它锁和共享锁","aria-hidden":"true"},"#"),a(" 排它锁和共享锁")],-1),v=n("p",null,[n("strong",null,"排它锁"),a("（Exclusive），又称为"),n("strong",null,"X锁，写锁"),n("strong",null,"共享锁"),a("（Shared），又称为"),n("strong",null,"S锁，读锁")],-1),D=n("p",null,"对事务加X和S锁之间有以下的关系：",-1),k=n("strong",null,"加了 S 锁",-1),T=n("strong",null,"加了 X 锁",-1),I=i(`<h2 id="显式加锁" tabindex="-1"><a class="header-anchor" href="#显式加锁" aria-hidden="true">#</a> 显式加锁：</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> … lock </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> share mode #强制获取共享锁</span></span>
<span class="line"><span style="color:#C678DD;">select</span><span style="color:#ABB2BF;"> … </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">update</span><span style="color:#ABB2BF;"> #获取排它锁</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试不同事务之间排它锁和共享锁的兼容性" tabindex="-1"><a class="header-anchor" href="#测试不同事务之间排它锁和共享锁的兼容性" aria-hidden="true">#</a> 测试不同事务之间排它锁和共享锁的兼容性</h2><p>我们先查看键表的SQL以及内容</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>查看隔离级别：</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>首先开启一个事务，给id=7的数据加上排它锁，我们用另一个事务的服务线程给id=7的数据加上排它锁，阻塞了</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',9),w=n("strong",null,"成功",-1),Q=n("figure",null,[n("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),C=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),L=n("p",null,[n("strong",null,"小结：不同事务之间对于数据的锁，只有SS锁可以共存，XX、SX、XS都不能共存")],-1),V=n("h2",{id:"测试行锁加在索引项上",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#测试行锁加在索引项上","aria-hidden":"true"},"#"),a(" 测试行锁加在索引项上")],-1),N=n("blockquote",null,[n("p",null,[n("strong",null,"其实行锁是加在索引树上的")])],-1),q=n("figure",null,[n("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),E=n("strong",null,"现在我们发现获取age=20的排它锁也获取不到了，这是为什么？我们解释一下：",-1),R=i('<p>而我们用age作为过滤条件没有用到索引，自然就不会使用行锁，而是使用<strong>表锁</strong>。这就意味着只有通过索引检索数据，InnoDB才使用行级锁，<u>如果做整表扫描，InnoDB将使用表锁</u>！！！</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>两个事务可以获取到不同行的排它锁（for update），再一次证明了InnoDB的行锁是加在索引项上的</li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>是如果使用<strong>相同的索引字段</strong>(zhangsan)作为过滤条件，依然会发生锁冲突，<strong>只能串行</strong>进行，不能并发进行。</li></ul><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因为现在name走的是索引， 通过zhangsan<u>在辅助索引树上找到它所在行记录的id</u>是1，然后<strong>到主键索引树上，获取对应行记录的排他锁</strong>（MySQL Server会根据情况，在主键索引树和辅助索引树上加锁）</p><h2 id="串行化隔离级别测试" tabindex="-1"><a class="header-anchor" href="#串行化隔离级别测试" aria-hidden="true">#</a> 串行化隔离级别测试</h2><p><strong>在SERIALIZABLE隔离级别下，所有的事务都自动使用排它锁或共享锁，不需要用户手动加锁</strong>（for in share mode/for update）</p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>两个事务可以同时获取共享锁（SS共存），事务2插入数据</p><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',12),Y=n("figure",null,[n("img",{src:S,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),M=n("li",null,"因为我们给name加上了索引，以上的select相当于给name为zhangsan的数据加上了行共享锁",-1),U=i('<p><mark>事务2在辅助索引树上找zhangsan，找到对应的主键值，然后去主键索引树找到相应的记录，但是发现这行记录已经被共享锁锁住了，事务2可以获取共享锁，但是不能获取排他锁</mark></p><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们用主键索引id试试能不能update</p><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>依然阻塞住了，<u>虽然我们where后面的字段现在使用的id而不是name，但是name也是通过辅助索引树找到对应的主键，再到主键索引树上找相应的记录，而主键索引树上的记录加了锁</u>（<mark>MySQL Server会根据情况，在主键索引树和辅助索引树上加锁</mark>）</p><p>我们update id=8的数据，成功了。因为我们select的时候，只是给id=7 name=zhangsan的数据加上了行锁，我们操作id=8的数据当然可以成功</p><figure><img src="'+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><p>有索引，则使用行锁；没有索引，则使用表锁。</p><p>表级锁还是行级锁说的是锁的<strong>粒度</strong>，共享锁和排他锁说的是锁的<strong>性质</strong>，不管是表锁还是行锁，都有共享锁和排他锁的区分</p>',10);function W(Z,K){const e=l("font");return r(),c("div",null,[X,v,s(e,{color:"green"},{default:t(()=>[a("读读（SS）之间是可以兼容的")]),_:1}),a("，但是"),s(e,{color:"red"},{default:t(()=>[a("读写（SX）之间，写写（XX）之间是互斥的")]),_:1}),D,n("ul",null,[n("li",null,[n("p",null,[a("一个事务对数据对象A"),k,a("，可以对A进行"),s(e,{color:"green"},{default:t(()=>[a("读取操作")]),_:1}),a("但"),s(e,{color:"red"},{default:t(()=>[a("不能进行update操作")]),_:1}),a("，加锁期间"),s(e,{color:"green"},{default:t(()=>[a("其它事务能对A加S锁")]),_:1}),a("但"),s(e,{color:"red"},{default:t(()=>[a("不能加 X 锁")]),_:1})])]),n("li",null,[n("p",null,[a("一个事务对数据对象A"),T,a("，就可以对A进行"),s(e,{color:"green"},{default:t(()=>[a("读取和更新")]),_:1}),a("，加锁期间其它事务"),s(e,{color:"red"},{default:t(()=>[a("不能对A加任何锁")]),_:1})])])]),I,n("p",null,[a("我们尝试给id=7的数据加上"),n("strong",null,[a("共享锁，还是"),s(e,{color:"red"},{default:t(()=>[a("阻塞")]),_:1}),a("了")]),a("；再获取id=8的共享锁和排它锁，可以"),w,a("获取id=8的共享锁和排它锁")]),Q,C,L,V,N,n("p",null,[a("事务1用表的无索引字段age作为过滤条件；事务2现在同样想获取这条记录的排它锁，可想而知地"),s(e,{color:"red"},{default:t(()=>[a("失败")]),_:1}),a("了；那现在事务2获取不同行chenwei的记录的排它锁，"),s(e,{color:"red"},{default:t(()=>[a("同样失败了")]),_:1})]),q,s(e,{color:"green"},{default:t(()=>[a("InnoDB是支持行锁的，刚才以主键id为过滤条件时，事务1和事务2获取不同行的锁是可以成功的")]),_:1}),a("。然而"),E,s(e,{color:"cornflowerblue"},{default:t(()=>[a("InnoDB的行锁是通过给索引项加锁来实现的，而不是给表的行记录加锁实现的")]),_:1}),R,n("ul",null,[n("li",null,[a("此时由于insert需要加排它锁，但由于"),s(e,{color:"red"},{default:t(()=>[a("事务1已经对整张表添加了共享锁，事务2无法再对表成功加锁（SX不共存）")]),_:1})])]),Y,n("ul",null,[M,n("li",null,[s(e,{color:"red"},{default:t(()=>[a("事务2不能update")]),_:1}),a("，因为此时已经被事务1的"),s(e,{color:"red"},{default:t(()=>[a("共享锁锁住了id=1，name=zhangsan这条记录的索引项")]),_:1})])]),U])}const O=o(A,[["render",W],["__file","排它锁和共享锁.html.vue"]]);export{O as default};
