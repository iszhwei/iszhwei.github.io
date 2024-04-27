const s=JSON.parse(`{"key":"v-5b3d8584","path":"/ccpp/15%20%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%BC%98%E5%8C%96/C__%E7%9A%84%E5%8F%B3%E5%80%BC%E5%BC%95%E7%94%A8.html","title":"C++的右值引用的应用","lang":"zh-CN","frontmatter":{"title":"C++的右值引用的应用","icon":"file","order":2,"headerDepth":4,"category":["c/c++"],"tag":["对象优化"],"description":"C++的右值引用的应用 1、CMyStirng代码的问题分析 class CMyString { public: \\tCMyString(const char* str = nullptr) \\t{ \\t\\tcout &lt;&lt; \\"CMyString(const char*)\\" &lt;&lt; endl; \\t\\tif (str != nullptr) \\t\\t{ \\t\\t\\tmptr = new char[strlen(str) + 1]; \\t\\t\\tstrcpy(mptr, str); \\t\\t} \\t\\telse \\t\\t{ \\t\\t\\t// 最少都初始化只有一个\\\\0的字符串，使得不需要对字符串判空操作 \\t\\t\\tmptr = new char[1]; \\t\\t\\t*mptr = '\\\\0'; \\t\\t} \\t} \\t~CMyString() \\t{ \\t\\tcout &lt;&lt; \\"~CMyString\\" &lt;&lt; endl; \\t\\tdelete[]mptr; \\t\\tmptr = nullptr; \\t} \\t// 带左值引用参数的拷贝构造 \\tCMyString(const CMyString&amp; str) \\t{ \\t\\tcout &lt;&lt; \\"CMyString(const CMyString&amp;)\\" &lt;&lt; endl; \\t\\tmptr = new char[strlen(str.mptr) + 1]; \\t\\tstrcpy(mptr, str.mptr); \\t} \\t \\t// 带左值引用参数的赋值重载函数 \\tCMyString&amp; operator=(const CMyString&amp; str) \\t{ \\t\\tcout &lt;&lt; \\"operator=(const CMyString&amp;)\\" &lt;&lt; endl; \\t\\tif (this == &amp;str) \\t\\t\\treturn *this; \\t\\tdelete[]mptr; \\t\\tmptr = new char[strlen(str.mptr) + 1]; \\t\\tstrcpy(mptr, str.mptr); \\t\\treturn *this; \\t} \\t \\tconst char* c_str()const { return mptr; } private: \\tchar* mptr; }; CMyString GetString(CMyString&amp; str) { \\tconst char* pstr = str.c_str(); \\tCMyString tmpStr(pstr); \\treturn tmpStr; } int main() { \\tCMyString str1(\\"aaaaaaaaaaaaaaaaaaaa\\"); \\tCMyString str2; \\tstr2 = GetString(str1); \\tcout &lt;&lt; str2.c_str() &lt;&lt; endl; \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/15%20%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%BC%98%E5%8C%96/C__%E7%9A%84%E5%8F%B3%E5%80%BC%E5%BC%95%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"C++的右值引用的应用"}],["meta",{"property":"og:description","content":"C++的右值引用的应用 1、CMyStirng代码的问题分析 class CMyString { public: \\tCMyString(const char* str = nullptr) \\t{ \\t\\tcout &lt;&lt; \\"CMyString(const char*)\\" &lt;&lt; endl; \\t\\tif (str != nullptr) \\t\\t{ \\t\\t\\tmptr = new char[strlen(str) + 1]; \\t\\t\\tstrcpy(mptr, str); \\t\\t} \\t\\telse \\t\\t{ \\t\\t\\t// 最少都初始化只有一个\\\\0的字符串，使得不需要对字符串判空操作 \\t\\t\\tmptr = new char[1]; \\t\\t\\t*mptr = '\\\\0'; \\t\\t} \\t} \\t~CMyString() \\t{ \\t\\tcout &lt;&lt; \\"~CMyString\\" &lt;&lt; endl; \\t\\tdelete[]mptr; \\t\\tmptr = nullptr; \\t} \\t// 带左值引用参数的拷贝构造 \\tCMyString(const CMyString&amp; str) \\t{ \\t\\tcout &lt;&lt; \\"CMyString(const CMyString&amp;)\\" &lt;&lt; endl; \\t\\tmptr = new char[strlen(str.mptr) + 1]; \\t\\tstrcpy(mptr, str.mptr); \\t} \\t \\t// 带左值引用参数的赋值重载函数 \\tCMyString&amp; operator=(const CMyString&amp; str) \\t{ \\t\\tcout &lt;&lt; \\"operator=(const CMyString&amp;)\\" &lt;&lt; endl; \\t\\tif (this == &amp;str) \\t\\t\\treturn *this; \\t\\tdelete[]mptr; \\t\\tmptr = new char[strlen(str.mptr) + 1]; \\t\\tstrcpy(mptr, str.mptr); \\t\\treturn *this; \\t} \\t \\tconst char* c_str()const { return mptr; } private: \\tchar* mptr; }; CMyString GetString(CMyString&amp; str) { \\tconst char* pstr = str.c_str(); \\tCMyString tmpStr(pstr); \\treturn tmpStr; } int main() { \\tCMyString str1(\\"aaaaaaaaaaaaaaaaaaaa\\"); \\tCMyString str2; \\tstr2 = GetString(str1); \\tcout &lt;&lt; str2.c_str() &lt;&lt; endl; \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"对象优化"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++的右值引用的应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"1、CMyStirng代码的问题分析","slug":"_1、cmystirng代码的问题分析","link":"#_1、cmystirng代码的问题分析","children":[{"level":3,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":3,"title":"operator+()效率问题","slug":"operator-效率问题","link":"#operator-效率问题","children":[]}]},{"level":2,"title":"分析下面打印什么","slug":"分析下面打印什么","link":"#分析下面打印什么","children":[]}],"git":{},"readingTime":{"minutes":4.65,"words":1396},"filePathRelative":"ccpp/15 对象的优化/C++的右值引用.md","excerpt":"<h1> C++的右值引用的应用</h1>\\n<h2> 1、CMyStirng代码的问题分析</h2>\\n<div class=\\"language-c++ line-numbers-mode\\" data-ext=\\"c++\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">CMyString</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">public:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #61AFEF\\">CMyString</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">char*</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">str</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">nullptr</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"CMyString(const char*)\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (str </span><span style=\\"color: #C678DD\\">!=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">nullptr</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t\\tmptr </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">new</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #61AFEF\\">strlen</span><span style=\\"color: #ABB2BF\\">(str) </span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t\\t</span><span style=\\"color: #61AFEF\\">strcpy</span><span style=\\"color: #ABB2BF\\">(mptr, str);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">else</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">\\t\\t\\t// 最少都初始化只有一个\\\\0的字符串，使得不需要对字符串判空操作</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t\\tmptr </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">new</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t\\t</span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\">mptr </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'</span><span style=\\"color: #56B6C2\\">\\\\0</span><span style=\\"color: #98C379\\">'</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #61AFEF\\">~CMyString</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"~CMyString\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">delete</span><span style=\\"color: #ABB2BF\\">[]mptr;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\tmptr </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">nullptr</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">\\t// 带左值引用参数的拷贝构造</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #61AFEF\\">CMyString</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">CMyString</span><span style=\\"color: #C678DD\\">&amp;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">str</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"CMyString(const CMyString&amp;)\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\tmptr </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">new</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #61AFEF\\">strlen</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">str</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">mptr</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #61AFEF\\">strcpy</span><span style=\\"color: #ABB2BF\\">(mptr, </span><span style=\\"color: #E5C07B\\">str</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">mptr</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">\\t// 带左值引用参数的赋值重载函数</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #E5C07B\\">CMyString</span><span style=\\"color: #C678DD\\">&amp;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">operator</span><span style=\\"color: #ABB2BF\\">=(</span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">CMyString</span><span style=\\"color: #C678DD\\">&amp;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">str</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"operator=(const CMyString&amp;)\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E5C07B\\">this</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">&amp;</span><span style=\\"color: #ABB2BF\\">str)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t\\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #E5C07B\\">this</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">delete</span><span style=\\"color: #ABB2BF\\">[]mptr;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\tmptr </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">new</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">char</span><span style=\\"color: #ABB2BF\\">[</span><span style=\\"color: #61AFEF\\">strlen</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">str</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">mptr</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">+</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">];</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #61AFEF\\">strcpy</span><span style=\\"color: #ABB2BF\\">(mptr, </span><span style=\\"color: #E5C07B\\">str</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E06C75\\">mptr</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t\\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #E5C07B\\">this</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">char*</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">c_str</span><span style=\\"color: #ABB2BF\\">()</span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> { </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> mptr; }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">private:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">char</span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\"> mptr;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">};</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #E5C07B\\">CMyString</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">GetString</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">CMyString</span><span style=\\"color: #C678DD\\">&amp;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">str</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">char</span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\"> pstr </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">str</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">c_str</span><span style=\\"color: #ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tCMyString </span><span style=\\"color: #61AFEF\\">tmpStr</span><span style=\\"color: #ABB2BF\\">(pstr);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> tmpStr;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">main</span><span style=\\"color: #ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tCMyString </span><span style=\\"color: #61AFEF\\">str1</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #98C379\\">\\"aaaaaaaaaaaaaaaaaaaa\\"</span><span style=\\"color: #ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tCMyString str2;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tstr2 </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">GetString</span><span style=\\"color: #ABB2BF\\">(str1);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\tcout </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">str2</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">c_str</span><span style=\\"color: #ABB2BF\\">() </span><span style=\\"color: #C678DD\\">&lt;&lt;</span><span style=\\"color: #ABB2BF\\"> endl;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{s as data};
