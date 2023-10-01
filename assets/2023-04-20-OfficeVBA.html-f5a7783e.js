const e=JSON.parse(`{"key":"v-31212742","path":"/posts/2023-04-20-OfficeVBA.html","title":"OfficeVBA","lang":"zh-CN","frontmatter":{"title":"OfficeVBA","date":"2023-04-20T00:00:00.000Z","description":"一键将word文档中的公式字体改为Times New Roman且非斜体 Sub ChangeEquationFormat() Dim eq As OMath '声明公式对象 For Each eq In ActiveDocument.OMaths '遍历文档中所有公式 eq.Range.OMaths(1).ConvertToNormalText '将公式输入格式改为Text eq.Range.Font.Name = \\"Times New Roman\\" '将字体更改为Times New Roman eq.Range.Font.Italic = False '不倾斜 Next eq End Sub","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/2023-04-20-OfficeVBA.html"}],["meta",{"property":"og:title","content":"OfficeVBA"}],["meta",{"property":"og:description","content":"一键将word文档中的公式字体改为Times New Roman且非斜体 Sub ChangeEquationFormat() Dim eq As OMath '声明公式对象 For Each eq In ActiveDocument.OMaths '遍历文档中所有公式 eq.Range.OMaths(1).ConvertToNormalText '将公式输入格式改为Text eq.Range.Font.Name = \\"Times New Roman\\" '将字体更改为Times New Roman eq.Range.Font.Italic = False '不倾斜 Next eq End Sub"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-01T13:24:36.000Z"}],["meta",{"property":"article:author","content":"Zhang"}],["meta",{"property":"article:published_time","content":"2023-04-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-01T13:24:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OfficeVBA\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-01T13:24:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zhang\\"}]}"]]},"headers":[{"level":3,"title":"一键将word文档中的公式字体改为Times New Roman且非斜体","slug":"一键将word文档中的公式字体改为times-new-roman且非斜体","link":"#一键将word文档中的公式字体改为times-new-roman且非斜体","children":[]},{"level":3,"title":"一键将文档中所有出现的“XXX”内容进行格式修改","slug":"一键将文档中所有出现的-xxx-内容进行格式修改","link":"#一键将文档中所有出现的-xxx-内容进行格式修改","children":[]},{"level":3,"title":"一键将word文档中的15磅斜体文字改为添加下划线并加粗","slug":"一键将word文档中的15磅斜体文字改为添加下划线并加粗","link":"#一键将word文档中的15磅斜体文字改为添加下划线并加粗","children":[]},{"level":3,"title":"Office Tips","slug":"office-tips","link":"#office-tips","children":[]}],"git":{"createdTime":1696166676000,"updatedTime":1696166676000,"contributors":[{"name":"Githubcatone","email":"53322927+Githubcatone@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.31,"words":392},"filePathRelative":"posts/2023-04-20-OfficeVBA.md","localizedDate":"2023年4月20日","excerpt":"<h3> 一键将word文档中的公式字体改为Times New Roman且非斜体</h3>\\n<div class=\\"language-VB line-numbers-mode\\" data-ext=\\"VB\\"><pre class=\\"language-VB\\"><code>Sub ChangeEquationFormat()\\n    Dim eq As OMath '声明公式对象\\n    For Each eq In ActiveDocument.OMaths '遍历文档中所有公式\\n        eq.Range.OMaths(1).ConvertToNormalText '将公式输入格式改为Text\\n        eq.Range.Font.Name = \\"Times New Roman\\" '将字体更改为Times New Roman\\n        eq.Range.Font.Italic = False '不倾斜\\n    Next eq\\nEnd Sub\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
