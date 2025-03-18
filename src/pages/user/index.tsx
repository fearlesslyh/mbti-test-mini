import  { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
// eslint-disable-next-line import/first
import {AtButton} from "taro-ui";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <AtButton type='primary'>按钮文案</AtButton>
      </View>
    );
  }
}
