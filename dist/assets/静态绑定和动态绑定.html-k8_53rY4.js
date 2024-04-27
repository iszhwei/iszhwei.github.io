const s=JSON.parse('{"key":"v-f51389fa","path":"/ccpp/07%20%E5%A4%9A%E6%80%81/%E9%9D%99%E6%80%81%E7%BB%91%E5%AE%9A%E5%92%8C%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A.html","title":"静态绑定和🍔动态绑定","lang":"zh-CN","frontmatter":{"title":"静态绑定和🍔动态绑定","icon":"file","order":2,"headerDepth":4,"category":["c/c++"],"tag":["多态"],"description":"静态绑定和动态绑定 静态绑定 静态指的是编译时期 绑定即函数调用 #include &lt;iostream&gt; #include &lt;typeinfo&gt; using namespace std; class Base { public: \\tBase(int data = 10): ma(data){} \\tvoid show() \\t{ \\t\\tcout &lt;&lt; \\"Base::show()\\" &lt;&lt; endl; \\t} \\tvoid show(int) \\t{ \\t\\tcout &lt;&lt; \\"Base::show(int)\\" &lt;&lt; endl; \\t} protected: \\tint ma; }; class Derive : public Base { public: \\tDerive(int data = 20):Base(data),mb(data){} \\tvoid show() \\t{ \\t\\tcout &lt;&lt; \\"Derive::show()\\" &lt;&lt; endl; \\t} private: \\tint mb; }; int main() { \\tDerive d(50); \\tBase *pb = &amp;d; \\tpb-&gt;show(); \\tpb-&gt;show(10); \\t \\tcout &lt;&lt; sizeof(Base) &lt;&lt; endl;//4 \\tcout &lt;&lt; sizeof(Derive) &lt;&lt; endl;//8 \\tcout &lt;&lt; typeid(pb).name() &lt;&lt; endl;//class Base *\\t//该指针的类型，定义的是Base*,所以打印也是Base* \\tcout &lt;&lt; typeid(*pb).name() &lt;&lt; endl;//class Base\\t\\t//解引用，表示指针指向的类型 \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/07%20%E5%A4%9A%E6%80%81/%E9%9D%99%E6%80%81%E7%BB%91%E5%AE%9A%E5%92%8C%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"静态绑定和🍔动态绑定"}],["meta",{"property":"og:description","content":"静态绑定和动态绑定 静态绑定 静态指的是编译时期 绑定即函数调用 #include &lt;iostream&gt; #include &lt;typeinfo&gt; using namespace std; class Base { public: \\tBase(int data = 10): ma(data){} \\tvoid show() \\t{ \\t\\tcout &lt;&lt; \\"Base::show()\\" &lt;&lt; endl; \\t} \\tvoid show(int) \\t{ \\t\\tcout &lt;&lt; \\"Base::show(int)\\" &lt;&lt; endl; \\t} protected: \\tint ma; }; class Derive : public Base { public: \\tDerive(int data = 20):Base(data),mb(data){} \\tvoid show() \\t{ \\t\\tcout &lt;&lt; \\"Derive::show()\\" &lt;&lt; endl; \\t} private: \\tint mb; }; int main() { \\tDerive d(50); \\tBase *pb = &amp;d; \\tpb-&gt;show(); \\tpb-&gt;show(10); \\t \\tcout &lt;&lt; sizeof(Base) &lt;&lt; endl;//4 \\tcout &lt;&lt; sizeof(Derive) &lt;&lt; endl;//8 \\tcout &lt;&lt; typeid(pb).name() &lt;&lt; endl;//class Base *\\t//该指针的类型，定义的是Base*,所以打印也是Base* \\tcout &lt;&lt; typeid(*pb).name() &lt;&lt; endl;//class Base\\t\\t//解引用，表示指针指向的类型 \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"多态"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"静态绑定和🍔动态绑定\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"静态绑定","slug":"静态绑定","link":"#静态绑定","children":[]},{"level":2,"title":"动态绑定","slug":"动态绑定","link":"#动态绑定","children":[{"level":3,"title":"sizeof变化的原因：","slug":"sizeof变化的原因","link":"#sizeof变化的原因","children":[]},{"level":3,"title":"*pb的类型：typeid()","slug":"pb的类型-typeid","link":"#pb的类型-typeid","children":[]},{"level":3,"title":"RTTI运行时的类型信息","slug":"rtti运行时的类型信息","link":"#rtti运行时的类型信息","children":[]}]},{"level":2,"title":"vs 查看内存分布","slug":"vs-查看内存分布","link":"#vs-查看内存分布","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":3.96,"words":1189},"filePathRelative":"ccpp/07 多态/静态绑定和动态绑定.md","excerpt":"<h1> 静态绑定和动态绑定</h1>\\n<h2> 静态绑定</h2>\\n<p>静态指的是<u>编译时期</u></p>\\n<p>绑定即<u>函数调用</u></p>\\n<div class=\\"language-c++ line-numbers-mode\\" data-ext=\\"c++\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">#include</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">&lt;iostream&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#include</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">&lt;typeinfo&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">using</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">namespace</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">std</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Base</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">public:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #61AFEF\\">Base</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">data</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">10</span><span style=\\"color: #ABB2BF\\">): </span><span style=\\"color: #61AFEF\\">ma</span><span style=\\"color: #ABB2BF\\">(data){}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">show</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"Base::show()\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">show</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"Base::show(int)\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">protected:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> ma;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">};</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Derive</span><span style=\\"color: #ABB2BF\\"> : </span><span style=\\"color: #C678DD\\">public</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Base</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">public:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #61AFEF\\">Derive</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">data</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">20</span><span style=\\"color: #ABB2BF\\">):</span><span style=\\"color: #61AFEF\\">Base</span><span style=\\"color: #ABB2BF\\">(data),</span><span style=\\"color: #61AFEF\\">mb</span><span style=\\"color: #ABB2BF\\">(data){}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">show</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"Derive::show()\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">private:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> mb;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">};</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">main</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tDerive </span><span style=\\"color: #61AFEF\\">d</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">50</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tBase </span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\">pb </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&amp;</span><span style=\\"color: #ABB2BF\\">d;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #E5C07B\\">pb</span><span style=\\"color: #ABB2BF\\">-&gt;</span><span style=\\"color: #61AFEF\\">show</span><span style=\\"color: #ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #E5C07B\\">pb</span><span style=\\"color: #ABB2BF\\">-&gt;</span><span style=\\"color: #61AFEF\\">show</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">10</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">sizeof</span><span style=\\"color: #ABB2BF\\">(Base) </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span><span style=\\"color: #7F848E; font-style: italic\\">//4</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">sizeof</span><span style=\\"color: #ABB2BF\\">(Derive) </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span><span style=\\"color: #7F848E; font-style: italic\\">//8</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> typeid(pb).</span><span style=\\"color: #61AFEF\\">name</span><span style=\\"color: #ABB2BF\\">() </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span><span style=\\"color: #7F848E; font-style: italic\\">//class Base *\\t//该指针的类型，定义的是Base*,所以打印也是Base*</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> typeid(</span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\">pb).</span><span style=\\"color: #61AFEF\\">name</span><span style=\\"color: #ABB2BF\\">() </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span><span style=\\"color: #7F848E; font-style: italic\\">//class Base\\t\\t//解引用，表示指针指向的类型</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
