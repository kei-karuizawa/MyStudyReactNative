import React from 'react'
import { Text, View } from 'react-native'

// class 组件都需要继承系统的 `React.Component` 根组件。
class ClassView extends React.Component {

  // 构造函数。
  // 最先开始执行，必须执行后才产生这个对象。
  // props 是外部传入的数据，不能由内部改变。
  constructor(props) {
    super(props)

    console.log('constructor...')

    // state 是内部自己维护的数据，不能由外部改变。可以用 `setState` 去改变。
    this.state = {
      address: '福建省福州市'
    }

    // 可以直接在构造方法内部使用 `props`。
    // const { name, age, level, sex } = props
    // console.log(`name=${name}, age=${age}, level=${level}, sex=${sex}`)
  }

  // 生命周期：已经加载（挂载）成功。
  componentDidMount() {
    console.log('componentDidMount...')

    setTimeout(() => {
      // `this.state` 传入一个对象，对象里面的内容就是需要改变的 state 变量。
      this.setState({
        address: '福州市台江区'
      })
    }, 2000)
  }

  // // 生命周期：即将要卸载。
  // componentWillUnmount() {
  //   console.log('componentWillUnmount...')
  // }

  // 渲染。
  render() {
    console.log('render...')

    // 在 render 里面访问不到 props 属性，必须要用 `this.props`。
    const { name, age, level, sex } = this.props
    console.log(`name=${name}, age=${age}, level=${level}, sex=${sex}`)

    // 取 state。
    const { address } = this.state

    return (
      <View style={{ width: '100%', height: 200, backgroundColor: '#00bcd4' }}>
        <Text style={{fontSize: 20, color: 'white'}}>{`name=${name}, age=${age}, level=${level}, sex=${sex}`}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>{address}</Text>
      </View>
    )
  }
}

export default ClassView

// 生命周期执行顺序输出打印：
// constructor...
// render...
// componentDidMount...
// componentWillUnmount...
