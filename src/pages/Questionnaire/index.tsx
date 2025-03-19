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

  //当前题目的序号
  const [currentId, setCurent] = useState<number>(1);
  //当前题目
  const [currentQuestion, setQuestion] = useState(questions[0]);
  //当前题目的选项
  const questionsOption = currentQuestion.options.map(q => {
    return {label: `${q.key}.${q.value}`, value: q.key};
  });

  return (
    <View className='QuestionnairePage'>

      <View className='at-article__h1 title'>{currentId}.{currentQuestion.title}</View>

      <View className='options'>
        <AtRadio
          options={questionsOption}
        />
      </View>

      {currentId > 1 &&
        <AtButton className='controlButton' circle onClick={
          () => {
            setCurent(currentId - 1);
            setQuestion(questions[currentId - 1]);
          }
        }>
          上一题
        </AtButton>
      }

      {currentId < questions.length - 1 &&
        <AtButton type='primary' className='controlButton' circle onClick={
          () => {
            setCurent(currentId + 1);
            setQuestion(questions[currentId + 1]);
          }
        }>
          下一题
        </AtButton>
      }

      {currentId == questions.length &&
        <AtButton type='primary' className='controlButton' circle onClick={
          () => {
            //todo 跳转到结果页面
          }
        }>
          查看结果
        </AtButton>
      }

      <GlobalFooter/>
    </View>

  );
};
