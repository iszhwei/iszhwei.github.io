import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as e,b as t,f as B,w as c,d as s,e as n,a as r}from"./app-9OmaxHRC.js";const i={},y=s("p",null,[n("将⼀个⼤的⽆序数组有序，我们可以"),s("u",null,"把⼤的数组分成两个，然后对这两个数组分别进⾏排序，之后在把这两个数组"),s("u",null,"合并成⼀个有序的数组。"),n("由于两个⼩的数组都是有序的，所以在合并的时候是很快的。 通过递归的⽅式将⼤的数组⼀直分割，直到数组的⼤⼩为 1，此时只有⼀个元素，那么该数组就是有序的了，之后 再把两个数组⼤⼩为1的合并成⼀个⼤⼩为2的，再把两个⼤⼩为2的合并成4的 … 直到全部⼩的数组合并起来。")],-1),F=s("p",null,[n("该算法是采⽤"),s("strong",null,"分治法"),n("（Divide and Conquer）的⼀个⾮常典型的应⽤。将已有序的⼦序列合并，得到完全有序的序列；即先使每个⼦序列有序，再使⼦序列段间有序。"),s("u",null,"若将两个有序表合并成⼀个有序表，称为2-路归并"),n("。")],-1),d=s("p",null,[s("strong",null,"算法思想"),n(" 1、把⻓度为n的输⼊序列分成两个⻓度为n/2的⼦序列； 2、对这两个⼦序列分别采⽤归并排序； 3、 将两个排序好的⼦序列合并成⼀个最终的排序序列。[leetcode 21. 合并两个有序链表](# leetcode 21. 合并两个有序链表)")],-1),A=s("p",null,[s("strong",null,"性能分析")],-1),D=s("p",null,"分组的深度为O(logN) 合并的复杂度为O(N) 时间复杂度O(NlogN) 优点:时间复杂度低",-1),v=r(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//mergeSort.h</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;cstring&gt;</span><span style="color:#ABB2BF;">                                                                            </span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::vector;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">my_merge</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">left</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">mid</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">right</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">merge_sort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">left</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">right</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//mergeSort.cc</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;mergeSort.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">my_merge</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">left</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">mid</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">right</span><span style="color:#ABB2BF;">) {</span><span style="color:#7F848E;font-style:italic;">//类比合并2个链表</span></span>
<span class="line"><span style="color:#ABB2BF;">    vector</span><span style="color:#C678DD;">&lt;int&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">buffer</span><span style="color:#ABB2BF;">(nums);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> left;</span><span style="color:#7F848E;font-style:italic;">   //i表示左半边的下标，j表示右半边的下标，k表示结果的下标</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> j </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> k </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> left;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> mid </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> j </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">()) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">buffer</span><span style="color:#ABB2BF;">[i] </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">buffer</span><span style="color:#ABB2BF;">[j]) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[k] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">buffer</span><span style="color:#ABB2BF;">[i];</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }   </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[k] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">buffer</span><span style="color:#ABB2BF;">[j];</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">j;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }   </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">K;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }   </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //剩余的数据</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(i </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> mid){</span><span style="color:#7F848E;font-style:italic;">    //i的结束时是等于mid ，而不是nums.size()                 </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[k] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">buffer</span><span style="color:#ABB2BF;">[i];</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">k;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }   </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(j </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">()) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[k] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">buffer</span><span style="color:#ABB2BF;">[j];</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">k;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">j;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }   </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">merge_sort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">left</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">right</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> left </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> (right </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> left) </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">merge_sort</span><span style="color:#ABB2BF;">(nums, left, mid);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">merge_sort</span><span style="color:#ABB2BF;">(nums, mid </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, right);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">my_merge</span><span style="color:#ABB2BF;">(nums, left, mid, right);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }   </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(u,C){const l=p("font");return o(),e("div",null,[y,F,t("more"),d,A,D,B(l,{color:"red"},{default:c(()=>[n("归并排序的缺点: 需要申请大量的额外空间(因此绝大数情况下都不使用归并排序)")]),_:1}),v])}const E=a(i,[["render",m],["__file","归并排序.html.vue"]]);export{E as default};
