const e=JSON.parse(`{"key":"v-167ae4a4","path":"/mysql/07%20MySQL%E4%BC%98%E5%8C%96/sql%E4%BC%98%E5%8C%96.html","title":"sql优化","lang":"zh-CN","frontmatter":{"title":"sql优化","icon":"file","order":1,"headerDepth":4,"category":["mysql"],"tag":["mysql优化"],"description":"sql优化 一、大批量插入数据 当使用load 命令导入数据的时候，适当的设置可以提高导入的效率 1） 主键顺序插入 load data local infile '/root/data1.log' into table \`tb_user\` fields terminated by ',' lines terminated by '\\\\n';","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/mysql/07%20MySQL%E4%BC%98%E5%8C%96/sql%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"sql优化"}],["meta",{"property":"og:description","content":"sql优化 一、大批量插入数据 当使用load 命令导入数据的时候，适当的设置可以提高导入的效率 1） 主键顺序插入 load data local infile '/root/data1.log' into table \`tb_user\` fields terminated by ',' lines terminated by '\\\\n';"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"mysql优化"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sql优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"一、大批量插入数据","slug":"一、大批量插入数据","link":"#一、大批量插入数据","children":[{"level":3,"title":"1） 主键顺序插入","slug":"_1-主键顺序插入","link":"#_1-主键顺序插入","children":[]},{"level":3,"title":"2） 关闭唯一性校验","slug":"_2-关闭唯一性校验","link":"#_2-关闭唯一性校验","children":[]},{"level":3,"title":"3） 手动提交事务","slug":"_3-手动提交事务","link":"#_3-手动提交事务","children":[]}]},{"level":2,"title":"二、优化insert","slug":"二、优化insert","link":"#二、优化insert","children":[{"level":3,"title":"1.逐条插入改为批量插入","slug":"_1-逐条插入改为批量插入","link":"#_1-逐条插入改为批量插入","children":[]},{"level":3,"title":"2.在事务中进行数据插入","slug":"_2-在事务中进行数据插入","link":"#_2-在事务中进行数据插入","children":[]},{"level":3,"title":"3.数据有序插入","slug":"_3-数据有序插入","link":"#_3-数据有序插入","children":[]}]},{"level":2,"title":"三、优化order by","slug":"三、优化order-by","link":"#三、优化order-by","children":[]},{"level":2,"title":"四、MySQL5.7优化group by","slug":"四、mysql5-7优化group-by","link":"#四、mysql5-7优化group-by","children":[]},{"level":2,"title":"五、优化子查询","slug":"五、优化子查询","link":"#五、优化子查询","children":[]},{"level":2,"title":"六、优化OR","slug":"六、优化or","link":"#六、优化or","children":[]},{"level":2,"title":"七、优化分页查询","slug":"七、优化分页查询","link":"#七、优化分页查询","children":[]}],"git":{},"readingTime":{"minutes":4.41,"words":1322},"filePathRelative":"mysql/07 MySQL优化/sql优化.md","excerpt":"<h1> sql优化</h1>\\n<h2> 一、大批量插入数据</h2>\\n<p>当使用load 命令导入数据的时候，适当的设置可以提高导入的效率</p>\\n<figure><figcaption></figcaption></figure>\\n<h3> 1） 主键顺序插入</h3>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">load</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">data</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">local</span><span style=\\"color: #ABB2BF\\"> infile </span><span style=\\"color: #98C379\\">'/root/data1.log'</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">into</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">table</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\`tb_user\`</span><span style=\\"color: #ABB2BF\\"> fields terminated </span><span style=\\"color: #C678DD\\">by</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">','</span><span style=\\"color: #ABB2BF\\"> lines terminated </span><span style=\\"color: #C678DD\\">by</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'\\\\n'</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
