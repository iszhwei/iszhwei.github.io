import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,d as s,e as t,f as c,b as B,a as n}from"./app-9OmaxHRC.js";const i="/assets/1615105242-ZHlvOn-image-fMWj2NiV.png",r={},y={href:"https://leetcode.cn/problems/reverse-linked-list-ii/",target:"_blank",rel:"noopener noreferrer"},d=n("<p>给你单链表的头指针 <code>head</code> 和两个整数 <code>left</code> 和 <code>right</code> ，其中 <code>left &lt;= right</code> 。请你反转从位置 <code>left</code> 到位置 <code>right</code> 的链表节点，返回 <strong>反转后的链表</strong> 。</p>",1),F=n(`<h2 id="方法一-穿针引线" tabindex="-1"><a class="header-anchor" href="#方法一-穿针引线" aria-hidden="true">#</a> 方法一：穿针引线</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * struct ListNode {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *     int val;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *     ListNode *next;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *     ListNode() : val(0), next(nullptr) {}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *     ListNode(int x) : val(x), next(nullptr) {}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *     ListNode(int x, ListNode *next) : val(x), next(next) {}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * };</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">reverseLinkList</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">head</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> p2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> temp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(p1) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            temp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">p1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">p1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> p2;</span></span>
<span class="line"><span style="color:#ABB2BF;">            p2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> p1;</span></span>
<span class="line"><span style="color:#ABB2BF;">            p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> temp;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">reverseBetween</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ListNode</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">head</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">left</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">right</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        //注意，由示例可知，left、right是编号不是下标</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> dummyHead </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ListNode</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,head);</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> dummyHead;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">size_t</span><span style="color:#ABB2BF;"> count </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // 建议写在 for 循环里，语义清晰</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(p1 </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> count </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> left </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">p1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">count;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> preLeftNode </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> p1;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(p1 </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> count </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">count;</span></span>
<span class="line"><span style="color:#ABB2BF;">            p1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">p1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // 第 3 步：切断出一个子链表（截取链表）</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> leftNode </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">preLeftNode</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        ListNode</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> rightNext </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">p1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">preLeftNode</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">p1</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        //第 4 步：反转链表的子区间</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">reverseLinkList</span><span style="color:#ABB2BF;">(leftNode);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // 第 5 步：接回到原来的链表中</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">preLeftNode</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> p1;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">leftNode</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> rightNext;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        head </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">dummyHead</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;"> dummyHead;</span></span>
<span class="line"><span style="color:#ABB2BF;">        dummyHead </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法一的缺点是：如果 left 和 right 的区域很大，恰好是链表的头节点和尾节点时，<u>找到 left 和 right 需要遍历一次，反转它们之间的链表还需要遍历一次，虽然总的时间复杂度为 O(N)，但遍历了链表 2 次，可不可以只遍历一次呢？答案是可以的。</u></p><h2 id="方法二-一次遍历「穿针引线」反转链表-头插法" tabindex="-1"><a class="header-anchor" href="#方法二-一次遍历「穿针引线」反转链表-头插法" aria-hidden="true">#</a> 方法二：一次遍历「穿针引线」反转链表（头插法）</h2><figure><img src="`+i+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>',5);function v(A,m){const l=e("ExternalLinkIcon");return p(),o("div",null,[s("p",null,[s("a",y,[t("leetcode 92. 反转链表 II"),c(l)])]),d,B("more"),F])}const C=a(r,[["render",v],["__file","leetcode92.反转链表II.html.vue"]]);export{C as default};
