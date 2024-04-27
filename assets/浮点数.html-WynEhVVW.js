const e=JSON.parse('{"key":"v-63c16f9b","path":"/ccpp/01%20c%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80/%E6%B5%AE%E7%82%B9%E6%95%B0.html","title":"浮点数","lang":"zh-CN","frontmatter":{"title":"浮点数","icon":"file","order":10,"headerDepth":4,"category":["c/c++"],"tag":["c基础"],"description":"浮点数 使用浮点数直接使用 double 即可 浮点数字面值表示方法 小数形式：0.123 指数形式：3e-3（为3 * 10-3 ，即0.003） 注意： #include &lt;stdio.h&gt; //#define PI 3.14 //#define PI 0.314E1 //#define PI 0.314e1 #define PI 31.4e-1 //#define PI 31.4E0.5 e后面只能写整数 int main() { printf(\\"PI = %f\\\\n\\",PI); }","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/ccpp/01%20c%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80/%E6%B5%AE%E7%82%B9%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"浮点数"}],["meta",{"property":"og:description","content":"浮点数 使用浮点数直接使用 double 即可 浮点数字面值表示方法 小数形式：0.123 指数形式：3e-3（为3 * 10-3 ，即0.003） 注意： #include &lt;stdio.h&gt; //#define PI 3.14 //#define PI 0.314E1 //#define PI 0.314e1 #define PI 31.4e-1 //#define PI 31.4E0.5 e后面只能写整数 int main() { printf(\\"PI = %f\\\\n\\",PI); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"c基础"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"浮点数\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"浮点数字面值表示方法","slug":"浮点数字面值表示方法","link":"#浮点数字面值表示方法","children":[]},{"level":2,"title":"浮点数的存储方式","slug":"浮点数的存储方式","link":"#浮点数的存储方式","children":[]},{"level":2,"title":"浮点数的精度丢失问题","slug":"浮点数的精度丢失问题","link":"#浮点数的精度丢失问题","children":[]}],"git":{},"readingTime":{"minutes":1.61,"words":484},"filePathRelative":"ccpp/01 c语言基础/浮点数.md","excerpt":"<h1> 浮点数</h1>\\n<blockquote>\\n<p>使用浮点数直接使用 double 即可</p>\\n</blockquote>\\n<!--more-->\\n<h2> 浮点数字面值表示方法</h2>\\n<ol>\\n<li>小数形式：0.123</li>\\n<li>指数形式：3e-3（为3 * 10<sup>-3</sup> ，即0.003）</li>\\n</ol>\\n<p>注意：</p>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">#include</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//#define PI 3.14</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//#define PI 0.314E1</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//#define PI 0.314e1</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">#define</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">PI</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">31.4</span><span style=\\"color: #E06C75\\">e</span><span style=\\"color: #ABB2BF\\">-</span><span style=\\"color: #D19A66\\">1</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">//#define PI 31.4E0.5 e后面只能写整数</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">main</span><span style=\\"color: #ABB2BF\\">() {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #61AFEF\\">printf</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #98C379\\">\\"PI = </span><span style=\\"color: #D19A66\\">%f</span><span style=\\"color: #56B6C2\\">\\\\n</span><span style=\\"color: #98C379\\">\\"</span><span style=\\"color: #ABB2BF\\">,PI);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
