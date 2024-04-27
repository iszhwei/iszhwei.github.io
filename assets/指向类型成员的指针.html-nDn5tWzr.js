import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as t,c as i,d as n,e as s,f as l,w as e,a as p}from"./app-9OmaxHRC.js";const r={},B=n("h1",{id:"指向类型成员的指针",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#指向类型成员的指针","aria-hidden":"true"},"#"),s(" 指向类型成员的指针")],-1),d=n("h2",{id:"普通成员变量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#普通成员变量","aria-hidden":"true"},"#"),s(" 普通成员变量")],-1),y=p(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Test</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func</span><span style="color:#ABB2BF;">()</span><span style="color:#7F848E;font-style:italic;">//普通成员方法</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;call Test::func&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">static_func</span><span style="color:#ABB2BF;">()</span><span style="color:#7F848E;font-style:italic;">//静态成员方法</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Test::static_func&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> ma;</span><span style="color:#7F848E;font-style:italic;">//普通成员变量</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&amp;Test::ma</code>类型编译器认为是<u>加了类的作用域</u>，<u>因此我们定义指针时，也需要加上类的作用域，是类作用域里的整型变量</u>。当访问ma时必须给前面加上对象。</p><h3 id="在栈上定义一个对象" tabindex="-1"><a class="header-anchor" href="#在栈上定义一个对象" aria-hidden="true">#</a> 在栈上定义一个对象</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">int main()</span></span>
<span class="line"><span style="color:#abb2bf;">{</span></span>
<span class="line"><span style="color:#abb2bf;">	Test t1;//栈上</span></span>
<span class="line"><span style="color:#abb2bf;">	</span></span>
<span class="line"><span style="color:#abb2bf;">	int Test::*p = &amp;Test::ma;//普通指针指向整型成员变量</span></span>
<span class="line"><span style="color:#abb2bf;">	t1.*p = 20;</span></span>
<span class="line"><span style="color:#abb2bf;">	cout &lt;&lt; t1.*p &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#abb2bf;">	</span></span>
<span class="line"><span style="color:#abb2bf;">	return 0;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在堆上定义一个对象" tabindex="-1"><a class="header-anchor" href="#在堆上定义一个对象" aria-hidden="true">#</a> 在堆上定义一个对象</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	Test </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">t2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Test</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;">//堆上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> Test::</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">p </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">Test::ma;</span><span style="color:#7F848E;font-style:italic;">//普通指针指向整型成员变量</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">t2</span><span style="color:#ABB2BF;">-&gt;*</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">30</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">t2</span><span style="color:#ABB2BF;">-&gt;*</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> t2;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态成员变量" tabindex="-1"><a class="header-anchor" href="#静态成员变量" aria-hidden="true">#</a> 静态成员变量</h2>`,7),v=p(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Test</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">func</span><span style="color:#ABB2BF;">()</span><span style="color:#7F848E;font-style:italic;">//普通成员方法</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;call Test::func&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">static_func</span><span style="color:#ABB2BF;">()</span><span style="color:#7F848E;font-style:italic;">//静态成员方法</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Test::static_func&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> ma;</span><span style="color:#7F848E;font-style:italic;">//普通成员变量</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> mb;</span><span style="color:#7F848E;font-style:italic;">//静态成员变量</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> Test::mb;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">Test::mb;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">p1 </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指向普通成员方法的指针" tabindex="-1"><a class="header-anchor" href="#指向普通成员方法的指针" aria-hidden="true">#</a> 指向普通成员方法的指针</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">Test t1;</span><span style="color:#7F848E;font-style:italic;">//栈上</span></span>
<span class="line"><span style="color:#ABB2BF;">Test </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">t2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Test</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;">//堆上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//指向成员方法的指针</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> (Test::</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">pfunc)() </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">Test::func;</span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">t1</span><span style="color:#ABB2BF;">.*</span><span style="color:#E06C75;">pfunc</span><span style="color:#ABB2BF;">)();</span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">t2</span><span style="color:#ABB2BF;">-&gt;*</span><span style="color:#E06C75;">pfunc</span><span style="color:#ABB2BF;">)();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指向静态成员方法的指针" tabindex="-1"><a class="header-anchor" href="#指向静态成员方法的指针" aria-hidden="true">#</a> 指向静态成员方法的指针</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">Test</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">static_func</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function u(F,b){const a=c("font");return t(),i("div",null,[B,d,n("p",null,[n("strong",null,[s("普通成员变量：我们定义指针指向类的成员变量，"),l(a,{color:"red"},{default:e(()=>[s("前面需要添加类的作用域")]),_:1}),s("。而且"),l(a,{color:"red"},{default:e(()=>[s("必须依赖于对象")]),_:1}),s("。")])]),y,n("p",null,[n("strong",null,[s("静态成员变量："),l(a,{color:"red"},{default:e(()=>[s("不依赖对象")]),_:1}),s("。")])]),v])}const D=o(r,[["render",u],["__file","指向类型成员的指针.html.vue"]]);export{D as default};
