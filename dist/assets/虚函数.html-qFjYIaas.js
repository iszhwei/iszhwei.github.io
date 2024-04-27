import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as r,d as n,e as s,f as a,w as e,a as o}from"./app-9OmaxHRC.js";const c="/assets/image-20240413205248515-3tlhyGaW.png",B="/assets/70-4vkRWhw6.png",d={},u=o(`<h1 id="虚函数" tabindex="-1"><a class="header-anchor" href="#虚函数" aria-hidden="true">#</a> 虚函数</h1><h2 id="虚函数的定义" tabindex="-1"><a class="header-anchor" href="#虚函数的定义" aria-hidden="true">#</a> 虚函数的定义</h2><p>虚函数就是在<u>基类中<strong>被声明为<code>virtual</code></strong>，并在一个或多个<strong>派生类中被重新定义的成员函数</strong></u>。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 类内部</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> 类名 </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> 返回类型 函数名(参数表)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        //...</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//类之外</span></span>
<span class="line"><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> 返回类型 类名::函数名(参数表)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //...</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="派生类对虚函数的重定义" tabindex="-1"><a class="header-anchor" href="#派生类对虚函数的重定义" aria-hidden="true">#</a> 派生类对虚函数的重定义</h2><p><u>如果一个<strong>基类的成员函数定义为虚函数</strong>，那么它在所有派生类中也保持为虚函数，<strong>即使在派生类中省略了virtual关键字，也仍然是虚函数</strong></u>。</p>`,6),y=n("u",null,[s("当一个基类中设有虚函数，而一个派生类继承了该基类，并对虚函数进行了重定义(重写函数体)，我们称之为"),n("strong",null,"覆盖"),s("(override)")],-1),v=o(`<p>重定义的格式要求：</p><ul><li>与基类的虚函数有相同的<strong>参数列表</strong>和<strong>返回类型</strong></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Base</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">display</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {   </span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Base::display()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;  </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Base::print()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;    </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Derived</span></span>
<span class="line"><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Base</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">virtual</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">display</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    {   </span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Derived::display()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;   </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Base</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;">pbase</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">pbase</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#61AFEF;">display</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    Base base;</span></span>
<span class="line"><span style="color:#ABB2BF;">    Derived derived;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">base);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">derived);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，对于test()函数，如果不管测试的结果，<u>从其实现来看，通过类Base的指针pbase只能调用到Base类型的display函数</u>；但最终的结果是25行的test调用，最终会调用到Derived类的display函数，这里就体现出虚函数的作用了，这是怎么做到的呢，或者说虚函数底层是的怎么实现的呢？</p><h2 id="虚函数的实现机制🍗🍗🍗" tabindex="-1"><a class="header-anchor" href="#虚函数的实现机制🍗🍗🍗" aria-hidden="true">#</a> 虚函数的实现机制🍗🍗🍗</h2><p>虚函数的实现是怎样的呢？简单来说，就是通过一张<strong>虚函数表</strong>（Virtual Fucntion Table）实现的。</p>`,6),F=n("strong",null,"类中定义",-1),A=n("strong",null,"虚函数",-1),_=n("strong",null,"编译阶段",-1),b=n("strong",null,"类创建的对象",-1),m=n("strong",null,"开始位置",-1),h=n("strong",null,"虚函数指针（vfptr）",-1),g=n("strong",null,"虚函数表",-1),D=n("strong",null,"存放",-1),f=n("strong",null,"虚函数的入口地址",-1),C=n("figure",null,[n("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),E=n("figure",null,[n("img",{src:B,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),x=n("h3",{id:"虚函数描述、特点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#虚函数描述、特点","aria-hidden":"true"},"#"),s(" 虚函数描述、特点：")],-1),k=n("ul",null,[n("li",null,[n("u",null,"在编译时，一个类的虚函数表就确定了"),s("，这也是为什么它放在了"),n("strong",null,"只读数据段"),s("中")])],-1),q=n("u",null,"对象",-1),V=n("u",null,"开始部分",-1),N=n("u",null,"存储一个vfptr虚函数指针，指向相应类型的虚函数表vftable",-1),T=n("li",null,[s("如果派生类中的方法和基类继承来的某个方法，"),n("strong",null,"返回值、函数名、参数列表都相同"),s("，而且"),n("strong",null,"基类的方法是virtual虚函数"),s("，那么派生类的这个方法自动处理成虚函数，即覆盖关系。")],-1),w=o('<h2 id="虚函数机制是如何被激活的呢-或者说动态多态是怎么表现出来的呢" tabindex="-1"><a class="header-anchor" href="#虚函数机制是如何被激活的呢-或者说动态多态是怎么表现出来的呢" aria-hidden="true">#</a> 虚函数机制是如何被激活的呢，或者说动态多态是怎么表现出来的呢？</h2><p>从上面的例子，可以得出结论：</p><ol><li><strong>基类定义虚函数</strong></li><li><strong>派生类重定义（覆盖、重写）虚函数</strong></li><li><strong>创建派生类对象</strong></li><li><strong>基类的指针指向派生类对象</strong></li><li><strong>基类指针调用虚函数</strong></li></ol>',3);function z(R,W){const l=t("font");return i(),r("div",null,[u,n("p",null,[y,s(". 这里的"),n("strong",null,[s("覆盖指的是"),a(l,{color:"green"},{default:e(()=>[s("派生类的虚函数表")]),_:1}),s("中相应"),a(l,{color:"green"},{default:e(()=>[s("虚函数的入口地址")]),_:1}),s("被覆盖")]),s("。")]),v,n("p",null,[s("具体地讲，当"),n("u",null,[F,s("了一个"),A,s("后，"),a(l,{color:"red"},{default:e(()=>[_]),_:1}),s("编译器会在该"),b,s("的存储布局的"),m,s("产生一个"),h,s("，该虚函数指针指向了一张"),g,s("，而该虚函数表就像一个数组，表中"),D,s("的就是各"),f]),s("。如下图")]),C,E,x,n("ol",null,[n("li",null,[s("一个类里面定义了虚函数，那么"),a(l,{color:"red"},{default:e(()=>[s("编译阶段")]),_:1}),s("，编译器需"),a(l,{color:"red"},{default:e(()=>[s("给这个类")]),_:1}),s("类型产生一个"),a(l,{color:"red"},{default:e(()=>[s("唯一的")]),_:1}),s("vftable虚函数表。虚函数表中主要存储的内容就是"),a(l,{color:"green"},{default:e(()=>[s("RTTI指针")]),_:1}),s("和"),a(l,{color:"green"},{default:e(()=>[s("虚函数的地址")]),_:1}),s("。当程序运行时，每一张虚函数表都会加载到内存的"),a(l,{color:"red"},{default:e(()=>[s(".rodata区(只读数据区)")]),_:1}),k]),n("li",null,[s("一个类里面定义了虚函数，那么这个类定义的"),q,s("，其"),a(l,{color:"red"},{default:e(()=>[s("运行时")]),_:1}),s("，内存中"),V,s("，多"),N,s("。一个类型定义的"),a(l,{color:"red"},{default:e(()=>[s("n个对象它们的vfptr指向都是同一张虚函数表")]),_:1}),s("。")]),n("li",null,[s("一个类里面"),a(l,{color:"red"},{default:e(()=>[s("虚函数的个数不影响的对象内存大小，影响的是虚函数表的大小")]),_:1}),s("。")]),T]),w])}const S=p(d,[["render",z],["__file","虚函数.html.vue"]]);export{S as default};
