const s=JSON.parse('{"key":"v-16787a3c","path":"/algo/02%20%E9%93%BE%E8%A1%A8/Leetcode876.%E9%93%BE%E8%A1%A8%E7%9A%84%E4%B8%AD%E9%97%B4%E7%BB%93%E7%82%B9.html","title":"Leetcode 876. 链表的中间结点","lang":"zh-CN","frontmatter":{"title":"Leetcode 876. 链表的中间结点","icon":"code","order":8,"category":["数据结构与算法"],"tag":["双指针","链表"],"description":"Leetcode 876. 链表的中间结点 **题目描述：**给你单链表的头结点 head ，请你找出并返回链表的中间结点。如果有两个中间结点，则返回第二个中间结点。 /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution { public: ListNode* middleNode(ListNode* head) { ListNode* dummyHead = new ListNode(-1, head); ListNode* fast = dummyHead; ListNode* slow = dummyHead; while(fast&amp;&amp; fast-&gt;next) { fast = fast-&gt;next-&gt;next; slow = slow-&gt;next; } if(fast &amp;&amp; fast-&gt;next == nullptr) { slow = slow-&gt;next; } return slow; } };","head":[["meta",{"property":"og:url","content":"https://iszhwei.gitee.io/algo/02%20%E9%93%BE%E8%A1%A8/Leetcode876.%E9%93%BE%E8%A1%A8%E7%9A%84%E4%B8%AD%E9%97%B4%E7%BB%93%E7%82%B9.html"}],["meta",{"property":"og:site_name","content":"张威的编程学习笔记"}],["meta",{"property":"og:title","content":"Leetcode 876. 链表的中间结点"}],["meta",{"property":"og:description","content":"Leetcode 876. 链表的中间结点 **题目描述：**给你单链表的头结点 head ，请你找出并返回链表的中间结点。如果有两个中间结点，则返回第二个中间结点。 /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution { public: ListNode* middleNode(ListNode* head) { ListNode* dummyHead = new ListNode(-1, head); ListNode* fast = dummyHead; ListNode* slow = dummyHead; while(fast&amp;&amp; fast-&gt;next) { fast = fast-&gt;next-&gt;next; slow = slow-&gt;next; } if(fast &amp;&amp; fast-&gt;next == nullptr) { slow = slow-&gt;next; } return slow; } };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"张威"}],["meta",{"property":"article:tag","content":"双指针"}],["meta",{"property":"article:tag","content":"链表"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Leetcode 876. 链表的中间结点\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张威\\",\\"url\\":\\"https://iszhwei.gitee.io\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.91,"words":272},"filePathRelative":"algo/02 链表/Leetcode876.链表的中间结点.md","excerpt":"<p><a href=\\"https://leetcode.cn/problems/middle-of-the-linked-list/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Leetcode 876. 链表的中间结点</a></p>\\n<p>**题目描述：**给你单链表的头结点 <code>head</code> ，请你找出并返回链表的中间结点。<u>如果有两个中间结点，则返回第二个中间结点。</u></p>\\n<!--more-->\\n<div class=\\"language-c++ line-numbers-mode\\" data-ext=\\"c++\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">/**</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> * Definition for singly-linked list.</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> * struct ListNode {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> *     int val;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> *     ListNode *next;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> *     ListNode() : val(0), next(nullptr) {}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> *     ListNode(int x) : val(x), next(nullptr) {}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> *     ListNode(int x, ListNode *next) : val(x), next(next) {}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> * };</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\"> */</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">Solution</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">public:</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E5C07B\\">ListNode</span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">middleNode</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E5C07B\\">ListNode</span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">head</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        ListNode</span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\"> dummyHead </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">new</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">ListNode</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #56B6C2\\">-</span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\">, head);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        ListNode</span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\"> fast </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> dummyHead;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        ListNode</span><span style=\\"color: #56B6C2\\">*</span><span style=\\"color: #ABB2BF\\"> slow </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> dummyHead;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span><span style=\\"color: #C678DD\\">while</span><span style=\\"color: #ABB2BF\\">(fast</span><span style=\\"color: #56B6C2\\">&amp;&amp;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">fast</span><span style=\\"color: #ABB2BF\\">-&gt;</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            fast </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">fast</span><span style=\\"color: #ABB2BF\\">-&gt;</span><span style=\\"color: #E5C07B\\">next</span><span style=\\"color: #ABB2BF\\">-&gt;</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            slow </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">slow</span><span style=\\"color: #ABB2BF\\">-&gt;</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span><span style=\\"color: #C678DD\\">if</span><span style=\\"color: #ABB2BF\\">(fast </span><span style=\\"color: #56B6C2\\">&amp;&amp;</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">fast</span><span style=\\"color: #ABB2BF\\">-&gt;</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">nullptr</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            slow </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">slow</span><span style=\\"color: #ABB2BF\\">-&gt;</span><span style=\\"color: #E06C75\\">next</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        </span><span style=\\"color: #C678DD\\">return</span><span style=\\"color: #ABB2BF\\"> slow;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">};</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
