const e=JSON.parse('{"key":"v-6c9710e8","path":"/ccpp/16%20%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%A0%E9%99%A4%E5%99%A8.html","title":"自定义删除器","lang":"zh-CN","frontmatter":{"title":"自定义删除器","icon":"file","order":4,"headerDepth":4,"category":["c/c++"],"tag":["智能指针","lambda"],"description":"自定义删除器 并不是说所有资源的释放都是delete指针 进行释放的。 比如说，用智能指针来托管数组的资源，delete就得加个中括号[]了， 如果用智能指针管理的是文件资源，或者是其他资源，释放的方式不是delete。 作用：能保证资源的绝对释放 unique_ptr shared_ptr都可以提供自定义删除器，本质上也就是智能指针第二参数给函数对象类，在类的operator()运算符重载资源释放工作，用法见下方代码：","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/16%20%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%A0%E9%99%A4%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"自定义删除器"}],["meta",{"property":"og:description","content":"自定义删除器 并不是说所有资源的释放都是delete指针 进行释放的。 比如说，用智能指针来托管数组的资源，delete就得加个中括号[]了， 如果用智能指针管理的是文件资源，或者是其他资源，释放的方式不是delete。 作用：能保证资源的绝对释放 unique_ptr shared_ptr都可以提供自定义删除器，本质上也就是智能指针第二参数给函数对象类，在类的operator()运算符重载资源释放工作，用法见下方代码："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"智能指针"}],["meta",{"property":"article:tag","content":"lambda"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义删除器\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.29,"words":386},"filePathRelative":"ccpp/16 智能指针/自定义删除器.md","excerpt":"<h1> 自定义删除器</h1>\\n<ul>\\n<li>并不是说所有资源的释放都是delete指针 进行释放的。</li>\\n<li>比如说，用智能指针来托管数组的资源，delete就得加个中括号[]了，</li>\\n<li>如果用智能指针管理的是文件资源，或者是其他资源，释放的方式不是delete。</li>\\n</ul>\\n<p>作用：<strong>能保证资源的绝对释放</strong></p>\\n<p><code>unique_ptr shared_ptr</code>都可以提供自定义删除器，本质上也就是智能指针<strong>第二参数给函数对象类</strong>，在类的operator()运算符重载资源释放工作，用法见下方代码：</p>","autoDesc":true}');export{e as data};
