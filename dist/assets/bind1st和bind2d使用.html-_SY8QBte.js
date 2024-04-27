import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as c,c as B,d as s,e as n,f as l,w as r,a as p}from"./app-9OmaxHRC.js";const i="/assets/1c4fbcdb1d3145c19ad8ddc56db43cd4-NfIH7HNi.png",y="/assets/48b329f67f534b2588e053e1c39d99f5-gO7mvUUI.png",d="/assets/5e42c08abe9d4850af8bb2088e62e746-XmQBBrei.png",F="/assets/c2db8264670e48e6aa81a6b81e4d1828-4bw61PzZ.png",A={},v=s("h1",{id:"bind1st和bind2d使用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bind1st和bind2d使用","aria-hidden":"true"},"#"),n(" bind1st和bind2d使用")],-1),m=s("li",null,[s("strong",null,"bind1st和bind2d是STL中的；")],-1),u=s("li",null,[s("strong",null,"bind1st和bind2d作用："),n(" 将二元函数对象的一个参数绑定，使其变为一元函数对象；")],-1),b=s("li",null,[s("strong",null,"缺点："),n(" 只能用于二元函数对象。")],-1),D=s("strong",null,"函数对象：",-1),C={href:"https://so.csdn.net/so/search?q=%E9%87%8D%E8%BD%BD%E5%87%BD%E6%95%B0&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},E=p(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">functional</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">包含c</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">库中的所有的函数对象 bind1st</span></span>
<span class="line"><span style="color:#E06C75;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">algorithm</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">包含了c</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">库中的所有的泛型算法</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="例1—改变排序顺序" tabindex="-1"><a class="header-anchor" href="#例1—改变排序顺序" aria-hidden="true">#</a> 例1—改变排序顺序</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;vector&gt;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;functional&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;algorithm&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;ctime&gt;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">namespace</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Container</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">showContainer</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Container</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">con</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> Container::</span><span style="color:#E5C07B;">iterator</span><span style="color:#ABB2BF;"> it </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">con</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//编译器是从上到下编译的，这个还没有实例化，它不知道这个名字作用域后面的iterator是类型还是变量</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//typename告知编译器后面类型的作用域后面是类型</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (; it </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">con</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">(); </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">it)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">it </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> vec;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">srand</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">time</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push_back</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">rand</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">%</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">//随机出来的数字，并不是有序的 </span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">showContainer</span><span style="color:#ABB2BF;">(vec);</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">sort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">());</span><span style="color:#7F848E;font-style:italic;">//默认小到大排序，传入的是起始和末尾的后继的迭代器</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">showContainer</span><span style="color:#ABB2BF;">(vec);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//greater 二元函数对象</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">sort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">(), </span><span style="color:#61AFEF;">greater</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;());</span><span style="color:#7F848E;font-style:italic;">//大到小排序</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">showContainer</span><span style="color:#ABB2BF;">(vec);</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>greater是一个二元函数对象：</strong>（因为一次需要从容器中拿2个函数对象出来）</p><figure><img src="`+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="例2—将70按顺序插入到vec容器中" tabindex="-1"><a class="header-anchor" href="#例2—将70按顺序插入到vec容器中" aria-hidden="true">#</a> 例2—将70按顺序插入到vec容器中</h2><p>问题：将70按顺序插入到vec容器中</p><p>使用find_if函数需要传入一个**一元函数对象（**一次从容器中拿出一个元素和70进行比较 ）</p>',10),f=p('<p><strong>使用绑定器，将二元函数对象转换为一元函数对象；</strong></p><figure><img src="'+F+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;vector&gt;</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;functional&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;algorithm&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;ctime&gt;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">namespace</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Container</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">showContainer</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Container</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">con</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> Container::</span><span style="color:#E5C07B;">iterator</span><span style="color:#ABB2BF;"> it </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">con</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (; it </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">con</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">(); </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">it)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">it </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot; &quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Iterator</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Compare</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#E5C07B;">Iterator</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">my_find_if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Iterator</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">first</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">Iterator</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">last</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">Compare</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">comp</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//遍历这2个迭代器之间的元素，如果满足函数对象的运算，就返回当前迭代器，如果都不满足，返回end()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (; first </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> last; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">first)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#61AFEF;">comp</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">first))</span><span style="color:#7F848E;font-style:italic;">//comp.operator()(*first)一元函数对象，因为要从容器拿1个元素和它指定的元素比较</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		//my_find_if需要1元函数对象，而在库里面都是二元的</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> first;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> last;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Compare</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_mybind1st</span><span style="color:#7F848E;font-style:italic;">//绑定器是函数对象的一个应用</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">_mybind1st</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Compare</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">comp</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">val</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">		:</span><span style="color:#61AFEF;">_comp</span><span style="color:#ABB2BF;">(comp), </span><span style="color:#61AFEF;">_val</span><span style="color:#ABB2BF;">(val)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">operator</span><span style="color:#ABB2BF;">()(</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">second</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_comp</span><span style="color:#ABB2BF;">(_val, second);</span><span style="color:#7F848E;font-style:italic;">//greater</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">	Compare _comp;</span></span>
<span class="line"><span style="color:#ABB2BF;">	T _val;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//mybind1st(greater&lt;int&gt;(), 70)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//mybind1st就是将函数对象封装了一下。</span></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Compare</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#E5C07B;">_mybind1st</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Compare</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">mybind1st</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Compare</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">comp</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">val</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//直接使用函数模板，好处是，可以进行类型的推演</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_mybind1st</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">Compare</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;(comp, val);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> vec;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">srand</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">time</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push_back</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">rand</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">%</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">showContainer</span><span style="color:#ABB2BF;">(vec);</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">sort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">());</span><span style="color:#7F848E;font-style:italic;">//默认小到大排序</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">showContainer</span><span style="color:#ABB2BF;">(vec);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//greater 二元函数对象</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">sort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">(), </span><span style="color:#61AFEF;">greater</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;());</span><span style="color:#7F848E;font-style:italic;">//大到小排序</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">showContainer</span><span style="color:#ABB2BF;">(vec);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	把70按顺序插入到vec容器当中   找第一个小于70的数字</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	operator()(const T &amp;val)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	greater   a &gt; b</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	less      a &lt; b</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	绑定器 + 二元函数对象 =》 一元函数对象</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	bind1st: + greater bool operator()(70, const _Ty&amp; _Right)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	bind2nd: + less bool operator()(const _Ty&amp; _Left, 70)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	*/</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">auto</span><span style="color:#ABB2BF;"> it1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">my_find_if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#61AFEF;">mybind1st</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">greater</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;(), </span><span style="color:#D19A66;">70</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//auto it1 = my_find_if(vec.begin(), vec.end(),bind2nd(less&lt;int&gt;(), 70));</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (it1 </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">vec</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">insert</span><span style="color:#ABB2BF;">(it1, </span><span style="color:#D19A66;">70</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">showContainer</span><span style="color:#ABB2BF;">(vec);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(_,h){const o=a("ExternalLinkIcon"),e=a("font");return c(),B("div",null,[v,s("ul",null,[m,u,b,s("li",null,[D,n(" 对象拥有小括号"),s("a",C,[n("重载函数"),l(o)]),n("的对象。")])]),E,s("p",null,[n("注意："),s("strong",null,[n("库里面提供的函数对象"),l(e,{color:"red"},{default:r(()=>[n("都是二元的")]),_:1})]),n("，没有办法直接使用；怎么办？")]),f])}const T=t(A,[["render",g],["__file","bind1st和bind2d使用.html.vue"]]);export{T as default};
