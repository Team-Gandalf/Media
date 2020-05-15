import style from 'styled-components';

export const MediaBackground = style.div`
  height: 100vh;
  width: 100vw;
  background-color: #1B2838;
  color: white;
  font-family: sans-serif;
  font-weight: normal;
  background-image: url('./TempAssets/background.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;`;

export const MediaTitle = style.div`
  width: 940px;
  margin: 0 auto;
  padding-bottom: 16px;`;

export const MediaFilepath = style.div`
  color: #8f98a0;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: normal;
  padding-bottom: 4px;`;

export const MediaFilepathLink = style.a`
  color: #8f98a0;
  text-decoration: none;
  &:hover{color: white;}`;

export const Button = style.button`
  border-radius: 2px;
  display: block;
  background-color: #31496d;
  color: #67c1f5;
  font-size: 15px;
  line-height: 30px;
  padding: 0 15px;
  cursor: pointer;
  float: right;
  &:hover{color: white;
  background-image: linear-gradient(to right, #67c1f5, #4a6997);}`;

export const Grid1 = style.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;`;

export const MediaHighlights = style.div`
  width: 940px;
  background-color: rgba(27, 40, 56, 0.4)`;

export const Grid2 = style.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 600px 324px;
  align-items: center;`;


// export { MediaBackground, MediaTitle, MediaFilepath };
