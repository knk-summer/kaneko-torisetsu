import './App.css'
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import navBg from '/src/assets/nav_bg.svg';
import fvPc from '/src/assets/fv_pc.png';
import fvSp from '/src/assets/fv_sp.png';
import ImgMe from '/src/assets/me.png';

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

  const cssNavIcon = css`
    position: fixed;
    top: 0px;
    right: 0px;
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

  const cssFv = css`
    max-width: 100%;
    height: auto;
    display: block;
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

  const cssHeadline = css`
    width: calc(100% - 32px);
    padding: 16px;
    font-size: 1.5em;
    font-weight: 500;
    color: #FFFFFF;
    background-color: #265E8C;
    margin-bottom: 40px;
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
        `}
      />
        <div css={cssMain}>
          <div css={cssNavIcon}>
            <img src={navBg} css={cssNavBg} />
            <div css={cssNavHamburgerLines}>
              <span css={cssNavLine}></span>
              <span css={cssNavLine}></span>
            </div>
          </div>
          <div id="first-view">
            <picture>
              <source media="(max-width: 767px)" srcSet={fvSp} />
              <source media="(min-width: 768px)" srcSet={fvPc} />
              <img src={fvPc} css={cssFv} alt="かねこのトリセツ この度はかねこに興味を持っていただき誠にありがとうございます。ぜひ当ページをご覧になってから、ご使用を検討いただけますと幸いです。"/>
            </picture>
          </div>
          <div id="AboutMe">
          <h2 css={cssHeadline}>製品情報</h2>
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
                )
                )
              }
            </div>
          </div>
          </div>
          <div id="works"></div>
        </div>
      <footer></footer>
    </div>
  )
}

export default App
