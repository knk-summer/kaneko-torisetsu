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
      { title: "How was today?（日記画像メーカー）", comment:"これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。", thumbnail: ImgDiaryThumbnail, img: ImgDiary },
      { label: "制作目的", text:"前に自分がいいねした画像ってあんまり見返す機会ないまま流れがちで勿体ない→フォルダに溜めて気軽に見られるようにすれば好きな画像しか出てこなくて最高では？と考えたので、表示のためのビューワーを制作することにしました。" },
      { label: "概要", text:"「自分ってこういう人です！」をポップなビジュアルで伝えられる名札画像メーカー「じぶんステッカー」です。属性ステッカーを名札に貼ることで何が好きなのか・どういう人なのかを一目で伝えることが出来ます。初対面やお久しぶりの人との会話で話題に困った時の手助けや、趣味が合う人を見つけやすくする目的で制作しています。誰かのコミュニケーションのきっかけになれば幸いです！ " },
      { label: "作業工程", text:"要件定義 / 基本設計 / 詳細設計 / 実装" },
      { label: "使用ツール", text:"Figma / Visual Studio Code" },
      { label: "使用言語・フレームワーク", text:"HTML / Javascript / React / CSS / Emotionライブラリ" },
    ],
    [
      { title: "RandomViewer", comment:"選択したフォルダ内の画像をランダム表示するビューワー", thumbnail: ImgViewerThumbnail, img: ImgViewer },
      { label: "制作目的", text:"前に自分がいいねした画像ってあんまり見返す機会ないまま流れがちで勿体ない→フォルダに溜めて気軽に見られるようにすれば好きな画像しか出てこなくて最高では？と考えたので、表示のためのビューワーを制作することにしました。" },
      { label: "概要", text:"「自分ってこういう人です！」をポップなビジュアルで伝えられる名札画像メーカー「じぶんステッカー」です。属性ステッカーを名札に貼ることで何が好きなのか・どういう人なのかを一目で伝えることが出来ます。初対面やお久しぶりの人との会話で話題に困った時の手助けや、趣味が合う人を見つけやすくする目的で制作しています。誰かのコミュニケーションのきっかけになれば幸いです！ " },
      { label: "作業工程", text:"要件定義 / 基本設計 / 詳細設計 / 実装 / テスト設計 / テスト実施 " },
      { label: "使用ツール", text:"Visual Studio Code" },
      { label: "使用言語・フレームワーク", text:"Python" },
    ],
    [
      { title: "じぶんステッカー", comment:"自分の属性や好きな物をステッカーとして配置できる名札画像メーカー", thumbnail: ImgStickerThumbnail, img: ImgSticker },
      { label: "制作目的", text:"対人コミュニケーションのとっかかりが欲しい方に" },
      { label: "概要", text:"「自分ってこういう人です！」をポップなビジュアルで伝えられる名札画像メーカー「じぶんステッカー」です。属性ステッカーを名札に貼ることで何が好きなのか・どういう人なのかを一目で伝えることが出来ます。初対面やお久しぶりの人との会話で話題に困った時の手助けや、趣味が合う人を見つけやすくする目的で制作しています。誰かのコミュニケーションのきっかけになれば幸いです！ " },
      { label: "作業工程", text:"要件定義 / 基本設計 / 詳細設計 / 実装" },
      { label: "使用ツール", text:"Illustrator / Photoshop / Visual Studio Code / Figma" },
      { label: "使用言語・フレームワーク", text:"HTML / CSS / PHP / Laravel" },
    ],
    [
      { title: "架空の和風カフェ「寛茶」のWebサイト", comment:"架空のカフェのコンセプトからWebサイト実装まで一貫して制作", thumbnail: ImgKanchaThumbnail, img: ImgKancha },
      { label: "コンセプト", text:"抹茶をもっと手軽に、日常の一部に" },
      { label: "ターゲット", text:"20代後半～のお茶やカフェが好きな方" },
      { label: "概要", text:"これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。" },
      { label: "作業工程", text:"デザイン / コーディング" },
      { label: "使用ツール", text:"Illustrator / Photoshop / Visual Studio Code" }
    ],
    [
      { title: "2022年制作ポートフォリオサイト", comment:"転職活動のために制作したポートフォリオサイト", thumbnail: ImgPortfolioThumbnail, img: ImgPortfolio },
      { label: "コンセプト", text:"自分の大切にしていること、作品の傾向を伝える" },
      { label: "ターゲット", text:"応募した企業の採用担当、社員の方々" },
      { label: "概要", text:"これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。" },
      { label: "作業工程", text:"デザイン / コーディング" },
      { label: "使用ツール", text:"Illustrator / Photoshop / Visual Studio Code" }
    ],
    [
      { title: "卒業進級制作展ポスター", comment:"自身の卒業年度に担当した卒展ポスターデザイン", thumbnail: ImgSotsutenThumbnail, img: ImgSotsuten },
      { label: "コンセプト", text:"signal" },
      { label: "ターゲット", text:"卒展に興味のある方々" },
      { label: "概要", text:"平成31年度の卒展のポスターのデザインを担当しました。テーマの「signal」から、一つの課題に対して各々が個性を持ってアイディアを発信している様子をクラッカーをモチーフに構成しています。母校の面白さは人によって得意分野が違い多彩な答えが返ってくるところだと思っていたので、様々な画材やテイストを組み合わせることで表現しました。キャッチコピーはクラッカーの瞬間的な衝撃と、良い作品に出会った時の高揚感を掛け合わせた言葉にしました。" },
      { label: "作業工程", text:"デザイン" },
      { label: "使用ツール", text:"Illustrator / Photoshop" }
    ],
    [
      { title: "農畜産物フェスティバルポスター", comment:"学内コンペにて採用された山形市農畜産物フェスティバルのポスターデザイン", thumbnail: ImgNochikuThumbnail, img: ImgNochiku },
      { label: "コンセプト", text:"色めく（華やかになる/活気づく）。"},
      { label: "ターゲット", text:"今まで当イベントに来たことのない山形県民。" },
      { label: "概要", text:"山形市農畜産物フェスティバル実行委員会様からの依頼で制作しました。「色めく」をテーマに、木々や農畜産物の色味の鮮やかさを意識して仕上げました。また、多種多様な生産物が積み上がったビジュアルにすることでお祭りのような雰囲気を演出し、若い人でも気軽に参加できるようにしています。ブースの情報については、お客様に全てのブースを周って楽しんで欲しいと感じたため、スタンプラリーのイメージではんこ風のアイコンを配置しました。最終選考では生産者の方々がいる中でイラストのテーマである「心を込めて育てられたものは美しい」ことを軸にアピールし、近くで観賞していただきました。その後採用され、ポスターだけでなく看板にもイラストを使用していただきました。看板は継続してイベントで使用されています。" },
      { label: "作業工程", text:"デザイン" },
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
    font-weight: bold;

    & p {
        margin-bottom: 32px;
    }

    & a {
    text-decoration: none;
    color: #214665;
    z-index: 3;
    }

    & a:hover {
    text-decoration: none;
    color: #C73A18;
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
