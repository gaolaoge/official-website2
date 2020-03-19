<template>
  <div class="article-wrapper">
    <div class="box">
      <section>
        <header>
          {{ article.tit }}
        </header>
        <article v-html="article.html"></article>
      </section>
    </div>
    <div class="hr"></div>
    <div class="shut">
      <img src="@/icons/shutArticle.png"
           @click="$store.commit('changeArticleM',false)"
           alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article',
    data(){
      return {
        article: {
          tit: '投资高达14亿，《花木兰》日韩相继撤档，总票房凉了？',
          html: `<p>	很难想象，这次的冠状肺炎疫情居然愈演愈烈，不仅是中国，日本、韩国、北美、欧洲等多个地区都陆续发现新病例，逐渐变成了一场全球疫情风暴！而对于票房市场来说，可谓损失惨重。不仅中国电影院集体关门歇业，近日日本、韩国等多家影院也相继宣布暂停营业。</p>
                 <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583732715239&di=1601955bb33b2de2a67056d7f63f7748&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853">
                 <p>	受疫情影响，迪士尼真人电影《花木兰》宣布从韩国撤档，从原定的3月推迟上映，新档期未定；此外，该片日本宣布延期上映，档期从原定的4月17日推迟至5月22日。万众期待的迪士尼顶级大片，难道真要凉凉了？
	                    “花木兰代父从军”可谓是家喻户晓的故事，花木兰英勇的形象多年来一直备受称赞。而迪士尼早在1998年就拍摄了动画片《花木兰》，并在全球范围内取得了巨大成功，“花木兰”形象可谓风靡全球。如今迪士尼拍摄真人版《花木兰》，确实令人无比期待。而这部真人版《花木兰》阵容确实异常给力，中国当红女星刘亦菲饰演女一号“花木兰”，李连杰、甄子丹、巩俐等多位华语大咖鼎力加盟，这样的阵容在整个毫无疑问堪称华语顶级了。迪士尼对此片可谓给予厚望，影片投资达到了2亿美元，约人民币14个亿，至少也得6亿美元（40亿人民币）左右才能回本。
	                    而谁也没想到的是，突如其来的肺炎疫情肆虐全球，中国电影基本上集体歇业，票房市场哀鸿遍野。如今《花木兰》在日本和韩国又选择撤档，全球票房真的不乐观了！
	               </p>
                 <p>	受疫情影响，迪士尼真人电影《花木兰》宣布从韩国撤档，从原定的3月推迟上映，新档期未定；此外，该片日本宣布延期上映，档期从原定的4月17日推迟至5月22日。万众期待的迪士尼顶级大片，难道真要凉凉了？
	                    “花木兰代父从军”可谓是家喻户晓的故事，花木兰英勇的形象多年来一直备受称赞。而迪士尼早在1998年就拍摄了动画片《花木兰》，并在全球范围内取得了巨大成功，“花木兰”形象可谓风靡全球。如今迪士尼拍摄真人版《花木兰》，确实令人无比期待。而这部真人版《花木兰》阵容确实异常给力，中国当红女星刘亦菲饰演女一号“花木兰”，李连杰、甄子丹、巩俐等多位华语大咖鼎力加盟，这样的阵容在整个毫无疑问堪称华语顶级了。迪士尼对此片可谓给予厚望，影片投资达到了2亿美元，约人民币14个亿，至少也得6亿美元（40亿人民币）左右才能回本。
	                    而谁也没想到的是，突如其来的肺炎疫情肆虐全球，中国电影基本上集体歇业，票房市场哀鸿遍野。如今《花木兰》在日本和韩国又选择撤档，全球票房真的不乐观了！
	               </p>`
        }
      }
    },
    methods: {

    },
    created() {

    }
  }
</script>

<style lang="less" scoped>
  .article-wrapper {
    position: absolute;
    z-index: 9;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    .box {
      position: relative;
      top: 100px;
      height: calc(100vh - 200px);
      overflow: hidden;
      padding: 6px 6px;
      background-color: rgba(256,256,256,1);
      section {
        position: relative;
        height: calc(100vh - 200px);
        background-color: #fff;
        text-align: center;
        overflow-y: auto;
        overflow-x: hidden;
        padding-bottom: 40px;
        box-sizing: border-box;
        header {
          overflow: hidden;
          padding-top: 30px;
          font-size:24px;
          font-weight:600;
          color:rgba(51,51,51,1);
          line-height:33px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        article {
          margin: 30px auto;
          font-size:16px;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:28px;
          width: 1120px;
          text-indent: 2em;
          text-align: left;
          text-align: center;
          /deep/p {
            margin-bottom: 1em;
            text-align: left;
          }
          /deep/img {
            width: 60%;
          }
        }
        &::-webkit-scrollbar {
          /*滚动条整体样式*/
          width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
          height: 8px;
        }
        &::-webkit-scrollbar-thumb {
          /*滚动条里面小方块*/
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 5px rgba(51, 51, 51, 0.3);
          background: rgba(158,151,151,0.6);
        }
        &::-webkit-scrollbar-track {
          /*滚动条里面轨道*/
          -webkit-box-shadow: inset 0 0 5px rgba(138, 129, 129, 0.1);
          border-radius: 10px;
          background: rgba(226, 221, 221,0.4);
        }
      }
    }
    .hr {
      position: absolute;
      width: 100vw;
      height: 100px;
      background-image: linear-gradient(to top,rgba(256,256,256,1),rgba(256,256,256,0));
      pointer-events: none;
    }
    .shut {
      position: absolute;
      bottom: 40px;
      width: 100vw;
      text-align: center;
      img {
        width: 30px;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .article-wrapper {
      .box {
        section {
          article {
            width: 94vw;
            font-size: 15px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .article-wrapper {
      .box {
        section {
          header {
            font-size: 20px;
          }
          article {
            font-size: 14px;
            /deep/img {
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
