import { useRef, useEffect, useState } from 'react'
import './App.css'
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import "normalize.css"; 

import navBg from '/src/assets/nav_bg.svg';
import fvPc from '/src/assets/fv_pc.png';
import fvSp from '/src/assets/fv_sp.png';
import ImgMe from '/src/assets/me.png';
import ImgNochikuThumbnail from '/src/assets/nouchiku_thumbnail.png';
import ImgSotsutenThumbnail from '/src/assets/sotsuten_thumbnail.png';
import ImgKanchaThumbnail from '/src/assets/kancha_thumbnail.png';
import ImgPortfolioThumbnail from '/src/assets/portfolio_site_2022_thumbnail.png';
import ImgStickerThumbnail from '/src/assets/jibun_sticker_thumbnail.png';
import ImgViewerThumbnail from '/src/assets/random_viewer_thumbnail.png';
import ImgDiaryThumbnail from '/src/assets/how_was_today_thumbnail.png';
import ImgNochiku from '/src/assets/nouchiku.png';
import ImgSotsuten from '/src/assets/sotsuten.png';
import ImgKancha from '/src/assets/kancha.png';
import ImgPortfolio from '/src/assets/portfolio_site_2022.png';
import ImgSticker from '/src/assets/jibun_sticker.png';
import ImgViewer from '/src/assets/random_viewer.png';
import ImgDiary from '/src/assets/how_was_today.png';

