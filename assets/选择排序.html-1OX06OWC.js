const s=JSON.parse('{"key":"v-64c90a94","path":"/algo/04%20%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.html","title":"选择排序","lang":"zh-CN","frontmatter":{"title":"选择排序","icon":"file","order":2,"category":["数据结构与算法"],"tag":["排序算法"],"description":"外循环，依次选择前N-1个位置，存放最小的数据 内循环，需要指定待比较数据的位置 //selectSort.h #ifndef _SELECT_SORT_H_ #define _SELECT_SORT_H_ #include &lt;vector&gt; using std::vector; using std::swap; void selectSort(vector&lt;int&gt; &amp;nums); #endif\\t//_SELECT_SOTR_H_","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/algo/04%20%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"选择排序"}],["meta",{"property":"og:description","content":"外循环，依次选择前N-1个位置，存放最小的数据 内循环，需要指定待比较数据的位置 //selectSort.h #ifndef _SELECT_SORT_H_ #define _SELECT_SORT_H_ #include &lt;vector&gt; using std::vector; using std::swap; void selectSort(vector&lt;int&gt; &amp;nums); #endif\\t//_SELECT_SOTR_H_"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"排序算法"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"选择排序\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.59,"words":176},"filePathRelative":"algo/04 排序算法/选择排序.md","excerpt":"<ul>\\n<li>外循环，依次选择前N-1个位置，存放最小的数据</li>\\n<li>内循环，需要指定待比较数据的位置</li>\\n</ul>\\n<!--more-->\\n<div class=\\"language-c++ line-numbers-mode\\" data-ext=\\"c++\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//selectSort.h</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#ifndef</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">_SELECT_SORT_H_</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#define</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">_SELECT_SORT_H_</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#include</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">&lt;vector&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">using</span><span style=\\"color: #ABB2BF\\"> std::vector;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">using</span><span style=\\"color: #ABB2BF\\"> std::swap;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">selectSort</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">vector</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\">&gt; </span><span style=\\"color: #C678DD\\">&amp;</span><span style=\\"color: #E06C75; font-style: italic\\">nums</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#endif</span><span style=\\"color: #7F848E; font-style: italic\\">\\t//_SELECT_SOTR_H_</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
