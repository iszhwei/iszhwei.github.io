import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as _,o as r,c as d,d as l,e as o,f as t,w as n,a as s}from"./app-9OmaxHRC.js";const a={},u=l("h1",{id:"事务并发存在的问题-脏读、不可重复读和幻读",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#事务并发存在的问题-脏读、不可重复读和幻读","aria-hidden":"true"},"#"),o(" 事务并发存在的问题(脏读、不可重复读和幻读)")],-1),i=l("strong",null,"并发执行事务",-1),A=l("ul",null,[l("li",null,[o("例如当事务A和事务B并发执行时，当事务A更新后，事务B查询读取到A尚未提交的数据，此时如果事务A rollback了，那事务B读到的数据就不是数据库所存放的数据了，而是无效的脏数据（"),l("mark",null,"脏读必须杜绝，因为事务没有commit"),o("；"),l("u",null,[o("而不可重复读和幻读不一定出问题，因为事务"),l("strong",null,"已经commit")]),o("）")])],-1),B=l("strong",null,"update操作",-1),m=l("strong",null,"数据量",-1),h=l("strong",null,"新增insert",-1),p=l("strong",null,"删除delete",-1),f=l("u",null,"发现查询到前一次不存在的记录，或者前一次查询的一些记录不见了",-1),g=s('<p>在有些场景下，不可重复读和幻读一定程度上是可以允许的，不一定非要杜绝（通过设置不同的隔离级别解决），由应用场景需求决定</p><ul><li>脏读举例：张三的账户还剩100块，他同时发起两个事务，事务A转账50，事务B购买价格为80的水杯，事务A现对张三的余额减50，然后给另一个人余额加50。由于没有隔离控制，事务B购买水杯前先读取余额，发现只有50，无法购买茶杯，于是茶杯购买失败。此时事务A执行异常，将张三的余额回滚为事务执行前的状态，余额为100。当前场景中事务B读到了事务A还没有commit的数据50，发生了脏读，任何业务场景下都必须杜绝</li><li>不可重复读举例：首先事务B查询余额，发现为100。事务A完成转账50，并且commit，事务B再次查询余额，发现变成了50，在某些业务场景下是可以允许的，不一定非要杜绝</li><li>幻读举例：事务B查询年龄为20的人，发现有5个。事务A插入或删除了年龄为20的记录，并且commit，事务B再次查询年龄为20的人，发现已经不是5个人了，幻读也是在某些业务场景下是可以允许的，不一定非要杜绝</li></ul><h2 id="事务相关命令" tabindex="-1"><a class="header-anchor" href="#事务相关命令" aria-hidden="true">#</a> 事务相关命令</h2><p>一般<u>我们业务上如果要考虑到事务处理，我们需要设置为<strong>手动提交</strong>方式</u>，如果一个事务包含多个SQL，若是自动提交方式，一句SQL执行完就自动提交了，后面的SQL万一执行失败就无法正常rollback，无法保证事务的原子特性</p><p><code>BEGIN</code>：开启一个事务 <code>COMMIT</code>：提交一个事务 <code>ROLLBACK</code>：回滚一个事务到初始的位置 <code>SAVEPOINT point1</code>：设置一个名字为point1的保存点 <code>ROLLBACK TO point1</code>：事务只<strong>回滚到保存点point1</strong>，而不是<strong>回滚到初始状态</strong><code>SET TRANSACTION_ISOLATION=‘REPEATABLE-READ’</code>：<strong>设置事务的隔离级别</strong><code>SELECT @@TRANSACTION_ISOLATION</code>：查询事务的隔离级别</p>',5);function N(T,L){const e=_("font");return r(),d("div",null,[u,l("p",null,[o("事务处理如果"),t(e,{color:"red"},{default:n(()=>[o("不经隔离")]),_:1}),o("，"),i,o("时通常会发生以下问题：")]),l("ul",null,[l("li",null,[l("p",null,[o("脏读（Dirty Read）："),t(e,{color:"red"},{default:n(()=>[o("一个事务读取了另一个事务未commit的数据（处理了一半的数据）")]),_:1}),o("。")]),A]),l("li",null,[l("p",null,[o("不可重复读（NonRepeatable Read）：一个事务的操作导致另一个事务"),t(e,{color:"red"},{default:n(()=>[o("前后两次读取到不同的数据")]),_:1}),o(" 。")]),l("ul",null,[l("li",null,[l("p",null,[o("例如当事务A和事务B并发执行时，当事务B查询读取数据后，事务A "),t(e,{color:"red"},{default:n(()=>[B]),_:1}),o("更改事务B查询到的数据，此时事务B再次去读该数据，发现前后两次读的数据不一样（事务B读取了事务A已commit的数据）")])]),l("li",null,[t(e,{color:"blue"},{default:n(()=>[o("不可重复读和幻读其实是一个正常现象，**就看业务中能否这接受这样的处理**")]),_:1})])])]),l("li",null,[l("p",null,[o("幻读（Phantom Read）：一个事务的操作导致另一个事务前后"),t(e,{color:"red"},{default:n(()=>[o("两次查询的结果"),m,o("不同")]),_:1}),o("。")]),l("ul",null,[l("li",null,[o("例如 当事务A和事务B并发执行时，当事务B查询读取数据后，事务A"),t(e,{color:"red"},{default:n(()=>[h]),_:1}),o("或者"),t(e,{color:"red"},{default:n(()=>[p]),_:1}),o("了一条满足事务B查询条件的记录，此时事务B再去查询，"),f,o("（事务B读取了事务A新增加的数据或者读到事务A删除的数据）")])])])]),g])}const E=c(a,[["render",N],["__file","事务并发存在的问题(脏读、不可重复读和幻读).html.vue"]]);export{E as default};
