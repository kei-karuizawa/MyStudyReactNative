// 5-7：移动端特有的生产热修复机制和应用场景

// RN 主要的热修复框架：
// 1. 首推：PUSHY，这也是 RN 官网推荐的热更新框架。文档全，价格便宜，有免费版本。
// 2. 微软的 CodePush，CodePush 在技术层与技术能力比 PUSHY 好，但在国内不首推，因为其服务器在国外，网速极慢。

// RN 热修复注意事项：
// 1. 安卓机型多，热修复框架成功率很难达到 100%，所以当你用热修复去发布很重要的功能时要谨慎。一般用热修复发布小补丁。