function App() {
  
  const cssMain = css`
    max-width: 780px;
    height: auto;
    display: block;
    margin: 60px auto;

    @media screen and (max-width: 899px) {
      &{
        width: calc(100dvw - 10%);
      }
    }
  `

  const cssFV = css`
    margin-bottom: 40px;
  `

  const cssImg = css`
    max-width: 100%;
    height: auto;
    display: block;
    box-sizing: border-box;
  `
  const cssAboutMe = css`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media screen and (max-width: 899px) {
      &{
        flex-direction: column;
        gap: 40px;
      }
    }
  `
  const cssIntro = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px #214665;
    margin-bottom: 80px;

  `

  const cssIntroRow = css`
    display: flex;
    border-top: solid 1px #214665;
    
    @media screen and (max-width: 899px) {
      &{
        display: inline-block;
      }
    }
  `

  const cssIntroLabel = css`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    background-color: #B2D0DD;
    margin: 0px;
    height: 100%;
    vertical-align: middle;

    @media screen and (max-width: 899px) {
      &{
        width: 100%;
        padding: 8px 0px;
        display: inline-block;
        vertical-align: top;
      }
    }
  `

  const cssIntroText = css`
    flex: 7;
    margin: 16px;

    @media screen and (max-width: 899px) {
      &{
        display: block;
        text-align: center;
      }
    }
  `

  const cssImgMe = css`
    display: block;

    @media screen and (max-width: 899px) {
      &{
        margin: 0 auto;
      }
    }
  `

  const cssWorksView = css`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
    border-left: solid 1px #214665;
    border-top: solid 1px #214665;
  `

  const cssWorkCard = css`
    flex-basis: 50%;
    box-sizing: border-box;
    border-right: solid 1px #214665;
    border-bottom: solid 1px #214665;
    cursor: pointer;
    
    @media screen and (max-width: 899px) {
      &{
        flex-basis: 100%;
      }
    }
  `

  const cssWorkComment = css`
    padding: 24px 24px 40px 24px;
  `
  
  const cssFooterLayer = css`
    width: 100%;
    height: 7px;
    display: block;
    background-color: #B2D0DD;
    border-top: solid 1px #214665;
  `

/** 自己紹介の表の内容 */
  const intro = [
    { label: "名称", text: "金子 千夏（かねこ ちなつ）" },
    { label: "製造日", text: "1998年8月25日" },
    { label: "使用ツール", text: "Ilustrator / Photoshop / Figma / Visual Studio Code / Dreamweaver" },
    { label: "使用言語", text: "HTML / CSS / PHP / Javascript" },
    { label: "使用上の注意", text: "業務に慣れるまでは質問が多くなる傾向があります。" },
    { label: "好物", text: "コーヒー / 音楽 / イラスト / 展示 / ちいかわ" },
    { label: "概要", text: "デザインとプログラミング両方のスキルを活かした作品作りを目標に、業務や自主制作に励んでいます。職場環境が良いことが一番！だと考えているので積極的に人の考えを汲んだり、業務で役立ちそうなスキルを身に着けるようにしています。" }
  ]

  const works = [
    [
      { title: "How was today?（日記画像メーカー）", comment:"ブラウザで文字の入力・グラデーションの調整ができる日記画像メーカー", thumbnail: ImgDiaryThumbnail, img: ImgDiary },
      { label: "制作目的", text:"今日感じたことや考えたことをビジュアルとして残せるツールを作りたい" },
      { label: "概要", text:"ブラウザで文字の入力・グラデーションの調整ができる日記画像メーカーを制作中です。自動で現在の日付を取得・表示して、「今日」の日記としてダウンロードできるようになっています。特にグラデーション編集画面で色選択の結果がすぐに反映するのが視覚的に面白いのでお気に入りのポイントです。元々Reactの習作として最低限の機能を作成しましたが、もっとカスタマイズ性を高めたり世界観を練るなどしたいので今後も開発を続けていきます。", link: "コードを見る ＞", path: "https://github.com/knk-summer/how-was-today.git" },
      { label: "作業工程", text:"要件定義 / 基本設計 / 詳細設計 / 実装" },
      { label: "使用ツール", text:"Figma / Visual Studio Code" },
      { label: "使用言語・フレームワーク", text:"HTML / Javascript / React / CSS / Emotionライブラリ" },
    ],
    [
      { title: "RandomViewer", comment:"選択したフォルダ内の画像をランダム表示するビューワー", thumbnail: ImgViewerThumbnail, img: ImgViewer },
      { label: "制作目的", text:"埋もれていく画像が勿体ないので「好きなもの」画像フォルダを満遍なく閲覧したい" },
      { label: "概要", text:"選択したフォルダ内の画像をランダム表示するビューワーを作成しました。機能はシンプルですが、表示画像クリックで別窓表示・ライト/ダークモード切替などじっくり鑑賞したい人に優しい作りを心掛けました。他の人も触れる状態の作品を作りたい！という想いから始まり、初めてPythonを勉強し2週間ほどでwindowsアプリとして形にすることができました。実際に友人や先輩にテストしてもらって、フィードバックもいただけたのでとても良い経験になりました。", link: "コードを見る ＞", path: "https://github.com/knk-summer/random_viewer.git" },
      { label: "作業工程", text:"要件定義 / 基本設計 / 詳細設計 / 実装 / テスト設計 / テスト実施 " },
      { label: "使用ツール", text:"Visual Studio Code" },
      { label: "使用言語・フレームワーク", text:"Python" },
    ],
    [
      { title: "じぶんステッカー", comment:"自分の属性や好きな物をステッカーとして配置できる名札画像メーカー", thumbnail: ImgStickerThumbnail, img: ImgSticker },
      { label: "制作目的", text:"自主制作発表会がオフラインになったので、オフライン交流ならではのツールを作成したかった" },
      { label: "概要", text:"「自分ってこういう人です！」をポップなビジュアルで伝えられる名札画像メーカー「じぶんステッカー」を制作しました。属性を選択することでそれに応じたステッカーが貼られた名札画像を作成・ダウンロードすることができます。デザイン・イラスト・プログラミングという自分のできることを掛け合わせた作品作りを目標に、社内の自主制作発表会に向けて制作しました。ローカルで動作するところまで制作したのですが、UIや機能含めいつかリメイクしたいと思っているので現在はコードのみ公開とさせていただいています。", link: "コードを見る ＞", path: "https://github.com/knk-summer/myself_sticker.git" },
      { label: "作業工程", text:"要件定義 / 基本設計 / 詳細設計 / 実装" },
      { label: "使用ツール", text:"Illustrator / Photoshop / Visual Studio Code / Figma" },
      { label: "使用言語・フレームワーク", text:"HTML / CSS / PHP / Laravel" },
    ],
    [
      { title: "架空の和風カフェ「寛茶」のWebサイト", comment:"架空のカフェのコンセプトからWebサイト実装まで一貫して制作", thumbnail: ImgKanchaThumbnail, img: ImgKancha },
      { label: "コンセプト", text:"抹茶をもっと手軽に、日常の一部に" },
      { label: "ターゲット", text:"20代後半～のお茶やカフェが好きな方" },
      { label: "概要", text:"日本の伝統的なお茶を街中でも気軽に味わえるカフェ「寛茶」を題材にWebサイトを制作しました。こちらはカフェの実在性を高めるためにメニューや場所まで設定を細かく練りました。サイトはPC版のファーストビューを動画にすることで「美味しそう」「尾心地が良さそう」という印象やカフェの世界観がすぐに伝わるようにしています。またメニューをカルーセルにしたり背景の切り替えに視差効果を使用したりと、世界観を保ちつつ飽きさせないような動きを取り入れました。", link: "サイトを見る ＞", path: "/kaneko-torisetsu/kancha/kancha.html"},
      { label: "作業工程", text:"デザイン / コーディング" },
      { label: "使用ツール", text:"Illustrator / Photoshop / Visual Studio Code" }
    ],
    [
      { title: "2022年制作ポートフォリオサイト", comment:"転職活動のために制作したポートフォリオサイト", thumbnail: ImgPortfolioThumbnail, img: ImgPortfolio },
      { label: "コンセプト", text:"自分の大切にしていること、作品の傾向を伝える" },
      { label: "ターゲット", text:"応募した企業の採用担当、社員の方々" },
      { label: "概要", text:"転職活動時に使用したポートフォリオサイトです。ブランク期間が長い中の応募だったので、スキルよりも人柄などで「一緒に働きたい」と思ってもらえるかが重要だと考え制作しました。そこで自分の働き方のスタンスをRPGの勇者パーティをモチーフにイラストにすることで、キャッチーかつ印象に残りやすくしました。全体的には閲覧のノイズにならないような心地よい動き・余白の取り方を意識してシンプルにまとめています。", link: "サイトを見る ＞", path: "/kaneko-torisetsu/portforio/index.html" },
      { label: "作業工程", text:"デザイン / コーディング" },
      { label: "使用ツール", text:"Illustrator / Photoshop / Visual Studio Code" },
    ],
    [
      { title: "卒業進級制作展ポスター", comment:"自身の卒業年度に担当した卒展ポスターデザイン", thumbnail: ImgSotsutenThumbnail, img: ImgSotsuten },
      { label: "コンセプト", text:"こころ、はずむ瞬間を！（卒展テーマ「signal」からクラッカーモチーフに）" },
      { label: "ターゲット", text:"山デザ（母校）や卒展に興味のある方" },
      { label: "概要", text:"平成31年度の卒展のポスターのデザインを担当しました。一つの課題に対して各々が個性を持ってアイディアを発信している様子をクラッカーをモチーフに構成しています。キャッチコピーはクラッカーの瞬間的な衝撃と、良い作品に出会った時の高揚感を掛け合わせた言葉になっています。母校の面白さは人によって得意分野が違い多彩な答えが返ってくるところなので、様々な画材やテイストを組み合わせることでそれぞれの個性を表現しました。" },
      { label: "作業工程", text:"デザイン" },
      { label: "使用ツール", text:"Illustrator / Photoshop" }
    ],
    [
      { title: "農畜産物フェスティバルポスター", comment:"学内コンペにて採用された山形市農畜産物フェスティバルのポスターデザイン", thumbnail: ImgNochikuThumbnail, img: ImgNochiku },
      { label: "コンセプト", text:"色めく（華やかになる/活気づく）。"},
      { label: "ターゲット", text:"今まで当イベントに来たことのない山形県民。" },
      { label: "概要", text:"専門学校在学中に採用されたポスターです。「色めく」をテーマに、木々や農畜産物の色味の鮮やかさを意識して仕上げました。また、多種多様な生産物が積み上がったビジュアルにすることでお祭りのような雰囲気を演出し、若い人でも気軽に参加できるようにしています。ブースの情報については、お客様に全てのブースを周って楽しんで欲しいと感じたため、スタンプラリーのイメージではんこ風のアイコンを配置しています。イラストが特に好評だったようで、ポスターデザインが変わっても何年かは看板やのぼりのデザインに使用されていました。" },
      { label: "作業工程", text:"デザイン / イラスト" },
      { label: "使用ツール", text:"Illustrator / Photoshop" }
    ]
  ]

  const [onNavHamburger, setOnNavHamburger]= useState(false);
  const [onWorkModal, setOnWorkModal]= useState(false);
  let selectCardIndex = null;

  function Nav() {
    const cssNavIcon = css`
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 2;
  `

    const cssNavBg = css`
    cursor: pointer;
  `
  const cssNavHamburgerLines = css`
    position: absolute;
    top: 20px;
    right: 16px;
    cursor: pointer;
  `
  const cssNavLine = css`
    display: block;
    width: 40px;
    height: 2px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
  `
  const cssNavHamburgerArea = css`
    position: fixed;
    top: 0px;
    right: 0px;
    width: 200px;
    height: 280px;
    background-color: #FFF2C5;
    border: solid 2px #E9D9A2;
    box-shadow: -4px 4px rgba(0, 0, 0, 0.2);

  `
  const cssNavHamburgerText = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;

    & p {
        margin-bottom: 32px;
    }

    & a {
      text-decoration: none;
      z-index: 3;
    }
    
  `

  function NavIconClick() {
    if (!onNavHamburger) {
      setOnNavHamburger(true);
    } else {
      setOnNavHamburger(false);
    }
  }

  function NavHamburger() {
    if (onNavHamburger){
      return(
        <div css={cssNavHamburgerArea}>
          <div css={cssNavHamburgerText} >
            <p><a href="#first_view">TOP</a></p>
            <p><a href="#about_me">自己紹介</a></p>
            <p><a href="#works">作品一覧</a></p>
          </div>
        </div>
      )
    }

  }

    return(
      <div id="nav">
        <div css={cssNavIcon} onClick={NavIconClick}>
          <img src={navBg} css={cssNavBg} />
          <div css={cssNavHamburgerLines}>
            <span css={cssNavLine}></span>
            <span css={cssNavLine}></span>
          </div>
        </div>
        <NavHamburger />
      </div>
    )
  }
  
  function WorkCardClick(index) {
    selectCardIndex = String(index);
    setOnWorkModal(selectCardIndex);
  }

  function WorkModal() {
    const cssWorkModal = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 他要素の上に出す */
  `

  const cssModalWindow = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    @media screen and (max-width: 899px) {
      &{
        width: calc(100dvw - 10%);
      }
    }
  `
    const cssCloseAicon = css`
    width: 24px;
    height: 18px;
    display: block;
    position: absolute;
    right: 0px;
    top: -26px;
    cursor: pointer;

    &::before, &::after {
      content: "";
      width: 20px;
      height: 1px;
      position: absolute;
      background-color: #FFFFFF;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%,-50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%,-50%) rotate(-45deg);
    }
  `
  const cssModalContents = css`
    width: 840px;
    height: 90dvh;
    background-color: #FFFFFF;
    display: block;

    @media screen and (max-width: 899px) {
      &{
        width: calc(100dvw - 10%);
      }
    }
  `

  const cssModalInfo = css`
    width: calc(840px - 60px);
    height: calc(90dvh - 60px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */

    &::-webkit-scrollbar {
      display: none; /* Chrome/Safari */
    }

    @media screen and (max-width: 899px) {
      &{
        width: calc(100dvw - 10% - 32px);
        height: calc(90dvh - 60px);
      }
    }
  `

    const cssWorkImg = css`
      margin: 0 auto;
      padding-bottom: 20px;
    `
    const cssWorkText = css`
      margin-bottom: 24px;
    `

  function onCloseAiconClick() {
    setOnWorkModal(false);
  }

    if(onWorkModal){
          document.body.style.overflow = 'hidden'; // スクロール禁止
      return(
                <div css={cssWorkModal}>
                <div css={cssModalWindow}>
                  <span
                    css={cssCloseAicon}
                    onClick={onCloseAiconClick}
                  ></span>
                  <div css={cssModalContents}>
                    <div css={cssModalInfo}>
                      {
                        works.map((work, index) => (
                        work.map((item, itemIndex) => onWorkModal == index && item.title && item.img ? (
                        <div key={itemIndex}>
                            <h3>{item.title}</h3>
                            <img src={item.img} css={[cssImg, cssWorkImg]} alt={item.title} />
                          </div>
                          ) : null
                        ))
                        )
                      }
                      {
                        works.map((work, index) => (
                        work.map((item, itemIndex) => onWorkModal == index && item.label && item.text ? (
                        <div key={itemIndex}>
                            <h4>{item.label}</h4>
                            <p css={cssWorkText}>{item.text}</p>
                            <p css={cssWorkText}><a href={item.path}>{item.link}</a></p>
                          </div>
                          ) : null
                        ))
                        )
                      }
                    </div>
                  </div>
                  </div>
                  </div>
      )
    } else {
      document.body.style.overflow = 'auto';  // モーダル非表示の時は解除
    }
  }

  function WorksDisplay() {

    return (
      <div css={cssWorksView}>
        {
          works.map((work, index) => (
            work.map((item, itemIndex) => item?.title && item?.comment ? (
              <div key={itemIndex} id={index} css={cssWorkCard} onClick={() => WorkCardClick(index)}>
                <img src={item.thumbnail} css={cssImg} alt={item.title} />
                  <div css={cssWorkComment}>
                    <h3>{item.title}</h3>
                    <p>{item.comment}</p>
                  </div>
              </div>
            ) : null)
          ))
        }
      </div> 
    )
  }
  

  return (
    <div>
      <Global
        styles={css`
          body{
            font-family: "Noto Sans JP", sans-serif;
            position: relative;
            background-color: #FFFCF6;
            margin: 0px;
            padding: 0px;
            font-size: 16px;
            color: #214665;
          }
          
          h2{
            width: calc(100% - 32px);
            padding: 16px;
            font-size: 1.5em;
            font-weight: 500;
            color: #FFFFFF;
            background-color: #265E8C;
            margin: 0px 0px 40px 0px;
          }

          h3{
            font-size: 18px;
            padding-bottom: 8px;
            border-bottom: solid 2px #214665;
            margin: 0px 0px 16px 0px;
          }

          h4{
            font-size: 16px;
            font-weight: bold;
            margin: 0px 0px 2px 0px;
          }

          p{
            margin: 0px;
            white-space: normal; 
          }

          a {
          color: #214665;
          font-weight: bold;
          }

          & a:hover {
          text-decoration: none;
          color: #C73A18;
          }

          footer{
            font-size: 14px;
            text-align: center;
            padding-top: 24px;
            padding-bottom: 48px;
            color: #FFFFFF;
            background-color: #265E8C;
          }
        `}
      />
      <WorkModal />
        <div css={cssMain}>
          <Nav />
          <div id="first_view" css={cssFV}>
            <picture>
              <source media="(max-width: 767px)" srcSet={fvSp} />
              <source media="(min-width: 768px)" srcSet={fvPc} />
              <img src={fvPc} css={cssImg} alt="かねこのトリセツ この度はかねこに興味を持っていただき誠にありがとうございます。ぜひ当ページをご覧になってから、ご使用を検討いただけますと幸いです。"/>
            </picture>
          </div>
          <div id="about_me">
          <h2>製品情報</h2>
          <div css={cssAboutMe}>
            <div>
              <img src={ImgMe} css={cssImgMe} />
            </div>
            <div css={cssIntro}>
              {/* 項目＋テキストを内容数に応じて表示 */}
              {
                intro.map((item, index) => (
                  <div key={index} css={cssIntroRow}>
                    <p css={cssIntroLabel}>{item.label}</p>
                    <p css={cssIntroText}>{item.text}</p>
                  </div>
                ))
              }
            </div>
          </div>
          </div>
          <div id="works">
            <h2>制作物一覧</h2>
              <WorksDisplay />
          </div>
        </div>
        <span css={cssFooterLayer}></span>
        <span css={cssFooterLayer}></span>
        <span css={cssFooterLayer}></span>
      <footer>🄫2025 Chinatsu Kaneko</footer>
    </div>
  )
}

export default App
