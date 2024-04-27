import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as _,o as a,c as i,d as e,e as t,f as n,w as s}from"./app-9OmaxHRC.js";const r="/assets/bbf9ebcab6ee4781bce063ed7ffa21d2-KauQ31wQ.png",d="/assets/5df49ef244d94787b5238563aa4be6d8-nCvIHC5z.png",c="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_20_color_FFFFFF_t_70_g_se_x_16-DumkVOD-.png",h="/assets/watermark_type_d3F5LXplbmhlaQ_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_8_color_FFFFFF_t_70_g_se_x_16-kGggQ_rV.png",u="/assets/7f401a72e32e40e7be6b900809ede7eb-30gglyCN.png",g="/assets/23075039aacf4033a677f6394c876666-eNaxEePj.png",f="/assets/0f5d4485b63e4cdf8ae703cc9ac242c0-Ehx79hJe.png",p={},m=e("h1",{id:"死锁",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#死锁","aria-hidden":"true"},"#"),t(" 死锁")],-1),b=e("h2",{id:"数据库中的死锁",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据库中的死锁","aria-hidden":"true"},"#"),t(" 数据库中的死锁")],-1),x=e("strong",null,"MyISAM 表锁是 deadlock free 的",-1),y=e("u",null,"只支持表锁，而且总是一次获得所需的全部锁，要么全部满足，要么等待，因此不会出现死锁",-1),F=e("figure",null,[e("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Q=e("p",null,"在 InnoDB 中，除单个 SQL 组成的事务外，锁是逐步获得的，即锁的粒度比较小（行锁），这就决定了在 InnoDB 中发生死锁是可能的",-1),k=e("strong",null,"死锁问题一般都是我们自己的应用造成的，和多线程编程的死锁情况相似",-1),z=e("strong",null,"获取的顺序不同而导致的死锁问题",-1),S=e("h2",{id:"死锁场景以及解决办法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#死锁场景以及解决办法","aria-hidden":"true"},"#"),t(" 死锁场景以及解决办法")],-1),w=e("p",null,"死锁出现的场景如下：",-1),M=e("p",null,"事务1成功获取行锁1 事务2成功获取行锁2 … 事务1无法获取行锁2，被阻塞的同时也无法释放行锁1 事务2无法获取行锁1，被阻塞的同时也无法释放行锁2",-1),V=e("figure",null,[e("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),v=e("p",null,"此时所有的事务都阻塞住了，相当于进程内的所有线程都阻塞住了，发生了死锁问题",-1),B=e("h2",{id:"操作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#操作","aria-hidden":"true"},"#"),t(" 操作")],-1),C=e("p",null,"设置自动提交 以及 可重复读隔离级别，开启事务",-1),I=e("figure",null,[e("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),N=e("figure",null,[e("img",{src:h,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),L=e("figure",null,[e("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),E=e("p",null,"事务1再次获取id=8的排他锁，发生阻塞",-1),T=e("figure",null,[e("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),A=e("p",null,"事务2再次获取id=7的排他锁",-1),D=e("figure",null,[e("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),X=e("strong",null,"MySQL Server检测到发生了死锁",-1),W=e("strong",null,"解除事务1的阻塞",-1),Z=e("strong",null,"事务1的rollback",-1),j=e("strong",null,"事务2成功获取",-1),q=e("p",null,[e("mark",null,"两个事务发生死锁时，MySQL Server会选择一个事务释放锁并进行rollback")],-1);function G(H,J){const o=_("font");return a(),i("div",null,[m,b,e("p",null,[x,t("， 这是因为 MyISAM 不支持事务，"),y,t("。"),n(o,{color:"red"},{default:s(()=>[t("如果是处理多张表，还是可能出现死锁问题的")]),_:1})]),F,Q,e("p",null,[k,t("，大部分都是由于我们多个线程在获取多个锁资源的时候，"),z,t("。因此我们应用在对数据库的多个表做更新的时候，不同的代码段，"),e("strong",null,[t("应对这些表按"),n(o,{color:"red"},{default:s(()=>[t("相同的顺序进行更新操作")]),_:1}),t("，以防止锁冲突导致死锁问题")])]),S,w,M,V,v,e("p",null,[e("strong",null,[t("解决死锁办法：多个事务/线程获取多个相同资源锁的时候应该"),n(o,{color:"red"},{default:s(()=>[t("按照同样的顺序获取锁")]),_:1})]),t("。与此同时，"),n(o,{color:"green"},{default:s(()=>[t("由于mysqld（MySQL Server守护进程）设置了事务阻塞的超时时间，事务不会阻塞很长时间，超时后事务处理失败，自动释放当前占有的锁")]),_:1})]),B,C,I,e("p",null,[t("查询一下表数据，在可重复读隔离级别"),n(o,{color:"red"},{default:s(()=>[t("使用的是MVCC提供的快照读，并没有加锁")]),_:1})]),N,e("p",null,[t("事务1获取id=7的排他锁，事务2获取id=8的排他锁（"),n(o,{color:"red"},{default:s(()=>[t("可以显示加锁")]),_:1}),t("）")]),L,E,T,A,D,e("p",null,[t("此时"),n(o,{color:"cornflowerblue"},{default:s(()=>[t("由于"),X,t("，于是"),W,t("，进行"),Z,t("，释放其占有的行锁，于是"),j,t("id=7的排他锁")]),_:1})]),q])}const P=l(p,[["render",G],["__file","死锁.html.vue"]]);export{P as default};
