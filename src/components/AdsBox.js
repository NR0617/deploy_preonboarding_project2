import { AdImg, AdContainer } from './style';
const AdsBox = () => {
  const onOpenAdsPage = () => {
    window.open(' https://www.wanted.co.kr/', '_blank');
  };
  return (
    <AdContainer>
      <div>광고</div>
      <AdImg
        onClick={onOpenAdsPage}
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        alt="img"
      />
    </AdContainer>
  );
};
export default AdsBox;
