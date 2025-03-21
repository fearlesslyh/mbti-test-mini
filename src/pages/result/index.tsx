import {View} from "@tarojs/components";
import "./index.scss";
import GlobalFooter from '../../components/globalFooter';
import Taro from "@tarojs/taro";
import {AtButton} from "taro-ui";
import questionsResults from "../../data/questionsResults.json";

export default () => {
  const result=questionsResults[0];

  return (
    <View className='resultPage'>
      <View className='at-article__h1 title'>{result.resultName}</View>
      <View className='at-article__h3 subTitle'>
        {result.resultDesc}
      </View>
      <AtButton type='primary' size='normal' className='enterButton' circle onClick={() => {
        //跳转到主页
        Taro.reLaunch({
          url: '/pages/index/index'
        })
      }}
      >
        返回主页
      </AtButton>
      <GlobalFooter/>
    </View>

  );
};
