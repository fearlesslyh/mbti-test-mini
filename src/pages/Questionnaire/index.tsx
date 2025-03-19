import {View} from "@tarojs/components";
import "./index.scss";
import GlobalFooter from '../../components/globalFooter';
import {AtButton, AtRadio} from 'taro-ui'
import questions from "../../data/questions.json";
import {useState} from "react";

/**
 * 题目页面
 */
export default () => {
  const question = questions[0];
  const questionsOption = question.options.map(q => {
    return {label: `${q.key}.${q.value}`, value: q.key};
  });
  const [current, setCurent] = useState<number>(1);

  return (
    <View className='QuestionnairePage'>
      <View className='at-article__h1 title'>{current}.{question.title}</View>
      <View className='options'>
        <AtRadio
          options={questionsOption}
        />
      </View>
      <AtButton type='primary' className='controlButton' circle>
        上一题
      </AtButton>
      <AtButton type='primary' className='controlButton' circle>
        查看结果
      </AtButton>
      <AtButton type='primary' className='controlButton' circle>
        下一题
      </AtButton>
      <GlobalFooter/>
    </View>

  );
};
