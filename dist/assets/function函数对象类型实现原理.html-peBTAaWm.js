const s=JSON.parse('{"key":"v-474433e4","path":"/ccpp/17%20bind%E7%BB%91%E5%AE%9A%E5%99%A8%E5%92%8Cfunction%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1/function%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html","title":"function函数对象类型实现原理","lang":"zh-CN","frontmatter":{"title":"function函数对象类型实现原理","icon":"file","order":4,"headerDepth":4,"category":["c/c++"],"tag":["function函数对象"],"description":"function函数对象类型实现原理 通过两个例子：一个是持有普通函数，一个是持有类成员方法；查看类的成员方法到底是什么。 #include &lt;iostream&gt; #include &lt;typeinfo&gt; #include &lt;string&gt; #include &lt;functional&gt; using namespace std; /* function函数对象类型的实现原理 */ void hello(string str) { cout &lt;&lt; str &lt;&lt; endl; } int sum(int a, int b) { return a + b; } /// template&lt;typename Fty&gt; class myfunction {}; #if 0 //模板的部分偏特化 template&lt;typename R, typename A1&gt; class myfunction&lt;R(A1)&gt; { public: \\tusing PFUNC = R(*)(A1);\\t//需要接受外部传进来的函数类型，使用函数指针接收 \\tmyfunction(PFUNC pfunc) :_pfunc(pfunc) {} \\tR operator()(A1 arg) \\t{ \\t\\treturn _pfunc(arg);//hello(arg) \\t} private: \\tPFUNC _pfunc;//用于保存函数类型 }; //模板的部分偏特化 template&lt;typename R, typename A1, typename A2&gt; class myfunction&lt;R(A1, A2)&gt; { public: \\tusing PFUNC = R(*)(A1, A2); \\tmyfunction(PFUNC pfunc) :_pfunc(pfunc) {} \\tR operator()(A1 arg1, A2 arg2) \\t{ \\t\\treturn _pfunc(arg1, arg2);//hello(arg) \\t} private: \\tPFUNC _pfunc; }; #endif //可变参模板 template&lt;typename R, typename... A&gt;//一组可变参数个数 class myfunction&lt;R(A...)&gt; { public: \\tusing PFUNC = R(*)(A...); \\tmyfunction(PFUNC pfunc) :_pfunc(pfunc) {} \\tR operator()(A... arg) \\t{ \\t\\treturn _pfunc(arg...);//hello(arg) 表示一组形参变量 \\t} private: \\tPFUNC _pfunc; }; int main() { \\tfunction&lt;void(string)&gt; func1(hello); \\tfunc1(\\"hello world!\\");//func1.operator()(\\"hello world!\\") \\tmyfunction&lt;int(int, int)&gt; func2(sum); \\tcout &lt;&lt; func2(10, 20) &lt;&lt; endl; \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/17%20bind%E7%BB%91%E5%AE%9A%E5%99%A8%E5%92%8Cfunction%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1/function%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"function函数对象类型实现原理"}],["meta",{"property":"og:description","content":"function函数对象类型实现原理 通过两个例子：一个是持有普通函数，一个是持有类成员方法；查看类的成员方法到底是什么。 #include &lt;iostream&gt; #include &lt;typeinfo&gt; #include &lt;string&gt; #include &lt;functional&gt; using namespace std; /* function函数对象类型的实现原理 */ void hello(string str) { cout &lt;&lt; str &lt;&lt; endl; } int sum(int a, int b) { return a + b; } /// template&lt;typename Fty&gt; class myfunction {}; #if 0 //模板的部分偏特化 template&lt;typename R, typename A1&gt; class myfunction&lt;R(A1)&gt; { public: \\tusing PFUNC = R(*)(A1);\\t//需要接受外部传进来的函数类型，使用函数指针接收 \\tmyfunction(PFUNC pfunc) :_pfunc(pfunc) {} \\tR operator()(A1 arg) \\t{ \\t\\treturn _pfunc(arg);//hello(arg) \\t} private: \\tPFUNC _pfunc;//用于保存函数类型 }; //模板的部分偏特化 template&lt;typename R, typename A1, typename A2&gt; class myfunction&lt;R(A1, A2)&gt; { public: \\tusing PFUNC = R(*)(A1, A2); \\tmyfunction(PFUNC pfunc) :_pfunc(pfunc) {} \\tR operator()(A1 arg1, A2 arg2) \\t{ \\t\\treturn _pfunc(arg1, arg2);//hello(arg) \\t} private: \\tPFUNC _pfunc; }; #endif //可变参模板 template&lt;typename R, typename... A&gt;//一组可变参数个数 class myfunction&lt;R(A...)&gt; { public: \\tusing PFUNC = R(*)(A...); \\tmyfunction(PFUNC pfunc) :_pfunc(pfunc) {} \\tR operator()(A... arg) \\t{ \\t\\treturn _pfunc(arg...);//hello(arg) 表示一组形参变量 \\t} private: \\tPFUNC _pfunc; }; int main() { \\tfunction&lt;void(string)&gt; func1(hello); \\tfunc1(\\"hello world!\\");//func1.operator()(\\"hello world!\\") \\tmyfunction&lt;int(int, int)&gt; func2(sum); \\tcout &lt;&lt; func2(10, 20) &lt;&lt; endl; \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"function函数对象"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"function函数对象类型实现原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.46,"words":437},"filePathRelative":"ccpp/17 bind绑定器和function函数对象/function函数对象类型实现原理.md","excerpt":"<h1> function函数对象类型实现原理</h1>\\n<p>通过两个例子：一个是持有<strong>普通函数</strong>，一个是持有<strong>类成员方法</strong>；查看类的成员方法到底是什么。</p>\\n<div class=\\"language-c++ line-numbers-mode\\" data-ext=\\"c++\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">#include</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">&lt;iostream&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#include</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">&lt;typeinfo&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#include</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">&lt;string&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#include</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">&lt;functional&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">using</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">namespace</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">std</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">/*</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">function函数对象类型的实现原理</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">*/</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">hello</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">string</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">str</span><span style=\\"color: #ABB2BF\\">) { cout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> str </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl; }</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">sum</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">a</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">b</span><span style=\\"color: #ABB2BF\\">) { </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> a </span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\"> b; }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">///</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Fty</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">myfunction</span><span style=\\"color: #ABB2BF\\"> {};</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#if</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//模板的部分偏特化</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">R</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">A1</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">myfunction</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E5C07B\\">R</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">A1</span><span style=\\"color: #ABB2BF\\">)&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">public:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">using</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">PFUNC</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">R</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\">)(A1);</span><span style=\\"color: #7F848E; font-style: italic\\">\\t//需要接受外部传进来的函数类型，使用函数指针接收</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #61AFEF\\">myfunction</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">PFUNC</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">pfunc</span><span style=\\"color: #ABB2BF\\">) :</span><span style=\\"color: #61AFEF\\">_pfunc</span><span style=\\"color: #ABB2BF\\">(pfunc) {}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #E5C07B\\">R</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">operator</span><span style=\\"color: #ABB2BF\\">()(</span><span style=\\"color: #E5C07B\\">A1</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">arg</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">_pfunc</span><span style=\\"color: #ABB2BF\\">(arg);</span><span style=\\"color: #7F848E; font-style: italic\\">//hello(arg)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">private:</span><span style=\\"color: #ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tPFUNC _pfunc;</span><span style=\\"color: #7F848E; font-style: italic\\">//用于保存函数类型</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">};</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//模板的部分偏特化</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">R</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">A1</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">A2</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">myfunction</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E5C07B\\">R</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">A1</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E5C07B\\">A2</span><span style=\\"color: #ABB2BF\\">)&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">public:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">using</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">PFUNC</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">R</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\">)(A1, A2);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #61AFEF\\">myfunction</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">PFUNC</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">pfunc</span><span style=\\"color: #ABB2BF\\">) :</span><span style=\\"color: #61AFEF\\">_pfunc</span><span style=\\"color: #ABB2BF\\">(pfunc) {}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #E5C07B\\">R</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">operator</span><span style=\\"color: #ABB2BF\\">()(</span><span style=\\"color: #E5C07B\\">A1</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">arg1</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E5C07B\\">A2</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">arg2</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">_pfunc</span><span style=\\"color: #ABB2BF\\">(arg1, arg2);</span><span style=\\"color: #7F848E; font-style: italic\\">//hello(arg)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">private:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tPFUNC _pfunc;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">};</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#endif</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//可变参模板</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">R</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\">... </span><span style=\\"color: #E5C07B\\">A</span><span style=\\"color: #ABB2BF\\">&gt;</span><span style=\\"color: #7F848E; font-style: italic\\">//一组可变参数个数</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">myfunction</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E5C07B\\">R</span><span style=\\"color: #ABB2BF\\">(A...)&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">public:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">using</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">PFUNC</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">R</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\">)(A...);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #61AFEF\\">myfunction</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">PFUNC</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">pfunc</span><span style=\\"color: #ABB2BF\\">) :</span><span style=\\"color: #61AFEF\\">_pfunc</span><span style=\\"color: #ABB2BF\\">(pfunc) {}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #E5C07B\\">R</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">operator</span><span style=\\"color: #ABB2BF\\">()(</span><span style=\\"color: #E5C07B\\">A</span><span style=\\"color: #ABB2BF\\">... </span><span style=\\"color: #E06C75; font-style: italic\\">arg</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">_pfunc</span><span style=\\"color: #ABB2BF\\">(arg...);</span><span style=\\"color: #7F848E; font-style: italic\\">//hello(arg) 表示一组形参变量</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">private:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tPFUNC _pfunc;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">};</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">main</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tfunction</span><span style=\\"color: #C678DD\\">&lt;void</span><span style=\\"color: #ABB2BF\\">(string)</span><span style=\\"color: #C678DD\\">&gt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">func1</span><span style=\\"color: #ABB2BF\\">(hello);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #61AFEF\\">func1</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #98C379\\">\\"hello world!\\"</span><span style=\\"color: #ABB2BF\\">);</span><span style=\\"color: #7F848E; font-style: italic\\">//func1.operator()(\\"hello world!\\")</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tmyfunction</span><span style=\\"color: #C678DD\\">&lt;int</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\">)</span><span style=\\"color: #C678DD\\">&gt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">func2</span><span style=\\"color: #ABB2BF\\">(sum);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">func2</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">10</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #D19A66\\">20</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
