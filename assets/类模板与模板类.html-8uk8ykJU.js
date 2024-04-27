const s=JSON.parse('{"key":"v-ca1f584c","path":"/ccpp/04%20%E6%A8%A1%E6%9D%BF/%E7%B1%BB%E6%A8%A1%E6%9D%BF%E4%B8%8E%E6%A8%A1%E6%9D%BF%E7%B1%BB.html","title":"类模板与模板类","lang":"zh-CN","frontmatter":{"title":"类模板与模板类","icon":"file","order":2,"headerDepth":4,"category":["c/c++"],"tag":["模板"],"description":"类模板与模板类 类模板：仅仅的类的抽象 类模板的实例化就是 使用与函数模板也差不多，只是要，直接使用例子看类模板。 //类模板 template &lt;typename T, size_t kSize = 10&gt;//类型参数T与非类型参数kSize class Stack { public: &nbsp; &nbsp;Stack() &nbsp; : _top(-1) &nbsp; , _data(new T[kSize]()) &nbsp; { &nbsp; } &nbsp; &nbsp;~Stack(); &nbsp; &nbsp;bool empty() const; &nbsp; &nbsp;bool full() const; &nbsp; &nbsp;void push(const T &amp;t); &nbsp; &nbsp;void pop(); &nbsp; &nbsp;T top() const; private: &nbsp; &nbsp;int _top; &nbsp; &nbsp;T *_data; &nbsp; &nbsp;}; //类模板在类外面定义成员函数时候需要注意，模板是有类型的，需要使用参数加类型 template &lt;typename T, size_t kSize&gt; Stack&lt;T, kSize&gt;::~Stack() { &nbsp; &nbsp;if(_data) &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp;delete [] _data; &nbsp; &nbsp; &nbsp; &nbsp;_data = nullptr; &nbsp; } } template &lt;typename T, size_t kSize&gt; bool Stack&lt;T, kSize&gt;::empty() const { &nbsp; &nbsp;return -1 == _top;//_top = -1 } template &lt;typename T, size_t kSize&gt; bool Stack&lt;T, kSize&gt;::full() const { &nbsp; &nbsp;return _top == kSize - 1; } template &lt;typename T, size_t kSize&gt; void Stack&lt;T, kSize&gt;::push(const T &amp;t) { &nbsp; &nbsp;if(!full()) &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp;_data[++_top] = t; &nbsp; } &nbsp; &nbsp;else &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp;cout &lt;&lt; \\"The Stack is full, cannot push any data\\" &lt;&lt; endl; &nbsp; } } template &lt;typename T, size_t kSize&gt; void Stack&lt;T, kSize&gt;::pop() { &nbsp; &nbsp;if(!empty()) &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp;--_top; &nbsp; } &nbsp; &nbsp;else &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp;cout &lt;&lt; \\"The Stack is empty\\" &lt;&lt; endl; &nbsp; } } template &lt;typename T, size_t kSize&gt; T Stack&lt;T, kSize&gt;::top() const { &nbsp; &nbsp;return _data[_top]; } void test() { &nbsp; &nbsp;Stack&lt;int, 8&gt; st; } void test1() { &nbsp; &nbsp;Stack&lt;string&gt; st; }","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/04%20%E6%A8%A1%E6%9D%BF/%E7%B1%BB%E6%A8%A1%E6%9D%BF%E4%B8%8E%E6%A8%A1%E6%9D%BF%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"类模板与模板类"}],["meta",{"property":"og:description","content":"类模板与模板类 类模板：仅仅的类的抽象 类模板的实例化就是 使用与函数模板也差不多，只是要，直接使用例子看类模板。 //类模板 template &lt;typename T, size_t kSize = 10&gt;//类型参数T与非类型参数kSize class Stack { public: &nbsp; &nbsp;Stack() &nbsp; : _top(-1) &nbsp; , _data(new T[kSize]()) &nbsp; { &nbsp; } &nbsp; &nbsp;~Stack(); &nbsp; &nbsp;bool empty() const; &nbsp; &nbsp;bool full() const; &nbsp; &nbsp;void push(const T &amp;t); &nbsp; &nbsp;void pop(); &nbsp; &nbsp;T top() const; private: &nbsp; &nbsp;int _top; &nbsp; &nbsp;T *_data; &nbsp; &nbsp;}; //类模板在类外面定义成员函数时候需要注意，模板是有类型的，需要使用参数加类型 template &lt;typename T, size_t kSize&gt; Stack&lt;T, kSize&gt;::~Stack() { &nbsp; &nbsp;if(_data) &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp;delete [] _data; &nbsp; &nbsp; &nbsp; &nbsp;_data = nullptr; &nbsp; } } template &lt;typename T, size_t kSize&gt; bool Stack&lt;T, kSize&gt;::empty() const { &nbsp; &nbsp;return -1 == _top;//_top = -1 } template &lt;typename T, size_t kSize&gt; bool Stack&lt;T, kSize&gt;::full() const { &nbsp; &nbsp;return _top == kSize - 1; } template &lt;typename T, size_t kSize&gt; void Stack&lt;T, kSize&gt;::push(const T &amp;t) { &nbsp; &nbsp;if(!full()) &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp;_data[++_top] = t; &nbsp; } &nbsp; &nbsp;else &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp;cout &lt;&lt; \\"The Stack is full, cannot push any data\\" &lt;&lt; endl; &nbsp; } } template &lt;typename T, size_t kSize&gt; void Stack&lt;T, kSize&gt;::pop() { &nbsp; &nbsp;if(!empty()) &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp;--_top; &nbsp; } &nbsp; &nbsp;else &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp;cout &lt;&lt; \\"The Stack is empty\\" &lt;&lt; endl; &nbsp; } } template &lt;typename T, size_t kSize&gt; T Stack&lt;T, kSize&gt;::top() const { &nbsp; &nbsp;return _data[_top]; } void test() { &nbsp; &nbsp;Stack&lt;int, 8&gt; st; } void test1() { &nbsp; &nbsp;Stack&lt;string&gt; st; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"模板"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类模板与模板类\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"模板的嵌套","slug":"模板的嵌套","link":"#模板的嵌套","children":[]}],"git":{},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"ccpp/04 模板/类模板与模板类.md","excerpt":"<h1> 类模板与模板类</h1>\\n<p><strong>类模板：仅仅的类的抽象</strong></p>\\n<p><strong>类模板的实例化就是</strong></p>\\n<p><u>使用与函数模板也差不多，只是要</u>，直接使用例子看类模板。</p>\\n<div class=\\"language-c++ line-numbers-mode\\" data-ext=\\"c++\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//类模板</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\"> &lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">10</span><span style=\\"color: #ABB2BF\\">&gt;</span><span style=\\"color: #7F848E; font-style: italic\\">//类型参数T与非类型参数kSize</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Stack</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">public:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #61AFEF\\">Stack</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  : </span><span style=\\"color: #61AFEF\\">_top</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  , </span><span style=\\"color: #61AFEF\\">_data</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">new</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">[kSize]())</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #61AFEF\\">~Stack</span><span style=\\"color: #ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">bool</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">empty</span><span style=\\"color: #ABB2BF\\">() </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">bool</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">full</span><span style=\\"color: #ABB2BF\\">() </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">push</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&amp;</span><span style=\\"color: #E06C75; font-style: italic\\">t</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">pop</span><span style=\\"color: #ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">top</span><span style=\\"color: #ABB2BF\\">() </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">private:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> _top;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;T </span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\">_data;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;};</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//类模板在类外面定义成员函数时候需要注意，模板是有类型的，需要使用参数加类型</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\"> &lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">Stack&lt;</span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;::</span><span style=\\"color: #56B6C2\\">~</span><span style=\\"color: #61AFEF\\">Stack</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\">(_data)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">delete</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">[]</span><span style=\\"color: #ABB2BF\\"> _data;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp; &nbsp; &nbsp;_data </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">nullptr</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\"> &lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">bool</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Stack</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;::</span><span style=\\"color: #61AFEF\\">empty</span><span style=\\"color: #ABB2BF\\">() </span><span style=\\"color: #C678DD\\">const</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">==</span><span style=\\"color: #ABB2BF\\"> _top;</span><span style=\\"color: #7F848E; font-style: italic\\">//_top = -1</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\"> &lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">bool</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Stack</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;::</span><span style=\\"color: #61AFEF\\">full</span><span style=\\"color: #ABB2BF\\">() </span><span style=\\"color: #C678DD\\">const</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> _top </span><span style=\\"color: #C678DD\\">==</span><span style=\\"color: #ABB2BF\\"> kSize </span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\"> &lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Stack</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;::</span><span style=\\"color: #61AFEF\\">push</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&amp;</span><span style=\\"color: #E06C75; font-style: italic\\">t</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #56B6C2\\">!</span><span style=\\"color: #61AFEF\\">full</span><span style=\\"color: #ABB2BF\\">())</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span style=\\"color: #E5C07B\\">_data</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\">_top] </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> t;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">else</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp; &nbsp; &nbsp;cout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"The Stack is full, cannot push any data\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\"> &lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Stack</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;::</span><span style=\\"color: #61AFEF\\">pop</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #56B6C2\\">!</span><span style=\\"color: #61AFEF\\">empty</span><span style=\\"color: #ABB2BF\\">())</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">--</span><span style=\\"color: #ABB2BF\\">_top;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">else</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp; &nbsp; &nbsp;cout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"The Stack is empty\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp;  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">template</span><span style=\\"color: #ABB2BF\\"> &lt;</span><span style=\\"color: #C678DD\\">typename</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #C678DD\\">size_t</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Stack</span><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E5C07B\\">T</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E5C07B\\">kSize</span><span style=\\"color: #ABB2BF\\">&gt;::</span><span style=\\"color: #61AFEF\\">top</span><span style=\\"color: #ABB2BF\\">() </span><span style=\\"color: #C678DD\\">const</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">_data</span><span style=\\"color: #ABB2BF\\">[_top];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">test</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;Stack</span><span style=\\"color: #C678DD\\">&lt;int</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #D19A66\\">8</span><span style=\\"color: #C678DD\\">&gt;</span><span style=\\"color: #ABB2BF\\"> st;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">test1</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\"> &nbsp; &nbsp;Stack</span><span style=\\"color: #C678DD\\">&lt;</span><span style=\\"color: #ABB2BF\\">string</span><span style=\\"color: #C678DD\\">&gt;</span><span style=\\"color: #ABB2BF\\"> st;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
