import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as e,c as o,d as s,e as t,f as c,b as r,a as n}from"./app-9OmaxHRC.js";const B={},i={href:"https://leetcode.cn/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"},y=n("<p>给定一个整数数组 <code>nums</code> 和一个整数目标值 <code>target</code>，请你在该数组中找出 <strong>和为目标值</strong> <em><code>target</code></em> 的那 <strong>两个</strong> 整数，并返回它们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p><p>你可以按任意顺序返回答案。</p>",3),d=n(`<h2 id="方法一-哈希" tabindex="-1"><a class="header-anchor" href="#方法一-哈希" aria-hidden="true">#</a> 方法一：哈希</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">twoSum</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        unordered_map</span><span style="color:#C678DD;">&lt;int</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int&gt;</span><span style="color:#ABB2BF;"> hashMap;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">(); </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">i) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            // 遍历当前元素，并在map中寻找是否有匹配的key</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">hashMap</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">count</span><span style="color:#ABB2BF;">(target </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[i])) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span><span style="color:#E5C07B;">hashMap</span><span style="color:#ABB2BF;">[target</span><span style="color:#56B6C2;">-</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[i]], i};</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            /*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            auto iter = hashMap.find(target - nums[i]);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            if(iter != hashMap.end()) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">                return {iter-&gt;second, i};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            */</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">hashMap</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[i]] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> i;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            // hashMap.insert(pair&lt;int, int&gt;(nums[i], i)); </span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度O(N)</li><li>空间复杂度O(N)</li></ul><h2 id="方法二-双指针" tabindex="-1"><a class="header-anchor" href="#方法二-双指针" aria-hidden="true">#</a> 方法二：双指针</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#61AFEF;">twoSum</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 先对数组排序</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">sort</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">begin</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 左右指针</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;"> (left </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> sum </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[left] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[right];</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        // 根据 sum 和 target 的比较，移动左右指针</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (sum </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> target) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            left</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (sum </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> target) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            right</span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (sum </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> target) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[left], </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[right]};</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>排序的时间复杂度是 O(n log n)，而双指针技术是 O(n)，因此算法的总体时间复杂度是 O(n log n)。</li><li>空间复杂度是 O(1)</li></ul>`,6);function F(A,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[s("p",null,[s("a",i,[t("1. 两数之和"),c(a)])]),y,r("more"),d])}const D=l(B,[["render",F],["__file","1. 两数之和.html.vue"]]);export{D as default};
