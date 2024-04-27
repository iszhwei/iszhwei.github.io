const s=JSON.parse('{"key":"v-a277331a","path":"/algo/01%20%E6%95%B0%E7%BB%84/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E6%80%BB%E7%BB%93.html","title":"二分查找总结","lang":"zh-CN","frontmatter":{"title":"二分查找总结","icon":"file","order":2,"category":["数据结构与算法"],"tag":["数组","二分查找"],"description":"二分查找总结 使用条件： 线性表是有序表 二分查找要求数据结构必须是顺序表，也就是类似于数组的连续存储，因为只有这样才能一下定位出数组的中间位置（直接使用类似a[len / 2]），然后就可以把数组一分为二，进行后面的操作。 但是对于链表，由于存储是离散的，不能像数组一样，快速定位中间位置，来把链表一分为二，所以一般的二分查找不能直接应用于链表 基础版 左闭右闭 int binary_search(vector&lt;int&gt; nums, int target) { \\tint start=0, end=nums.size()-1; //注意end \\twhile(start &lt;= end) {\\t//注意循环条件 \\t\\tint mid = start+(end-start)/2;\\t//计算中间下标 \\tif(nums[mid] == target) \\t//如果找到了，就返回下标 \\treturn mid; \\tif(nums[mid] &lt; target) start=mid+1;\\t//如果发现这个数比目标数字小，就说明左半边都没有，直接从mid+1开始 \\telse end=mid-1;\\t//如果发现这个数比目标数字大，就说明右半边都没有，直接从mid-1开始 \\t} }","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/algo/01%20%E6%95%B0%E7%BB%84/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E6%80%BB%E7%BB%93.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"二分查找总结"}],["meta",{"property":"og:description","content":"二分查找总结 使用条件： 线性表是有序表 二分查找要求数据结构必须是顺序表，也就是类似于数组的连续存储，因为只有这样才能一下定位出数组的中间位置（直接使用类似a[len / 2]），然后就可以把数组一分为二，进行后面的操作。 但是对于链表，由于存储是离散的，不能像数组一样，快速定位中间位置，来把链表一分为二，所以一般的二分查找不能直接应用于链表 基础版 左闭右闭 int binary_search(vector&lt;int&gt; nums, int target) { \\tint start=0, end=nums.size()-1; //注意end \\twhile(start &lt;= end) {\\t//注意循环条件 \\t\\tint mid = start+(end-start)/2;\\t//计算中间下标 \\tif(nums[mid] == target) \\t//如果找到了，就返回下标 \\treturn mid; \\tif(nums[mid] &lt; target) start=mid+1;\\t//如果发现这个数比目标数字小，就说明左半边都没有，直接从mid+1开始 \\telse end=mid-1;\\t//如果发现这个数比目标数字大，就说明右半边都没有，直接从mid-1开始 \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"数组"}],["meta",{"property":"article:tag","content":"二分查找"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二分查找总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"使用条件：","slug":"使用条件","link":"#使用条件","children":[]},{"level":2,"title":"基础版","slug":"基础版","link":"#基础版","children":[{"level":3,"title":"左闭右闭","slug":"左闭右闭","link":"#左闭右闭","children":[]},{"level":3,"title":"左闭右开","slug":"左闭右开","link":"#左闭右开","children":[]}]},{"level":2,"title":"升级版（可以有重复值)","slug":"升级版-可以有重复值","link":"#升级版-可以有重复值","children":[{"level":3,"title":"最左值","slug":"最左值","link":"#最左值","children":[]},{"level":3,"title":"最右值","slug":"最右值","link":"#最右值","children":[]}]}],"git":{},"readingTime":{"minutes":3.28,"words":985},"filePathRelative":"algo/01 数组/二分查找总结.md","excerpt":"<h1> 二分查找总结</h1>\\n<h2> 使用条件：</h2>\\n<p>线性表是有序表</p>\\n<blockquote>\\n<p>二分查找要求数据结构必须是顺序表，也就是类似于数组的<u>连续存储</u>，因为只有这样<u>才能一下定位出数组的中间位置（直接使用类似a[len / 2]）</u>，然后就可以把数组一分为二，进行后面的操作。\\n但是对于<u>链表，由于存储是离散的，不能像数组一样，快速定位中间位置，来把链表一分为二，所以一般的二分查找不能直接应用于链表</u></p>\\n</blockquote>\\n<!--more-->\\n<h2> 基础版</h2>\\n<h3> 左闭右闭</h3>\\n<div class=\\"language-cpp line-numbers-mode\\" data-ext=\\"cpp\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">binary_search</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">vector</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\">&gt; </span><span style=\\"color: #E06C75; font-style: italic\\">nums</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">target</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> start</span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">, end</span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #E5C07B\\">nums</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">size</span><span style=\\"color: #ABB2BF\\">()</span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">;</span><span style=\\"color: #7F848E; font-style: italic\\"> //注意end</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">while</span><span style=\\"color: #ABB2BF\\">(start </span><span style=\\"color: #C678DD\\">&lt;=</span><span style=\\"color: #ABB2BF\\"> end) {</span><span style=\\"color: #7F848E; font-style: italic\\">\\t//注意循环条件</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> mid </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> start</span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\">(end</span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\">start)</span><span style=\\"color: #56B6C2\\">/</span><span style=\\"color: #D19A66\\">2</span><span style=\\"color: #ABB2BF\\">;</span><span style=\\"color: #7F848E; font-style: italic\\">\\t//计算中间下标</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    \\t</span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">nums</span><span style=\\"color: #ABB2BF\\">[mid] </span><span style=\\"color: #C678DD\\">==</span><span style=\\"color: #ABB2BF\\"> target)</span><span style=\\"color: #7F848E; font-style: italic\\"> \\t//如果找到了，就返回下标</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        \\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> mid;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    \\t</span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">nums</span><span style=\\"color: #ABB2BF\\">[mid] </span><span style=\\"color: #C678DD\\">&lt;</span><span style=\\"color: #ABB2BF\\"> target) start</span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\">mid</span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">;</span><span style=\\"color: #7F848E; font-style: italic\\">\\t//如果发现这个数比目标数字小，就说明左半边都没有，直接从mid+1开始</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    \\t</span><span style=\\"color: #C678DD\\">else</span><span style=\\"color: #ABB2BF\\"> end</span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\">mid</span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">;</span><span style=\\"color: #7F848E; font-style: italic\\">\\t//如果发现这个数比目标数字大，就说明右半边都没有，直接从mid-1开始</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
