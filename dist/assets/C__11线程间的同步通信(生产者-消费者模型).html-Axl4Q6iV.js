import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as i,d as s,e as n,f as a,w as p,a as o}from"./app-9OmaxHRC.js";const B="/assets/e9954209de84498bbba5f89b3152eab6-9gcZky6M.png",r="/assets/27cb6a2ed6d34e6a9ef19f885c459076-75SlskV4.png",y="/assets/144b1b5246644bfeb976d23d7cb19504-ZXYhMfBH.png",d="/assets/b716c10c773944708c037f872956f6dc-vcVhVmuY.png",F="/assets/80e0858ba5d949d885a70c6ea5a5f151-uDMwVh8L.png",u="/assets/image-20240427160328925-bi4051k_.png",A="/assets/c8f2b8efd5ab4194baca3270a418f3d5-8Hy8fLgJ.png",v={},m=o('<h1 id="c-11线程间的同步通信-生产者-消费者模型" tabindex="-1"><a class="header-anchor" href="#c-11线程间的同步通信-生产者-消费者模型" aria-hidden="true">#</a> C++11线程间的同步通信(生产者-消费者模型)</h1><h2 id="_1、多线程编程两个问题" tabindex="-1"><a class="header-anchor" href="#_1、多线程编程两个问题" aria-hidden="true">#</a> 1、多线程编程两个问题</h2><h3 id="_1-1、线程间的互斥" tabindex="-1"><a class="header-anchor" href="#_1-1、线程间的互斥" aria-hidden="true">#</a> 1.1、线程间的互斥</h3><p>竞态条件： 多线程执行的结果出现不一致的情况，由于CPU对线程不同的调用顺序，而产生不同的运行结果。</p>',4),b=s("strong",null,"临界区代码段",-1),D=s("strong",null,"保证临界区代码段原子操作",-1),C=s("p",null,"C++11的mutex底层实现：",-1),_=s("p",null,[n("使用"),s("code",null,"strace ./a.out"),n("跟踪代码，使用C++11提供的mutex，Linux底层使用的也是自己的pthread_mutex互斥锁。")],-1),E=s("h3",{id:"_1-2、线程间的同步通信",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-2、线程间的同步通信","aria-hidden":"true"},"#"),n(" 1.2、线程间的同步通信")],-1),f=s("li",null,[n("线程间不通信的话，每个线程受CPU的调度，没有任何执行上的顺序可言，线程1和线程2是根据"),s("strong",null,"CPU调度算法"),n("来的，两个线程都有可能先运行，是不确定的，线程间的运行顺序是不确定的；")],-1),g=s("strong",null,"每个线程的线程栈信息",-1),h=s("li",null,[n("我们要"),s("strong",null,"保证线程间的运行顺序")],-1),q=s("p",null,[s("strong",null,"通信就是"),n("：")],-1),k=s("ul",null,[s("li",null,[n("线程1和线程2一起运行，线程2要做的事情必须先依赖于线程1完成部分的事情，然后"),s("strong",null,"告诉"),n("线程2这部分东西做好了，线程2就可以继续向下执行了。")]),s("li",null,[n("或者是线程1接下来要做某些操作，这些操作需要线程2把另外一部分事情做完，然后"),s("strong",null,"通知"),n("一下线程1它做完了，然后线程1才能做这些操作。")])],-1),x=s("h2",{id:"_2、生产者-消费者线程模型",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2、生产者-消费者线程模型","aria-hidden":"true"},"#"),n(" 2、生产者-消费者线程模型")],-1),w=o(`<p>如果直接使用queue，使用queue的push和pop操作时，会涉及线程安全问题。我们直接在queue的基础上，直接将其封装成线程安全的queue。 <strong>注意：</strong><u>线程函数代码和后面的main函数代码都是不会变的</u>；</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//这里模拟生产者生产10个物品，消费者消费10个物品</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">producer</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Queue</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">que</span><span style="color:#ABB2BF;">)</span><span style="color:#7F848E;font-style:italic;">//生产者线程</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#61AFEF;">put</span><span style="color:#ABB2BF;">(i);</span></span>
<span class="line"><span style="color:#ABB2BF;">		std::</span><span style="color:#E5C07B;">this_thread</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">sleep_for</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">::</span><span style="color:#E5C07B;">chrono</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">milliseconds</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">));</span><span style="color:#7F848E;font-style:italic;">//睡眠100毫秒 </span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">consumer</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Queue</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">que</span><span style="color:#ABB2BF;">)</span><span style="color:#7F848E;font-style:italic;">//消费者线程</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">		std::</span><span style="color:#E5C07B;">this_thread</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">sleep_for</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">::</span><span style="color:#E5C07B;">chrono</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">milliseconds</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">));</span><span style="color:#7F848E;font-style:italic;">//睡眠100毫秒 </span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	Queue que;</span><span style="color:#7F848E;font-style:italic;">	//两个线程共享的队列 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	std::thread </span><span style="color:#61AFEF;">t1</span><span style="color:#ABB2BF;">(producer, </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">que);</span><span style="color:#7F848E;font-style:italic;">//开启生产者线程 </span></span>
<span class="line"><span style="color:#ABB2BF;">	std::thread </span><span style="color:#61AFEF;">t2</span><span style="color:#ABB2BF;">(consumer, </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">que);</span><span style="color:#7F848E;font-style:italic;">//开启消费者线程 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//主线程等待两个子线程都执行完再结束。</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">t1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(); </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">t2</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>使用lock_guard，不用直接使用互斥锁的lock和unlock方法，<u>通过栈上的对象构造和出作用域析构</u>，来自动调用互斥锁的lock和unlock方法；</strong></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">std::mutex mtx;</span><span style="color:#7F848E;font-style:italic;"> //自定义互斥锁，做线程间的互斥操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//生产者生产一个物品，通知消费者消费一个；消费完了，消费者再通知生产者继续生产物品</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Queue</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">put</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">val</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">	//生产物品</span></span>
<span class="line"><span style="color:#ABB2BF;">        lock_guard</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">std::mutex</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">guard</span><span style="color:#ABB2BF;">(mtx);</span><span style="color:#7F848E;font-style:italic;">//相当于scoped_ptr</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(val);</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;生产者 生产：&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> val </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;号物品&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">() {</span><span style="color:#7F848E;font-style:italic;">	//消费物品</span></span>
<span class="line"><span style="color:#ABB2BF;">        lock_guard</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">std::mutex</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">guard</span><span style="color:#ABB2BF;">(mtx);</span><span style="color:#7F848E;font-style:italic;">	//相当于scoped_ptr</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> val </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">front</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">pop</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;消费者 消费&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> val </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;号物品&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> val;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    queue</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> que;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>封装的queue代码，为什么每次出错都是不一样的？</strong></p>',7),Q=s("blockquote",null,[s("p",null,[s("strong",null,"我们需要：生产者生产一个物品，通知消费者消费一个；消费完了，消费者再通知生产者继续生产物品")])],-1),V=s("p",null,[s("mark",null,[s("strong",null,"条件变量："),n(" 可以精确做线程间的同步通信；")])],-1),z=s("p",null,[s("mark",null,[s("strong",null,"信号量"),n("也可以做，但是做不到生产一个消费一个，这么精确。")])],-1),L=s("figure",null,[s("img",{src:y,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),S=s("strong",null,"注意：",-1),j=s("strong",null,"条件变量cv.wait里面传的是unique_lock，也只能传unique_lock",-1),N=s("strong",null,"因为lock_gard将拷贝构造和赋值重载都delete了",-1),M=o(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;thread&gt;</span><span style="color:#7F848E;font-style:italic;">//多线程的头文件 </span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;mutex&gt;</span><span style="color:#7F848E;font-style:italic;">//互斥锁的头文件 </span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;condition_variable&gt;</span><span style="color:#7F848E;font-style:italic;">//条件变量的头文件 </span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;queue&gt;</span><span style="color:#7F848E;font-style:italic;">//C++ STL所有的容器都不是线程安全</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">namespace</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">std::mutex mtx;</span><span style="color:#7F848E;font-style:italic;">//定义互斥锁，做线程间的互斥操作</span></span>
<span class="line"><span style="color:#ABB2BF;">std::condition_variable cv;</span><span style="color:#7F848E;font-style:italic;">//定义条件变量，做线程间的同步通信操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//生产者生产一个物品，通知消费者消费一个；消费完了，消费者再通知生产者继续生产物品</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Queue</span><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">put</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">val</span><span style="color:#ABB2BF;">)</span><span style="color:#7F848E;font-style:italic;">//生产物品</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		unique_lock</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">std::mutex</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">lck</span><span style="color:#ABB2BF;">(mtx);</span><span style="color:#7F848E;font-style:italic;">//unique_ptr</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">empty</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">			//que不为空，生产者应该通知消费者去消费，消费者消费完了，生产者再继续生产</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">			//生产者线程进入#1等待状态，并且#2把mtx互斥锁释放掉</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">cv</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">wait</span><span style="color:#ABB2BF;">(lck);</span><span style="color:#7F848E;font-style:italic;">//传入一个互斥锁，当前线程挂起，处于等待状态，并且释放当前锁 lck.lock()  lck.unlock</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(val);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		notify_one:通知唤醒另外的一个线程的</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		notify_all:通知唤醒其它所有线程的</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		通知其它所有的线程，我生产了一个物品，你们赶紧消费吧</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		其它线程得到该通知，就会从等待状态 =》 到阻塞状态 =》 但是要获取互斥锁才能继续向下执行</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		*/</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">cv</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">notify_all</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;生产者 生产:&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> val </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;号物品&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">()</span><span style="color:#7F848E;font-style:italic;">//消费物品</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">		//lock_guard&lt;std::mutex&gt; guard(mtx);//相当于scoped_ptr</span></span>
<span class="line"><span style="color:#ABB2BF;">		unique_lock</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">std::mutex</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">lck</span><span style="color:#ABB2BF;">(mtx);</span><span style="color:#7F848E;font-style:italic;">//相当于unique_ptr 更安全 </span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">empty</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#ABB2BF;">		{</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">			//消费者线程发现que是空的，通知生产者线程先生产物品</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">			//#1 挂起，进入等待状态 #2 把互斥锁mutex释放</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">cv</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">wait</span><span style="color:#ABB2BF;">(lck);</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span><span style="color:#7F848E;font-style:italic;">//如果其他线程执行notify了,当前线程就会从等待状态 =》到阻塞状态 =》但是要获取互斥锁才能继续向下执行 </span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> val </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">front</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">pop</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">cv</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">notify_all</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;">//通知其它线程我消费完了，赶紧生产吧</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;消费者 消费:&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> val </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;号物品&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> val;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">	queue</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> que;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//这里模拟生产者生产10个物品，消费者消费10个物品</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">producer</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Queue</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">que</span><span style="color:#ABB2BF;">)</span><span style="color:#7F848E;font-style:italic;">//生产者线程</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#61AFEF;">put</span><span style="color:#ABB2BF;">(i);</span></span>
<span class="line"><span style="color:#ABB2BF;">		std::</span><span style="color:#E5C07B;">this_thread</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">sleep_for</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">::</span><span style="color:#E5C07B;">chrono</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">milliseconds</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">));</span><span style="color:#7F848E;font-style:italic;">//睡眠100毫秒 </span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">consumer</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Queue</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">que</span><span style="color:#ABB2BF;">)</span><span style="color:#7F848E;font-style:italic;">//消费者线程</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i)</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">que</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">		std::</span><span style="color:#E5C07B;">this_thread</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">sleep_for</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">::</span><span style="color:#E5C07B;">chrono</span><span style="color:#ABB2BF;">::</span><span style="color:#61AFEF;">milliseconds</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">));</span><span style="color:#7F848E;font-style:italic;">//睡眠100毫秒 </span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	Queue que;</span><span style="color:#7F848E;font-style:italic;">	//两个线程共享的队列 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	std::thread </span><span style="color:#61AFEF;">t1</span><span style="color:#ABB2BF;">(producer, </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">que);</span><span style="color:#7F848E;font-style:italic;">//开启生产者线程 </span></span>
<span class="line"><span style="color:#ABB2BF;">	std::thread </span><span style="color:#61AFEF;">t2</span><span style="color:#ABB2BF;">(consumer, </span><span style="color:#56B6C2;">&amp;</span><span style="color:#ABB2BF;">que);</span><span style="color:#7F848E;font-style:italic;">//开启消费者线程 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//主线程等待两个子线程都执行完再结束。</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">t1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(); </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">t2</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3、lock-gard和unique-lock" tabindex="-1"><a class="header-anchor" href="#_3、lock-gard和unique-lock" aria-hidden="true">#</a> 3、lock_gard和unique_lock</h2>',3),P=o('<p><strong>lock_gard源码：</strong></p><figure><img src="'+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>unique_lock源码：</strong></p><figure><img src="'+u+'" alt="image-20240427160328925" tabindex="0" loading="lazy"><figcaption>image-20240427160328925</figcaption></figure><h2 id="_4、流程分析" tabindex="-1"><a class="header-anchor" href="#_4、流程分析" aria-hidden="true">#</a> 4、流程分析</h2><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>首先消费者线程拿到互斥锁，生产者线程没有拿到互斥锁，生产者线程处于阻塞状态；</p></li><li><p>消费者线程发现que队列是空的，进入while循环，进入的等待状态，将互斥锁释放（都是由条件变量控制的）；</p></li><li><p>此时生产者线程拿到互斥锁，不进入while循环，生产对象放入que队列中，notify_all通知其他线程，也就是消费者线程，由等待状态进入阻塞状态， 当生产者线程函数完之后，出了函数作用域，将mutex互斥锁释放了，消费者线程拿到锁了，阻塞状态变为运行状态，继续向下执行；</p></li><li><p>消费者线程消费完之后，继续通知生产者，我消费完了。</p></li></ul>',7);function T(U,H){const l=t("font");return c(),i("div",null,[m,s("p",null,[n("发生竞态条件的代码段，称为"),b,n("（只有一个线程可以进来），"),D,n("，"),a(l,{color:"green"},{default:p(()=>[n("通过线程互斥锁mutex，也可以使用轻量级的无锁实现CAS。")]),_:1})]),C,_,E,s("ul",null,[f,s("li",null,[n("所以多线程程序出问题，难以复现，因为谁也不知道当时线程执行的先后顺序，"),s("u",null,[n("我们一般可以得到"),g,n("来分析是否发生"),a(l,{color:"red"},{default:p(()=>[n("死锁")]),_:1}),n("的问题之类的")]),n("。")]),h]),q,k,x,a(l,{color:"red"},{default:p(()=>[n("注意： **C++ STL所有的容器都不是线程安全的**，都需要进行封装。")]),_:1}),w,s("ul",null,[s("li",null,[a(l,{color:"red"},{default:p(()=>[n("消费者消费的比较快，queue为空时，就会出错")]),_:1}),n("；（需要有线程间的通信机制）")])]),Q,V,z,L,s("p",null,[S,n(),a(l,{color:"red"},{default:p(()=>[j]),_:1}),n("，"),N,n("（"),s("u",null,[n("实参到形参是一个"),a(l,{color:"red"},{default:p(()=>[n("拷贝构造")]),_:1}),n("的过程，传不进来")]),n("）")]),M,s("p",null,[n("lock_gard和unique_lock可以看成unique_ptr和scope_ptr之间的关系，"),s("strong",null,[n("lock_gard和unique_lock做的事情是一样的，"),a(l,{color:"cornflowerblue"},{default:p(()=>[n("都是在构造函数中自动执行mutex的lock()函数，在析构函数中自动执行mutex的unlock()函数")]),_:1}),n("。")])]),P])}const J=e(v,[["render",T],["__file","C__11线程间的同步通信(生产者-消费者模型).html.vue"]]);export{J as default};
