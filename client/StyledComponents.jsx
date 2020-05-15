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

export const GameSummary = style.div`
  position: relative;
  margin-left: 15px;`;

export const SplashContainer = style.div`
  height: 151px;
  width: 324px;
  display: flex;`;

export const SplashImage = style.img`
  object-fit: cover;
  height: auto;
  max-width: 100%;`;

export const Description = style.p`
  max-height: 111px;
  overflow: hidden;
  font-size: 13px;
  line-height: 18px;
  padding-right: 16px;
  padding-bottom: 14px;
  font-family: Arial, Helvetica, sans-serif;
  color: #c6d4df;`;

export const SummaryOverlay = style.span`
  margin: 0px;
  padding: 5px;
  word-wrap: normal;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: rgb(51, 51, 51);
  z-index: 1;
  position: absolute;
  right: -10px;
  bottom: 167px;
  border: 1px black solid;
  border-radius: 3px;
  background-color: rgb(161, 162, 163);
  box-shadow: 0.5px 0.5px 2px;
  width: 310px;`;

export const ReviewStats = style.p`
  width: 300px;`;

export const Grid3 = style.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 2fr;`;

export const BlerbHeader = style.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  padding-right: 10px;
  color: #556772`;

export const ReviewValue = style.span`
  color: #66C0F4;
  cursor: pointer;
  font-size: 12px;`;

export const ReviewCount = style.span`
  color: #556772;`;

export const TopPadding = style.span`
  padding-top: 14px`;

export const ReleaseDate = style.span`
  font-size: 12px;
  line-height: 16px;
  color: #8f98a0;
  padding-top: 12px;`;

export const DevHeader = style.span`
  padding-top: 10px;`;

export const PubHeader = style.span`
  padding-top: 4px;`;

export const Blerb = style.a`
  color: #66C0F4;
  cursor: pointer;
  font-size: 12px;
  &:hover{color: white;}`;

export const TagHeader = style.p`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 19px;
  font-size: 12px;
  color: #556772;`;

export const SummaryTag = style.button`
  border-radius: 2px;
  display: inline;
  background-color: #31496d;
  color: #67c1f5;
  margin-right: 2px;
  margin-bottom: 7px;
  font-size: 11px;
  line-height: 19px;
  padding: 0 7px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover{color: white;
    background-image: linear-gradient(to right, #67c1f5, #4a6997);}`;

export const TagList = style.ul`
list-style-type: none;`;

export const TagListItem = style.li`
  display: inline;`;

export const CarouselSlides = style.ul`
  overflow: scroll;
  display: inline-flex;
  width: 100%;
  overflow-y: hidden;
  list-style-type: none;`;

export const ThumbnailContainer = style.div`
  height: 65px;
  width: 115px;
  display: flex;`;

export const Thumbnail = style.img`
  display: inline;
  object-fit: cover;
  height: auto;
  max-width: 98%;
  margin: 4px;
  cursor: pointer;`;

export const CarouselSelected = style.div`
  height: 337px;
  width: 600px;
  display: flex;`;

export const CurrentViewVideo = style.video`
  position: relative;
  top: 0px;
  object-fit: cover;
  height: auto;
  max-width: 100%;`;

export const CurrentViewImage = style.img`
  position: relative;
  top: 0px;
  object-fit: cover;
  height: auto;
  max-width: 100%;`;
// export { MediaBackground, MediaTitle, MediaFilepath };
