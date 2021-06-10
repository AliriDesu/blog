var articleList = [{
    title: '第一个文章',
    url: "https://www.baidu.com",
    content: `第一个文章第一个文章第一个文章第一个文章第一个文章
    第一个文,章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章第一个文章'
`
}, {
    title: '第二个文章',
    url: "https://www.baidu.com",
    content: `第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章第二个文章'
`
}, {
    title: '第三个文章',
    url: "https://www.baidu.com",
    content: `第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章第三个文章'
`
}, {
    title: '第四个文章',
    url: "https://www.baidu.com",
    content: `第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章第四个文章'
`
}, {
    title: '第五个文章',
    url: "https://www.baidu.com",
    content: `第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章第五个文章'
`
}, {
    title: '第六个文章',
    url: "https://www.baidu.com",
    content: `第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章第六个文章'
`
}, ]
var aaa = 'aaa'
var article = $("#article")[0];
var accordion = $('#accordion');
for (var i = 0; i < articleList.length; i++) {
    accordion.append("<div class=card>a</div>");
    let card = $('.card')[i];
    console.log(card);
    card.innerHTML = `<div class="card-header">
    <button class="btn btn-link" data-toggle="collapse" data-target="#item${i+1}">${articleList[i].title}</button>
</div>
<div class="collapse ${i==0&&'show'}" id="item${i+1}" data-parent="#accordion">
    <div class="card-body">
        ${
            articleList[i].content
        }</div>
</div>`;
}